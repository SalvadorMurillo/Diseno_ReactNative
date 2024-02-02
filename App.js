import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import principal from './HomeScreen.js';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Verifica las credenciales aquí
    if (email === 'salvador@gmail.com' && password === '12345') {
      navigation.navigate('Details');
    } else {
      alert('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
      <Image style={styles.logo} source={require('./sabritas.png')} />
      <Text style={styles.title}></Text>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#808080" />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#808080"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#808080" />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#808080"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      
      <Text style={styles.forgotPassword}>Olvidaste tu Contraseña?</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>

       <Text style={styles.forgotPassword}>Iniciar sesión vía</Text>

      <View style={styles.iconContainer}>
        <View style={styles.iconBackground}>
          <Icon name="apple" size={30} color="#000" />
        </View>
        <View style={styles.iconBackground}>
          <Icon name="google" size={30} color="#4285F4" />
        </View>
        <View style={styles.iconBackground}>
          <Icon name="facebook" size={30} color="#3b5998" />
        </View>
      </View>

      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}></Text>


      <Text style={styles.register}>
        No tienes una cuenta? <Text style={styles.registerHighlight}>Registro</Text>
      </Text>
    </View>
  );
};



const AppNavigator = createStackNavigator(
  {
    Home: LoginScreen,
    Details: principal,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#8B0000',
  },
  logo: {
    width: 178,
    height: 150,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingLeft: 10,
    width: '100%',
    borderRadius: 20,
  },
  input: {
    height: 40,
    flex: 1,
    marginLeft: 10,
  },
  forgotPassword: {
    color: 'white',
    alignSelf: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 10,
    alignItems: 'center',
    width: '100%',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  iconBackground: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },
  register: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 20,
  },
  registerHighlight: {
    color: '#FFD700',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});