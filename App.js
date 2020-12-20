import React from "react";
import {StyleSheet, View, Text, SafeAreaView} from "react-native";

export default function App() {
  return (
    /**Safe area no coge los espacios de arriba y abajo para que no se pongan en la parte del notch*/
    <SafeAreaView>
      <Text>Hola Juan</Text>      
    </SafeAreaView>
  )
}