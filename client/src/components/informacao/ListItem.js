import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListItem({data, handleRight}){
    
  
  function RightActions({progress, dragX, onPress}){

    const scale = dragX.interpolate({
      inputRange:[-100, 0],
      outputRange:[1, 0],
      extrapolate: 'clamp'
    })

    return(
      <TouchableOpacity onPress={onPress} style={styles.rightAction}>
        <Animated.View style={[{padding: 10},  { transform: [{ scale: scale}]} ]}>
          <MaterialCommunityIcons name="trash-can" size={45} color="#FFBC16" />
        </Animated.View>
      </TouchableOpacity>
    );
  }
  
  
  return(
      <Swipeable
      renderRightActions={(progress, dragX)=> 
        <RightActions progress={progress} dragX={dragX} onPress={handleRight} />}
      >
      <View style={styles.container}>
        <Text style={styles.text}> {data.mensagem} </Text>
      </View>
      </Swipeable>
    )

}

    const styles = StyleSheet.create({
        container:{
          backgroundColor: '#FFF',
          paddingHorizontal: 10,
          paddingVertical: 20,
        },
        text:{
          fontSize: 17,
          color: '#222'
        },
        rightAction:{
          backgroundColor: '#FFF',
          justifyContent: 'center',
          alignItems: 'flex-end'
        },
        actionText:{
          fontSize: 17,
          color: '#FFF',
          padding: 20,
        }
      });