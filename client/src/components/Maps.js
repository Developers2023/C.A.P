import * as React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, LocalTile } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, StyleSheet, Button, PermissionsAndroid } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { LogBox } from 'react-native';
import Geolocation from 'react-native-geolocation-service'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const busImage = require('./images/bus-gps7.png')

LogBox.ignoreAllLogs();

export default () => {

     const [origin, setOrigin] = React.useState({
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.005,
          longitudeDelta:0.005
     });
 

     const [destino, setDestino] = React.useState({
               latitude: -23.4447883,
               longitude: -46.7188449,
               latitudeDelta: 0.000922,
               lagitudeDelta: 0.000421
          });


     const [latitudeAtual, setLatitudeAtual] = React.useState(0);

     const [longitudeAtual, setLongitudeAtual] = React.useState(0); 

    /*   React.useEffect(() => {
          (async () => {
            await PermissionsAndroid.request(
              "android.permission.ACCESS_FINE_LOCATION",
            );
            Geolocation.getCurrentPosition(
              (position) => {
                setlocal([position.coords]);
              },
              (error) => {
                console.log(error.code, error.message);
              },
            );
          })();
        }, []);  */




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
          requestLocationPermission();
       },[])
        
       

     let listener = null;

     const comecarTracking = () => {
          listener = Geolocation.watchPosition(
               (position) => {
                    console.log(position)
               },
               (error) => {
                    console.log(error.code, error.message);
               },
               {interval: 1000, distanceFilter: 0, fastestInterval: 0},
          );
     };

     const pararTracking = () => {
          Geolocation.clearWatch(listener);
          }

/* 
     const perguntarPorPermissao = (permission) =>{
          request(permission).then((result) => {
               console.log(result);
             });
     } */
    
     return (    
     <View style={styles.container}>
      
   
    
 
      
     <MapView
     

    
 
       provider={PROVIDER_GOOGLE}
       region={origin}
       style={styles.map}
       showsUserLocation = {true}
       followsUserLocation = {true}
       rotateEnabled = {true}
       zoomEnabled = {true}
       
       
       
     >

          <Marker
          coordinate={origin}
          />

          <Marker
          coordinate={destino}
          />

          

         
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
     <GooglePlacesAutocomplete
        placeholder="Para onde vamos"
        onPress={(data, details = null) => {
           console.log(data, details);
          }}
          query={{
            apikey: 'GOOGLE_MAPS_APIKEY',
            lenguage: 'pt-br,'
          
        }}
        enablePoweredByContainer={false}
        fetchDetails={true}
        styles={{listView:{height:100}}}
      
       
      />
      
    </View>
  );
};
     


const styles = StyleSheet.create({
     container: {
       justifyContent: 'flex-end',
       alignItems: 'center',
     },
     map: {
       width: '100%',
       height: '100%'
     },
    });