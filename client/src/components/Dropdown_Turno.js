import React,{useState} from 'react';
import DropDownPicker from "react-native-dropdown-picker";

export default function Dropdown_Turno(){
    
  const [open,setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items,setItems] = useState([
    {label: 'Manhã', value: 'manha'},
    {label: 'Tarde', value: 'tarde'},
    {label: 'Integral', value: 'integral'}
  ]);

    return(
        <DropDownPicker  
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{backgroundColor:'#87ceeb',fontWeight:'bold'}}
        translation={{  PLACEHOLDER:'Turno'}}
        placeholderStyle={{fontWeight:'bold'}}
        closeAfterSelecting={true}
        selectedItemLabelStyle={{
        fontWeight: "bold",
        color:'#FFBC16'               
      }}/> 
    );
}