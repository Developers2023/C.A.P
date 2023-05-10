import React, {useState} from 'react';
import { Text, SafeAreaView, Linking, TouchableOpacity, Image} from 'react-native';
import CheckBox from 'react-native-check-box';
import  Css  from './Css';


export default function EnviarAlertas(){
const[isChecked, setIsChecked]= useState({
  id1: false,
  id2: false,
  id3: false,
});

  return (
      <SafeAreaView>
        <CheckBox style = {Css.Check} isChecked={isChecked.id1} onClick={()=> setIsChecked({...isChecked, id1: !isChecked.id1})}
         rightText="Senhores pais e responsáveis, informo que hoje, pegarei as crianças com antecedencia uns 05min á 10min do horario combinado."
         checkBoxColor='#FFBC16'
         /> 
        <CheckBox style = {Css.Check} isChecked={isChecked.id2} onClick={()=> setIsChecked({...isChecked, id2: !isChecked.id2})}
         rightText="Senhores pais e responsáveis, tive problemas com o veiculo, hoje pegarei as crianças mais tarde."
         checkBoxColor='#FFBC16'
         /> 
        <CheckBox style = {Css.Check} isChecked={isChecked.id3} onClick={()=> setIsChecked({...isChecked, id3: !isChecked.id3})}
         rightText="Informo aos senhores pais e responsáveis que as crianças vão chegar na escola com atraso devido ao transito na estrada."
         checkBoxColor='#FFBC16'
         /> 
        <TouchableOpacity style = {Css.Check} onPress={() => Linking.openURL('https://wa.me/5511992402307?text=Digite+sua+mensagem+pro+tio%28a%29%3A+')}>
        <Text style = {Css.text1}>Mensagem Personalizada</Text>
        <Image source={require('../components/images/zap.png')} style={Css.buttonImageIconStyle}/> 
        </TouchableOpacity> 

        <TouchableOpacity style = {Css.Button1} onPress={() => Linking.openURL()}>
        <Image source={require('../components/images/enviar.png')} style={Css.buttonImage}/> 
        </TouchableOpacity> 


        </SafeAreaView> 
  );
};
