import React from 'react'
import {Text, View,StyleSheet , Button} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'


export default class TSettingsScreen extends React.Component{


    render(){
        return (
            <View style={style.container}>
                <Text>TSettingsScreen</Text>


                <Button title='to IHome Page' onPress={ ()=> this.props.navigation.navigate('TDetails') } />
            </View>
        );
    }



}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});