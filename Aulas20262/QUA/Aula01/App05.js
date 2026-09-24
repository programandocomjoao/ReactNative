import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Estilos from './Estilos'

class Titulo extends Component {
  render() {
    return(
      <View style={ Estilos.cabecalho }>
        <Text style={ Estilos.titulo }>Consoles Retrô</Text>
      </View>
    )
  }
}

class Console extends Component {
  render() {
    return(
      <View style={ Estilos.conteudo }>
        <Text style={ Estilos.subtitulo }>Atari 2600</Text>
        <Text>Ano de lançamento: 1977</Text>
        <Text>Distribuidora no Brasil: Polivox</Text>
      </View>
    )
  }
}

class App extends Component {
  render() {
    return(
      <View style={ Estilos.principal }>
        <Titulo />
        <Console />
      </View>
    )
  }
}

export default App