import React from 'react' 
import {SafeAreaView} from 'react-native'
import Entrada from './src/components/Entrada'
import Login from './src/components/Login'
import ListaCrianca from './src/components/ListaCrianca'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cadastro from './src/components/Cadastro';
import CadastrarCrianca from './src/components/CadastrarCrianca';
import DadosVeiculo from './src/components/DadosVeiculo';
import DadosPessoais from './src/components/DadosPessoais';
import CopiarID from './src/components/CopiarID';
import Maps from './src/components/Maps';

const Stack = createNativeStackNavigator();

export default props => {

     return ( 
  
   <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Entrada" component={Entrada}/>
           <Stack.Screen name="Cadastro" component={Cadastro}/>
           <Stack.Screen name="Login" component={Login}/>
           <Stack.Screen name="Maps" component={Maps}/>
           <Stack.Screen name="CadastrarCrianca" component={CadastrarCrianca}/>
           <Stack.Screen name="DadosVeiculo" component={DadosVeiculo}/>
           <Stack.Screen name="DadosPessoais" component={DadosPessoais}/>
           <Stack.Screen name="CopiarID" component={CopiarID}/>
         </Stack.Navigator>
       </NavigationContainer>

     );
}
