import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Maps from './src/components/Maps';
import Atividades from './src/components/Atividades'
import Perfil from './src/components/Perfil'
import DadosVeiculo from './src/components/DadosVeiculo';
import DadosPessoais from './src/components/DadosPessoais';
import ConfirmarEntrega_Escola from './src/components/ConfirmarEntrega_Escola';
import ConfirmarEntrega_Casa from './src/components/ConfirmarEntrega_Casa'
import RoteiroViagem from './src/components/RoteiroViagem';
import EnviarAlertas from './src/components/EnviarAlertas';
import Cadastro from './src/components/Cadastro1'
import CadastrarCrianca from './src/components/CadastrarCrianca'
import MensagensRecebidas from './src/components/MensagensRecebidas';
import Endereco from './src/components/Endereco'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Upload from './src/components/Upload';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabn = () => {
  return (
    <Tab.Navigator
      initialRouteName='Maps'
      activeColor="#fff"
      shifting={true}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#87ceeb', height: 60 },
      }}
    >

      <Tab.Screen
        name="Mapa"
        component={Maps}
        options={{
          tabBarActiveTintColor: "#fff",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="map-marker-radius"
              color="#fff"
              size={36} />
          )
        }} />

      <Tab.Screen
        name="Atividades"
        component={Atividades}
        options={{
          tabBarActiveTintColor: "#fff",
          tabBarLabel: "atividades",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="content-paste"
              color="#fff"
              size={32} />
          )
        }} />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarActiveTintColor: "#fff",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account-circle"
              color="#fff"
              size={34} />
          )
        }} />
    </Tab.Navigator>
  )
}

export default () => {

  return (
    <NavigationContainer>

      <Stack.Navigator>  
        <Stack.Screen name='Lista de criancas' component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name='Tab' component={Tabn} options={{ headerShown: false }} />
        <Stack.Screen name='Dados Pessoais' component={DadosPessoais} />
        <Stack.Screen name='Roteiro' component={RoteiroViagem} />   
        <Stack.Screen name='Endereco' component={Endereco} options={{ headerShown: false }} />  
        <Stack.Screen name='Lista de criancas' component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name='Tab' component={Tabn} options={{ headerShown: false }} />
        <Stack.Screen name='Dados Pessoais' component={DadosPessoais} />
        <Stack.Screen name='Roteiro' component={RoteiroViagem} />
        <Stack.Screen name='CadastrarCrianca' component={CadastrarCrianca} />
        <Stack.Screen name='Endereco' component={Endereco} options={{ headerShown: false }} />
        <Stack.Screen name='Dados do veiculo' component={DadosVeiculo} />
        <Stack.Screen name='Enviar alertas' component={EnviarAlertas} />
        <Stack.Screen name='Confirmar entrega em casa' component={ConfirmarEntrega_Casa} />
        <Stack.Screen name='Mensagens Recebidas' component={MensagensRecebidas} />
        <Stack.Screen name='Upload' component={Upload} /> 
        <Stack.Screen name='Upload' component={Upload} />
      </Stack.Navigator>

    </NavigationContainer>


  )
};



//reate a simple nodejs express server

// creat a simple nodejs express server







