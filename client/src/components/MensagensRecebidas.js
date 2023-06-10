import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  View, FlatList, StyleSheet, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ListItem from '../components/informacao/ListItem';


  export default function MensagensRecebidas() {

    const mensagem = [
      {id: '1', mensagem: 'Responsável:  Paula Matos de Feitas \n Aluno: Paulo Marcos de Feitas \n Data: 02/11/2022 \n Mensagem: Não vai pra aula hoje.'},
      {id: '2', mensagem: 'Responsável:  Madalena \n Aluno: Fantasminha Camarada \n Data: 01/06/2023 \n Mensagem: Hoje vou deixar o Fantasminha na aula, você pode busca-lo na saída.'},

    ];
  
    return (
      <View style={styles.container}>
  
        <FlatList
        data={mensagem}
        keyExtractor={item => item.id}
        renderItem={ ({item}) => (
          <ListItem
          data={item}
          handleRight={ ()=> Alert.alert('Mensagem foi excluida!')}
          />
        )}
        ItemSeparatorComponent={ () => <Separator/> }
        />
  
      </View>
    );
  }
  
  
  const Separator = () => <View style={{flex:1, height:1, backgroundColor: '#DDD'}}></View>
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#FFF'
    }
  });
