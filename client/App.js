import React from 'react' 
import {SafeAreaView, View, Text} from 'react-native'
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
import Atividades from './src/components/Atividades'
import MensagensRecebidas from './src/components/MensagensRecebidas'
import EnviarAlertas from './src/components/EnviarAlertas'
import ConfirmarEntrega_Casa from './src/components/ConfirmarEntrega_Casa'
import ConfirmarEntrega_Escola from './src/components/ConfirmarEntrega_Escola'
import Informa from './src/components/informacao/Informa'
import Perfil from './src/components/Perfil'
<<<<<<< HEAD
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
=======
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
>>>>>>> 251de8f2f685d0d17fad5ed565ac5dbd3ed5b806

const Tab = createBottomTabNavigator();

export default props => {

     return (         
<View>
<Perfil/>

<<<<<<< HEAD
   <NavigationContainer>
    {/*      <Stack.Navigator screenOptions={{headerShown:false}}>
=======
{/*

<Informa/>
 <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown:false}}>
>>>>>>> 251de8f2f685d0d17fad5ed565ac5dbd3ed5b806
          <Stack.Screen name="Entrada" component={Entrada}/>
           <Stack.Screen name="Cadastro" component={Cadastro}/>
           <Stack.Screen name="Login" component={Login}/>
           <Stack.Screen name="Maps" component={Maps}/>
           <Stack.Screen name="CadastrarCrianca" component={CadastrarCrianca}/>
           <Stack.Screen name="DadosVeiculo" component={DadosVeiculo}/>
           <Stack.Screen name="DadosPessoais" component={DadosPessoais}/>
           <Stack.Screen name="CopiarID" component={CopiarID}/>
           <Stack.Screen name="Atividades" component={Atividades}/>
           <Stack.Screen name="MensagensRecebidas" component={MensagensRecebidas}/>
           <Stack.Screen name="InfoAlunos" component={InfoAlunos}/>
           <Stack.Screen name="EnviarAlertas" component={EnviarAlertas}/>
           <Stack.Screen name="Perfil" component={Perfil}/>
           <Stack.Screen name="ConfirmarEntrega_Casa" component={ConfirmarEntrega_Casa}/>
           <Stack.Screen name="ConfirmarEntrega_Escola" component={ConfirmarEntrega_Escola}/>
         </Stack.Navigator> */}
 <Tab.Navigator 
      initialRouteName='Maps'
      barStyle={{backgroundColor:'tomato'}}
      activeColor="tomato">
     <Tab.Screen name="Maps" component={Maps} />
     <Tab.Screen name="Atividades" component={Atividades} />
     <Tab.Screen name="Perfil" component={Perfil} />
   </Tab.Navigator>
       </NavigationContainer>
     */}
     </View>
     );
}
//reate a simple nodejs express server

// creat a simple nodejs express server







