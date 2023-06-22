import React, { useState } from "react";
import { TextInput, Text, SafeAreaView, View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as yup from 'yup';
import axios from '../apiMenager/Api'
import Css from "../Css";

const vehicleValidation = yup.object().shape({
    Cidade: yup.string().required('O campo cidade é obrigatório'),
    Cep: yup.string().required('O campo CEP é obrigatório'),
    Numero: yup.string().required('inserir o numero da residência é obrigatório'),
    logradouro: yup.string().required('Informar o nome da rua é obrigatório')
})

export default ({ navigation }) => {

    const cadastrarEndereco = (value) => {
        axios.post('pessoa/cadastro', JSON.stringify(value))
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                console.log(JSON.stringify(error));
            })
    }

    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [logradouro, setLogradouro] = useState('');

    return (
        <Formik
            initialValues={
                {
                    Cidade: '',
                    Cep: '',
                    Numero: '',
                    logradouro: '',
                }
            }
            validateOnMount={true}
            validationSchema={vehicleValidation}
            onSubmit={cadastrarEndereco}
        >
            {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isValid }) => (
                <SafeAreaView>
                    <View>
                        <KeyboardAvoidingView>
                            <TextInput
                                placeholder="Cidade: "
                                inputMode="text"
                                onBlur={handleBlur('cidade')}
                                onChangeText={[handleChange('Cidade'), setCidade]}
                                value={values.Cidade}
                            />
                            {(errors.Cidade && touched.Cidade) &&
                                <Text style={Css.errors}>{errors.Cidade}</Text>
                            }

                            <TextInput
                                placeholder="Cep: "
                                inputMode="numeric"
                                onChangeText={[handleChange('Cep'), setCep]}
                                onBlur={handleBlur('Cep')}
                                value={values.Cep}
                            />
                            {(errors.Cep && touched.Cep) &&
                                <Text style={Css.errors}>{errors.Cep}</Text>
                            }

                            <TextInput
                                placeholder="Numero: "
                                inputMode="numeric"
                                onChangeText={[handleChange('Numero'), setNumero]}
                                onBlur={handleBlur('Numero')}
                                value={values.Numero}
                            />
                            {(errors.Numero && touched.Numero) &&
                                <Text style={Css.errors}>{errors.Numero}</Text>
                            }

                            <TextInput
                                placeholder="Nome da rua"
                                inputMode="text"
                                onChangeText={[handleChange('logradouro'), setLogradouro]}
                                onBlur={handleBlur('logradouro')}
                                value={values.logradouro}
                            />
                            {(errors.logradouro && touched.logradouro) &&
                                <Text style={Css.errors}>{errors.logradouro}</Text>
                            }

                            <TouchableOpacity
                                onPress={
                                    handleSubmit()
                                }
                                rounded desable={!isValid}
                            >
                                <Text>Enviar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={
                                    () => navigation.navigate('Cadastro')
                                }
                            >
                                <Text>Voltar</Text>
                            </TouchableOpacity>

                        </KeyboardAvoidingView>
                    </View>
                </SafeAreaView>
            )}
        </Formik>
    )
} 