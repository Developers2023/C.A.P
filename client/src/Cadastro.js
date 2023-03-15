import React from 'react';
import { KeyboardAvoidingView,View, SafeAreaView,Text, TextInput,TouchableOpacity } from 'react-native';
import Css from './components/Css';
import Dropdown from './Dropdown';
import Dropdown_User from './Dropdown_User';

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

        <View style={[Css.view_input,Css.view_drop]}>
          <TextInput 
            style={[Css.inputs,Css.input_name]}
            placeholder='Nome:' placeholderTextColor={'#282B29'}
            inputMode='text'
            autoComplete='name'/>
          <Dropdown />
        </View>
      
      <TextInput style={[Css.inputs,Css.inputs_all]}
       placeholder='E-mail:' placeholderTextColor={'#282B29'}
        inputMode='email' keyboardType='email-address'
        autoComplete='email'
         returnKeyType='next'/>

      <TextInput style={[Css.inputs,Css.inputs_all]} 
      placeholder='CPF:' placeholderTextColor={'#282B29'}
       inputMode='text'
       maxLength={11}
       returnKeyType='next'/>

      <TextInput style={[Css.inputs,Css.inputs_all]} placeholder='Celular:' placeholderTextColor={'#282B29'} inputMode='numeric'
      maxLength={14}
      returnKeyType='next'
      autoComplete='tel'/>

      <View style={Css.view_input}>  
       <TextInput style={[Css.inputs,Css.input_address]}
       placeholder='Endereço:' placeholderTextColor={'#282B29'}
       returnKeyType='next'
       autoComplete='street-address'/>

      <TextInput 
      style={[Css.inputs,Css.input_number]} placeholder='Nº:' placeholderTextColor={'#282B29'} inputMode='text'
      returnKeyType='next'/>
      </View>
   
   <View style={Css.view_input}>
   <TextInput 
      style={[Css.inputs,Css.input_city]}
       placeholder='Cidade:' placeholderTextColor={'#282B29'} inputMode='text'
       returnKeyType='next'/>

      <TextInput
      style={[Css.inputs,Css.input_cep]}
      placeholder='CEP:' placeholderTextColor={'#282B29'}
      inputMode='numeric' 
      maxLength={8} returnKeyType='next' 
      autoComplete='postal-code'/>
   </View>
     


      <TextInput style={[Css.inputs,Css.inputs_all]} 
      placeholder='Senha:' placeholderTextColor={'#282B29'} 
      inputMode='text'
      secureTextEntry={true}/>
      <TextInput style={[Css.inputs,Css.inputs_all]}
       placeholder='Confirmar senha:' placeholderTextColor={'#282B29'} 
      inputMode='text'
      secureTextEntry={true}/>
         </KeyboardAvoidingView>

    
    <Text>*Dados Obrigatórios</Text>
    <TouchableOpacity style={Css.btn_v1}
    onPress={() => navigation.navigate('CopiarID')}>
      <Text style={Css.txt}>Cadastrar</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={Css.btn_v1}
    onPress={() => navigation.goBack()}>
      <Text style={Css.txt}>Voltar</Text>
    </TouchableOpacity>
</SafeAreaView>
   
  
 
);
}