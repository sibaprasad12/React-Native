import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import Card from "../Card";

export default StartGameScreen =>{
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Game Screen</Text>
            <Card style={styles.inputContainer}>
                <TextInput placeholder='Enter your number'/>
                <View style={styles.buttonCOntainer}>
                    <Button title="Reset" onPress={() =>{}}/>
                    <Button title="Confirm" onPress={() =>{}}/>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems:'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        marginTop: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset:{width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    buttonCOntainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent:'space-between',
        paddingHorizontal: 15
    }
});