import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableOpacity
} from 'react-native';


type Props = {};
export default class LifecycleComponent extends Component<Props> {


    constructor(props){
        super(props)
    }


    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{flexDirection:'row',justifyContent:'flex-start',backgroundColor:'white'}}>

                    <Button style={{width:100,height:40}} title="点击获取网络数据" onPress={this.onButtonPress} />

                </View>

            </View>
        );
    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    shouldComponentUpdate() {

    }

    componentWillUpdate(){

    }


    componentWillUnmount() {

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});