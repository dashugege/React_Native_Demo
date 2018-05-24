import React from 'react'
import {StyleSheet, Text, View,Image} from 'react-native'
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation'
import THomeScreen from './THomeScreen'
import TSettingsScreen from './TSettingsScreen'
import  TDetailsScreen from './TDetailsScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeStack = createStackNavigator(
    {
        THome:{
            screen:THomeScreen,
        },
        TDetails:{
            screen:TDetailsScreen,
        }
    }
);

const DetailStack = createStackNavigator(
    {
        TSettings : {
            screen:TSettingsScreen
        },
        TDetails:{
            screen:TDetailsScreen,
        }
    }
);
//  这里是 BottomTabNavigator 封装 StackNavigator
const TabNav = createBottomTabNavigator(
    {
        Home : {
            screen:HomeStack
        },
        Setting : {
            screen:DetailStack
        }
    },
    {
        navigationOptions:({ navigation }) =>({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                var iconName = '';
                if (routeName === 'Home') {
                    if(focused){
                        return <Image source={require('../../img/nav_work_pre.png')} style={{width:25,height:25}} />
                    }else {
                        return <Image source={require('../../img/nav_work_nor.png')} style={{width:25,height:25}} />
                    }
                } else{
                    if(focused){
                        return <Image source={require('../../img/nav_mine_pre.png')} style={{width:25,height:25}} />
                    }else {
                        return <Image source={require('../../img/nav_mine_nor.png')} style={{width:25,height:25}} />
                    }
                }
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                // return <Ionicons name={iconName} size={25} color={tintColor} />;

                // return <Image source={require('../../img/nav_data_nor.png')} style={{width:25,height:25}} />
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export  default class TApp extends React.Component {


    render(){
        return(
            <TabNav />
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

});
