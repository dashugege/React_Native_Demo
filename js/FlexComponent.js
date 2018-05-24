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



export default class FlexComponent extends Component {




  render() {
    return (
        <View style={{flex:1 , flexDirection:'row',justifyContent:'center',alignItems:'flex-end'}}>
            <Text style={{width:100 ,height:100,  backgroundColor: 'powderblue'}}>111111</Text>
            <Text style={{width:100 ,height:100,  backgroundColor: 'skyblue'}}>22222222</Text>
            <Text style={{width:100 ,height:100,  backgroundColor: 'red'}}>33333333</Text>
        </View>
    );
  }
}


