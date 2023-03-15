import React, {useState} from 'react';
import { SafeAreaView, View,Text,TouchableOpacity,Image, ToastAndroid} from 'react-native';
import Css from './components/Css';

export default function CopiarID({navigation}){
 

    return(
      <SafeAreaView style={Css.container_principal} >
        <Image style={{margin:20}} source={require('./components/images/Codigo.png')} />

      <View style={Css.boxid}>
        <Text style={Css.txt_instrucao}>Bem Vindo/a ao C.A.P!
            Esse é o seu código do aplicativo, onde voce poderá encaminhar aos responsáveis. Este será o meio de comunicaçao entre voces. 
        </Text>

        <TouchableOpacity>
          <Text style={Css.copy}>12345</Text>
        </TouchableOpacity>
      </View>
        
        <TouchableOpacity style={Css.btn_v1}
                onPress={() => navigation.navigate('CadastrarCrianca')}>
                  <Text style={Css.txt}>Continuar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
};