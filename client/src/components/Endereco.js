import react, { useState } from "react";
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from './apiMenager/Api'
import { SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";

const enderecoSchema = yup.object().shape({
    endereco: yup.string().required('Endereço é obrigatório'),
    cidade: yup.string().required('nome da cidade/estado é obrigatório'),
    cep: yup.string().required('CEP é obrigatório').min(8, 'O CEP deve conter 8 dígitos'),
    Numero: yup.string().required('inserir o numero da residência é obrigatório'),
})

export default ({navigation}) => {

const cadastrarEnderreco = (value) => {
    axios.post('pessoa/cadastro', JSON.stringify(value))
    .then(response => {
        console.log(response.data);
        return response.data
    }).catch(errors => {
        console.log(JSON.stringify(errors))
    })
    
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
            <SafeAreaView>
                <View>

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

                    <TouchableOpacity
                    onPress={() => {
                        handleSubmit();
                    }}
                    >
                        <Text>Enviar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Cadastro')
                    }}
                    >
                        <Text>Voltar</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        )}
    </Formik>
)
}