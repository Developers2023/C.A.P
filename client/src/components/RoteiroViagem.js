import * as React from 'react';
import { View, Button, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker, Polyline } from 'react-native-maps';




export default () => {
  
  const navigation = useNavigation();

  const MapScreen = () => {
    const [routes, setRoutes] = useState([]);
  
    const handleAddRoute = (route) => {
      setRoutes([...routes, route]);
    };
  
    const handleDeleteRoute = (index) => {
      const updatedRoutes = [...routes];
      updatedRoutes.splice(index, 1);
      setRoutes(updatedRoutes);
    };
}
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
      <View key={GOOGLE_MAPS_APIKEY} style={{ marginBottom: 5 }}>
            <Text>{`Rota ${GOOGLE_MAPS_APIKEY + 1}`}</Text>
            <Button
              title="Excluir Rota"
              onPress={() => handleAddRoute(GOOGLE_MAPS_APIKEY)}
            />   
        
       
      </View>

      <View style = {style.placeholder2}>
        <Text style = {{fontSize: 20}}>Digite o endereço da criança</Text>
        <GooglePlacesAutocomplete
        onPress={(data, details = null) => {
            const route = {
              lat: details.geometry.location.lat,
              lng: details.geometry.location.lng,
            };
            handleAddRoute(route);
          }}
          onNotFound={() => {
            console.log('Nenhum endereço encontrado');
          }}
          minLength={2}
          fetchDetails={true}
          query={{
            key: 'GOOGLE_MAPS_APIKEY',
            language: 'pt-BR',
          }}
        
        />   
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -23.5505,
          longitude: -46.6333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {routes.map((route, GOOGLE_MAPS_APIKEY) => (
          <Marker
            key={GOOGLE_MAPS_APIKEY}
            coordinate={{ latitude: route.lat, longitude: route.lng }}
            title={`adicionar ${GOOGLE_MAPS_APIKEY + 1}`}
          />
        ))}
        {routes.length > 1 && (
          <Polyline
            coordinates={routes.map((route) => ({
              latitude: route.lat,
              longitude: route.lng,
            }))}
            strokeColor='#000'
            strokeWidth={2}
          />
        )}
      </MapView>
      {routes.length > 0 && (
        <Button
          title="Limpar Rotas"
          onPress={() => setRoutes([])}
        />
      )}
    
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