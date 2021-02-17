import React from "react";
import {StyleSheet, TextInput, View} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

import colors from "../utils/colors";

export default function Form(props) {

    //Destructuring - nos llegan funciones que actualizan el estado de las constantes de app.js 
    const {setCapital, setInterest, setMonths} = props;

    return (
        <View style={styles.viewForm}>

            <View style={styles.viewInputs}>
                <TextInput 
                    placeholder="Cantidad a pedir" 
                    keyboardType="numeric" /**para cambiar el tipo de teclado que se despliega */
                    style={styles.input}
                    //e es el evento y e.nativeEvent.text nos da el valor del textInput
                    //setCapital es la función recibida por props del componente padre
                    onChange={(e) => setCapital(e.nativeEvent.text)} /**Se envían los datos del componente hijo(este)al padre (app.js) en el cual se actualizan las constantes */
                    />

                <TextInput 
                    placeholder="Interés %" 
                    keyboardType="numeric"
                    style={[styles.input, styles.inputPercentage]} /**Se envuelven los estilos en un array para poder poner más de 1 estilo */
                    onChange={(e) => setInterest(e.nativeEvent.text)} /**Se envían los datos del componente hijo(este)al padre (app.js) en el cual se actualizan las constantes */
                    />
            </View>
            
            <RNPickerSelect
            /**Le damos la constante entera porqué decidirá si poner el estilo de IOS o Android */
                style={pickerSelectStyles}
                onValueChange={(value) => setMonths(value)}
               //sería la opcíon por defecto que aparece 
                placeholder={
                    {
                        label: 'Selecciona los plazos...',
                        value: ''
                    }
                }
                items={[
                    { label: '3 meses', value: 3 },
                    { label: '6 meses', value: 6 },
                    { label: '12 meses', value: 12 },
                    { label: '24 meses', value: 24 },
                ]}
                useNativeAndroidPickerStyle={false} /**Si no se pone esto no cambia el color de fondo en el picker de Android */
            />
                      
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: 0,
        width:"85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center",
    },

    viewInputs: {
        flexDirection: 'row', //para que se pongan los inputs uno al lado del otro
    },

    input: {
        height: 50,
        backgroundColor: "#ffff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 10,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20,
    }, 

    inputPercentage: {
        width: "40%",
        marginLeft: 5
    }
});

//Constante para dar un estilo dependiendo de si es IOS o Android. (Los nombres de inputIOS e inputAndroid tienen q ser así)
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 4,
        color: "black",
        paddingRight: 20,
        backgroundColor: "#fff",
        marginLeft: -5,
        marginRight: -5.
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: "#fff",
    }
});
