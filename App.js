import React, { useState, useEffect } from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar, YellowBox, Button} from "react-native";
import colors from './src/utils/colors'; //Fichero con los colores
import Form from './src/components/Form.js';
import Footer from './src/components/Footer.js';
import ResultCalculation from './src/components/ResultCalculation.js';



YellowBox.ignoreWarnings(["Picker has been extracted"]); //Para eliminar los warnings amarillos

export default function App() {
/** [Variable q devuelve el valor - Funcion que actualiza el valor]  */
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);

  const [total, setTotal] = useState(null)

  const [errorMessage, seterrorMessage] = useState('')

  //Ese useEffect se ejecutará cuando se monte el app.js y se volverá a ejecutar cuando cambie el valor de
  //cualquier estado que se le ponga en el array
  useEffect(() => {
    //if simplificado, si campos no vacios ejecuta calculate sino reset
    if(capital && interest && months) calculate();
    else reset();

  }, [capital, interest, months])

  //Funcion
  const calculate = () =>{
    reset(); //cada vez q se ejecute se limpian los errores
    if(!capital) {
      seterrorMessage("Añade la cantidad que quieres solicitar");
    } else if(!interest) {
      seterrorMessage("Añade el interés del préstamo");
    } else if(!months) {
      seterrorMessage("Selecciona los meses a pagar");
    } else {
      const i = interest / 100;
      const fee = capital / ((1-Math.pow(i + 1, - months)) / i );
      
      //La const Total tendrá dentro dos valores a los cuales se accederán usando total.MonthlyFee o total.totalPayable
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.',',')
      })

    }
  }

  const reset = () => {
    seterrorMessage("");
    setTotal(null);
  }

  return (
    /**Fragment <> */
    <> 
    <StatusBar barStyle="light-content"/>{/**Componente de la status bar, la cual le cambiamos a light content para que se vea en blanco la hora y demás. */}

    {/**Safe area no coge los espacios de arriba y abajo para que no se pongan en la parte del notch*/}
    <SafeAreaView style={styles.safeArea}>
       <View style={styles.background}/>
       <Text style={styles.titleApp}>Cotizador de préstamos</Text>
       <Form 
       /**Se le pasa por props las funciones que actualizan el valor de las const declaradas arriba */
          setCapital={setCapital} 
          setInterest={setInterest} 
          setMonths={setMonths} />
    </SafeAreaView>

    <ResultCalculation 
      errorMessage={errorMessage}
      capital={capital}
      interest={interest}
      months={months}
      total={total}
    />

    <Footer calculate={calculate}/>

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