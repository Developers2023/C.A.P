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


 <NavigationContainer>
  <Tab.Navigator 
      initialRouteName='Maps'
      activeColor="#fff"
      shifting={true}
      screenOptions = {{
      tabBarShowLabel: false, 
      tabBarStyle: {backgroundColor: '#87ceeb', height: 60},
     }}
      >
     
     <Tab.Screen 
     name="Mapa" 
     component={Maps} 
     options={{
      tabBarActiveTintColor: "#fff",
      tabBarIcon:()=>(
    <MaterialCommunityIcons 
    name="google-maps" 
    color="#fff"
    size={36}/>
      )
     }}/>

     <Tab.Screen 
     name="Atividades" 
     component={Atividades}
      options={{
        tabBarActiveTintColor: "#fff",
        tabBarLabel: "atividades",
        tabBarIcon:()=>(
      <MaterialCommunityIcons 
      name="message-alert" 
      color="#fff" 
      size={32}/>
        )
       }}/>

     <Tab.Screen 
     name="Perfil"
     component={Perfil} 
      options={{
        tabBarActiveTintColor: "#fff",
        tabBarIcon:()=>(
      <MaterialCommunityIcons
      name="face-man-profile"
      color="#fff" 
      size={34}/>
        )
       }}/>
  </Tab.Navigator>
</NavigationContainer> 
     )
};


//reate a simple nodejs express server

// creat a simple nodejs express server







