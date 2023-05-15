import React from 'react';
import {  Text, View, Pressable, FlatList, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Css from "./Css";

const data = [
    { id: 1, txt: 'Pedro Miguel', isChecked: false },
    { id: 2, txt: 'Carlos Armando', isChecked: false },
    { id: 3, txt: 'Paulo Vinicius', isChecked: false },
    { id: 4, txt: 'Sabrinex Ginga', isChecked: false },
    { id: 5, txt: 'Milguelzin Cacatua', isChecked: false },
];

export default function ConfirmarEntrega_Escola ({navigation}){
    const [listas, setListas] = React.useState(data);

    const handleChange = (id) => {
        let temp = listas.map((listas) => {
            if (id === listas.id) {
                return { ...listas, isChecked: !listas.isChecked };
            }
            return listas;
        });
        setListas(temp);
    };

    let selected = listas.filter((listas) => listas.isChecked);

    const renderFlatList = (renderData) => {
        return (
            <FlatList
                data={renderData}
                renderItem={({ item }) => (   
                        <View>
                            <View>
                                <Pressable style={Css.button} onPress={() => handleChange(item.id)} >
                                    <MaterialCommunityIcons
                                        name={item.isChecked ? 'checkbox-marked' : 'checkbox-blank-outline'} size={25} color="#FFBC16" />
                                </Pressable>
                                <Text style={Css.text}>{item.txt}</Text>
                            </View>
                        </View>
                )}
            />
        );
    }

    return (
        <View >
            <View>
                {renderFlatList(listas)}
            </View>
            <TouchableOpacity style = {Css.Button1} onPress={() => navigation.navigate('Login')}>
            <Image source={require('../components/images/enviar.png')} style={Css.buttonImage}/> 
            </TouchableOpacity> 
        </View>
  );
};