import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Consultas} from './src/Pages/consultas';
import {Concluidas} from './src/Pages/concluidas';
import {Canceladas} from './src/Pages/canceladas';

const bottomTab = createBottomTabNavigator();

export default class App extends Component {

  render(){
    return (
      <View style={styles.main}>
        <NavigationContainer>
          <bottomTab.Navigator>
            <bottomTab.Screen name="Consulta" component={Consultas} />
            <bottomTab.Screen name="Concluida" component={Concluidas} />
            <bottomTab.Screen name="Cancelada" component={Canceladas} />
          </bottomTab.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: '#F1F1F1'
  },
});