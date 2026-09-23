import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Estilos = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botao: {
    alignItems: 'center',
    backgroundColor: '#CCCCCC',
    padding: 10,
    marginBottom: 10
  }
})


class App extends Component {
  state = { contador: 0 }

  contar = () => {
    this.setState({ contador: this.state.contador + 1 })
  }

  render() {
    return(
      <View style={ Estilos.container }>
        <TouchableOpacity style={ Estilos.botao } onPress={ this.contar }>
          <Text>Clique aqui</Text>
        </TouchableOpacity>

        <Text>Você clicou { this.state.contador } vezes!</Text>
      </View>
    )
  }
}

export default App