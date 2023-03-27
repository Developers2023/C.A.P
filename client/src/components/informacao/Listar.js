import react from 'react' 
import {Text, SafeAreaView, View} from 'react-native'

export default ({data}) => {

     return (
<View>
    <Text style = {{color: '#000'}}>Nome: {data.name}</Text>
    <Text style = {{color: '#000'}}>Escola: {data.escola}</Text>
    <Text style = {{color: '#000'}}>Horario: {data.horario}</Text>
</View>
     )
}