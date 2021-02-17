import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultCalculation(props) {

    const { capital, interest, months, total, errorMessage } = props;

    return (
        <View style={styles.content}>
            {/**ESTO ES UN IF, SI LLEGA ALGO CON TOTAL RENDERIZA EL <TEXT> */}
           {total && ( 
               <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                   
                   <DataResult 
                        title = "Cantidad solicitada:"
                        value = {`${capital} €`}
                   />

                    <DataResult 
                        title = "Interés %:"
                        value = {`${interest} %`}
                   />

                   <DataResult 
                        title = "Plazos :"
                        value = {`${months} meses`}
                   />
                    
                    <DataResult 
                        title = "Pago mensual :"
                        value = {`${total.monthlyFee} €`}
                   />

                   <DataResult 
                        title = "Total a pagar :"
                        value = {`${total.totalPayable} €`}
                   />


               </View>
           )}

            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>

        </View>
    )
}

//Componente interno para no repetir código, renderizará el resumen
function DataResult(props) {
    const {title, value} = props;

    return (
        <View style={styles.value}>
            <Text>{title} </Text>
            <Text>{value} </Text>
       </View>
    )
}

const styles = StyleSheet.create({
    error: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20
    },
    content: {
        marginTop: 20,
        marginHorizontal: 40,
    },

    boxResult: {
        padding: 30
    },

    title: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20
    },

    value: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    }

})
