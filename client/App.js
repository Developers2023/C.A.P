import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Maps from './src/components/Maps';
import Atividades from './src/components/Atividades'
import Perfil from './src/components/Perfil'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';


const Tab = createBottomTabNavigator();

export default () => {

     return (         
<View>

      <Maps/>


{/*
 <NavigationContainer>
  <Tab.Navigator 
      initialRouteName='Maps'
      activeColor="#fff"
      shifting={true}
      screenOptions = {{
      tabBarStyle: {backgroundColor: '#87ceeb'},
     }}
      >
     
     <Tab.Screen 
     name="Mapa" 
     component={Maps} 
     options={{
      tabBarIcon:(color)=>(
    <MaterialCommunityIcons 
    name="google-maps" 
    color={color}
    size={26}/>
      )
     }}/>

     <Tab.Screen 
     name="Atividades" 
     component={Atividades}
      options={{
        tabBarLabel: "atividades",
        tabBarIcon:({linkpark})=>(
      <MaterialCommunityIcons 
      name="message-alert" 
      color={linkpark} 
      size={26}/>
        )
       }}/>

     <Tab.Screen 
     name="Perfil"
     component={Perfil} 
      options={{
        tabBarIcon:({linkpark})=>(
      <MaterialCommunityIcons
      name="face-man-profile"
      color={linkpark} 
      size={26}/>
        )
       }}/>
  </Tab.Navigator>
</NavigationContainer> */}
</View>

     );
}
//reate a simple nodejs express server

// creat a simple nodejs express server







