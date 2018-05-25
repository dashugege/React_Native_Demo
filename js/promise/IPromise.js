import React from 'react'
import {View,Button,TouchableOpacity,Text, Image } from 'react-native'
import Frisbee from 'frisbee'
import axios from 'axios'



export default class IPromise extends React.Component{

    render(){
        return (
            <View style={{flex:1}}>

               <Button title='click 1' onPress={this.btn} />

                <Button title='frisbee get' onPress={this.get}/>
                <Button title='axios get' onPress={this.getaxios}/>

            </View>
        );
    }

    getaxios =()=>{

        axios.get('http://synewod.xinyangwang.net/api/bd/AuthOperates',
            {
                params:{
                    id:1111,
                    name:'aaaa'
                }
            })
            .then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
            console.log(error.toString());
        });
// post
        axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        }) .then(function (response) {
                console.log(response);
        }).catch(function (error) {
                console.log(error);
       });

    };

    get =()=>{

        // const es6promise = require('es6-promise');
        // es6promise.polyfill();

        const Frisbee = require('frisbee');
        const api = new Frisbee({
            baseURI: 'http://synewod.xinyangwang.net', // optional
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        (async()=>{
            try {
                let res = await api.post('/api/bd/AuthOperates');
                console.log('response', res.body);


            }catch (e) {
                throw e;
            }
        })();


    };

    btn =()=>{

        // let promise = new Promise(function (resolve, reject) {
        //     console.log('new promise');
        //     resolve();
        // });
        // promise.then(function () {
        //     console.log(' promise then ');
        // });
        // console.log(' promise hi ');

        this.loadImageAsy('http://img4.imgtn.bdimg.com/it/u=1665207864,746409922&fm=27&gp=0.jpg')
            .then(function (image) {
                console.log(image)
            },function (error) {
                console.log(error)
            });

    };

    loadImageAsy(url){

        return new Promise(function (resolve, reject) {

            const image = new Image();
            image.onload = function () {
                resolve(image);
            };
            image.error = function () {
                reject(new Error('error'));
            };
            image.src = url ;
        });

    }

    ipromise(){
        const  promise = new Promise(function (resolve, reject) {

            if(true){
                // resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”
                resolve(value);
            }else {
                // reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”
                reject(value);
            }

        });

        // promise 的then 函数 接受2个参数， 一个成功回调 一个失败回调 value 代表回调参数
        promise.then(function (value) {

        },function (error) {

        });

    }


     timeout(ms){

        return new Promise(function (resolve, reject) {
            alert('start promise'+ms)
            setTimeout(resolve,ms,'done');
        });
    }

    test(){
        // timeout(100).then(function (value) {
        //     console.log(value)
        // })
        alert('1')
    }



}