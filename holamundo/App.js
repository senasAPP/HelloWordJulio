import React from "react";

import { Text, View, Image, Button, Alert, StyleSheet } from "react-native";

//importar imagenes locales              <Image source={image} style={styles.imagenes }/>
import image from './assets/aniversario.jpeg'

const MiApp = () => {
  return (
    <View style={styles.contenedor} >
      <Text style={styles.texto}>Prueba 1</Text>  

      <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png', }} style={styles.imagenes} />

      <Button title="Presioname" onPress={() => Alert.alert('Me has presionado')} />      

      
    </View>
    
  );
};

const styles= StyleSheet.create({
  contenedor: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#7e72ab" },
  texto:{fontSize:30, color: '#ffffff'},
  imagenes: { width: 200, height: 200, borderRadius: 10}
})

export default MiApp;