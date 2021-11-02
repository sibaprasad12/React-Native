import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import HeaderComponent from './HeaderComponent';
import StartGameScreen from './screens/StartGameScreen';

export default RootComponent = () =>{
    return (
        <View style={styles.screen}>
           <HeaderComponent title="SIbaprasad"/>
           <StartGameScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1
    },
    headerTitle: {
        color:'black',
        fontSize: 18
    }
});