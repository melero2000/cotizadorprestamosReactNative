import React from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar, YellowBox} from "react-native";
import colors from './src/utils/colors'; //Fichero con los colores
import Form from './src/components/Form.js';

YellowBox.ignoreWarnings(["Picker has been extracted"]); //Para eliminar los warnings amarillos

export default function App() {
  return (
    /**Fragment <> */
    <> 
    <StatusBar barStyle="light-content"/>{/**Componente de la status bar, la cual le cambiamos a light content para que se vea en blanco la hora y demás. */}

    {/**Safe area no coge los espacios de arriba y abajo para que no se pongan en la parte del notch*/}
    <SafeAreaView style={styles.safeArea}>
       <View style={styles.background}/>
       <Text style={styles.titleApp}>Cotizador de préstamos</Text>
       <Form/>
    </SafeAreaView>

    <View>
      <Text>Resultado</Text>
    </View>

    <View>
    <Text>Footer</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#fff',
    marginTop: 15,
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR, //usamos la constante primary color que está en cel archivo colors importado arriba
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute", //posición absoluta para poder darle zIndex
    zIndex: -1 //zIndex -1 lo manda atrás
  }

})