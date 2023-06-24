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
    
}