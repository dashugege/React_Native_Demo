import React from 'react'
import {View, Text,Button} from 'react-native'
import { createStackNavigator } from 'react-navigation'


export default class IHomeScreen extends React.Component{

    //设置导航栏标题 及样式 , 屏幕共享navigationOptions
    static navigationOptions = {
        title:'this is HomeScreen',
        // headerStyle:{
        //     backgroundColor:'#f11'
        // },
        // headerTintColor:'#fff',
        // headerTitleStyle:{
        //     fontWeight: 'bold',
        // }
    };

    render(){
        return (
            <View style={{flex:1, alignItems:'center',justifyContent:'center' }}>

                <Text>Home Screen</Text>
                <Button title='go to details screen' onPress={ this.toDetail } />

            </View>
        );
    }

    toDetail = () => {
        this.props.navigation.navigate('IDetails',
            // 第二个是参数 是可选的
            {
                name : 'soyoung',
                age  : '18',
                title: 'Detail'
            }
            );
    }

}

// export default createStackNavigator({
//     IHome:{ // this Home is route name
//         screen:IHomeScreen, // screen 是路由配置 唯一必要项
//     },
// })
