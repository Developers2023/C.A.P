import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import Css from './Css';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import * as yup from 'yup';
import api from './apiMenager/Api';


const loginValidation = yup.object().shape({
     email: yup.string().email('Insira um email válido').required('Email é obrigatório'),
     password: yup.string().min(8, ({ min }) => `Senha deve ter pelo menos ${min} caracteres`).required(`Senha é obrigatória`)
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "A senha deve conter 8 caracteres, incluindo: uma letra maiúscula, uma minúscula, um número e um caracter especial"
          )
})

export default ({ navigation }) => {
     const userRef = useRef();
     const errRef = useRef();

     const { control, formState: { errors } } = useForm({
          resolver: yupResolver(loginValidation),
     });


     const [email, setEmail] = useState('');
     const [senha, setSenha] = useState('');


     const login = async (values) => {
          try {
                await api.post(`/pessoa/login`,{
                    email: values.email,
                    senha: values.senha
               })
               navigation.navigate('Tab')
          }catch(error) {
            console.log('Erro durante o login');
            console.log(JSON.stringify(error));
          }
        };
        

     const handleSubmit = () => {
          const dados = {
            email,
            senha
          }
          console.log(dados);
          login(dados);
        };

     return (
          <ScrollView>
               <View style={{
                    alignItems: 'center',
                    marginTop: 45
               }}>
                    <>
                         <Image source={require("./images/Logo.png")} stylee={Css.Logo} />
                         <Text style={Css.cap}>C.A.P - CADÊ A PERUA</Text>
                    </>
                    <KeyboardAvoidingView>
                         <View>
                              <Controller
                                   control={control}
                                   rules={{ required: true }}
                                   render={({ field: { onChange, onBlur, value } }) => (
                                        <View>
                                             <TextInput
                                                  onBlur={onBlur}
                                                  onChangeText={(t) => { setEmail(t); }}
                                                  value={email}
                                                  placeholder='Email:'
                                                  style={{
                                                       backgroundColor: '#87ceeb',
                                                       height: 49,
                                                       width: 300,
                                                       padding: 3,
                                                       margin: 7,
                                                       borderRadius: 4,
                                                       borderWidth: 1,
                                                       textAlign: 'left',
                                                  }}
                                                  placeholderTextColor={'#282B29'} />
                                        </View>
                                   )}
                                   name='email'
                                   defaultValue='' />

                              <Controller
                                   control={control}
                                   rules={{ required: true }}
                                   render={({ field: { onChange, onBlur } }) => (
                                        <View>
                                             <TextInput
                                                  onBlur={onBlur}
                                                  onChangeText={(t) => { setSenha(t); }}
                                                  value={senha}
                                                  placeholder='Senha:'
                                                  style={{
                                                       backgroundColor: '#87ceeb',
                                                       height: 49,
                                                       width: 300,
                                                       padding: 3,
                                                       margin: 7,
                                                       borderRadius: 4,
                                                       borderWidth: 1,
                                                       textAlign: 'left',
                                                  }}
                                                  placeholderTextColor={'#282B29'}
                                                  secureTextEntry />
                                        </View>
                                   )}
                                   name='senha'
                                   defaultValue='' />
                         </View>
                         <View style={{
                              position: 'relative',
                              left: 27
                         }}>
                              <TouchableOpacity
                                   style={{
                                        width: 250,
                                        height: 51,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#87ceeb',
                                        borderColor: '#000000',
                                        borderWidth: 1,
                                        borderRadius: 14,
                                        margin: 7,
                                   }}
                                   onPress={handleSubmit}
                              >
                                   <Text
                                        style={{
                                             color: '#000',
                                             fontSize: 16
                                        }}
                                   >Login</Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                   style={Css.btn_v1}
                                   onPress={() => {
                                        navigation.goBack();
                                   }}
                              >
                                   <Text
                                        style={{
                                             color: '#000',
                                             fontSize: 16
                                        }}
                                   >Voltar</Text>
                              </TouchableOpacity>
                         </View>
                    </KeyboardAvoidingView>
               </View>
          </ScrollView>
     )
};

