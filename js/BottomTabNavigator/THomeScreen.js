import React from 'react'
import {Text, View,StyleSheet,Image,Button} from 'react-native'
import { createBottomTabNavigator  } from 'react-navigation'


export default class THomeScreen extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            < View style={style.container} >
                <Text>THomeScreen</Text>
                <Button title='to TSettingPage' onPress={ ()=> this.props.navigation.navigate('TDetails') } />

                <Image  style={{width:100,height:100,backgroundColor:'#FF0000'}} source={{uri:'https://img-blog.csdn.net/20160626191347891'}} />

                <Image style={{width:100,height:100}} source={require('../../img/case.png')} />
            </View>
        );
    }


}



const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})