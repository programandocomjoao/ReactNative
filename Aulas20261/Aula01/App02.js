import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'

const Estilos = StyleSheet.create({
  primaria: { flex: 1 },
  cabecalho: { flex: 1, backgroundColor: '#003399', alignItems: 'center', justifyContent: 'center' },
  conteudo: { flex: 4, backgroundColor: '#e0f6ff' },
  titulo: { color: 'white', fontSize: '16pt', fontWeight: 'bold', fontVariant: 'small-caps' },
  subtitulo: { color: 'red', fontSize: '13pt', fontWeight: 'bold' }
})

const Game = (props) => {
  return(
    <>
      <Text style={ Estilos.subtitulo }>{ props.titulo }</Text>

      <FlatList
        data={[
          { dado: `Ano de lançamento: ${props.ano}` },
          { dado: `Console: ${props.console}` }
        ]}

        renderItem={
          ({item}) => <Text>{item.dado}</Text>
        }
      />
    </>
  )
}

const App = () => {
  return (
    <View style={ Estilos.primaria }>
      <View style={ Estilos.cabecalho }>
        <Text style={ Estilos.titulo }>Games Clássicos</Text>
      </View>

      <ScrollView style={ Estilos.conteudo }>
        <Game titulo="Futebol" ano="1977" console="Telejogo" />
        <Game titulo="Come-Come!" ano="1982" console="Odyssey" />
        <Game titulo="Seaquest" ano="1983" console="Atari 2600" />
        <Game titulo="Super Mario Bros" ano="1985" console="Nintendo(NES)" />
        <Game titulo="Sonic The Hedgehog" ano="1991" console="Master System" />
        <Game titulo="Donkey Kong Country" ano="1994" console="Super Nintendo" />
      </ScrollView>
    </View>
  )
}

export default App