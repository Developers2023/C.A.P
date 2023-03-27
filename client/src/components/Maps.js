import React from 'react'
import {Text, SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
export default ({navigation})=> {

  const Tab = createBottomTabNavigator();
     return (

     <SafeAreaView>
      <Text>Mapa</Text>
     </SafeAreaView>
    
     
     )
}