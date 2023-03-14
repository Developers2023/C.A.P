import React from 'react';
import { KeyboardAvoidingView,View, SafeAreaView,Text, TextInput,TouchableOpacity } from 'react-native';
import {css} from './assets/Css';
import Dropdown from './Dropdown';
import Dropdown_User from './Dropdown_User';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Cadastro({navigation}) {
return(

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

        <View style={[css.view_input,css.view_drop]}>
          <TextInput 
            style={[css.inputs,css.input_name]}
            placeholder='Nome:' placeholderTextColor={'#282B29'}
            inputMode='text'
            autoComplete='name'/>
          <Dropdown />
        </View>
      
      <TextInput style={[css.inputs,css.inputs_all]}
       placeholder='E-mail:' placeholderTextColor={'#282B29'}
        inputMode='email' keyboardType='email-address'
        autoComplete='email'
         returnKeyType='next'/>

      <TextInput style={[css.inputs,css.inputs_all]} 
      placeholder='CPF:' placeholderTextColor={'#282B29'}
       inputMode='text'
       maxLength={11}
       returnKeyType='next'/>

      <TextInput style={[css.inputs,css.inputs_all]} placeholder='Celular:' placeholderTextColor={'#282B29'} inputMode='numeric'
      maxLength={14}
      returnKeyType='next'
      autoComplete='tel'/>

      <View style={css.view_input}>  
       <TextInput style={[css.inputs,css.input_address]}
       placeholder='Endereço:' placeholderTextColor={'#282B29'}
       returnKeyType='next'
       autoComplete='street-address'/>

      <TextInput 
      style={[css.inputs,css.input_number]} placeholder='Nº:' placeholderTextColor={'#282B29'} inputMode='text'
      returnKeyType='next'/>
      </View>
   
   <View style={css.view_input}>
   <TextInput 
      style={[css.inputs,css.input_city]}
       placeholder='Cidade:' placeholderTextColor={'#282B29'} inputMode='text'
       returnKeyType='next'/>

      <TextInput
      style={[css.inputs,css.input_cep]}
      placeholder='CEP:' placeholderTextColor={'#282B29'}
      inputMode='numeric' 
      maxLength={8} returnKeyType='next' 
      autoComplete='postal-code'/>
   </View>
     


      <TextInput style={[css.inputs,css.inputs_all]} 
      placeholder='Senha:' placeholderTextColor={'#282B29'} 
      inputMode='text'
      secureTextEntry={true}/>
      <TextInput style={[css.inputs,css.inputs_all]}
       placeholder='Confirmar senha:' placeholderTextColor={'#282B29'} 
      inputMode='text'
      secureTextEntry={true}/>
         </KeyboardAvoidingView>

    
    <Text>*Dados Obrigatórios</Text>
    <TouchableOpacity style={css.btn_v1}
    onPress={() => navigation.navigate('CopiarID')}>
      <Text style={css.txt}>Cadastrar</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={css.btn_v1}
    onPress={() => navigation.goBack()}>
      <Text style={css.txt}>Voltar</Text>
    </TouchableOpacity>
</SafeAreaView>
   
  
 
);
}