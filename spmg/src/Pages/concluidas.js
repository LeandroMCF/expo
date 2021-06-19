import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


export default class Concluidas extends Component {

  render() {
    return(
      <View style={styles.main}>
          <Text>concluidos</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
