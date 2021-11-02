import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default Card = props =>{
    return (
        <View style={{...styles.card, ...props.style}}>
        {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card : {
        shadowColor: 'black',
        shadowOffset:{width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    headerTitle: {
        color:'black',
        fontSize: 18
    }
});