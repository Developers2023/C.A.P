import React from 'react' 
import {SafeAreaView} from 'react-native'
import Entrada from './src/components/Entrada'
import Login from './src/components/Login'
import ListaCrianca from './src/components/ListaCrianca'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaInicial from './TelaInicial';
import Login from './Login';
import Cadastro from './Cadastro';
import CadastrarCrianca from './CadastrarCrianca';
import DadosVeiculo from './DadosVeiculo';
import DadosPessoais from './DadosPessoais';
import CopiarID from './CopiarID';

const Stack = createNativeStackNavigator();

export default props => {

     return (
<SafeAreaView>  
  
   <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown:false}}>
           <Stack.Screen name="Telainicial" component={TelaInicial} />
           <Stack.Screen name="Cadastro" component={Cadastro}/>
           <Stack.Screen name="Login" component={Login}/>
           <Stack.Screen name="CadastrarCrianca" component={CadastrarCrianca}/>
           <Stack.Screen name="DadosVeiculo" component={DadosVeiculo}/>
           <Stack.Screen name="DadosPessoais" component={DadosPessoais}/>
           <Stack.Screen name="CopiarID" component={CopiarID}/>
         </Stack.Navigator>
       </NavigationContainer>
  {/*
  <ListaCrianca/>
  <Login/>
  <Entrada />
  */}
</SafeAreaView>
     )
}
