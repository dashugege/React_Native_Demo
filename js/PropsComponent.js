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
  View
} from 'react-native';

// 属性
// 1 从上一个页面中传值过来 <Text style={styles.container}>{this.props.name}! {this.props.age}</Text>
// 2 定义默认属性  static defaultProps = {name : "defalutName", age   : 10}
// 3 对属性进行约束和检查  static propTypes = {
//     name : PropTypes.string  ,
//     age  : PropTypes.number
//   }
// 4 props 延伸操作符
// let params = {name:"xiaozhao",age:29}
//  <PropsComponent {...params} />

export default class PropsComponent extends Component {
  static defaultProps = {
      name : "defalutName",
      age   : 10
  }

  static propTypes = {
    name : PropTypes.string  ,
    age  : PropTypes.number
  }

  render() {
    return (
        <Text style={styles.container}>{this.props.name} {this.props.age}</Text>
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
});
