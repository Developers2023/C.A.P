import React from 'react'
import {Text, SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListaCrianca from './ListaCrianca'
import
const Tab = createBottomTabNavigator();

export default ({navigation})=> {

     return (
     <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lista de crianças" component={ListaCrianca} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
     
     )
}