import React,{useState} from 'react';
import { View,Text, KeyboardAvoidingView,TextInput,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Css from './Css';
import DropDownPicker from 'react-native-dropdown-picker';

export default function CadastrarCrianca({navigation}){
  const [open,setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items,setItems] = useState([
    {label: 'Manhã', value: 'manha'},
    {label: 'Tarde', value: 'tarde'},
    {label: 'Integral', value: 'integral'}
  ]);

    return(
      <SafeAreaView style={{flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:50}}>
        <KeyboardAvoidingView style={{zIndex:1, marginHorizontal:50}}>
        <TextInput 
          style={[Css.inputs,Css.inputs_all]}
          placeholder='Nome:' placeholderTextColor={'#282B29'}
          inputMode='text'/>

        <TextInput 
          style={[Css.inputs,Css.inputs_all]}
          placeholder='Escola:' placeholderTextColor={'#282B29'}
          inputMode='text'/>

        <TextInput 
          style={[Css.inputs,Css.inputs_all]}
          placeholder='Cidade:' placeholderTextColor={'#282B29'}
          inputMode='text'/>

            <View  style={{ 
              zIndex:2,
              width:158,
              height:50,
              marginBottom:20,
              marginLeft:7
      
              }}>
                <DropDownPicker  
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={{backgroundColor:'#87ceeb',fontWeight:'bold'}}
                    translation={{  PLACEHOLDER:'Turno'}}
                    placeholderStyle={{fontWeight:'bold'}}
                    closeAfterSelecting={true}
                    selectedItemLabelStyle={{
                    fontWeight: "bold",
                    color:'#FFBC16'               
                  }}
              
                        /> 
                    </View>

            <TextInput 
              style={[Css.inputs,Css.input_time]}
              placeholder='Horário:' placeholderTextColor={'#282B29'}
              inputMode='text'/>
    
      </KeyboardAvoidingView>

      <Text>*Dados Obrigatórios</Text>
          
          <TouchableOpacity style={Css.btn_v1}
              onPress={() => navigation.navigate('DadosPessoais')}>
                <Text style={Css.txt}>Salvar</Text>
          </TouchableOpacity>

</SafeAreaView>
 
    );
};