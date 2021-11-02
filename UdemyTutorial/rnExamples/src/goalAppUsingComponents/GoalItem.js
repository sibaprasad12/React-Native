import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Button } from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.container}  >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
      <TouchableOpacity style={{ flex:1, height: 20, margin: 10 }} onPress={props.onDelete.bind(this, props.id)} >
          <Text style={{justifyContent: "center", 
  alignItems: "center"}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "row"
  },
  listItem: {
    flex: 5,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem;
