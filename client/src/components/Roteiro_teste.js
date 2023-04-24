import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Maps from './Maps';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Route" component={RouteScreen} />
      <Stack.Screen name="Stop" component={StopScreen} />
    </Stack.Navigator>
  );
}
function HomeScreen({ navigation }) {
    return (
      <View>
        <Text>Selecione a rota</Text>
        <Button
          title="Rota 1"
          onPress={() => navigation.navigate('Route', { routeName: 'Rota 1' })}
        />
        <Button
          title="Rota 2"
          onPress={() => navigation.navigate('Route', { routeName: 'Rota 2' })}
        />
      </View>
    );
  }
  
  function RouteScreen({ navigation, route }) {
    const { routeName } = route.params;
  
    return (
      <View>
        <Text>{routeName}</Text>
        <Button
          title="Adicionar parada"
          onPress={() => navigation.navigate('Stop')}
        />
        <Button
          title="Concluir rota"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }
  
  function StopScreen({ navigation }) {
    return (
      <View>
        <Text>Adicionar parada</Text>
        <Button
          title="Adicionar parada"
          onPress={() => navigation.navigate('Stop')}
        />
        <Button
          title="Concluir rota"
          onPress={() => navigation.navigate('Route')}
        />
      </View>
    );
  }
  function App() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
  
  export default App;