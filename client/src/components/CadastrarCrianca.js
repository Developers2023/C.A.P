import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Css from './Css';
import DropDownPicker from "react-native-dropdown-picker";
import DropDown_Turno from './Dropdown_Turno'
import Dropdown from './Dropdown'
import { MaskedTextInput } from 'react-native-mask-text';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from './apiMenager/Api'

const registerKids = yup.object().shape({
  nomeDaCrianca: yup.string().required('Nome da criança é obrigatório').max(100, 'O nome não pode ultrapassar 100 caracteres').matches(/(\w.+\s).+/, 'Insira ao menos nome e sobrenome'),
  sexo: yup.string().required('Sexo da criança é obrigatório'),
  pdc:yup.string().required('Informar se é pdc é obrigatório'),
  instituicaoDeEnsino: yup.string().required('Nome da instituição é obrigatório').max(100, 'O nome da instituição não pode ultrapassar 100 caracteres'),
  periodo: yup.string().required('Horário é obrigatório').min(5, 'Insira os 4 digitos correspondentes a hora e minuto')

})



export default function CadastrarCrianca({ navigation }) {

  const cadastrarC = (values) => {
    axios
      .post('/crianca/cadastrar/:id', JSON.stringify(values))
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };

  const [nomeC, setNomeC] = useState('');
  const [instEnsino, setInstEnsino] = useState('');
  const [cidade, setCidade] = useState('');



  //PDC
  const [openPdc, setOpenPdc] = useState(false);
  const [valuePdc, setValuePdc] = useState(null);
  const [itemsPdc, setItemsPdc] = useState([
      { label: 'Sim', value: 's' },
      { label: 'Nao', value: 'n' }
  ]);


  return (
    <Formik
      initialValues={{
        nomeDaCrianca: '',
        sexo: '',
        pdc: '',
        instituicaoDeEnsino: '',
        periodo: ''
      }}
      validationOnMount={true}
      validationSchema={registerKids}
      onSubmit={cadastrarC}>

      {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isValid }) => (

        <SafeAreaView style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          <KeyboardAvoidingView style={{ zIndex: 1, marginHorizontal: 50 }}>

          <View style={Css.view_input}>
            <TextInput
              style={[Css.inputs, Css.input_name]}
              placeholder='Nome:' placeholderTextColor={'#282B29'}
              inputMode='text'
              onChangeText={[handleChange('nomeDaCrianca'), setNomeC]}
              onBlur={handleBlur('nomeDaCrianca')}
              value={[values.nomeDaCrianca, nomeC]} />
            {(errors.nomeDaCrianca && touched.nomeDaCrianca) &&
              <Text style={Css.errors}>{errors.nomeDaCrianca}</Text>}

              <Dropdown/>
              {(errors.sexo && touched.sexo) &&
              <Text style={Css.errors}>{errors.sexo}</Text>}
        </View>
              
          <View style={{
              zIndex: 2,
              width: 100,
              height: 50,
              marginTop: 7,
              marginBottom:20
            }}>
            
              <DropDownPicker  
                      open={openPdc}
                      value={valuePdc}
                      items={itemsPdc}
                      setOpen={setOpenPdc}
                      setValue={setValuePdc}
                      setItems={setItemsPdc}
                      style={[Css.inputs, Css.inputs_all]}
                      translation={{  PLACEHOLDER:'PDC?'}}
                      placeholderStyle={{fontWeight:'bold'}}
                      closeAfterSelecting={true}
                      selectedItemLabelStyle={{
                      fontWeight: "bold",
                      color:'#FFBC16'               
                    }}/> 
            </View>
            {(errors.pdc && touched.pdc) &&
              <Text style={Css.errors}>{errors.pdc}</Text>}

        <View style={Css.view_input}>
            <TextInput
              style={[Css.inputs, Css.input_city]}
              placeholder='Escola:' placeholderTextColor={'#282B29'}
              inputMode='text'
              onChangeText={[handleChange('instituicaoDeEnsino'), setInstEnsino]}
              onBlur={handleBlur('instituicaoDeEnsino')}
              value={[values.instituicaoDeEnsino, instEnsino]}
            />
            {(errors.instituicaoDeEnsino && touched.instituicaoDeEnsino) &&
              <Text style={Css.errors}>{errors.instituicaoDeEnsino}</Text>}
            
            <DropDown_Turno/> 
            {(errors.turno && touched.turno) &&
              <Text style={Css.errors}>{errors.turno}</Text>}
        </View>
          </KeyboardAvoidingView>

          <TouchableOpacity style={Css.btn_v1}
            onPress={() => {
              handleSubmit();
              /* navigation.navigate('DadosPessoais') */
            }}
            rounded disabled={!isValid}>
            <Text style={Css.txt}>Salvar</Text>
          </TouchableOpacity>

        </SafeAreaView>
      )}
    </Formik>
  );
};