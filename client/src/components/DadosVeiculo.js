import React, {useState} from 'react';
import { KeyboardAvoidingView,View, SafeAreaView,Text, TextInput,TouchableOpacity } from 'react-native';
import Css from './Css';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from './apiMenager/Api'

const vehicleInfo=yup.object().shape({
  placa:yup.string().required("Placa é obrigatório"),
  ano:yup.string().required("Ano é obrigatório").min(4,"Insira 4 digitos"),
  marca:yup.string().required("Marca é obrigatório"),
  modelo:yup.string().required("Modelo é obrigatório")
})


export default function DadosVeiculo({navigation}){
 
  const cadastroVeiculo = (valor) => {
    axios.post('/veiculo/cadastrar/:id', JSON.stringify(valor))
    .then(response => {
      console.log(response.data);
      return response.data
    })
    .catch(error => {
      console.log(JSON.stringify(error));
    })
  }
   

  const [placa, setPlaca] = useState('')
  const [ano, setAno] = useState('')
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')

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
    onSubmit={cadastroVeiculo}
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
                  onBlur={handleBlur('placa')}
                  value={values.placa}
                  onChangeText={[handleChange('placa'), setPlaca]}
                  />

                  <TextInput 
                style={[Css.inputs,Css.input_half]}
                placeholder='Ano: ' placeholderTextColor={'#000'}
                inputMode='text'
                onBlur={handleBlur('ano')}
                value={values.ano}
                onChangeText={[handleChange('ano'), setAno]}
                 />
              
            </View>
            {(errors.placa && touched.placa) &&
            <Text style={Css.errors}>{errors.placa}</Text>}

            {(errors.ano && touched.ano) &&
            <Text style={Css.errors}>{errors.ano}</Text>}
          
          <TextInput 
            style={[Css.inputs,Css.inputs_all]}
            placeholder='Marca: ' placeholderTextColor={'#000'}
            inputMode='text'
            onChangeText={[handleChange('marca'), setMarca]}
            onBlur={handleBlur('marca')}
            value={values.marca} />
            {(errors.marca && touched.marca) &&
            <Text style={Css.errors}>{errors.marca}</Text>}

          <TextInput style={[Css.inputs,Css.inputs_all]}
           placeholder='Modelo: ' placeholderTextColor={'#000'}
            inputMode='text'
            onChangeText={[handleChange('modelo'), setModelo]}
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