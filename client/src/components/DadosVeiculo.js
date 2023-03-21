import React from 'react';
import { KeyboardAvoidingView,View, SafeAreaView,Text, TextInput,TouchableOpacity } from 'react-native';
import Css from './Pasta/Css';
import { Formik } from 'formik';
import * as yup from 'yup';


const vehicleInfo=yup.object().shape({
  placa:yup.string().required("Placa é obrigatório"),
  ano:yup.string().required("Ano é obrigatório").min(4,"Insira 4 digitos"),
  marca:yup.string().required("Marca é obrigatório"),
  modelo:yup.string().required("Modelo é obrigatório")

})
export default function DadosVeiculo(){


    return(
    <Formik
    initialValues={{
      placa: '',
      ano:'',
      marca: '',
      modelo:''
    }}
    validateOnMount={true}
    validationSchema={vehicleInfo}
    onSubmit={values=> console.log(values)}
    >
      {({handleBlur,handleChange,handleSubmit,values,touched,errors,isValid})=>(
      <SafeAreaView style={{flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:50}}> 
        
        <KeyboardAvoidingView style={{zIndex:1, marginHorizontal:50}}>
    
            <View style={Css.view_input}>
              <TextInput 
                style={[Css.inputs,Css.input_half]}
                placeholder='Placa: ' placeholderTextColor={'#000'}
                  inputMode='text'  autoCapitalize='characters'
                  onChangeText={handleChange('placa')}
                  onBlur={handleBlur('placa')}
                  value={values.placa}
                  />

                  <TextInput 
                style={[Css.inputs,Css.input_half]}
                placeholder='Ano: ' placeholderTextColor={'#000'}
                inputMode='text'
                onChangeText={handleChange('ano')}
                onBlur={handleBlur('ano')}
                value={values.ano} />
              
            </View>
            {(errors.placa && touched.placa) &&
            <Text style={Css.errors}>{errors.placa}</Text>}

            {(errors.ano && touched.ano) &&
            <Text style={Css.errors}>{errors.ano}</Text>}
          
          <TextInput 
            style={[Css.inputs,Css.inputs_all]}
            placeholder='Marca: ' placeholderTextColor={'#000'}
            inputMode='text'
            onChangeText={handleChange('marca')}
            onBlur={handleBlur('marca')}
            value={values.marca} />
            {(errors.marca && touched.marca) &&
            <Text style={Css.errors}>{errors.marca}</Text>}

          <TextInput style={[Css.inputs,Css.inputs_all]}
           placeholder='Modelo: ' placeholderTextColor={'#000'}
            inputMode='text'
            onChangeText={handleChange('modelo')}
            onBlur={handleBlur('modelo')}
            value={values.modelo}/>
            {(errors.modelo && touched.modelo) &&
            <Text style={Css.errors}>{errors.modelo}</Text>}

          <TextInput style={Css.input_moreInfo}
           placeholder='Informações adicionais: ' placeholderTextColor={'#000'}
            inputMode='text' 
            multiline={true} numberOfLines={5}
            />
            
             </KeyboardAvoidingView>
             
          <TouchableOpacity style={Css.btn_v2} onPress={()=>{
            handleSubmit()
            navigation.navigate('Maps')
          }}
          rounded disabled={!isValid}
          >
              <Text style={Css.txt}>Salvar</Text>
            </TouchableOpacity>
        
    </SafeAreaView>
     )}
    </Formik>
    );
};