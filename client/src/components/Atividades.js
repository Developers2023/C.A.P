import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  Css  from './Css';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Atividades(){
  const navigation = useNavigation();
    return (
      
        <SafeAreaView>
         <TouchableOpacity style = {Css.button} onPress={() => navigation.navigate('Lista de criancas')}>
        <Text style = {Css.text}>Lista das crianças</Text>
        <Image source={require('../components/images/crianças.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity>  

          <TouchableOpacity style = {Css.button} onPress={() => navigation.navigate('Enviar alertas')}>
        <Text style = {Css.text}>Enviar Alertas</Text>
        <Image source={require('../components/images/alertas.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity>  

          <TouchableOpacity style = {Css.button} onPress={() => navigation.navigate('Confirmar entrega na escola')}>
        <Text style = {Css.text}>Confirmar entrega na escola</Text>
        <Image source={require('../components/images/escola.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity> 

          <TouchableOpacity style = {Css.button} onPress={() => navigation.navigate('Confirmar entrega em casa')}>
        <Text style = {Css.text}>Confirmar entrega em casa</Text>
        <Image source={require('../components/images/casa.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity> 

          <TouchableOpacity style = {Css.button} onPress={() => navigation.navigate('AlertasRec')}>
        <Text style = {Css.text}>Alertas recebidos</Text>
        <Image source={require('../components/images/batepapo.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity>
          
          <TouchableOpacity style = {Css.button} onPress={() => navigation.navigate('Roteiro')}>
        <Text style = {Css.text}>Roteiro</Text>
        <Image source={require('../components/images/medir-distancia.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity>  


          </SafeAreaView> 
    );
}