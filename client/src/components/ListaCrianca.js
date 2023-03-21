
import React, { useState, useEffect } from "react";
import { SafeAreaView, View, FlatList, Text } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import { ListItem } from "@react-native-material/core";
import Css from "./Css";

export default () => {
    const [searchText, setSearchText] = useState('');
    const [lista, setLista] = useState(CONTENT);

    useEffect (() => {
        if(searchText === ''){
            setLista(CONTENT)
        } else {
            setLista(     
                CONTENT.filter((item) => 
                        item.name.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1)
                );
        }
    }, [searchText]);

    return (
        <SafeAreaView>
            <View style ={Css.searchArea}>
            <SearchBar
            placeholder="Pesquise aqui..."
            style = {Css.search}
            value = {searchText}
            onChangeText={(t) => setSearchText(t)}
            />
            </View>
            <Text style = {Css.txtCria}>
                Lista de crianças
            </Text>
    <FlatList
    data={lista}    
    style = {Css.list}
    renderItem={({item}) => <ListItem data={item} title={item.name}/>}
    keyExtractor={(item) => item.id}
    />

    </SafeAreaView>
    );


}


// DUMMY
const CONTENT = [
    {
        id: 1,
        name: "Luiz Felipe Tavares de Souza"
    },

    {
        id: 2,
        name: "Leandro"
    },
    {
        id: 3,
        name: "Lucas Barbalho"
    }

]