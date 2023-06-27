import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import { css } from '../componentes/Css';

export default function Atividades({navigation}){
    return (
        <SafeAreaView>

        <TouchableOpacity style = {css.button} onPress={() => navigation.navigate('CadastrarCrianca')}>
        <Text style = {css.text}>Cadastrar crianças</Text>
        <Image source={require('../assets/imagens/crianças.png')} style={css.buttonImageIconStyle}/> 
          </TouchableOpacity>  

         <TouchableOpacity style = {css.button} onPress={() => navigation.navigate('ListaCrianca')}>
        <Text style = {css.text}>Lista das crianças</Text>
        <Image source={require('../assets/imagens/crianças.png')} style={css.buttonImageIconStyle}/> 
          </TouchableOpacity>  

          <TouchableOpacity style = {css.button} onPress={() => navigation.navigate('EnviarAlertasRes')}>
        <Text style = {css.text}>Enviar Alertas</Text>
        <Image source={require('../assets/imagens/alertas.png')} style={css.buttonImageIconStyle}/> 
          </TouchableOpacity>  

          <TouchableOpacity style = {css.button} onPress={() => navigation.navigate('ConfirmarEntregaEmCasa')}>
        <Text style = {css.text}>Confirmar entrega em casa</Text>
        <Image source={require('../assets/imagens/casa.png')} style={css.buttonImageIconStyle}/> 
          </TouchableOpacity> 

          <TouchableOpacity style = {css.button} onPress={() => navigation.navigate('Mensagens recebidas')}>
        <Text style = {css.text}>Mensagens recebidas</Text>
        <Image source={require('../assets/imagens/batepapo.png')} style={css.buttonImageIconStyle}/> 
          </TouchableOpacity>
          
          <TouchableOpacity style = {css.button} onPress={() => navigation.navigate('Mensagens recebidas')}>
        <Text style = {css.text}>Dados do perueiro</Text>
        <Image source={require('../assets/imagens/condutor(1).png')} style={css.buttonImageIconStyle}/> 
          </TouchableOpacity>
        


          </SafeAreaView> 
    );
}