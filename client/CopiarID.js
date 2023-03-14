import React, {useState} from 'react';
import { SafeAreaView, View,Text,TouchableOpacity,Image, ToastAndroid} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {css} from './assets/Css';

export default function CopiarID({navigation}){
    const id = 12345;

    const copyToClipboard = () =>{
      Clipboard.setString("ID123");
        alert("Copiado para área de transferência")
    };

    return(
      <SafeAreaView style={css.container} >
        <Image style={{margin:20}} source={require('./assets/carteira-de-identidade.png')} />

      <View style={css.boxid}>
        <Text style={css.txt_instrucao}>Bem Vindo/a ao C.A.P!
            Esse é o seu código do aplicativo, onde voce poderá encaminhar aos responsáveis. Este será o meio de comunicaçao entre voces. 
        </Text>

        <TouchableOpacity onPress={() => copyToClipboard()}>
          <Text style={css.copy}>{id}</Text>
        </TouchableOpacity>
      </View>
        
        <TouchableOpacity style={css.btn_v1}
                onPress={() => navigation.navigate('CadastrarCrianca')}>
                  <Text style={css.txt}>Continuar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
};