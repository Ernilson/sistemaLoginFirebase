import * as React from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import backgroundImage from '../../assets/Home.png';
import backgroundImage2 from '../../assets/month1.png';
import backgroundImage3 from '../../assets/today1.png';
import commonStyles from '../commonStyles';

function Feed() {
  return (
    <ImageBackground source={backgroundImage}
      style={styles.background}>
      <Text style={styles.titulo}>Gloria a Deus!!!</Text>
     
    </ImageBackground>

  );
}

function Article() {
  return (
    <ImageBackground source={backgroundImage2}
    style={styles.background}>
    <Text style={styles.titulo}>Gloria a Deus!!!</Text>
   
  </ImageBackground>
  );
}

function Options() {
  return (
    <ImageBackground source={backgroundImage3}
    style={styles.background}>
    <Text style={styles.titulo}>Gloria a Deus!!!</Text>
   
  </ImageBackground>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
      <Drawer.Screen name="Options" component={Options} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e91e63',
  },
  titulo: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 70,
  },
});