import React from 'react';
import { View, Text } from 'react-native';

const Place = ({ name, location }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{location}</Text>
    </View>
  );
};

export default Place;