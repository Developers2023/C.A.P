import * as React from 'react';
import { KeyboardAvoidingView, View, SafeAreaView, Text, TextInput, TouchableOpacity, SectionList, ScrollView, FlatList } from 'react-native';
import Css from './Css';
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from 'formik';
import * as yup from 'yup';
import { MaskedTextInput } from 'react-native-mask-text';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import axios from './apiMenager/Api'
import { Controller, useForm } from 'react-hook-form';

const sighUpValidation = yup.object().shape({

  nome: yup.string().required('nome completo é obrigatório').matches(/(\w.+\s).+/, 'Insira ao menos nome e sobrenome'),

  email: yup.string().email('Insira um email válido').required('email é obrigatório'),

  cpf: yup.string().required('CPF é obrigatório').min(11, 'CPF deve conter 11 caracteres'),

  tel: yup.string().required('Número de telefone/celular é obrigatório').min(17, 'O telefone/celular deve conter 13 caracteres'),

  endereco: yup.string().required('Endereço é obrigatório'),

  complementoDeEndereco: yup.string().required('complemento é obrigatório'),

  cidade: yup.string().required('nome da cidade/estado é obrigatório'),

  cep: yup.string().required('CEP é obrigatório').min(8, 'O CEP deve conter 8 dígitos'),

  senha: yup.string().min(8, ({ min }) => `Senha deve ter pelo menos ${min} caracteres`).required(`Senha é obrigatória`)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "A senha deve conter 8 caracteres, incluindo: uma letra maiúscula, uma minúscula, um número e um caracter especial"),

  dataDeNascimento: yup.string().required('A data de nascimento é obrigatória'),

  Numero: yup.string().required('inserir o numero da residência é obrigatório'),

});

export default function Cadastro({ navigation }) {

  const cadastrar = (values) => {
    axios.post('pessoa/cadastro', JSON.stringify(values))
      .then((response) => {
        console.log(response.data)
        return response.data;
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };


  const [userOpen, setUserOpen] = React.useState(false);
  const [userValue, setUserValue] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [userItems, setUserItems] = React.useState([
    { label: 'Motorista', value: 'motorista' },
    { label: 'Responsável', value: 'responsavel' }
  ]);


  const [open, setOpen] = React.useState(false);
  const [sexValue, setsexValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: 'F', value: 'f' },
    { label: 'M', value: 'm' }
  ]);


  const { handleSubmit, control } = useForm();

  const [date, setDate] = React.useState(new Date(0));


  const onChange = (event, selectedDate) => {
    selectedDate && setDate(selectedDate)
  }
  const modoMostrar = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      display: 'calendar',
      mode: currentMode,
    })
  }
  const mostrarDate = () => {
    modoMostrar('date')
  }


  return (
    <Formik
      initialValues={{
        nome: '',
        sexo: '',
        dataDeNascimento: '',
        email: '',
        senha: '',
        cpf: '',
        telefone: '',
        cidade: '',
        cep: '',
        numero: '',
        logradouro: '',
      }}
      validateOnMount={true}
      validationSchema={sighUpValidation}
      onSubmit={cadastrar}

    >
      {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isValid }) => (
        <SafeAreaView style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: 40,
          marginLeft: -10
        }}>
          <View style={{
            zIndex: 2,
            width: 257,
            height: 47,
            marginBottom: 20
          }}>
            <Controller
              name="selecione um usuario"
              defaultValue=""
              control={control}
              render={({ field: { onChange, value } }) => (
                <DropDownPicker
                  open={userOpen}
                  value={userValue}
                  items={userItems}
                  setOpen={setUserOpen}
                  setValue={setUserValue}
                  setItems={setUserItems}
                  loading={loading}
                  style={{
                    backgroundColor: '#87ceeb',
                    fontWeight: 'bold',
                    position: 'relative',
                    left: 83
                  }}
                  translation={{ PLACEHOLDER: 'Selecione um usuário' }}
                  placeholderStyle={{ fontWeight: 'bold' }}
                  closeAfterSelecting={true}
                  selectedItemLabelStyle={{
                    fontWeight: "bold",
                    color: '#FFBC16'
                  }}
                />
              )}
            />
          </View>
          <KeyboardAvoidingView style={
            {
              zIndex: 1,
              marginHorizontal: 50
            }
          }>
            <View style={[Css.view_input, Css.view_drop]}>
              <TextInput
                style={[Css.inputs, Css.input_name]}
                name="nome"
                onBlur={handleBlur('nome')}
                placeholder='Nome:' placeholderTextColor={'#282B29'}
                inputMode='text'
                autoComplete='name'
                maxLength={100}
                returnKeyType='next'
                onChangeText={handleChange('nome')}
                value={values.nome}
              />
              <Controller
                name="selecione seu sexo"
                defaultValue=""
                control={control}
                render={({ field: { onchange, value } }) => (
                  <DropDownPicker
                    open={open}
                    value={sexValue}
                    items={items}
                    setOpen={setOpen}
                    setValue={setsexValue}
                    setItems={setItems}
                    style={{
                      backgroundColor: '#87ceeb',
                      fontWeight: 'bold',
                      position: 'relative',
                      top: 6,
                      width: 90
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
              />

            </View>
            {(errors.nome && touched.nome) &&
              <Text style={Css.errors}>{errors.nome}</Text>
            }

            <View>
              <TouchableOpacity
              onPress={mostrarDate}
              >
                <Text>insira sua data de nascimento</Text>
              </TouchableOpacity>
            </View>

            <TextInput style={[Css.inputs, Css.inputs_all]}
              name="email"
              onBlur={handleBlur('email')}
              placeholder='E-mail:' placeholderTextColor={'#282B29'}
              inputMode='email' keyboardType='email-address'
              autoComplete='email'
              returnKeyType='next'
              onChangeText={handleChange('email')}
              value={values.email}
            />
            {(errors.email && touched.email) &&
              <Text style={Css.errors}>{errors.email}</Text>
            }

            <View
              style={{
                position: 'relative',
                right: 184
              }}
            >
              <MaskedTextInput
                style={Css.mask}
                name="cpf"
                mask='999.999.999-99'
                onBlur={handleBlur('cpf')}
                placeholder='CPF:'
                placeholderTextColor={'#282B29'}
                returnKeyType='next'
                keyboardType='numeric'
                value={values.cpf}
                onChangeText={handleChange('cpf')}
              />

            </View>
            {(errors.cpf && touched.cpf) &&
              <Text style={Css.errors}>{errors.cpf}</Text>
            }

            <View
              style={{
                position: 'relative',
                right: 184
              }}
            >
              <MaskedTextInput
                style={Css.mask}
                name="tel"
                mask="(+99) 99 99999-9999"
                onBlur={handleBlur('tel')}
                placeholder='Celular:'
                placeholderTextColor={'#282B29'}
                returnKeyType='next'
                autoComplete='tel'
                keyboardType='numeric'
                value={values.tel}
                onChangeText={handleChange('tel')}
              />
            </View>
            {(errors.tel && touched.tel) &&
              <Text style={Css.errors}>{errors.tel}</Text>
            }


            <TextInput style={[Css.inputs, Css.inputs_all]}
              name="senha"
              onBlur={handleBlur('senha')}
              placeholder='Senha:' placeholderTextColor={'#282B29'}
              inputMode='text'
              secureTextEntry={true}
              returnKeyType='next'
              onChangeText={handleChange('senha')}
              value={values.senha}
            />
            {(errors.senha && touched.senha) &&
              <Text style={Css.errors_senha}>{errors.senha}</Text>
            }

            <TextInput
              style={[Css.inputs, Css.inputs_all]}
              placeholder="Cidade:"
              placeholderTextColor={'#282B29'}
              inputMode="text"
              onBlur={handleBlur('cidade')}
              onChangeText={handleChange('Cidade')}
              value={values.cidade}
            />
            {(errors.cidade && touched.cidade) &&
              <Text style={Css.errors}>{errors.cidade}</Text>
            }

            <TextInput
              style={[Css.inputs, Css.inputs_all]}
              placeholder="Cep:"
              placeholderTextColor={'#282B29'}
              inputMode="numeric"
              onChangeText={handleChange('Cep')}
              onBlur={handleBlur('Cep')}
              value={values.cep}
            />
            {(errors.cep && touched.cep) &&
              <Text style={Css.errors}>{errors.cep}</Text>
            }

            <TextInput
              style={[Css.inputs, Css.inputs_all]}
              placeholder="Numero:"
              placeholderTextColor={'#282B29'}
              inputMode="numeric"
              onChangeText={handleChange('Numero')}
              onBlur={handleBlur('Numero')}
              value={values.numero}
            />
            {(errors.numero && touched.numero) &&
              <Text style={Css.errors}>{errors.numero}</Text>
            }

            <TextInput
              style={[Css.inputs, Css.inputs_all]}
              placeholder="Nome da rua"
              placeholderTextColor={'#282B29'}
              inputMode="text"
              onChangeText={handleChange('logradouro')}
              onBlur={handleBlur('logradouro')}
              value={values.logradouro}
            />
            {(errors.logradouro && touched.logradouro) &&
              <Text style={Css.errors}>{errors.logradouro}</Text>
            }

          </KeyboardAvoidingView>

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
      )}
    </Formik>
  )
}