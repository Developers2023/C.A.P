import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Css from './Css';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default () => {

    return(
        
        <SafeAreaView>
            <View style ={{flexDirection: 'column'}}>

           <TouchableOpacity>
           <Icon name="book" size={30} color="#900" style={{position: 'relative', top: 29, left: 24}} />
            <Text style = {{ marginLeft: 63, fontSize: 20, color: '#000'}}>
                Manual
            </Text>
           </TouchableOpacity>
           <View style = {{backgroundColor: '#ccc', height: 1, marginTop:4}}/>
          
           
            <TouchableOpacity>
            <Icon name ="bus" size={30} color="#fde910" style={{position: 'relative', left: 24, top: 27}}/>
           <Text style = {{fontSize: 20, color: '#000', marginLeft: 63}}>
                Dados do veiculos
            </Text>
           </TouchableOpacity>
            <View style = {{backgroundColor: '#ccc', height: 1, marginTop:4}}/>
            

           <TouchableOpacity>
           <Icon name = "user" size={30} color="#000" style={{position: 'relative', top: 29, left: 27}}/>
            <Text style = {{fontSize: 20, color: '#000', marginLeft: 63}}>
                Dados pessoais</Text>
            </TouchableOpacity>
            <View style = {{backgroundColor: '#ccc', height: 1, marginTop:4}}/>

            </View>
        </SafeAreaView>
    );
}

    
    
    
     


