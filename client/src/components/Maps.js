import React from 'react'
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import ListaCrianca from './ListaCrianca'
import Atividades from './Atividades'
import Perfil from './Perfil'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DadosPessoais from './DadosPessoais'

const Tab = createBottomTabNavigator();

export default ()=> {

     return (

  <View>
        
     <ListaCrianca/>

     <View>
 

</View>
  </View>

  
  

      
     )
}