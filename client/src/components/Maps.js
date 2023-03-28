import React from 'react'
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
<<<<<<< HEAD
import ListaCrianca from './ListaCrianca'
import Atividades from './Atividades'
import Perfil from './Perfil'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DadosPessoais from './DadosPessoais'

const Tab = createBottomTabNavigator();

export default ()=> {
=======
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
export default ({navigation})=> {
>>>>>>> 251de8f2f685d0d17fad5ed565ac5dbd3ed5b806

  const Tab = createBottomTabNavigator();
     return (

<<<<<<< HEAD
  <View>
        
     <ListaCrianca/>

     <View>
 

</View>
  </View>

  
  

      
=======
     <SafeAreaView>
      <Text>Mapa</Text>
     </SafeAreaView>
    
     
>>>>>>> 251de8f2f685d0d17fad5ed565ac5dbd3ed5b806
     )
}