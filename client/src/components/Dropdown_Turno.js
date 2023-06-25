import React,{useState} from 'react';
import {View} from 'react-native'
import DropDownPicker from "react-native-dropdown-picker";
import Css from './Css';


export default function Dropdown_Turno(){
    
  const [open,setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items,setItems] = useState([
    {label: 'Manhã', value: 'manha'},
    {label: 'Tarde', value: 'tarde'},
    {label: 'Integral', value: 'integral'}
  ]);
  
    return(
      <View style={{
        width: 88,
        height: 29,
        marginBottom: 20
    }}>
        <DropDownPicker  
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={Css.mask_cep}
        translation={{  PLACEHOLDER:'Turno'}}
        placeholderStyle={{fontWeight:'bold'}}
        closeAfterSelecting={true}
        selectedItemLabelStyle={{
        fontWeight: "bold",
        color:'#FFBC16'               
      }}/> 
      </View>
    );
}