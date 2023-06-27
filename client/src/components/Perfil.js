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
          <TouchableOpacity style = {Css.button} onPress={() => Linking.openURL('https://drive.google.com/file/d/11DAqqCt_cQHY6SBZWAAFYC1Jd8zslVbT/view?usp=sharing')}>
        <Text style = {Css.texet}>Manual</Text>
        <Image source={require('../components/images/manual.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity>  

          <TouchableOpacity style = {Css.button} onPress={() => Navigation.navigate('Dados do veiculo')}>
        <Text style = {Css.texet}>Dados do veiculo</Text>
        <Image source={require('../components/images/bus.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity>  

          <TouchableOpacity style = {Css.button} onPress={() => Navigation.navigate('Dados Pessoais')}>
        <Text style = {Css.texet}>Dados Pessoais</Text>
        <Image source={require('../components/images/utilizador.png')} style={Css.buttonImageIconStyle}/> 
          </TouchableOpacity> 
          
        </SafeAreaView>
    );
}

    
    
    
     


