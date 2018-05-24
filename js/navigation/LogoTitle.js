import React from 'react'
import {View,Image} from 'react-native'

export default  class LogoTitle extends React.Component{

    // 替换系统默认的标题

    render(){
        return (
            <Image source={ require('./img/case_portrailt.png') } style={{width:40,height:40}} />
        );
    }

}