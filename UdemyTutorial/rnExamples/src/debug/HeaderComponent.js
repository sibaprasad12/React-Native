import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default HeaderComponent = props =>{
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 70,
        paddingTop: 10,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color:'black',
        fontSize: 18
    }
});