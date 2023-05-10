import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView,ScrollView} from 'react-native';
import Css from './Css';
import {Formik} from 'formik';
import * as yup from 'yup';

const loginValidation = yup.object().shape({
     email:yup.string().email('Insira um email válido').required('Email é obrigatório'),
     password:yup.string().min(8,({min}) =>`Senha deve ter pelo menos ${min} caracteres`).required(`Senha é obrigatória`)
     .matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"A senha deve conter 8 caracteres, incluindo: uma letra maiúscula, uma minúscula, um número e um caracter especial"
   )
})

export default ({navigation}) => {
     return (
     <Formik
          initialValues={{ email: '', password: '' }}
          validationOnMount={true}
          onSubmit={values => console.log(values)}
          validationSchema={loginValidation}
     >
     {({handleSubmit,handleChange,handleBlur,values,touched,errors,isValid}) => (
     <ScrollView>
     <View style = {Css.Container}>
          <>
          <Image source={require("./images/Logo.png")} stylee={Css.Logo}/>  
          <Text style = {Css.cap}>C.A.P - CADÊ A PERUA</Text>
          </>
          <KeyboardAvoidingView>
               <TextInput
               name="email"
               onChangeText={handleChange('email')}
               onBlur={handleBlur('email')}
               value={values.email}
               placeholder='E-mail:'
               style = {Css.InputLogin}
               inputMode='email' keyboardType='email-address'
               autoComplete='email'
               returnKeyType='next'
               />
               {(errors.email && touched.email) && 
               <Text style={Css.errors}>{errors.email}</Text>
               }

               <TextInput
               name="password"
               onChangeText={handleChange('password')}
               onBlur={handleBlur('password')}
               value={values.password}
               placeholder='Senha:'
               style = {Css.InputLogin}
               secureTextEntry={true}
               />
               {(errors.password && touched.password) &&
               <Text style={Css.errors_senha}>{errors.password}</Text>
               }
          </KeyboardAvoidingView>
          <TouchableOpacity style = {Css.btn_v1} onPress={()=>{
               handleSubmit()
               navigation.navigate('CadastrarCrianca')
          }}
          rounded disabled={!isValid}>
               <Text style = {Css.txtBtnLogin}>
               ACESSAR
               </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {Css.btn_v1} onPress={() => navigation.goBack()}>
               <Text style = {Css.txtBtnLogin} >
                    VOLTAR
               </Text>
          </TouchableOpacity>
     </View>
     </ScrollView>
     )}
     </Formik>
 )};

