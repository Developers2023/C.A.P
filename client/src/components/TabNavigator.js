import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListaCrianca from './ListaCrianca'
import Atividades from './Atividades'
import Perfil from './Perfil'
import Maps from './Maps'

const Tab = createBottomTabNavigator();

export default ()=> {

     return (

      <Tab.Navigator>
        <Tab.Screen name="Maps" component={Maps}/>
        <Tab.Screen name="Atividades" component={Atividades} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>

     
     )
}