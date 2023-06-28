import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, View, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import Css from './Css';
import DropDownPicker from 'react-native-dropdown-picker';
import * as yup from 'yup';
import { MaskedTextInput } from 'react-native-mask-text';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import api from './apiMenager/Api';

const sighUpValidation = yup.object().shape({

  nome: yup.string().required('nome completo é obrigatório').matches(/(\w.+\s).+/, 'Insira ao menos nome e sobrenome'),

  email: yup.string().email('Insira um email válido').required('email é obrigatório'),

  cpf: yup.string().required('CPF é obrigatório').min(11, 'CPF deve conter 11 caracteres'),

  telefone: yup.string().required('Número de telefone/celular é obrigatório').min(17, 'O telefone/celular deve conter 13 caracteres'),

  senha: yup.string().min(8, ({ min }) => `Senha deve ter pelo menos ${min} caracteres`).required(`Senha é obrigatória`)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "A senha deve conter 8 caracteres, incluindo: uma letra maiúscula, uma minúscula, um número e um caracter especial"),

  nascimento: yup.string().required('A data de nascimento é obrigatória'),

  sexo: yup.string().required('O campo sexo é obrigatório'),

  endereco: yup.string().required('Endereço é obrigatório'),

  cidade: yup.string().required('nome da cidade/estado é obrigatório'),

  cep: yup.string().required('CEP é obrigatório').min(8, 'O CEP deve conter 8 dígitos'),

  Numero: yup.string().required('inserir o numero da residência é obrigatório'),
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
      const response = await api.post('/pessoa/cadastrar', {
        tipo: values.tipo,
        nome: values.nome,
        sexo: values.sexo,
        email: values.email,
        senha: values.senha,
        nascimento: values.nascimento,
        cpf: values.cpf,
        telefone: values.telefone,
        endereco: {
          logradouro: values.logradouro,
          numero: values.numero,
          cidade: values.cidade,
          cep: values.cep,
        }
      })
      console.log('cadastro feito');
      console.log(response.data);
      navigation.navigate("Login")
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
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');


  const handleSubmit = () => {
    const dados = {
      tipo,
      nome,
      sexo,
      email,
      senha,
      nascimento,
      cpf,
      telefone,
      logradouro,
      numero,
      cidade,
      cep
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
            height: 37,
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
            {errors.nome && <Text>{errors.nome.message}</Text>}
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
                height: 19, marginTop: 5
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

      <View
        style={{
          flexDirection: 'row',
          marginTop: 10
        }}
      >
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={Css.view_input}>
              <MaskedTextInput
                style={Css.mask_cep}
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
              <TextInput
                onChangeText={(t) => { setCidade(t) }}
                value={cidade}
                placeholder='Cidade:'
                style={[Css.inputs, Css.input_city]}
                placeholderTextColor={'#282B29'}
              />
            </View>
          )}
          name='cidade'
          defaultValue=''
        />

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

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={{
            position: 'relative',
            left: 1
          }}>
            <MaskedTextInput
              style={{
                backgroundColor: '#87ceeb',
                padding: 3,
                margin: 7,
                borderRadius: 4,
                borderWidth: 1,
                textAlign: 'left',
                width: 330,
                height: 35,
              }}
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

      <View
        style={{
          flexDirection: 'row'
        }}
      >

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={Css.view_input}>
              <TextInput
                onChangeText={(t) => { setLogradouro(t) }}
                value={logradouro}
                placeholder='Rua:'
                style={[Css.inputs, Css.input_address]}
                placeholderTextColor={'#282B29'}
              />
            </View>
          )}
          name='logradouro'
          defaultValue=''
        />

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={Css.view_input}>
              <TextInput
                onChangeText={(t) => { setNumero(t) }}
                value={numero}
                placeholder='Numero:'
                style={[Css.inputs, Css.input_number]}
                placeholderTextColor={'#282B29'}
              />
            </View>
          )}
          name='numero'
          defaultValue=''
        />

      </View>

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={Css.view_input}>
            <MaskedTextInput
              mask='99999-999'
              name="cep"
              onChangeText={(t) => { setCep(t) }}
              value={cep}
              style={{
                backgroundColor: '#87ceeb',
                padding: 3,
                margin: 7,
                borderRadius: 4,
                borderWidth: 1,
                textAlign: 'left',
                width: 330,
                height: 35,
              }}
              placeholder={'CEP:' + cep} placeholderTextColor={'#000'}
              keyboardType='numeric'
              returnKeyType='next'
              autoComplete='postal-code' />
          </View>
        )}
        name='cep'
        defaultValue=''
      />

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
          onPress = {handleSubmit}

          style={Css.btn_v1}
        >
          <Text style={Css.txt}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}