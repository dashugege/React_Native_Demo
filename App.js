

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PropsComponent from "./js/PropsComponent";
import  IHomeScreen  from "./js/navigation/IHomeScreen";
import  IDetailsScreen   from "./js/navigation/IDetailsScreen";
import  CustomStackNavigator   from "./js/navigation/CustomStackNavigator";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const  RootStack  = createStackNavigator(
    {
        IHome:{
            screen:IHomeScreen,
        },
        IDetails:{
            screen:IDetailsScreen,
        },
        Custom : {
          screen:CustomStackNavigator
        }
    },// 第一个参数
    {
        initialRouteName:'IHome',
        navigationOptions:{
            headerStyle:{
                backgroundColor:'#f11'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontWeight: 'bold',
            }
        },
    } //第二个参数
);

type Props = {};
export default class App extends Component<Props> {
  render() {
      let params = {name:"xiaozhao",age:29}

      return (
          /*
      <View style={styles.container}>


        <PropsComponent name={"xiaoming"} age = {20}  />
        <PropsComponent {...params} />



      </View>
        */
          <RootStack />
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
