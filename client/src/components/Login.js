import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import Css from './Css';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import * as yup from 'yup';


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


     const login = async (campos) => {
          try {
               const response = await axios.get('http://10.0.2.2:3002/pessoa/login', {
                    email: campos.email,
                    senha: campos.senha
               });

               if (response.data) {
                    console.log('Login Bem-sucedido');
                    console.log(response.data);
               } else {
                    console.log('credenciais inválidas');
               }

          } catch (error) {
               console.log('Erro durante o login');
               console.log(JSON.stringify(error));
          }
     };

     const handleSubmit = () => {
          const campos = {
               email,
               senha,
          } 
          login(campos);
     }

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
                                                  onChangeText={(t) => { setEmail(t); } }
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
                                                  onChangeText={(t) => { setSenha(t); } }
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
                                        navigation.navigate('Cadastro');
                                   } }
                              >
                                   <Text
                                        style={{
                                             color: '#000',
                                             fontSize: 16
                                        }}
                                   >Cadastre-se</Text>
                              </TouchableOpacity>
                         </View>
                    </KeyboardAvoidingView>
               </View>
          </ScrollView>
     )
};

