import React,{useState} from 'react';
import { View,Text, KeyboardAvoidingView,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Css from './Css';
import Dropdown_Turno from './Dropdown_Turno';
import { MaskedTextInput } from 'react-native-mask-text';
import { Formik } from 'formik';
import * as yup from 'yup';

const registerKids = yup.object().shape({
  nomeDaCrianca:yup.string().required('Nome da criança é obrigatório').max(100,'O nome não pode ultrapassar 100 caracteres').matches(/(\w.+\s).+/,'Insira ao menos nome e sobrenome'),
  instituicaoDeEnsino:yup.string().required('Nome da instituição é obrigatório').max(100,'O nome da instituição não pode ultrapassar 100 caracteres'),
  cidadeDaCrianca:yup.string().required('Cidade é obrigatório'),
  horario:yup.string().required('Horário é obrigatório').min(5,'Insira os 4 digitos correspondentes a hora e minuto')

})



export default function CadastrarCrianca({navigation}){

    return(
      <Formik
      initialValues={{
        nomeDaCrianca: '',
        instituicaoDeEnsino:'',
        cidadeDaCrianca: '',
        horario: ''
      }}
      validationOnMount={true}
      validationSchema={registerKids}
      onSubmit={values=> console.log(values)}>

      {({handleSubmit,handleChange,handleBlur,values,touched,errors,isValid}) => (
     <ScrollView>  
      <SafeAreaView style={{flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:178}}>

        <KeyboardAvoidingView style={{zIndex:1, marginHorizontal:50}}>
        <TextInput 
          style={[Css.inputs,Css.inputs_all]}
          placeholder='Nome:' placeholderTextColor={'#282B29'}
          inputMode='text'
          onChangeText={handleChange('nomeDaCrianca')}
          onBlur={handleBlur('nomeDaCrianca')}
          value={values.nomeDaCrianca}/>
          {(errors.nomeDaCrianca && touched.nomeDaCrianca)&&
          <Text style={Css.errors}>{errors.nomeDaCrianca}</Text>}

        <TextInput 
          style={[Css.inputs,Css.inputs_all]}
          placeholder='Escola:' placeholderTextColor={'#282B29'}
          inputMode='text'
          onChangeText={handleChange('instituicaoDeEnsino')}
          onBlur={handleBlur('instituicaoDeEnsino')}
          value={values.instituicaoDeEnsino}
          />
          {(errors.instituicaoDeEnsino && touched.instituicaoDeEnsino)&&
          <Text style={Css.errors}>{errors.instituicaoDeEnsino}</Text>}

        <TextInput 
          style={[Css.inputs,Css.inputs_all]}
          placeholder='Cidade:' placeholderTextColor={'#282B29'}
          inputMode='text'
          onChangeText={handleChange('cidadeDaCrianca')}
          onBlur={handleBlur('cidadeDaCrianca')}
          value={values.cidadeDaCrianca}
          />
          {(errors.cidadeDaCrianca && touched.cidadeDaCrianca)&&
          <Text style={Css.errors}>{errors.cidadeDaCrianca}</Text>}

            <View  style={{ 
              zIndex:2,
              width:158,
              height:50,
              marginBottom:20,
              marginLeft:7,
              marginTop:7
              }}>
            
             <Dropdown_Turno/>        
              </View>
              {(errors.turno && touched.turno)&&
                <Text style={Css.errors}>{errors.turno}</Text>}  

              <MaskedTextInput 
              style={Css.mask_time}
              mask="99:99"
              placeholder='Horário:' placeholderTextColor={'#282B29'}
              keyboardType='numeric'
              onChangeText={handleChange('horario')}
              onBlur={handleBlur('horario')}
              value={values.horario}
              />
                    
            

           
              {(errors.horario && touched.horario)&&
          <Text style={Css.errors}>{errors.horario}</Text>}

    
      </KeyboardAvoidingView>

          
          <TouchableOpacity style={Css.btn_v1}
              onPress={() =>{ 
                handleSubmit()
                navigation.navigate('DadosPessoais')}}
              rounded disabled={!isValid}>
                <Text style={Css.txt}>Salvar</Text>
          </TouchableOpacity>
          
        </SafeAreaView>
        </ScrollView> 
      )} 
    </Formik>
    );
};