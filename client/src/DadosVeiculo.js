import React from 'react';
import { KeyboardAvoidingView,View, SafeAreaView,Text, TextInput,TouchableOpacity } from 'react-native';
import Css from './components/Css';

export default function DadosVeiculo(){


    return(
      <SafeAreaView style={{flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:50}}> 
        
        <KeyboardAvoidingView style={{zIndex:1, marginHorizontal:50}}>
    
            <View style={Css.view_input}>
              <TextInput 
                style={[Css.inputs,Css.input_half]}
                placeholder='Placa: ' placeholderTextColor={'#000'}
                  inputMode='text'  autoCapitalize='characters'/>
                  <TextInput 
                style={[Css.inputs,Css.input_half]}
                placeholder='Ano: ' placeholderTextColor={'#000'}
                  inputMode='text' />
              
            </View>
          
          <TextInput 
            style={[Css.inputs,Css.inputs_all]}
            placeholder='Marca: ' placeholderTextColor={'#000'}
            inputMode='text' />

          <TextInput style={[Css.inputs,Css.inputs_all]}
           placeholder='Modelo: ' placeholderTextColor={'#000'}
            inputMode='text'/>

          <TextInput style={Css.input_moreInfo}
           placeholder='Informações adicionais: ' placeholderTextColor={'#000'}
            inputMode='text' 
            multiline={true} numberOfLines={5}
            />
            
             </KeyboardAvoidingView>
             
          <TouchableOpacity style={Css.btn_v2}>
              <Text style={Css.txt}>Salvar</Text>
            </TouchableOpacity>
        
    </SafeAreaView>
    );
};