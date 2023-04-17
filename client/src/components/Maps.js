import * as React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, StyleSheet, PermissionsAndroid, TouchableOpacity, Text} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { LogBox } from 'react-native';
import Geolocation from 'react-native-geolocation-service'
import Geocoder from 'react-native-geocoding';

LogBox.ignoreAllLogs();

export default () => {

     const [origin, setOrigin] = React.useState({
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.005,
          longitudeDelta:0.005
     }); //Origem do motorista
 
     const [destino, setDestino] = React.useState({
               latitude: 0,
               longitude: 0,
               latitudeDelta: 0.000922,
               lagitudeDelta: 0.000421
          }); //Destino: para onde o motorista vai

     const [latitudeAtual, setLatitudeAtual] = React.useState(0); 
     const [longitudeAtual, setLongitudeAtual] = React.useState(0); 
     const [locationStr, setLocationStr] = React.useState({
        NomeLocal: 'N Shoreline Blvd'
     }); //Nome da rua 
        const requestLocationPermission = async () => {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Permissão de Acesso à Localização",
              message: "Este aplicativo precisa acessar sua localização.",
              buttonNeutral: "Pergunte-me depois",
              buttonNegative: "Cancelar",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getLocation();
          } else {
            alert('Permissão de Localização negada');
          }
        };

        const getLocation = () => {
          Geolocation.getCurrentPosition(position => {
               const currentLatitude = (position.coords.latitude);
               const currentLongitude = (position.coords.longitude);
               setLatitudeAtual(currentLatitude)
               setLongitudeAtual(currentLongitude)

               setOrigin ({
                latitude: currentLatitude,
                longitude: currentLongitude,
                latitudeDelta: 0.005,
                longitudeDelta:0.005
               });
               
               console.log(currentLatitude, currentLongitude)
          },
          (error) => alert(error.message),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}      
          );
          
        }
      
       React.useEffect(() => {
          requestLocationPermission(); //função que pega a localização atual do usuário
       },[])

    Geocoder.init(GOOGLE_MAPS_APIKEY, {language: "pt-BR"});

    Geocoder.from(locationStr.NomeLocal)
     .then(JSON => {
     
      let enderecoDest = JSON.results[0].geometry;
      const localLat = enderecoDest.location.lat;
      const localLong = enderecoDest.location.lng;

      console.log(localLat, localLong);

      setDestino({
        latitude: localLat,
        longitude: localLong
      })
     })
     .catch(error => console.warn(error)); // Função que pega o endereço e converte em latitude e longitude

     return (    
     <View>
       <MapView
       provider={PROVIDER_GOOGLE}
       region={origin}
       style={styles.map}
       showsUserLocation = {true}
       followsUserLocation = {true}
       rotateEnabled = {true}
       zoomEnabled = {true}           
     >
        {origin &&
        <Marker
          coordinate={origin}
          />
        }  
          {destino &&
          <Marker
          coordinate={destino}
          />
          }

    {destino &&
        <MapViewDirections
        origin = {origin}
        destination = {destino}
        apikey = {GOOGLE_MAPS_APIKEY}
        strokeColor = "#00f"
        strokeWidth={3}     
        />
     } 
     </MapView> 
    </View>
  );
};
     
const styles = StyleSheet.create({
  
     map: {
       width: '100%',
       height: '100%',
     },
     input: {
      borderColor: "#888",
      borderWidth: 1, 
     },

     buttonGo: {
      alignSelf: 'center',
      position: 'absolute',
      top: 50,
      backgroundColor: '#FFBC16',
      width: 160,
      height: 30,
      borderRadius: 30
     }
     
    
    });


  

    