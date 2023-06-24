import react, { useState } from "react";
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from './apiMenager/Api'
import { SafeAreaView, View } from "react-native";

const enderecoSchema = yup.object().shape({
    Nome: yup.string().required('Nome é obrigatório').matches(/(\w.+\s).+/, 'Insira ao menos nome e sobrenome'),
    Sexo: yup.string().required('Campo sexo é obrigaório'),
    Deficiencia: yup.string().required('Campo de deficiência é obrigatório'),
    Instituicao: yup.string().required('Campo de instituição é obrigatório'),
    Periodo: yup.string().required('Periodo é obrigaório'),
})

export default () => {
    <Formik
        initialValues={{
            Nome: '',
            Sexo: '',
            Deficiencia: '',
            Instituicao: '',
            Periodo: ''
        }}
        validateOnMount={true}
        validationSchema={enderecoSchema}
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

                </View>
            </SafeAreaView>
        )}
    </Formik>
}