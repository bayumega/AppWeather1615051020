import React from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';

import Layar from './src/comp/Cuaca';

export default class App extends React.Component {
  render() {
    return (
      <Layar/>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#E8EAF6'
  }
});