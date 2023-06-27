import * as React from 'react';
import { KeyboardAvoidingView, View, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import Css from './Css';
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from 'formik';
import * as yup from 'yup';
import { MaskedTextInput } from 'react-native-mask-text';
import axios from './apiMenager/Api';
import { Controller, useForm } from 'react-hook-form';

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

  const cadastrar = (values) => {
    axios.post('/pessoa/cadastrar', values)
      .then((response) => {
        console.log(response.data);
        console.log("cadastro feito");
      }).catch((error) => {
        console.log(error);
      })
  };


  const [open, setOpen] = React.useState(false);
  const [sexValue, setsexValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: 'Fem', value: 'f' },
    { label: 'Masc', value: 'm' }
  ]);


  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        nome: '',
        sexo: '',
        email: '',
        cpf: '',
        nascimento: '',
        telefone: '',
        senha: '',
      }}
      validateOnMount={true}
      validationSchema={sighUpValidation}
      onSubmit={cadastrar}
    >
      {({ handleChange, handleSubmit, values, errors, touched, isValid }) => (
        <SafeAreaView style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 2
        }}>
          <Text style={Css.cap}>Cadastrar</Text>

          <KeyboardAvoidingView>
            <View
            style={{
              position:'relative',
              left: 154
            }}
            >
              <View
                style={{
                  position: 'relative',
                  top: 3
                }}
              >
                <View
                  style={Css.view_input}
                >
                  <TextInput
                    onChangeText={handleChange('nome')}
                    value={values.nome}
                    placeholder='Nome:'
                    style={[Css.inputs, Css.input_name]}
                    placeholderTextColor={'#282B29'}
                  />
                  <DropDownPicker
                    open={open}
                    value={values.sexo}
                    onChangeSearchText={handleChange('sexo')}
                    items={items}
                    setOpen={setOpen}
                    setValue={setsexValue}
                    setItems={setItems}
                    style={{
                      backgroundColor: '#87ceeb',
                      fontWeight: 'bold', width: 88,
                      height: 29, marginTop: 5
                    }
                    }
                    translation={{ PLACEHOLDER: 'Sexo' }}
                    placeholderStyle={{ fontWeight: 'bold' }}
                    closeAfterSelecting={true}
                    selectedItemLabelStyle={{
                      fontWeight: "bold",
                      color: '#FFBC16',
                    }}

                  />
                </View>
                {(errors.nome && touched.nome) &&
                  <Text style={Css.errors}>{errors.nome}</Text>
                }

              </View>
              <View>
                <TextInput
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder='Email:'
                  keyboardType='email-address'
                  placeholderTextColor={'#282B29'}
                  style={[Css.inputs_all, Css.inputs]}
                />
              </View>
              {(errors.email && touched.email) &&
                <Text style={Css.errors}>{errors.email}</Text>
              }

              <View>
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
                  value={values.cpf}
                  onChangeText={handleChange('cpf')}
                />
              </View>
              {(errors.cpf && touched.cpf) &&
                <Text style={Css.errors}>{errors.cpf}</Text>
              }

              <View>
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
                  value={values.nascimento}
                  onChangeText={handleChange('nascimento')}
                />
              </View>
              {(errors.nascimento && touched.nascimento) &&
                <Text style={Css.errors}>{errors.nascimento}</Text>
              }

              <View style={{
                position: 'relative',
                right: 183
              }}>
                <MaskedTextInput
                  style={Css.mask}
                  mask="(+99) 99 99999-9999"
                  placeholder='Celular:'
                  placeholderTextColor={'#282B29'}
                  returnKeyType='next'
                  autoComplete='tel'
                  keyboardType='numeric'
                  value={values.tel}
                  onChangeText={handleChange('telefone')}
                />
              </View>
              {(errors.telefone && touched.telefone) &&
                <Text style={Css.errors}>{errors.telefone}</Text>
              }

              <View>
                <TextInput
                  onChangeText={handleChange('senha')}
                  value={values.senha}
                  placeholder='Senha'
                  style={[Css.inputs, Css.inputs_all]}
                  placeholderTextColor={'#282B29'}
                  secureTextEntry
                />
              </View>
              {(errors.senha && touched.senha) &&
                <Text style={Css.errors}>{errors.senha}</Text>
              }
            </View>
            <View
              style={{
                alignItems: 'center'
              }}
            >
              <TouchableOpacity
                onPress={handleSubmit}
                style={Css.btn_v1}
                rounded disabled={isValid}
              >
                <Text style={Css.txt}>Cadastrar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={Css.btn_v1}
              >
                <Text style={Css.txt}>Voltar</Text>
              </TouchableOpacity>
            </View>

    </SafeAreaView>
  )
}