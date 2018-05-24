/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
    TextInput,
    FlatList,
    Button
} from 'react-native';



export default class TextInputComponent extends Component {

    constructor(prop){
        super(prop)
        this.state= {
            text:'',
            dataArray:[],
        }
    }


    handlerPress(){

        fetch('http://lf.snssdk.com/api/news/feed/v46/',{
            method:'GET',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }) .then((response) => response.json())
            .then((responseJson) => {
               let data =  responseJson.data ;
                let dataBlob = [];
                let i = 0;
               data.map(function (item) {
                   dataBlob.push(item)
                   i++;
               })
                this.setState({
                    dataArray:dataBlob,
                });

            })
            .catch((error) => {
                alert(error)
            });


    }

    renderItemView({item}) {
        return (
            <View>
                <Text style={{flex:1}}>{JSON.parse(item.content).abstract} </Text>
            </View>
        );
    }


  render() {



    return (
        <View style={{flex:1 , flexDirection:'column'}}>
          <TextInput style={{height:40,borderColor:'gray',borderWidth:1}}
                     onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                     maxLength={40}
                     editable={true} keyboardType={'numeric'} />
            < Text style={{width:100,height:40}} title="input" ref = "input"/>
            <Button style={{width:100,height:40} } title='click' onPress={
                ()=>this.handlerPress()
            }/>
            <FlatList
                data={this.state.dataArray}
                renderItem = {
                   this.renderItemView
                }
                keyExtractor = {
                    (item,iii) => iii
                }

            />
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container : {
        flex:1,
        paddingTop:20
    },
    item:{
        padding:10,
        fontSize:18,
        height:44
    }
});