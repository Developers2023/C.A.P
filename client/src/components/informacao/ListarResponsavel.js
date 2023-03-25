import react from 'react' 
import {Text, SafeAreaView, View} from 'react-native'

export default ({data}) => {

   
           
     
     return (
<SafeAreaView>
    <View>
      <Text style = {{color: '#000'}}>Responsavel: {data.responsavelNome}</Text> 
      <Text style = {{color: '#000'}}>tel: {data.tel} </Text>      
      <Text style = {{color: '#000'}}>E-mail: {data.eMail}</Text>
      <Text style = {{color: '#000'}}>Endereço: {data.endereco}</Text>
      <Text style = {{color: '#000'}}>Cidade: {data.cidade} </Text>
      <Text style = {{color: '#000'}}>CEP: {data.cep} </Text>
                          
    </View>
</SafeAreaView>
     )
}