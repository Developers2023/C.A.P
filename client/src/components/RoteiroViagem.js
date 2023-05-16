import * as React from 'react';
import { View, Button, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



export default () => {
  const navigation = useNavigation();

  const [escola, setEscola] = React.useState({
    latitute: 0,
    longitude: 0,
    endereco: '',
    name: ''
  });


  const textInput1 = React.useRef(0);

  return(
    <SafeAreaView style ={style.container}> 
      <View style = {style.placeholder}>
        <Text style = {{fontSize: 20}}>Digite o nome da escola</Text>
 
        <GooglePlacesAutocomplete
        placeholder='Nome da escola'
        nearbyPlacesAPI='GooglePlacesSearch'
        listViewDisplayed = "auto"
        debounce={400}
        minLength={2}
        enablePoweredByContainer = {false}
        autoFocus =  {true}
        fetchDetails = {true}
        ref={textInput1}
      
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "pt-BR"
        }}
        
        onPress={(data, details = null) => {
          setEscola({
            latitute: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            endereco: details.formatted_address,
            name: details.name
          })
          console.log(details)
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