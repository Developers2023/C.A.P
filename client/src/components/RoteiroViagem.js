import { View, Text, SafeAreaView, StyleSheet, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Geocoder from 'react-native-geocoding';

import Maps from './Maps';

  export default () => {
  
  const [localEscola, setlocalEscola] = useState('');  

  const atualizarRotas = Text => {
    setlocalEscola(Text);
  };

  
    return(
     <KeyboardAvoidingView>
      <ScrollView>
      <SafeAreaView style ={style.container}> 
      
        <View>
        <Image source={require('./images/medir-distancia.png')} style = {{
          width: 120,
          height: 120,
          position: 'relative',
          top: 170,
          left: 2,
          borderRadius: 10
        }}/> 
      </View>
   
        <View style = {style.placeholder}>
          <Text style = {{fontSize: 20, marginLeft: 10}}>Digite o nome da escola</Text>

         <TextInput
         value = {localEscola}
         onChangeText={setlocalEscola}
         placeholder='Digite o nome da escola'
         style = {style.inputEscola}
         />        

      </View>
    <View style = {style.btnContainer}>
    <TouchableOpacity
    style = {style.btnProx}
    onPress={() => {console.log("mudando de rota");}}
    >
        <Text style = {style.btntxt}>Próximo</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
    style = {style.btnAdd}
    onPress={atualizarRotas}
    >
      <Text style = {style.txtAdd}>adicionar</Text>
    </TouchableOpacity>
    </View>

    <>
    <Maps localEscola = {localEscola} atualizarRotas = {atualizarRotas}/>
    </>
   
    </SafeAreaView>
    </ScrollView>
   </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({

 container: {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
 },
  placeholder: {
    position: 'relative',
    top: 210,
    width: 360,
  },
  
  container2: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
  },
  textInputContainer2: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  btnProx: {
    marginTop: 300,
    backgroundColor: '#87ceeb',
    width: 150,
    height: 50,
    borderRadius: 100,
    position: 'relative',
    left: 200,
    bottom: 70
  },
  btntxt:{
    fontSize: 17,
    textAlign: 'center',
    paddingTop: 14,
  },
  btnAdd: {
    backgroundColor: '#87ceeb',
    width: 150,
    height: 50,
    borderRadius: 100,
    position: 'relative',
    bottom: 120
  },
  txtAdd: {
    paddingTop: 12,
    paddingLeft: 39,
    fontSize: 17
  },
  btnContainer: {
    marginRight: 195
  },
  inputEscola: {
    width: 350, 
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 30
  }
})



