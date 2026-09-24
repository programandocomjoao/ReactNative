import React from 'react'
import { View, Text } from 'react-native'
import Estilos from './Estilos02'

const Titulo = () => {
  return(
    <View style={ Estilos.cabecalho }>
      <Text style={ Estilos.titulo }>Games Clássicos</Text>
    </View>
  )
}

const Game = () => {
  return(
    <View style={ Estilos.conteudo }>
      <Text style={ Estilos.subtitulo }>Seaquest</Text>
      <Text>Ano de lançamento: 1983</Text>
      <Text>Console: Atari 2600</Text>
    </View>
  )
}

const App = () => {
  return(
    <View style={ Estilos.principal }>
      <Titulo />
      <Game />
    </View>
  )
}

export default App