import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Importa tus imágenes locales aquí
import image5 from './assets/adobadas.png';
import image2 from './assets/flamin.webp';
import image3 from './assets/jalapeño.png';
import image4 from './assets/crema.png';
import image1 from './assets/sal.webp';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <ScrollView contentContainerStyle={styles.imageContainer}>
        {[
          { id: 1, source: image1 },
          { id: 2, source: image2 },
          { id: 3, source: image3 },
          { id: 4, source: image4 },
          { id: 5, source: image5 },
        ].map((image) => (
          <TouchableOpacity key={image.id}>
            <Image style={styles.image} source={image.source} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      {/* Contenido de la pantalla de login aquí */}
    </View>
  );
};

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN UP</Text>
      {/* Contenido de la pantalla de sign up aquí */}
    </View>
  );
};

const ProductosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PRODUCTOS</Text>
      {/* Contenido de la pantalla de productos aquí */}
    </View>
  );
};

const ContactoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONTACTO</Text>
      {/* Contenido de la pantalla de contacto aquí */}
    </View>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        {/* Coloca aquí la imagen para el encabezado del Drawer */}
        <Image
          style={styles.drawerImage}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Sabritas-logo.png' }}  // Reemplaza con la URL correcta o utiliza una imagen local si lo deseas
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const principal = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="sign-in" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Sign Up"
          component={SignUpScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="user-plus" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Productos"
          component={ProductosScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Contacto"
          component={ContactoScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="envelope" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#8B0000',
  },
  title: {
    color: 'yellow',
    fontSize: 24,
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,  // Ajusta el tamaño según tus preferencias
    height: 172,  // Ajusta el tamaño según tus preferencias
    borderRadius: 10,
    marginVertical: 10,
  },
  drawerHeader: {
    alignItems: 'center',
    padding: 20,
  },
  drawerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default principal;
