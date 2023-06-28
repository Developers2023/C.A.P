import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import Css from './Css';
import { Formik } from 'formik';
import * as yup from 'yup';
import { MaskedTextInput } from 'react-native-mask-text';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const editValidation = yup.object().shape({

  email: yup.string().email('Insira um email válido').required('Email é obrigatório'),

  cel: yup.string().required('Número de telefone/celular é obrigatório').min(17, 'Insira 13 digitos'),

  endereco: yup.string().required('Endereço (nome da rua) é obrigatório'),

  numero: yup.string().required('Número do endereço é obrigatório'),

  cidade: yup.string().required('Nome da cidade/estado é obrigatório'),

  cep: yup.string().required('CEP é obrigatório').min(9),

  senha: yup.string().min(8, ({ min }) => `Senha deve ter pelo menos ${min} caracteres`).required(`Senha é obrigatória`)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "A senha deve conter 8 caracteres, incluindo: uma letra maiúscula, uma minúscula, um número e um caracter especial"),

 // confirmarSenha: yup.string().required('Confirmar senha é obrigatório').oneOf([yup.ref('senha')], 'As senhas não correspondem')
})



export default function DadosPessoais({ navigation }) {


  const data ={
    nome :'Paulo Santos Santiago',
    sexo : 'Masc',
    cod : 887917,
    data : '02/02/2002',
    cpf : '5552223344',
    email : 'pauloconvertidopraJesus@gmail.com',
    cel : '551140028922',
    endereco : 'Rua da Natividade Belas Pragas',
    numero : 48,
    cidade : 'São Paulo/SP',
    cep : '02548895',
    complemento : 'apto'
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationOnMount={true}
      onSubmit={values => console.log(values)}
      validationSchema={editValidation}
    >
      
      {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isValid }) => (
        <ScrollView>
          
          <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50
          }}>

          
            <KeyboardAvoidingView style={{ zIndex: 1, marginHorizontal: 50 }}>

              <TextInput
                style={[Css.inputs, Css.input_cod]}
                placeholder={'Cód: ' + data.cod} 
                placeholderTextColor={'#000'}
                readOnly={true} 
              />
              <View style={Css.view_input}>
                <TextInput
                  style={[Css.inputs, Css.input_name]}
                  placeholder={'Nome: ' + data.nome} 
                  placeholderTextColor={'#000'}
                  readOnly={true} />

                <TextInput
                  style={[Css.inputs, Css.input_sexNoEdit]}
                  placeholder={data.sexo} placeholderTextColor={'#000'}
                  readOnly={true} />

              </View>
              
             

            <View style={Css.view_input}>
                 <TextInput style={[Css.inputs, Css.input_city]}
                placeholder={'CPF: ' + data.cpf} placeholderTextColor={'#000'}
                readOnly={true}
                maxLength={11} />
                
                <MaskedTextInput
                style={Css.mask_cep}
                name="data"
                mask="99/99/9999"
                onChangeText={handleChange('data')}
                onBlur={handleBlur('data')}
                value={null}
                placeholder={'Data: '+ data.data} placeholderTextColor={'#000'}
                inputMode='numeric'
                keyboardType='numeric' />
                
                
              </View>

              {/* <MaterialCommunityIcons
              name='square-edit-outline' size={25} color="#FFBC16" style={{position: 'absolute',top:231,zIndex:1,left:302}}/> */}
              <TextInput style={[Css.inputs, Css.inputs_all,]}
                name="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder={'E-mail: ' + data.email } placeholderTextColor={'#000'} 
                inputMode='email' keyboardType='email-address'
                
              />
              
          {/*     <MaterialCommunityIcons
              name='square-edit-outline' size={25} color="#FFBC16" style={{position: 'absolute',top:293,zIndex:1,left:302}}/> */}
              <MaskedTextInput
                style={Css.mask_tel}
                name="cel"
                mask="(+99) 99 99999-9999"
                onChangeText={handleChange('cel')}
                onBlur={handleBlur('cel')}
                value={values.cel}
                placeholder={'Celular: ' + data.cel} placeholderTextColor={'#000'}
                inputMode='numeric' />

              <View style={Css.view_input}>
             {/*  <MaterialCommunityIcons
              name='square-edit-outline' size={25} color="#FFBC16" style={{position: 'absolute',top:19,zIndex:1,left:227}}/> */}
                <TextInput style={[Css.inputs, Css.input_address]}
                  name="endereco"
                  onChangeText={handleChange('endereco')}
                  onBlur={handleBlur('endereco')}
                  value={values.endereco}
                  placeholder={'Endereço:'+ data.endereco} placeholderTextColor={'#000'}
                  returnKeyType='next'
                  autoComplete='street-address' />

             {/*   <MaterialCommunityIcons
              name='square-edit-outline' size={25} color="#FFBC16" style={{position: 'absolute',top:19,zIndex:1,left:302}}/> */}
                <TextInput
                  style={[Css.inputs, Css.input_number]}
                  name="numero"
                  onChangeText={handleChange('numero')}
                  onBlur={handleBlur('numero')}
                  value={values.numero}
                  placeholder={'Nº:'+ data.numero} placeholderTextColor={'#000'}
                  inputMode='text'
                  returnKeyType='next' />

              </View>
              {(errors.endereco && touched.endereco) &&
                <Text style={Css.errors}>{errors.endereco}</Text>
              }

              {(errors.complemento && touched.complemento) &&
                <Text style={Css.errors}>{errors.complemento}</Text>
              }

              <View style={Css.view_input}>
             {/*  <MaterialCommunityIcons
              name='square-edit-outline' size={25} color="#FFBC16" style={{position: 'absolute',top:19,zIndex:1,left:172}}/> */}
                <TextInput
                  name="cidade"
                  onChangeText={handleChange('cidade')}
                  onBlur={handleBlur('cidade')}
                  value={values.cidade}
                  style={[Css.inputs, Css.input_city]}
                  placeholder={'Cidade:' + data.cidade} placeholderTextColor={'#000'} inputMode='text'
                  returnKeyType='next'
                  maxLength={50} />

              {/* <MaterialCommunityIcons
              name='square-edit-outline' size={25} color="#FFBC16" style={{position: 'absolute',top:18,zIndex:1,left:303}}/> */}
                <MaskedTextInput
                  mask='99999-999'
                  name="cep"
                  onChangeText={handleChange('cep')}
                  onBlur={handleBlur('cep')}
                  value={values.cep}
                  style={Css.mask_cep}
                  placeholder={'CEP:'+ data.cep} placeholderTextColor={'#000'}
                  keyboardType='numeric'
                  returnKeyType='next'
                  autoComplete='postal-code' />

              </View>
              {(errors.cidade && touched.cidade) &&
                <Text style={Css.errors}>{errors.cidade}</Text>
              }

              {(errors.cep && touched.cep) &&
                <Text style={Css.errors}>{errors.cep}</Text>
              }

             {/*  <MaterialCommunityIcons
              name='square-edit-outline' size={25} color="#FFBC16" style={{position: 'absolute',top:481,zIndex:1,left:302}}/> */}
              <TextInput style={[Css.inputs, Css.inputs_all,]}
                name="complemento"
                onChangeText={handleChange('complemento')}
                onBlur={handleBlur('complemento')}
                value={values.complemento}
                placeholder={'Complemento: ' + data.complemento } placeholderTextColor={'#000'} 
                inputMode='email' keyboardType='email-address'
                
              />
 
              {/* <MaterialCommunityIcons
              name='square-edit-outline' size={25} color="#FFBC16" style={{position: 'absolute',top:545,zIndex:1,left:303}}/> */}
              <TextInput style={[Css.inputs, Css.inputs_all]}
                name="senha"
                onChangeText={handleChange('senha')}
                onBlur={handleBlur('senha')}
                value={values.senha}
                placeholder='Senha:' placeholderTextColor={'#282B29'}
                inputMode='text'
                secureTextEntry={true} />
              {(errors.senha && touched.senha) &&
                <Text style={Css.errors_senha}>{errors.senha}</Text>
              }

             

            </KeyboardAvoidingView>
            <View style={{padding: 40}}>
            <TouchableOpacity style={Css.btn_v2} onPress={() => {
              handleChange()
              navigation.navigate('CadastrarCrianca')
            }}>
              <Text style={Css.txt}>Salvar</Text>
            </TouchableOpacity>
           </View>
          </SafeAreaView>
        </ScrollView>
      )}
    </Formik>
  );
};
