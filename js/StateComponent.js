/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
    TouchableOpacity
} from 'react-native';



export default class StateComponent extends Component {

  constructor(props){
    super(props)
      this.state = {
        showText : true
      }
  }

    componentDidMount() {
      console.log("componentDidMount")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")

    }

    componentWillMount() {
        console.log("componentWillMount")

    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps")

    }

    componentWillUnmount() {
        console.log("componentWillUnmount")

    }


  render() {
    var text = this.state.showText == true ? 'Hello' : '';
    var buttonText = this.state.showText == true ? 'hiden' : 'show'
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>{text}</Text>
            <TouchableOpacity onPress={ ()=>{
              this.setState( previousState => {
                  return { showText: !previousState.showText };
              });
            } }>
                <Text style={styles.welcome} >{buttonText}</Text>
            </TouchableOpacity>
        </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
