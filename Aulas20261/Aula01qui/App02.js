import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const Estilos = StyleSheet.create({
  principal: { flex: 1 },
  cabecalho: { flex: 1, backgroundColor: '#003399', alignItems: 'center', justifyContent: 'center'},
  conteudo: { flex: 4, backgroundColor: '#e0f6ff', padding: 10 },
  titulo: { color: 'white', fontSize: '24pt', fontWeight: 'bold', fontFamily: 'Courier New', fontVariant: 'small-caps' },
  subtitulo: { color: 'red', fontWeight: 'bold', fontSize: '13pt', marginTop: 10 }
})

const Game = (props) => {
  return(
    <>
      <Text style={ Estilos.subtitulo }>Título: { props.titulo }</Text>
      <Text>Ano de lançamento: { props.ano }</Text>
      <Text>Console: { props.console }</Text>
    </>
  )
}

const App = () => {
  return(
    <ScrollView style={ Estilos.principal }>
      <View style={ Estilos.cabecalho }>
        <Text style={ Estilos.titulo }>Games Clássicos</Text>
      </View>

      <View style={ Estilos.conteudo }>
        <Game titulo="Come-Come!" ano="1982" console="Odyssey" />
        <Game titulo="Seaquest" ano="1983" console="Atari 2600" />
        <Game titulo="Super Mario Bros" ano="1985" console="Nintendo" />
        <Game titulo="Sonic The Hedgehog" ano="1991" console="Master System" />
        <Game titulo="Super Mario World" ano="1991" console="Super Nintendo" />
        <Game titulo="Sonic The Hedgehog" ano="1990" console="Mega Drive" />
      </View>
    </ScrollView>
  )
}

export default App