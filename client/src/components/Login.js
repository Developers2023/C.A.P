import React from 'react' 
import {Text, SafeAreaView, Image, TextInput, TouchableOpacity} from 'react-native'
import Css from './Css'
export default props => {

     return (
<SafeAreaView style = {Css.Container}>
     <>
      <Image source={require("./images/Logo.png")} stylee={Css.Logo}/>  
      <Text style = {Css.cap}>C.A.P - CADÊ A PERUA</Text>
     </>

     <TextInput
     placeholder='E-mail:'
     style = {Css.InputLogin}
     />

<TextInput
     placeholder='Senha:'
     style = {Css.InputLogin}
     />

<TouchableOpacity style = {Css.btnLogin}>
     <Text style = {Css.txtBtnLogin}>
          ACESSAR
     </Text>
</TouchableOpacity>

<TouchableOpacity style = {Css.btnLogin}>
     <Text style = {Css.txtBtnLogin}>
          VOLTAR
     </Text>
</TouchableOpacity>


</SafeAreaView>
     )
}

