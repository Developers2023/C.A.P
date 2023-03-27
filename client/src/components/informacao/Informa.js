import { color } from '@rneui/base';
import react from 'react' 
import {Text, SafeAreaView, View, StyleSheet, FlatList} from 'react-native'
import DummyData from './DummyData';
import Listar from './Listar';
import ListarResponsavel from './ListarResponsavel';
import Css from '../Css';
export default () => {

     return (
<SafeAreaView style={Css.container}>

<View>
    <Text style={{color: '#000'}}>
        Aluno
    </Text>
    
    <View style = {Css.info}>
        <View style = {Css.txtinfo}>
        <FlatList 
        data = {DummyData}
        style = {Css.listCria}
        renderItem = {({ item }) => <Listar data={item}/>}
        keyExtractor = {(item) => item.id}
        />
        </View>
    </View>
    
</View>

<View>
    <Text style = {{color: '#000', marginTop: 50}}>
        Responsável
    </Text>

    <View style={{width: 340, height: 127, backgroundColor: '#FFBC16A1', borderRadius: 10}}>
        <View style = {Css.txtinfo}>
           
            <FlatList
            data={DummyData}
            renderItem = {({ item }) => <ListarResponsavel data = {item.responavel}/>}
            />
            
        </View>
    </View>

</View>

</SafeAreaView>

     )
}

;