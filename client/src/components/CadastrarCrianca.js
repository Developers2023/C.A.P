import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Css from './Css';
import DropDownPicker from "react-native-dropdown-picker";
import { MaskedTextInput } from 'react-native-mask-text';
import * as yup from 'yup';
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import api from './apiMenager/Api';

const registerKids = yup.object().shape({
  nomeDaCrianca: yup.string().required('Nome da criança é obrigatório').max(100, 'O nome não pode ultrapassar 100 caracteres').matches(/(\w.+\s).+/, 'Insira ao menos nome e sobrenome'),
  sexo: yup.string().required('Sexo da criança é obrigatório'),
  nascimento: yup.string().required('Data de nascimento é obrigatório'),
  instituicao: yup.string().required('Nome da instituição é obrigatório').max(100, 'O nome da instituição não pode ultrapassar 100 caracteres'),
  periodo: yup.string().required('Horário é obrigatório').min(5, 'Insira os 4 digitos correspondentes a hora e minuto')

})



export default function CadastrarCrianca({ navigation }) {

  const [open, setOpen] = useState(false);
  const [sexo, setSexo] = useState(null);
  const [items, setItems] = useState([
    { label: 'Fem', value: 'f' },
    { label: 'Masc', value: 'm' }
  ]);

  const [openP, setOpenP] = useState(false);
  const [periodo, setPeriodo] = useState(null);
  const [itemsP, setItemsP] = useState([
    { label: 'Manhã', value: 'manha' },
    { label: 'Tarde', value: 'tarde' },
    { label: 'Integral', value: 'integral' }
  ]);

  const { control, formState: { errors } } = useForm({
    resolver: yupResolver(registerKids),
  });

  const cadastrar = async (values) => {
    try {
      await api.post('/crianca/cadastrar', {
        nome: values.nome,
        sexo: values.sexo,
        instituicao: values.instituicao,
        nascimento: values.nascimento,
        periodo: values.periodo
      })
      navigation.goBack();
    } catch (error) {
      return console.log(JSON.stringify(error));
    }
  };

  const [nome, setNome] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [nascimento, setNascimento] = useState('');

  const handleSubmit = () => {
    const dados = {
      nome,
      sexo,
      instituicao,
      nascimento,
      periodo
    }
    console.log(dados);
    cadastrar(dados);
  };

  return (

    <SafeAreaView style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <KeyboardAvoidingView style={{ zIndex: 1, marginHorizontal: 50 }}>
        <View
        style = {{
          marginLeft: 110
        }}
        >
          <View style={Css.view_input}>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[Css.inputs, Css.input_name]}
                  placeholder='Nome:' placeholderTextColor={'#282B29'}
                  inputMode='text'
                  onChangeText={(t) => { setNome(t) }}
                  value={nome} />
              )}
              name='nome'
              defaultValue=''
            />
            <View
              style={{
                width: 90
              }}
            >
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <DropDownPicker
                    open={open}
                    value={sexo}
                    items={items}
                    setOpen={setOpen}
                    setValue={setSexo}
                    setItems={setItems}
                    style={{
                      backgroundColor: '#87ceeb',
                      fontWeight: 'bold',
                      position: 'relative',
                      top: 6
                    }}
                    translation={{ PLACEHOLDER: 'Sexo' }}
                    placeholderStyle={{ fontWeight: 'bold' }}
                    closeAfterSelecting={true}
                    selectedItemLabelStyle={{
                      fontWeight: "bold",
                      color: '#FFBC16',
                    }} />
                )}
                name="sexo"
                defaultValue=""
              />
            </View>
          </View>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={Css.view_input}>
                <MaskedTextInput
                  style={{
                    backgroundColor: '#87ceeb',
                    height: 35,
                    padding: 3,
                    margin: 7,
                    borderRadius: 4,
                    borderWidth: 1,
                    textAlign: 'left',
                    width: 330,
                  }}
                  mask='99/99/9999'
                  placeholder='Data de nascimento:'
                  placeholderTextColor={'#282B29'}
                  keyboardType='numeric'
                  value={nascimento}
                  onChangeText={(t) => { setNascimento(t) }}
                />
              </View>
            )}
            name='nascimento'
            defaultValue=''
          />


          <View style={Css.view_input}>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[Css.inputs, Css.input_city]}
                  placeholder='Escola:' placeholderTextColor={'#282B29'}
                  inputMode='text'
                  onChangeText={(t) => { setInstituicao(t) }}
                  value={instituicao}
                />
              )}
              name='instituicao'
              defaultValue=''
            />
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={{
                  zIndex: 2,
                  width: 257,
                  height: 37,
                  marginBottom: 20,
                  alignSelf: "center"
                }}>

                  <DropDownPicker
                    open={openP}
                    value={periodo}
                    items={itemsP}
                    setOpen={setOpenP}
                    setValue={setPeriodo}
                    setItems={setItemsP}
                    style={Css.mask_cep}
                    translation={{ PLACEHOLDER: 'Turno' }}
                    placeholderStyle={{ fontWeight: 'bold' }}
                    closeAfterSelecting={true}
                    selectedItemLabelStyle={{
                      fontWeight: "bold",
                      color: '#FFBC16'
                    }} />
                </View>
              )}
              name='periodo'
              defaultValue=''
            />
          </View>
        </View>
      </KeyboardAvoidingView>

      <TouchableOpacity style={Css.btn_v1}
        onPress={handleSubmit}
        >
        <Text style={Css.txt}>Salvar</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}
