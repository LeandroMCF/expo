import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import api from '../services/api';

export default class Consultas extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state =
    {
      listaConsulta: [],
      nomeP: '',
    }
  }

  buscarConsultas = async () => 
  {
    try 
    {
      const resposta = await api.get('/Consulta/prontuarios/7');
      const dados = resposta.data;
      this.setState({listaConsulta: dados});
    } 
    catch (error) 
    {
      console.log('erro')
    }
  };

  componentDidMount(){
    this.buscarConsultas();
  }

  render() {
    return(
      <View style={styles.main}>
        <View style={styles.header}>
          <Text>Bem vindo(a): {this.state.nomeP}</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.mainList}
          data={this.state.listaConsulta}
          keyExtractor={ item => item.idConsultas }
          renderItem={this.renderItem}
        />
      </View>
    )
  }

  renderItem = ({item}) => (
    <View style={styles.coteudo}>
        {this.setState({nomeP : item.idProntuarioNavigation.nome})}
        <Text>Data: {Intl.DateTimeFormat("pt-BR").format(new Date(item.dataConsulta))}</Text>
        <Text>Medico: {item.idMedicosNavigation.nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create
({
  main: 
  {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center'
  },

  mainList:
  {
    flex: 1,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
  },

  coteudo:
  {
    marginBottom: '25px',
  }
});