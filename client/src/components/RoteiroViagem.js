import { View, Button, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';
import React, { useState } from 'react';

  
  export default () => {

    const [markerPosition, setMarkerPosition] = useState(null);
  const [mapRef, setMapRef] = useState(null);

  const handlePlaceSelected = (data, details) => {
    const { lat, lng } = details.geometry.location;
    const coordinate = { latitude: lat, longitude: lng };
    setMarkerPosition(coordinate);

    if (mapRef) {
      mapRef.animateToRegion({
        latitude: lat,
        longitude: lng,
        latitude: 0,
          longitude: 0,
      });
    }
  };
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


    <View style = {style.placeholder3}>
        <Text style = {{fontSize: 20}}>Adicionar Rota</Text>
        <GooglePlacesAutocomplete
        placeholder='Endereço da criança'
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "pt-BR"
        }}
        />  
    </View>

    <View style={style.container2}>
      <MapView
        ref={(ref) => setMapRef(ref)}
        style={style.map}
        initialRegion={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.005,
          longitudeDelta:0.005
        }}
      >
        {markerPosition && <Marker coordinate={markerPosition} />}
      </MapView>
      <View style={style.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Pesquisar local"
          onPress={handlePlaceSelected}
          query={{
            key: 'GOOGLE_MAPS_APIKEY',
            language: 'pt-BR',
          }}
          styles={{
            textInputContainer2: style.textInputContainer2,
            textInput: style.textInput,
          }}
        />
      </View>
    </View>
  );
};
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
    top: 210,
    width: 360,
    marginBottom: 34
    
  },
  placeholder2: {
    position: 'relative',
    top: 240,
    width: 360

  },
  placeholder3: {
    position: 'relative',
    top: 300,
    width: 360
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
})
