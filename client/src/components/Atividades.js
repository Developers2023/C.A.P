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
        <Text style = {Css.texet}>Lista das crianças</Text>
        <Image source={require('../components/images/crianças.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity>  

          <TouchableOpacity style = {Css.button} onPress={() => navigation.navigate('Enviar Alertas')}>
        <Text style = {Css.texet}>Enviar Alertas</Text>
        <Image source={require('../components/images/alertas.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity>  

          <TouchableOpacity style = {Css.button} onPress={() => navigation.navigate('Confirmar entrega na escola')}>
        <Text style = {Css.texet}>Confirmar entrega na escola</Text>
        <Image source={require('../components/images/escola.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity> 

          <TouchableOpacity style = {Css.button} onPress={() => navigation.navigate('Confirmar entrega em casa')}>
        <Text style = {Css.texet}>Confirmar entrega em casa</Text>
        <Image source={require('../components/images/casa.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity> 

           <TouchableOpacity style = {Css.button} onPress={() => navigation.navigate('Mensagens Recebidas')}>
        <Text style = {Css.texet}>Mensagens recebidas</Text>
        <Image source={require('../components/images/batepapo.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity> 
          



          </SafeAreaView> 
    );
}