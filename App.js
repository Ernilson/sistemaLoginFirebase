import React from 'react';
import login from './src/login';
import cadastro from './src/pages/cadastro';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
  
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="cadastro" component={cadastro} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;