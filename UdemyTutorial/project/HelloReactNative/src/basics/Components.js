import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView, TextInput} from 'react-native';

export default Components = () =>{
    return(
        <ScrollView style={styles.container}>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>  
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    }
});


