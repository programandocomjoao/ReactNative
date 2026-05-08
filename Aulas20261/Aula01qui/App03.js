import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Estilos from './components/Estilos'

class App extends Component {
  state = {
    contador: 0
  }

  contar = () => {
    this.setState({ contador: this.state.contador + 1 })
  }

  render() {
    return(
      <View style={ Estilos.principal }>
        <TouchableOpacity style={ Estilos.areaTouch } onPress={ this.contar }>
          <Text>Clique aqui</Text>
        </TouchableOpacity>

        <Text>Você clicou { this.state.contador
         } vezes</Text>
      </View>
    )
  }
}

export default App