import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Css from './Css';

export default function Dropdown_User() {
  const [userOpen, setUserOpen] = useState(false);
  const [userValue, setUserValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userItems, setUserItems] = useState([
    { label: 'Motorista', value: 'motorista' },
    { label: 'Responsável', value: 'responsavel' }
  ]);
  return (
    <DropDownPicker
      open={userOpen}
      value={userValue}
      items={userItems}
      setOpen={setUserOpen}
      setValue={setUserValue}
      setItems={setUserItems}
      loading={loading}
      style={{ backgroundColor: '#87ceeb', fontWeight: 'bold' }}
      translation={{ PLACEHOLDER: 'Selecione um usuário' }}
      placeholderStyle={{ fontWeight: 'bold' }}
      closeAfterSelecting={true}
      selectedItemLabelStyle={{
        fontWeight: "bold",
        color: '#FFBC16'

      }}
    />
  );
}