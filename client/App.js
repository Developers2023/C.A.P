import React from 'react' 
import {SafeAreaView} from 'react-native'
import Entrada from './src/components/Entrada'
import Login from './src/components/Login'
import ListaCrianca from './src/components/ListaCrianca'

export default props => {

     return (
<SafeAreaView>
  
  <ListaCrianca/>
  
  {/*
  <Login/>
  <Entrada />
  */}
</SafeAreaView>
     )
}