import React from 'react'
import { View, Text } from 'react-native'
import Estilos from './Estilos03'

const Titulo = () => {
  return(
    <View style={ Estilos.cabecalho }>
      <Text style={ Estilos.titulo }>Games Clássicos</Text>
    </View>
  )
}

const Game = (props) => {
  return(
    <View style={ Estilos.conteudo }>
      <Text style={ Estilos.subtitulo }>{ props.titulo }</Text>
      <Text>Ano de lançamento: { props.ano }</Text>
      <Text>Console: { props.console }</Text>
    </View>
  )
}

const App = () => {
  return(
    <View style={ Estilos.principal }>
      <Titulo />

      <View style={ Estilos.games }>
        <Game titulo="Futebol" ano="1977" console="Telejogo" />
        <Game titulo="Come-Come!" ano="1982" console="Magnavox Odyssey" />
        <Game titulo="Seaquest" ano="1983" console="Atari 2600" />
        <Game titulo="Super Mario Bros" ano="1985" console="Nintendo (NES)" />
        <Game titulo="Sonic The Hedgehog" ano="1991" console="Master System" />
      </View>
    </View>
  )
}

export default App