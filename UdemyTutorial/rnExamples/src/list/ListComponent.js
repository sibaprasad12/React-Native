import React,{Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class ListComponent extends Component {

    state = {
        goals: [],
        goal : ''
      }

      goalInputHandler = (goal) => {
        this.setState({goal: goal})  
          this.state.goal = goal;
          console.log('Goal '+goal);
      }

      addGoalHandler = () => {
            this.setState({goals: [...this.state.goals,this.state.goal]});
            console.log(this.state.goals);
     }
    
    render(){
        return(
            <View style={styles.screen}>
            <View style={styles.inputContainer}>
              
              <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={this.goalInputHandler}
                value={this.state.goal}
              />

              <Button title="ADD" onPress={this.addGoalHandler} />
              
            </View>
            <Text style={styles.titleText}>
              {this.state.goal}
            </Text>
            <View />
            {this.state.goals.map((goal) => <Text> {goal} </Text> )}
          </View>
        );
    };
}

const styles = StyleSheet.create({
    screen: {
      padding: 50
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10
    },
    baseText: {
      fontFamily: "Cochin"
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    }
  });

export default ListComponent;