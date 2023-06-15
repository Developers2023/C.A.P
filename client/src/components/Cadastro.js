import * as React from 'react';
import { KeyboardAvoidingView,View, SafeAreaView,Text, TextInput,TouchableOpacity, ScrollView, Pressable } from 'react-native';
import Css from './Css';
import Dropdown from './Dropdown';
import Dropdown_User from './Dropdown_User';
import {Formik} from 'formik';
import * as yup from 'yup';
import { MaskedTextInput } from 'react-native-mask-text';
import { isBefore, parse } from 'date-fns';
import DatePicker from 'react-native-date-picker';

import apiMenager from './api/apiMenager';

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

     confirmarSenha:yup.string().required('Confirmar senha é obrigatório').oneOf([yup.ref('senha')],'As senhas não correspondem'),

     dataDeNascimento: yup.string().required('A data de nascimento é obrigatória').test('data-valida', 'Esta data é invalida', value => {
      const date = parse(value,'dd/MM/yyyy', new Date());
      return isBefore(date, new Date()); 
     })   
});


export default function Cadastro({navigation}) {

  const cadastrar = async() => {
    
  }

  
  const Cadastro = () => {
    apiMenager.post('pessoa/cadastro', data)
    .then(reponse => {
      console.log(reponse.data);
    }).catch((error) => {
      console.log(error);
    }) 
  }

  const [data, setData] = React.useState({
    nome: '',
    sexo: '',
    dataDeNascimento: '',
    email: '',
    senha: '',
    cpf: '',
    telefone: ''
  });

  

  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [dataDeNasc, setDataDeNasc] = React.useState('');

  const contrair = () =>{
    setOpen(!open)
  }

return(
  <Formik
  initialValues={{
    nome: '',
    sexo: '',
    dataDeNascimento: '',
    email: '',
    senha: '',
    cpf: '',
    telefone: ''
}}
  validateOnMount={true}
  validationSchema={sighUpValidation}
  onSubmit={setData}
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
              onBlur={handleBlur('nome')}  
              placeholder='Nome:' placeholderTextColor={'#282B29'}
              inputMode='text'
              autoComplete='name'
              maxLength={100}
              returnKeyType='next'
              onChangeText={handleChange('nome')}
              value={values.nome}
              />
            <Dropdown />
          </View>
          {(errors.nome && touched.nome) &&
            <Text style={Css.errors}>{errors.nome}</Text>
            }

          {!open && (
            <Pressable
            onPress={contrair}
            >
            <TextInput 
              style={[Css.inputs,Css.inputs_all]}
              name="dataDeNascimento"
              onBlur={handleBlur('dataDeNascimento')}  
              placeholder='Data de nascimento (23 jun 2023)'
              placeholderTextColor={'#282B29'}
              inputMode='number'
              keyboardType='numeric'
              autoComplete='birthdate-day'
              returnKeyType='next'
              onPressIn={() => setOpen(true)}
              onChangeText={handleChange('dataDeNascimento')}
              value={values.dataDeNascimento}
              editable = {false}
              />
              {(errors.dataDeNascimento && touched.dataDeNascimento) && 
              <Text style = {Css.errors}>{errors.dataDeNascimento}</Text>
              }
             </Pressable>
          )}  

            {open && (
              <DatePicker
              modal
              mode = "date"
              open = {open}
              date = {date}
              onConfirm={date => {
              setOpen(false);
              setDate(date);
              }}
              onCancel={() => {
              setOpen(false)
              }}
              />
            )}

          <TextInput style={[Css.inputs,Css.inputs_all]}
            name="email"
            onBlur={handleBlur('email')}
            placeholder='E-mail:' placeholderTextColor={'#282B29'}
            inputMode='email' keyboardType='email-address'
            autoComplete='email'
            returnKeyType='next'
            onChangeText={handleChange('email')}
            value={values.email}
            />
            {(errors.email && touched.email) &&
                  <Text style={Css.errors}>{errors.email}</Text>
                  }

          <MaskedTextInput style={Css.mask} 
            name="cpf"
            mask='999.999.999-99'
            onBlur={handleBlur('cpf')}     
            placeholder='CPF:'
            placeholderTextColor={'#282B29'}
            returnKeyType='next'
            keyboardType='numeric'
            value={values.cpf}
            onChangeText={handleChange('cpf')}
            />
            {(errors.cpf && touched.cpf) &&
                  <Text style={Css.errors}>{errors.cpf}</Text>
                  }

          <MaskedTextInput
          style={Css.mask}
            name="tel"
            mask="(+99) 99 99999-9999"      
            onBlur={handleBlur('tel')}   
            placeholder='Celular:'
            placeholderTextColor={'#282B29'}
            returnKeyType='next'
            autoComplete='tel'
            keyboardType='numeric'
            value={values.tel} 
            onChangeText={handleChange('tel')}
            />
            {(errors.tel && touched.tel) &&
              <Text style={Css.errors}>{errors.tel}</Text>
              }

          {(errors.cep && touched.cep) &&
            <Text style={Css.errors}>{errors.cep}</Text>
            }
    
          <TextInput style={[Css.inputs,Css.inputs_all]} 
            name="senha"        
            onBlur={handleBlur('senha')}    
            placeholder='Senha:' placeholderTextColor={'#282B29'} 
            inputMode='text'
            secureTextEntry={true}
            returnKeyType='next'
            onChangeText={handleChange('senha')}
            value={values.senha}
            />
            {(errors.senha && touched.senha) &&
                  <Text style={Css.errors_senha}>{errors.senha}</Text>
                  }

        </KeyboardAvoidingView>

        <TouchableOpacity
        style = {Css.btn_v1}
        onPress={() => {
          return(
            handleSubmit(),
            Cadastro(),
            navigation.navigate('CadastrarCrianca')
          );
        }}
        rounded disabled={isValid}
        >
        <Text style = {Css.txt}>Cadastrar</Text>
        </TouchableOpacity>

          <TouchableOpacity style={Css.btn_v1}
          onPress={() => navigation.goBack()}>
            <Text style={Css.txt}>Voltar</Text>
          </TouchableOpacity>

        </SafeAreaView>
      </ScrollView>
    )}
 </Formik>  
)
}


        