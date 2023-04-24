import React from 'react';
import { FlatList } from 'react-native';
import Place from './Place';
import { places } from './places';

const Roteiro = () => {
  const renderItem = ({ item }) => <Place name={item.name} location={item.location} />;

  return (
    <FlatList
      data={places}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Roteiro;