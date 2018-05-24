import React from 'react';
import {View,Text,Button } from 'react-native';

export default class  CustomStackNavigator extends React.Component{
    // headerTitle 表示头部渲染需要用的标题组件，
    // 现在使用你自定义的组件 LogoTitle
    // headerTitle: <LogoTitle />,

    static navigationOptions = {
        headerRight: (
            <Button
                onPress={() => alert('这是个按钮!')}
                title="Info"
                color="#000"
            />
        ),

    };

    render(){
        return (
            <View>
                <Text> this is custom navigation options title</Text>
            </View>
        );
    }

}