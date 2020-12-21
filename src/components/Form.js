import React from "react";
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'; //import del select de: https://www.npmjs.com/package/react-native-picker-select

import colors from "../utils/colors";

export default function Form() {
    return (
        <View style={styles.viewForm}>

            <View style={styles.viewInputs}>
                <TextInput 
                    placeholder="Cantidad a pedir" 
                    keyboardType="numeric" /**para cambiar el tipo de teclado que se despliega */
                    style={styles.input}
                    />

                <TextInput 
                    placeholder="Interés %" 
                    keyboardType="numeric"
                    style={[styles.input, styles.inputPercentage]} /**Se envuelven los estilos en un array para poder poner más de 1 estilo */
                    />
            </View>

            <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
            />
           
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute",
        bottom: -90,
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


})