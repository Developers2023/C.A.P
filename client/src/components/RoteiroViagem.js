import * as React from 'react';
import { View, Button, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default () => {
  const navigation = useNavigation();

  return(
    <SafeAreaView style ={style.container}> 
      <View style = {style.placeholder}>
        <Text style = {{fontSize: 20}}>Digite o nome da escola</Text>
 
        <GooglePlacesAutocomplete
        placeholder='Nome da escola'
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "pt-BR"
        }}
        />     
        
       
      </View>

      <View style = {style.placeholder2}>
        <Text style = {{fontSize: 20}}>Digite o endereço da criança</Text>
        <GooglePlacesAutocomplete
        placeholder='Endereço da criança'
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "pt-BR"
        }}
        />  
      </View>

    </SafeAreaView>
  );
}

const style = StyleSheet.create({
 container: {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center'
 },
  placeholder: {
    position: 'relative',
    top: 200,
    width: 360,
    marginBottom: 34
    
  },
  placeholder2: {
    position: 'relative',
    top: 245,
    width: 360

  }
})