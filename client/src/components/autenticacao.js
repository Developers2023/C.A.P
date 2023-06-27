import React from 'react'
import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import Css from './Css'
export default ({ navigation }) => {

    return (
        <SafeAreaView style={Css.Container}>
            <>
                <Image source={require("./images/Logo.png")} stylee={Css.Logo} />
                <Text style={Css.cap}>C.A.P - CADÊ A PERUA</Text>
            </>

            <TouchableOpacity style={Css.btnEntrada} onPress={() => navigation.navigate('CadastroMo')}>
                <Text style={Css.txtBtnEntrada} >
                    MOTORISTA
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={Css.btnEntrada} onPress={() => navigation.navigate('CadastroRe')}>
                <Text style={Css.txtBtnEntrada} >
                    RESPONSAVEL
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}