import React from 'react' 
import {Text, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import Css from './Css'
export default ({navigation}) => {

     return (
<SafeAreaView style = {Css.Container}>
   <>
      <Image source={require("./images/Logo.png")} stylee={Css.Logo}/>  
      <Text style = {Css.cap}>C.A.P - CADÊ A PERUA</Text>
   </>
        
        <TouchableOpacity style = {Css.btnEntrada} onPress={() => navigation.navigate('Maps')}>
            <Text style = {Css.txtBtnEntrada} >
                LOGIN
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {Css.btnEntrada} onPress={() => navigation.navigate('Cadastro')}>
            <Text style = {Css.txtBtnEntrada} >
                CADASTRO
            </Text>
        </TouchableOpacity>
   
</SafeAreaView>
     )
}