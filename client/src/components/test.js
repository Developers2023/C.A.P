import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import api from './apiMenager/Api';
import axios from 'axios'

export default function Cadastro({ navigation }) {
  // const cadastrar = async (values) => {
  //   try {
  //     await api.post('pessoa/cadastrar', JSON.stringify(values));
  //     console.log('Cadastro realizado com sucesso');
  //   } catch (error) {
  //     console.log(JSON.stringify(error));
  //   }
  // };
  
  const cadastrar = async (values) => {
    try {
      const response = await axios.post('http://10.0.2.2:3002/pessoa/cadastrar', {
        tipo:values.tipo,
        nome: values.nome,
        cpf: values.cpf,
        telefone: values.telefone,
        email: values.email,
        sexo: values.sexo,
        senha: values.senha,
        nascimento:values.nascimento,
    });
      console.log(response.data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  const [tipo, setTipo] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [sexo, setSexo] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [nascimento, setNascimento] = React.useState('');

  const handleSubmit = () => {
    const data = {
      tipo,
      nome,
      cpf,
      telefone,
      email,
      sexo,
      senha,
      nascimento
    };
    cadastrar(data);
  };

  return (
    <View>
      <Text>tipo:</Text>
      <TextInput
        value={tipo}
        onChangeText={(text) => setTipo(text)}
        placeholder="Digite seu tipo"
      />

      <Text>Nome:</Text>
      <TextInput
        value={nome}
        onChangeText={(text) => setNome(text)}
        placeholder="Digite seu nome"
      />

      <Text>cpf:</Text>
      <TextInput
        value={cpf}
        onChangeText={(text) => setCpf(text)}
        placeholder="Digite seu Cpf"
      />

      <Text>telefone:</Text>
      <TextInput
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
        placeholder="Digite seu Telefone"
      />

      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Digite seu Email"
      />

      <Text>sexo:</Text>
      <TextInput
        value={sexo}
        onChangeText={(text) => setSexo(text)}
        placeholder="Digite seu Sexo"
      />

      <Text>senha:</Text>
      <TextInput
        value={senha}
        onChangeText={(text) => setSenha(text)}
        placeholder="Digite seu Senha"
      />

      <Text>nascimento:</Text>
      <TextInput
        value={nascimento}
        onChangeText={(text) => setNascimento(text)}
        placeholder="Digite seu Nascimento"
      />
      {/* Adicione mais campos conforme necessário */}

      <TouchableOpacity onPress={handleSubmit}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
