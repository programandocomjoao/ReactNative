import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const estilos = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botao: {
    alignItems: 'center',
    backgroundColor: '#dddddd',
    padding: 10,
    margin: 10
  }
})

class App extends Component {
  state = { contador : 0 }

  contar = () => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render() {
    return(
      <View style={ estilos.container }>
        <TouchableOpacity style={ estilos.botao } onPress={ this.contar }>
          <Text>Clique aqui</Text>
        </TouchableOpacity>

        <Text>Você clicou { this.state.contador } vezes</Text>
      </View>
    )
  }
}

export default App