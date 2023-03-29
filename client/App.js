import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Maps from './src/components/Maps';
import Atividades from './src/components/Atividades'
import Perfil from './src/components/Perfil'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();

export default props => {

     return (         

<NavigationContainer>
  <Tab.Navigator 
      initialRouteName='Maps'
      barStyle={{backgroundColor:'#87ceeb' }}
      activeColor="#fff"
      shifting={true}>
     
     <Tab.Screen name="Maps" component={Maps} 
     options={{
      tabBarIcon:()=>(
    <MaterialCommunityIcons name="google-maps" color={'#000'} size={26}/>
      )
     }}/>
     <Tab.Screen name="Atividades" component={Atividades}
      options={{
        tabBarIcon:({linkpark})=>(
      <MaterialCommunityIcons name="message-alert" color={linkpark} size={26}/>
        )
       }} />
     <Tab.Screen name="Perfil" component={Perfil} 
      options={{
        tabBarIcon:({linkpark})=>(
      <MaterialCommunityIcons name="face-man-profile" color={linkpark} size={26}/>
        )
       }}/>
  </Tab.Navigator>
</NavigationContainer>
     );
}
//reate a simple nodejs express server

// creat a simple nodejs express server







