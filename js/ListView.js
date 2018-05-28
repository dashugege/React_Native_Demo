import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import RefreshListView , {RefreshState} from "./RefreshListView";



type Props = {};

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

export default class ListView extends Component<Props> {


    constructor(props){
        super(props)
        this.state = {
            dataArray : [],
            refreshState: RefreshState.Idle,
        }
        this.page = 1 ;
    }

    render() {
        return (
            <View style={styles.container}>

                <RefreshListView
                                refreshState={ this.state.refreshState}
                                 data={this.state.dataArray}
                                 renderItem={this.renderItemView}
                                 keyExtractor={(item, index) => index.toString()}
                                 onHeaderRefresh={this.onHeaderRefresh}
                                 onFooterRefresh={this.onFooterRefresh}
                                style={{backgroundColor:'#FFF'}}
                                footerRefreshingText= '玩命加载中'
                                footerFailureText = '我擦嘞，居然失败了'
                                footerNoMoreDataText= '-我是有底线的-'
                                footerEmptyDataText= '-好像什么东西都没有-'
                />

            </View>
        );
    }

    componentWillMount() {
        this.onHeaderRefresh();
    }




    onHeaderRefresh = () =>{
        this.setState({
            refreshState:RefreshState.HeaderRefreshing,
        });
        this.page = 1 ;
        this.loadData(1,false);
    };

    onFooterRefresh = () =>{

        this.setState({
            refreshState:RefreshState.FooterRefreshing,
        });
        this.page++;
        this.loadData(this.page,true);
    };

    renderItemView = ({ item }) => {
        return (
            <View style={{height:113 , backgroundColor:'white' ,flexDirection:'column'} }>
                <View style={{height:100 , backgroundColor:'white' , marginTop:6,marginBottom:6,flexDirection:'row'} }>
                    <Image style={{ width:100,height:100 ,backgroundColor:'#EDEDED',
                        resizeMode: Image.resizeMode.cover , margin:10}} source={{uri:item.value.image}}
                    />
                    <View style={{height:100 , backgroundColor:'white' , marginTop:10,marginLeft:10,}}>
                        <Text style={{color:'black',fontSize:14}}>{item.value.title}</Text>
                        <Text style={{color:'black',fontSize:14}}>{item.value.binding}</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'#666',height:1,width:width}}/>
            </View>

        );
    };


    loadData(page,loadMore){
        let start = (page - 1)*20 ;
        let path = 'https://api.douban.com/v2/book/search?start='+ start +'&count=20&tag=信息';
        fetch(path)
            .then((response) => response.json() )
            .then((responseData) => {
                let data = responseData.books ;
                let temp = page == 1 ? [] : this.state.dataArray ;
                let i = temp.length ;
                data.map(function (item) {
                    temp.push({
                        key: i,
                        value: item,
                    });
                    i++;
                });

                this.setState({
                    dataArray: temp,
                    refreshState : RefreshState.Idle ,
                });
            }).catch((error) =>{
                this.page--;
                alert(error)
        }).done()
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