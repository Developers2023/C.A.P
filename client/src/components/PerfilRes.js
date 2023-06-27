import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Button, Image, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Css from './Css';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DadosVeiculo from './DadosVeiculo'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


export default () => {

    const Navigation = useNavigation();

    return(
        
        <SafeAreaView>
          <TouchableOpacity style = {Css.button} onPress={() => Linking.openURL('https://drive.google.com/file/d/1YMXQRUjjOJGJZ1nHiiBRSz7nSXuAGmy6/view?usp=sharing')}>
        <Text style = {Css.text}>Manual</Text>
        <Image source={require('../components/images/manual.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity>   

          <TouchableOpacity style = {Css.button} onPress={() => Navigation.navigate('CadastrarCrianca')}>
        <Text style = {Css.text}>Dados Pessoais</Text>
        <Image source={require('../components/images/utilizador.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity> 
          
        </SafeAreaView>
    );
}

    
    
    
     


