import React from 'react';
import { KeyboardAvoidingView,View, SafeAreaView,Text, TextInput,TouchableOpacity, ScrollView } from 'react-native';
import Css from './Pasta/Css';
import Dropdown from './Dropdown';
import Dropdown_User from './Dropdown_User';
import {Formik} from 'formik';
import * as yup from 'yup';
import { MaskedTextInput } from 'react-native-mask-text';

const sighUpValidation = yup.object().shape({
     
     nome:yup.string().required('nome completo é obrigatório').matches(/(\w.+\s).+/,'Insira ao menos nome e sobrenome'),

     email:yup.string().email('Insira um email válido').required('email é obrigatório'),

     cpf:yup.string().required('CPF é obrigatório').min(11,'CPF deve conter 11 caracteres'),

     tel:yup.string().required('Número de telefone/celular é obrigatório').min(17,'O telefone/celular deve conter 13 caracteres'),

     endereco:yup.string().required('Endereço é obrigatório'),

     complementoDeEndereco:yup.string().required('complemento é obrigatório'),

     cidade:yup.string().required('nome da cidade/estado é obrigatório'),

     cep:yup.string().required('CEP é obrigatório').min(8,'O CEP deve conter 8 dígitos'),

     senha:yup.string().min(8,({min}) =>`Senha deve ter pelo menos ${min} caracteres`).required(`Senha é obrigatória`)
     .matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
     "A senha deve conter 8 caracteres, incluindo: uma letra maiúscula, uma minúscula, um número e um caracter especial"),

     confirmarSenha:yup.string().required('Confirmar senha é obrigatório').oneOf([yup.ref('senha')],'As senhas não correspondem')
   
})


export default function Cadastro({navigation}) {
return(
  <Formik
    initialValues={{
      nome:'',
      email: '',
      cpf: '',
      tel: '',
      endereco: '',
      complementoDeEndereco: '',
      cidade: '',
      cep: '',
      senha: '',
      confirmarSenha: ''
  }}
  validateOnMount={true}
  validationSchema={sighUpValidation}
  onSubmit={values=> console.log(values)}
>
{({handleSubmit,handleChange,handleBlur,values,touched,errors,isValid}) => (
  
  <ScrollView>
    <SafeAreaView style={{flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:50}}> 

        <View style={{ 
            zIndex:2,
            width:257,
            height:47,
            marginBottom:20
            }}>
            <Dropdown_User/>
        </View>  
        <KeyboardAvoidingView style={{zIndex:1, marginHorizontal:50}}>
           <View style={[Css.view_input,Css.view_drop]}>
            <TextInput 
              style={[Css.inputs,Css.input_name]}
              name="nome"
              onChangeText={handleChange('nome')}
              onBlur={handleBlur('nome')}
              value={values.nome}
              placeholder='Nome:' placeholderTextColor={'#282B29'}
              inputMode='text'
              autoComplete='name'
              maxLength={100}
              returnKeyType='next'/>
            <Dropdown />
          </View>
          {(errors.nome && touched.nome) &&
            <Text style={Css.errors}>{errors.nome}</Text>
            }
          
          <TextInput style={[Css.inputs,Css.inputs_all]}
            name="email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder='E-mail:' placeholderTextColor={'#282B29'}
            inputMode='email' keyboardType='email-address'
            autoComplete='email'
            returnKeyType='next'
            />
            {(errors.email && touched.email) &&
                  <Text style={Css.errors}>{errors.email}</Text>
                  }

          <MaskedTextInput style={Css.mask} 
            name="cpf"
            mask='999.999.999-99'
            onChangeText={handleChange('cpf')}
            onBlur={handleBlur('cpf')}
            value={values.cpf}
            placeholder='CPF:'
            placeholderTextColor={'#282B29'}
            returnKeyType='next'
            keyboardType='numeric'/>
            {(errors.cpf && touched.cpf) &&
                  <Text style={Css.errors}>{errors.cpf}</Text>
                  }

          <MaskedTextInput
          style={Css.mask}
            name="tel"
            mask="(+99) 99 99999-9999"
            onChangeText={handleChange('tel')}
            onBlur={handleBlur('tel')}
            value={values.tel} 
            placeholder='Celular:'
            placeholderTextColor={'#282B29'}
            returnKeyType='next'
            autoComplete='tel'
            keyboardType='numeric'/>
            {(errors.tel && touched.tel) &&
              <Text style={Css.errors}>{errors.tel}</Text>
              }

          <View style={Css.view_input}>  
          <TextInput style={[Css.inputs,Css.input_address]}
              name="endereco"
              onChangeText={handleChange('endereco')}
              onBlur={handleBlur('endereco')}
              value={values.endereco}
              placeholder='Endereço:' placeholderTextColor={'#282B29'}
              autoComplete='street-address'
              returnKeyType='next'/>

            <TextInput 
              style={[Css.inputs,Css.input_number]}
              name="complementoDeEndereco"
              onChangeText={handleChange('complementoDeEndereco')}
              onBlur={handleBlur('complementoDeEndereco')}
              value={values.complementoDeEndereco}
              placeholder='Nº:' placeholderTextColor={'#282B29'}
              inputMode='text'
              returnKeyType='next'/>
              
          </View>
          {(errors.endereco && touched.endereco) &&
            <Text style={Css.errors}>{errors.endereco}</Text>
            }
        
          {(errors.complementoDeEndereco && touched.complementoDeEndereco) &&
            <Text style={Css.errors}>{errors.complementoDeEndereco}</Text>
            }
      
          <View style={Css.view_input}>
              <TextInput 
                name="cidade"
                onChangeText={handleChange('cidade')}
                onBlur={handleBlur('cidade')}
                value={values.cidade}
                style={[Css.inputs,Css.input_city]}
                placeholder='Cidade:' placeholderTextColor={'#282B29'} inputMode='text'
                returnKeyType='next'
                maxLength={50}/>

              <MaskedTextInput 
                name="cep"
                mask='99999-999'
                onChangeText={handleChange('cep')}
                onBlur={handleBlur('cep')}
                value={values.cep}
                style={Css.mask_cep}
                placeholder='CEP:' 
                placeholderTextColor={'#282B29'}
                autoComplete='postal-code'
                keyboardType='numeric'
                returnKeyType='next'/>
              {/* 
                inputMode='numeric' 
          maxLength={9} */}
                
                
          </View>
          {(errors.cidade && touched.cidade) &&
            <Text style={Css.errors}>{errors.cidade}</Text>
            }

          {(errors.cep && touched.cep) &&
            <Text style={Css.errors}>{errors.cep}</Text>
            }
    
          <TextInput style={[Css.inputs,Css.inputs_all]} 
            name="senha"
            onChangeText={handleChange('senha')}
            onBlur={handleBlur('senha')}
            value={values.senha}
            placeholder='Senha:' placeholderTextColor={'#282B29'} 
            inputMode='text'
            secureTextEntry={true}
            returnKeyType='next'/>
            {(errors.senha && touched.senha) &&
                  <Text style={Css.errors_senha}>{errors.senha}</Text>
                  }

          <TextInput style={[Css.inputs,Css.inputs_all]}
            name="confirmarSenha"
            onChangeText={handleChange('confirmarSenha')}
            onBlur={handleBlur('confirmarSenha')}
            value={values.confirmarSenha}
            placeholder='Confirmar senha:' placeholderTextColor={'#282B29'} 
            inputMode='text'
            secureTextEntry={true}/>
            {(errors.confirmarSenha && touched.confirmarSenha) &&
                  <Text style={Css.errors_senha}>{errors.confirmarSenha}</Text>
                  }
        </KeyboardAvoidingView>
    
    
          <TouchableOpacity style={Css.btn_v1}
          onPress={()=>{
            handleSubmit()
            navigation.navigate('CadastrarCrianca')}
          }
          rounded disabled={!isValid}
          >
            <Text style={Css.txt}>Cadastrar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={Css.btn_v1}
          onPress={() => navigation.goBack()}>
            <Text style={Css.txt}>Voltar</Text>
          </TouchableOpacity>

        </SafeAreaView>
      </ScrollView>
    )}
 </Formik>  
)}