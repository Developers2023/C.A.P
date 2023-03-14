import * as React from 'react';
import { SafeAreaView,Text, TouchableOpacity,Image, View} from 'react-native';
import {css} from './assets/Css';
import Login from './Login';
import Cadastro from '../CAP_CadePirua/Cadastro';




export default function TelaInicial({navigation}){
    return(
        <SafeAreaView style={css.container}> 
          <View style={{marginBottom:100}}>
            <Image source={require('./assets/bus.png')} style={css.img}/>
          <Text style={css.title} >C.A.P - CADÊ A PERUA?</Text>
          </View>
        <TouchableOpacity style={css.btn_v1}
          onPress={() => navigation.navigate('Login')}>
            <Text style={css.txt}>Login</Text>
          </TouchableOpacity>
    
        <TouchableOpacity style={css.btn_v1}
        onPress={() => navigation.navigate('Cadastro')}>
          <Text style={css.txt}>Cadastro</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
}