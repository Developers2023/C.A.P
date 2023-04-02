import * as React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, StyleSheet, Button, PermissionsAndroid } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { LogBox } from 'react-native';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service'


const busImage = require('./images/bus-gps7.png')

export default () => {

     const [local, setlocal] = React.useState([])

     const [origin, setOrigin] = React.useState({
          latitude: -23.469749,
          longitude: -46.709606,
     });

     const [destino, setDestino] = React.useState(
          {
               latitude: -23.465796,
               longitude: -46.714701
          }
     );

     React.useEffect(() => {
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
     }, []);

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
       onPress={() => {}}
       provider={PROVIDER_GOOGLE}
       style={styles.map}
       initialRegion = {{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.0004
       }}
     >

          <Marker
          draggable = {true}
          coordinate = {origin}
          image = {busImage}
          onDragEnd={(diretion) => setOrigin(diretion.nativeEvent.coordinate)}
          />

           <Marker
          coordinate={destino}
          />

          <MapViewDirections
          origin={origin}
          destination = {destino}
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