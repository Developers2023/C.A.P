import React,{useState} from 'react';
import {View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Css from './Css';

export default function Dropdown(){
    const [open,setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items,setItems] = useState([
      {label: 'Fem', value: 'f'},
      {label: 'Masc', value: 'm'}
    ]);
    return(
        <View  style={{ 
            width:88,
            height:29,
            marginBottom:20
    
            }}>
        <DropDownPicker  
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{backgroundColor:'#87ceeb',fontWeight:'bold'}}
            translation={{  PLACEHOLDER:'Sexo'}}
            placeholderStyle={{fontWeight:'bold'}}
            closeAfterSelecting={true}
            selectedItemLabelStyle={{
             fontWeight: "bold",
             color:'#FFBC16'
           }}
    
            /> 
        </View>
    );
};