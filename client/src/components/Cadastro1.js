import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, View, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import Css from './Css';
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from 'formik';
import * as yup from 'yup';
import { MaskedTextInput } from 'react-native-mask-text';
import api from './apiMenager/Api';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

const sighUpValidation = yup.object().shape({

  nome: yup.string().required('nome completo é obrigatório').matches(/(\w.+\s).+/, 'Insira ao menos nome e sobrenome'),

  email: yup.string().email('Insira um email válido').required('email é obrigatório'),

  cpf: yup.string().required('CPF é obrigatório').min(11, 'CPF deve conter 11 caracteres'),

  telefone: yup.string().required('Número de telefone/celular é obrigatório').min(17, 'O telefone/celular deve conter 13 caracteres'),

  senha: yup.string().min(8, ({ min }) => `Senha deve ter pelo menos ${min} caracteres`).required(`Senha é obrigatória`)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "A senha deve conter 8 caracteres, incluindo: uma letra maiúscula, uma minúscula, um número e um caracter especial"),

  nascimento: yup.string().required('A data de nascimento é obrigatória'),

  sexo: yup.string().required('O campo sexo é obrigatório')
});

export default function Cadastro({ navigation }) {


  const [open, setOpen] = React.useState(false);
  const [sexo, setSexo] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: 'Fem', value: 'f' },
    { label: 'Masc', value: 'm' }
  ]);


  const [userOpen, setUserOpen] = useState(false);
  const [tipo, setTipo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userItems, setUserItems] = useState([
    { label: 'Motorista', value: 'motorista' },
    { label: 'Responsável', value: 'responsavel' }
  ]);



  const { control, formState: { errors } } = useForm({
    resolver: yupResolver(sighUpValidation),
  });



  /* console.log(nome + sexValue + email + senha + nascimento + cpf + telefone); */

  const cadastrar = async (values) => {
    try {
      const response = await axios.post('http://10.0.2.2:3002/pessoa/cadastrar', {
        tipo: values.tipo,
        nome: values.nome,
        sexo: values.sexo,
        email: values.email,
        senha: values.senha,
        nascimento: values.nascimento,
        cpf: values.cpf,
        telefone: values.telefone,
      })
      console.log('cadastro feito');
      console.log(response.data);
    } catch (error) {
      return console.log(JSON.stringify(error));
    }
  };

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');


  const handleSubmit = () => {
    const dados = {
      tipo,
      nome,
      sexo,
      email,
      senha,
      nascimento,
      cpf,
      telefone
    }
    console.log(dados);
    cadastrar(dados);
  };


  return (
    <SafeAreaView style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 2
    }}>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={{
            zIndex: 2,
            width: 257,
            height: 47,
            marginBottom: 20,
            alignSelf: "center"
          }}>
            <DropDownPicker
              open={userOpen}
              value={tipo}
              items={userItems}
              setOpen={setUserOpen}
              setValue={setTipo}
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
        )}
        name='nome'
        defaultValue=''
      />
      <View style={{
        flexDirection: 'row',
        marginLeft: 158
      }}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                onBlur={onBlur}
                onChangeText={(t) => { setNome(t) }}
                value={nome}
                placeholder='Nome:'
                style={[Css.inputs, Css.input_name]}
                placeholderTextColor={'#282B29'}
              />
            </View>
          )}
          name='nome'
          defaultValue=''
        />

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
                fontWeight: 'bold', width: 88,
                height: 29, marginTop: 5
              }}
              translation={{ PLACEHOLDER: 'Sexo' }}
              placeholderStyle={{ fontWeight: 'bold' }}
              closeAfterSelecting={true}
              selectedItemLabelStyle={{
                fontWeight: "bold",
                color: '#FFBC16',
              }}
            />
          )}
          name="sexo"
          defaultValue=""
        />
      </View>
      {(errors.nome) &&
        <Text style={Css.errors}>{errors.nome.message}</Text>
      }
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={Css.view_input}>
            <TextInput
              onBlur={onBlur}
              onChangeText={(t) => { setEmail(t) }}
              value={[value, email]}
              placeholder='E-mail:'
              style={[Css.inputs, Css.inputs_all]}
              placeholderTextColor={'#282B29'}
            />
          </View>
        )}
        name='email'
        defaultValue=''
      />

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={Css.view_input}>
            <MaskedTextInput
              style={{
                backgroundColor: '#87ceeb',
                height: 49,
                padding: 3,
                margin: 7,
                borderRadius: 4,
                borderWidth: 1,
                textAlign: 'left',
                width: 330,
              }}
              mask='999.999.999-99'
              placeholder='CPF:'
              placeholderTextColor={'#282B29'}
              keyboardType='numeric'
              value={cpf}
              onChangeText={(t) => { setCpf(t) }}
            />
          </View>
        )}
        name='cpf'
        defaultValue=''
      />
      {(errors.cpf) &&
        <Text style={Css.errors}>{errors.cpf.message}</Text>
      }


      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={Css.view_input}>
            <MaskedTextInput
              style={{
                backgroundColor: '#87ceeb',
                height: 49,
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

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={{
            position: 'relative',
            right: 183
          }}>
            <MaskedTextInput
              style={Css.mask}
              mask="(+99) 99 99999-9999"
              placeholder='Celular:'
              placeholderTextColor={'#282B29'}
              keyboardType='numeric'
              value={telefone}
              onChangeText={(t) => { setTelefone(t) }}
            />
          </View>
        )}
        name='telefone'
        defaultValue=''
      />
      {(errors.telefone) &&
        <Text style={Css.errors}>{errors.telefone.message}</Text>
      }

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={Css.view_input}>
            <TextInput
              onChangeText={(t) => { setSenha(t) }}
              value={[value, senha]}
              placeholder='Senha:'
              style={[Css.inputs, Css.inputs_all]}
              placeholderTextColor={'#282B29'}
              secureTextEntry
            />
          </View>
        )}
        name='senha'
        defaultValue=''
      />
      {(errors.senha) &&
        <Text style={Css.errors}>{errors.senha.message}</Text>
      }

      <View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={Css.btn_v1}
        >
          <Text style={Css.txt}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}