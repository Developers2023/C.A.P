import React, { useState } from 'react';
import { SafeAreaView,View,Text,TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Css from './Css';

export default function Dropdown_User() {
  const [userOpen, setUserOpen] = useState(false);
  const [userValue, setUserValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userItems, setUserItems] = useState([
    { label: 'Motorista', value: 'motorista' },
    { label: 'Responsável', value: 'responsavel' }
  ]);

  return (
    <SafeAreaView style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50
    }}>
 
    <Text style = {Css.cap}>Adicione seu usuario: </Text>

    <View style={{
      zIndex: 2,
      width: 257,
      height: 47,
      marginBottom: 20
    }}>
    <DropDownPicker
      open={userOpen}
      value={userValue}
      items={userItems}
      setOpen={setUserOpen}
      setValue={setUserValue}
      setItems={setUserItems}
      loading={loading}
      style={{ backgroundColor: '#87ceeb', fontWeight: 'bold' }}
      translation={{ PLACEHOLDER: 'Selecione um usuário' }}
      placeholderStyle={{ fontWeight: 'bold' }}
      closeAfterSelecting={true}
      selectedItemLabelStyle={{
        fontWeight: "bold",
        color: '#FFBC16'
      }}
    />
    </View>

    <TouchableOpacity
            style={Css.btn_v1}
            onPress={() => {
              handleSubmit;
            }
            }
            rounded disabled={isValid}
          >
            <Text style={Css.txt}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Css.btn_v1}
            onPress={() => navigation.goBack()}>
            <Text style={Css.txt}>Voltar</Text>
          </TouchableOpacity>

    </SafeAreaView>
  );
}