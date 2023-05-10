import React,{useState} from 'react';
import { View,Text,SafeAreaView, TextInput,KeyboardAvoidingView,ScrollView,TouchableOpacity } from 'react-native';
import Css from './Css';
import {Formik} from 'formik';
import * as yup from 'yup';
import { MaskedTextInput } from 'react-native-mask-text';

const editValidation = yup.object().shape({

     email:yup.string().email('Insira um email válido').required('Email é obrigatório'),

     cel:yup.string().required('Número de telefone/celular é obrigatório').min(17,'Insira 13 digitos'),

     endereco:yup.string().required('Endereço (nome da rua) é obrigatório'),

     complemento:yup.string().required('Complemento é obrigatório'),

     cidade:yup.string().required('Nome da cidade/estado é obrigatório'),

     cep:yup.string().required('CEP é obrigatório').min(9),

     senha:yup.string().min(8,({min}) =>`Senha deve ter pelo menos ${min} caracteres`).required(`Senha é obrigatória`)
     .matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
     "A senha deve conter 8 caracteres, incluindo: uma letra maiúscula, uma minúscula, um número e um caracter especial"),

     confirmarSenha:yup.string().required('Confirmar senha é obrigatório').oneOf([yup.ref('senha')],'As senhas não correspondem')
   
})

export default function DadosPessoais({navigation}){

  const nome = 'Paulo Santos Santiago';
  const sexo = 'Masc';
  const cod = 887917;
  const cpf = '5552223344';
  const email = 'pauloconvertidopraJesus@gmail.com';
  const cel = '40028922';
  const endereco = 'Rua da Natividade Belas Pragas';
  const numero = 48;
  const cidade = 'Cidade: São Paulo/SP';
  const cep =  '02548895';


    return(
      <Formik
          initialValues={{ email: '', password: '' }}
          validationOnMount={true}
          onSubmit={values => console.log(values)}
          validationSchema={editValidation}
     >
     {({handleSubmit,handleChange,handleBlur,values,touched,errors,isValid}) => (
      <ScrollView>
      <SafeAreaView style={{flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:50}}> 


        <KeyboardAvoidingView style={{zIndex:1, marginHorizontal:50}}>

          <TextInput 
            style={[Css.inputs,Css.input_cod]}
            placeholder={'Cód: '+ cod} placeholderTextColor={'#000'}
            readOnly={true}/>
          <TextInput />

            <View style={Css.view_input}>
              <TextInput 
                style={[Css.inputs,Css.input_name]}
                placeholder={'Nome: '+ nome} placeholderTextColor={'#000'}
                readOnly={true}/>

              <TextInput 
                style={[Css.inputs,Css.input_sexNoEdit]}
                placeholder={sexo} placeholderTextColor={'#000'}
                 readOnly={true}/>
              
            </View>
          
          <TextInput style={[Css.inputs,Css.inputs_all]}
            name="email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder={'E-mail: '+ email} placeholderTextColor={'#000'}
            inputMode='email' keyboardType='email-address'/>
            
    
          <TextInput style={[Css.inputs,Css.inputs_all]} 
          placeholder={'CPF: '+ cpf} placeholderTextColor={'#000'}
          readOnly={true}
           maxLength={11}/>
    
          <MaskedTextInput
          style={Css.mask}
          name="cel"
          mask="(+99) 99 99999-9999" 
          onChangeText={handleChange('cel')}
          onBlur={handleBlur('cel')}
          value={values.cel}
          placeholder='Celular: ' placeholderTextColor={'#000'} 
          inputMode='numeric'/>
    
    <View style={Css.view_input}>  
       <TextInput style={[Css.inputs,Css.input_address]}
          name="endereco"
          onChangeText={handleChange('endereco')}
          onBlur={handleBlur('endereco')}
          value={values.endereco}
          placeholder='Endereço:' placeholderTextColor={'#282B29'}
          returnKeyType='next'
          autoComplete='street-address'/>

        <TextInput 
          style={[Css.inputs,Css.input_number]}
          name="complemento"
          onChangeText={handleChange('complemento')}
          onBlur={handleBlur('complemento')}
          value={values.complemento}
          placeholder='Nº:' placeholderTextColor={'#282B29'}
          inputMode='text'
          returnKeyType='next'/>
          
      </View>
      {(errors.endereco && touched.endereco) &&
        <Text style={Css.errors}>{errors.endereco}</Text>
        }
    
      {(errors.complemento && touched.complemento) &&
        <Text style={Css.errors}>{errors.complemento}</Text>
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
            mask='99999-999'
            name="cep"
            onChangeText={handleChange('cep')}
            onBlur={handleBlur('cep')}
            value={values.cep}
            style={Css.mask_cep}
            placeholder='CEP:' placeholderTextColor={'#282B29'}
            keyboardType='numeric'  
            returnKeyType='next' 
            autoComplete='postal-code'/>
            
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
        secureTextEntry={true}/>
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
             
          <TouchableOpacity style={Css.btn_v2} onPress={() => {
            handleChange()
            navigation.navigate('CadastrarCrianca')}}>
              <Text style={Css.txt}>Salvar</Text>
            </TouchableOpacity>
        
    </SafeAreaView>
    </ScrollView>
     )}
    </Formik>
    );
};
