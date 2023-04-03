import * as React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, LocalTile } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, StyleSheet, Button, PermissionsAndroid } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { LogBox } from 'react-native';
import Geolocation from 'react-native-geolocation-service'

const busImage = require('./images/bus-gps7.png')

LogBox.ignoreAllLogs();

export default () => {

     const [origin, setOrigin] = React.useState({
          latitude: latitudeAtual,
          longitude: longitudeAtual,
          latitudeDelta: 0.09,
          longitudeDelta:0.04
     });

     const [destino, setDestino] = React.useState({
               latitude: 37.416896,
               longitude: -122.078016,
          });

     const [latitudeAtual, setLatitudeAtual] = React.useState('');

     const [longitudeAtual, setLongitudeAtual] = React.useState(''); 

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
               const currentLatitude = JSON.stringify(position.coords.latitude);
               const currentLongitude = JSON.stringify(position.coords.longitude);
               setLatitudeAtual(currentLatitude)
               setLongitudeAtual(currentLongitude)
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

         

          <MapViewDirections
          
          apikey = {GOOGLE_MAPS_APIKEY}
          strokeColor = "#007fff"
          strokeWidth={5}
          />
         
     </MapView>
     <Button title='Começar' onPress={comecarTracking}/>
     <Button title='Parar' onPress={pararTracking}/>
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