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
export default class ListView extends Component<Props> {


    constructor(props){
        super(props)
        this.state = {
            dataArray : [

            ]
            ,
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{flexDirection:'row',justifyContent:'flex-start',backgroundColor:'white'}}>

                    <Button style={{width:100,height:40}} title="点击获取网络数据" onPress={this.onButtonPress} />

                </View>



                <FlatList style={{flex:1}}
                          data={this.state.dataArray}
                          renderItem = {this.renderItemView}
                          keyExtractor={(item, index) => index.toString()}
                />

            </View>
        );
    }

    onButtonPress = () => {
        fetch('http://api.github.com/search/repositories?q=javascript&sort=stars')
            .then((response) => response.json() )
            .then((responseData) => {

                let data = responseData.items ;
                let temp = [];
                let i = 0;
                data.map(function (item) {
                    temp.push({
                        key: i,
                        value: item,
                    })
                    i++;
                })
                this.setState({
                    dataArray:temp
                })
            }).catch((error) =>{
            alert(error)
        }).done()

    };



    renderItemView = ({item}) => {
        return (
            <View style={{height:50 , backgroundColor:'#999999' , marginTop:10} }>
                <Text >{item.value.full_name}</Text>
                <Text >{item.value.name}</Text>
            </View>
        );
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