import React, { useState, useEffect } from 'react';
import { StyleSheet, Platform, Image, Text, View, TouchableOpacity } from 'react-native';
import firebase from '../../firebase';

export default function Home({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [currentUser, setCurrentUser] = useState(null);

  function componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("Logado - " + user.email)
      } else {
        console.log("Não logado!")
      }
    });

  }, [])

   //Metodo para fazer logout
   function signOutUser() {
    try {
      firebase.auth().signOut()
      alert('Deslogado com sucesso"')
      
    } catch (error) {
      console.log(error)
    }finally{
      setEmail(''),
      setPassword('')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Olá {currentUser && currentUser.email}, seja bem vindo(a)!
          </Text>
      <TouchableOpacity onPress={() => { signOutUser() & navigation.navigate('login')}}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: 'black',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
})
