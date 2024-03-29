import react, { useState } from "react";
import { Formik } from 'formik';
import * as yup from 'yup';
/* import axios from './apiMenager/Api' */
import { SafeAreaView, TextInput, TouchableOpacity, View, Text } from "react-native";
import Css from './Css';
import { MaskedTextInput } from 'react-native-mask-text';
import axios from 'axios'

const enderecoSchema = yup.object().shape({
    endereco: yup.string().required('Endereço é obrigatório'),
    cidade: yup.string().required('nome da cidade/estado é obrigatório'),
    cep: yup.string().required('CEP é obrigatório').min(8, 'O CEP deve conter 8 dígitos'),
    Numero: yup.string().required('inserir o numero da residência é obrigatório'),
})

export default ({navigation}) => {

const cadastrarEnderreco = async (value) => {
    try{
        const response = await axios.post('http://10.2.2:3002/pessoa/cadastrar')
    } catch{
        
    }
}

    return(
    <Formik
        initialValues={{
           cidade: '',
           cep: '',
           numero: '',
           logradouro: '',
        }}
        validateOnMount={true}
        validationSchema={enderecoSchema}
        onSubmit={cadastrarEnderreco}
    >
        {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isValid }) => (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 50
              }}>
                <View>
                <Text style = {Css.cap}>Adicione seu endereço</Text>
                </View>

                
                <View>

                <View style={Css.view_input}>
                    <TextInput
                        style={[Css.inputs, Css.input_city]}
                        placeholder="Cidade:"
                        placeholderTextColor={'#282B29'}
                        inputMode="text"
                        onBlur={handleBlur('cidade')}
                        onChangeText={handleChange('Cidade')}
                        value={values.cidade}
                    />
                    

                    <MaskedTextInput
                    mask='99999-999'
                    name="cep"
                    onChangeText={handleChange('cep')}
                    onBlur={handleBlur('cep')}
                    value={values.cep}
                    style={Css.mask_cep}
                    placeholder='CEP:' placeholderTextColor={'#000'}
                    keyboardType='numeric'
                    returnKeyType='next'
                    autoComplete='postal-code' />
                        
                </View>
                {(errors.cidade && touched.cidade) &&
                        <Text style={Css.errors}>{errors.cidade}</Text>
                    }
                    {(errors.cep && touched.cep) &&
                            <Text style={Css.errors}>{errors.cep}</Text>
                        }
                <View style={Css.view_input}>
                <TextInput
                        style={[Css.inputs, Css.input_address]}
                        placeholder="Nome da rua"
                        placeholderTextColor={'#282B29'}
                        inputMode="text"
                        onChangeText={handleChange('logradouro')}
                        onBlur={handleBlur('logradouro')}
                        value={values.logradouro}
                    />
                    <TextInput
                        style={[Css.inputs, Css.input_number]}
                        placeholder="Numero:"
                        placeholderTextColor={'#282B29'}
                        inputMode="numeric"
                        onChangeText={handleChange('Numero')}
                        onBlur={handleBlur('Numero')}
                        value={values.numero}
                    />
                   
                </View>
                    {(errors.numero && touched.numero) &&
                        <Text style={Css.errors}>{errors.numero}</Text>
                    }

                    
                    {(errors.logradouro && touched.logradouro) &&
                        <Text style={Css.errors}>{errors.logradouro}</Text>
                    }

                    <TextInput
                        style={[Css.inputs, Css.inputs_all]}
                        placeholder="Complemento:"
                        placeholderTextColor={'#282B29'}
                        inputMode="text"
                        onBlur={handleBlur('complemento')}
                        onChangeText={handleChange('complemento')}
                        value={values.complemento}
                    />
                    
                </View>
                {(errors.complemento && touched.complemento) &&
                        <Text style={Css.errors}>{errors.complemento}</Text>
                    }
                    <TouchableOpacity
                    onPress={() => {
                        handleSubmit();
                    }}
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