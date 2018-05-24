import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default class loginPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            phone:'',
            password:''
        }
    }


    updateNum(newText) {
        this.setState( (state) => {
            return {
                phone:newText,
            } ;
        } );
    }

    updatePassword(newText){
        this.setState( (state) => {
            return {password:newText};
        });
    }



    render()
        {
        return (
            <View style={style.containerStyle}>
                <TextInput style={style.textinputPhoneStyle} placeholder='请输入手机号' onChangeText={ (newText) => this.updateNum(newText)  } />
                <Text style={style.textPromptStyle}>你输入的手机号码是：{this.state.phone} : {this.state.password}</Text>
                <TextInput style={style.textInputPasswordStyle} placeholder='请输入密码' password={true} onChangeText={ (newText) => this.updatePassword(newText) } />
                <Button style={style.btnStyle} title='确定' onPress={this.login} />
            </View>
        );
    }


     login =() => {
        alert('login btn')
    }


    // React Native 渲染时 会调用这个函数  默认返回true  false ，改变状态 则不会重新渲染
     shouldComponentUpdate() {
        return true;
    }

    test(){
        //强制渲染
        this.forceUpdate();
    }


}

const style = StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    textinputPhoneStyle:{
        height:45,
        backgroundColor:'#FFFFFF'
    },
    textPromptStyle:{
        height:45,
    },
    textInputPasswordStyle:{
        height:45,
    },
    btnStyle:{
        height:45,
    }
});