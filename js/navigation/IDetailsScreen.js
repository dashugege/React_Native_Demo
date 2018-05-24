import React from 'react'
import {View, Text ,  Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'


export default class IDetailsScreen extends React.Component {

    //设置导航栏标题  固定写法  可以换成参数传递
    /*
    static navigationOptions = {
        title: 'this is DetailsScreen',
    };
    */
    // 页面标题 动态传递
    static navigationOptions = ({  navigation }) =>{
            const { params } = navigation.state ;
            return {
                title : params ? params.title : 'other title'
            }
    };

    render(){
        const { params } = this.props.navigation.state;
        const  name = params ? params.name : null
        const age = params ? params.age : 0

        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text> Details Screen </Text>
                <Text> this is last page params name : { name } age : { age }</Text>
                <Button title='go back' onPress={ ()=> this.props.navigation.goBack() } />
                <Button title='update title' onPress={ ()=> this.props.navigation.setParams({title:'update title'}) }/>
                <Button title='to custom navigation page' onPress={ ()=> {
                    this.props.navigation.navigate('Custom');
                }} />
            </View>
        );
    }

}
