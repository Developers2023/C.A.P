import React,{useState} from 'react';
import { View,Text,SafeAreaView, TextInput,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {css} from './assets/Css';

export default function DadosPessoais({navigation}){
  const nome = 'Paulo Santos Santiago';
  const sexo = 'Masc';
  const cod = 887917;
  const cpf = '5552223344';
  const email = 'pauloputariaviciado@gmail.com';
  const cel = '40028922';
  const endereco = 'Rua da Natividade Belas Pragas';
  const numero = 48;
  const cidade = 'Cidade: São Paulo/SP';
  const cep =  '02548895';
    return(
      <SafeAreaView style={{flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:50}}> 

        <KeyboardAvoidingView style={{zIndex:1, marginHorizontal:50}}>

          <TextInput 
            style={[css.inputs,css.input_cod]}
            placeholder={'Cód: '+cod} placeholderTextColor={'#000'}
            readOnly={true}/>
          <TextInput />

            <View style={css.view_input}>
              <TextInput 
                style={[css.inputs,css.input_name]}
                placeholder={'Nome: '+nome} placeholderTextColor={'#000'}
                readOnly={true}/>
                  <TextInput 
                style={[css.inputs,css.input_sexNoEdit]}
                placeholder={sexo} placeholderTextColor={'#000'}
                 readOnly={true}/>
              
            </View>
          
          <TextInput style={[css.inputs,css.inputs_all]}
           placeholder={'E-mail: '+ email} placeholderTextColor={'#000'}
            inputMode='email' keyboardType='email-address'/>
    
          <TextInput style={[css.inputs,css.inputs_all]} 
          placeholder={'CPF: '+ cpf} placeholderTextColor={'#000'}
          readOnly={true}
           maxLength={11}/>
    
          <TextInput style={[css.inputs,css.inputs_all]} 
          placeholder={'Celular: '+ cel} placeholderTextColor={'#000'} 
          inputMode='numeric'
          maxLength={14}></TextInput>
    
          <View style={css.view_input}>  
           <TextInput style={[css.inputs,css.input_address]}
           placeholder={'Endereço: ' + endereco} placeholderTextColor={'#000'}/>
    
          <TextInput 
          style={[css.inputs,css.input_number]} placeholder={'Nº: '+ numero} placeholderTextColor={'#000'} inputMode='text'/></View>
       
       <View style={css.view_input}>
       <TextInput 
          style={[css.inputs,css.input_city]}
           placeholder={'Cidade: ' + cidade} placeholderTextColor={'#000'}
            inputMode='text'/>
    
          <TextInput
          style={[css.inputs,css.input_cep]}
          placeholder={'CEP: ' + cep} placeholderTextColor={'#000'}
          inputMode='numeric' 
          maxLength={8}
          clearTextOnFocus={true}/>
       </View>
      
          <TextInput style={[css.inputs,css.inputs_all]} 
          placeholder='Nova senha: ' placeholderTextColor={'#000'}
          inputMode='text'
          secureTextEntry={true}/>

          <TextInput style={[css.inputs,css.inputs_all]}
           placeholder='Confirmar senha: ' placeholderTextColor={'#000'} 
          inputMode='text'
          secureTextEntry={true}/>
             </KeyboardAvoidingView>
             
          <TouchableOpacity style={css.btn_v2} onPress={() => navigation.navigate('DadosVeiculo')}>
              <Text style={css.txt}>Salvar</Text>
            </TouchableOpacity>
        
    </SafeAreaView>
    
    );
};