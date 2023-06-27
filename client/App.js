import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Maps from './src/components/Maps';
import Atividades from './src/components/Atividades'
import Perfil from './src/components/Perfil'
import DadosVeiculo from './src/components/DadosVeiculo';
import DadosPessoais from './src/components/DadosPessoais';
import ConfirmarEntrega_Escola from './src/components/ConfirmarEntrega_Escola';
import ConfirmarEntrega_Casa from './src/components/ConfirmarEntrega_Casa'
import EnviarAlertas from './src/components/EnviarAlertas';
import CadastroMo from './src/components/CadastroMo';
import CadastroRes from './src/components/CadastroRe'
import CadastrarCrianca from './src/components/CadastrarCrianca'
import MensagensRecebidas from './src/components/MensagensRecebidas';
import Login from './src/components/Login'
import TelaInicial from './src/components/Entrada'
import CopiarID from './src/components/CopiarID';
import ListaCrianca from './src/components/ListaCrianca'
import Autentificacao from './src/components/autenticacao';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
<<<<<<< HEAD
=======

>>>>>>> 681a6d478b9fd4795968dca999e4a2c5b2d3b958


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
<<<<<<< HEAD
      
      <Stack.Screen name='Tab' component={Tabn} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login}/>

        <Stack.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false }} />

        {/*NAO ACESSO */}
        <Stack.Screen name='TelaInicial' component={TelaInicial} options={{ headerShown: false }} />




        {/*COM  ACESSO */}

        <Stack.Screen name='Dados Pessoais' component={DadosPessoais} /> 
        <Stack.Screen name='CopiarCod' component={CopiarID} />
        <Stack.Screen name='Lista de criancas' component={ListaCrianca} />
        <Stack.Screen name='Dados do Veiculo' component={DadosVeiculo} />
        <Stack.Screen name='CadastrarCrianca' component={CadastrarCrianca} />
        <Stack.Screen name='Dados do veiculo' component={DadosVeiculo} />
        <Stack.Screen name='Enviar Alertas' component={EnviarAlertas} />
=======

        <Stack.Screen name='Mapa' component={Maps} />
        <Stack.Screen name='CadastroMo' component={CadastroMo} options={{headerShown: false}} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Entrada' component={Autentificacao} options={{headerShown: false}} />
        <Stack.Screen name='TelaInicial' component={TelaInicial} options={{ headerShown: false }} />    
        {/* <Stack.Screen name='CadastroRe' component={CadastroRes} options={{headerShown: false}} /> */}
        {/* <Stack.Screen name='Entrada' component={Autentificacao} options={{headerShown: false}} /> */}
        <Stack.Screen name='EnviarAlertas' component={EnviarAlertas} />
        <Stack.Screen name='Dados Pessoais' component={DadosPessoais} />
        <Stack.Screen name='Tab' component={Tabn} options={{ headerShown: false }} />

        {/*NAO ACESSO */}


        {/*COM  ACESSO */}
       
        <Stack.Screen name='CopiarCod' component={CopiarID} />
        <Stack.Screen name='Lista de criancas' component={ListaCrianca} />
        <Stack.Screen name='CadastrarCrianca' component={CadastrarCrianca} />
        <Stack.Screen name='Dados do veiculo' component={DadosVeiculo} />
>>>>>>> 681a6d478b9fd4795968dca999e4a2c5b2d3b958
        <Stack.Screen name='Confirmar entrega em casa' component={ConfirmarEntrega_Casa} />
        <Stack.Screen name='Confirmar entrega na escola' component={ConfirmarEntrega_Escola} />
        <Stack.Screen name='Mensagens Recebidas' component={MensagensRecebidas} />
<<<<<<< HEAD
=======

>>>>>>> 681a6d478b9fd4795968dca999e4a2c5b2d3b958
      </Stack.Navigator>

    </NavigationContainer>


  )
};



//reate a simple nodejs express server

// creat a simple nodejs express server







