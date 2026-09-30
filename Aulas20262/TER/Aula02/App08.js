import React from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'

const Estilos = StyleSheet.create({
  container: {
    flex: 1
  },
  cabecalho: {
    flex: 2,
    backgroundColor: '#003399',
    justifyContent: 'center'
  },
  conteudo: {
    flex: 7
  },
  rodape: {
    flex: 1,
    backgroundColor: '#eeeebb',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '#003399 2px solid'
  },
  titulo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    fontVariant: 'small-caps'
  },
  nota: {
    fontWeight: 'bold',
    color: '#003399'
  },
  item: {
    padding: 10,
    fontSize: 18
  },
  secao: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#0080c0',
    color: 'white'
  }
})

const Cabecalho = () => {
  return(
    <View style={ Estilos.cabecalho }>
      <Text style={ Estilos.titulo }>Games</Text>
    </View>
  )
}

const Conteudo = () => {
  return(
    <View style={ Estilos.conteudo }>
      <SectionList
        sections={[
          { title: 'Atari 2600', data: ['Seaquest', 'Enduro', 'River-Raid', 'Pitfall']},
          { title: 'Nintendo (NES)', data: ['Super Mario Bros 3', 'Super Mario Bros', 'Ninja Gaiden'] },
          { title: 'Master System', data: ['Sonic The Hedgehog', 'Alex Kid in The Miracle World', 'Double Dragon'] },
          { title: 'Super Nintendo (SNES)', data: ['Super Mario World', 'Donkey Kong Country', 'Street Fighter II', 'Top Gear'] }
        ]}

      renderSectionHeader={
          ({section}) => <Text style={ Estilos.secao }>{ section.title }</Text>
        }

      renderItem={
          ({item}) => <Text style={ Estilos.item }>{'\u2022'} { item }</Text>
        }
      />
    </View>
  )
}

const Rodape = () => {
  return(
    <View style={ Estilos.rodape }>
      <Text style={ Estilos.nota }>Todos os direitos reservados</Text>
    </View>
  )
}

const App = () => {
  return(
    <View style={ Estilos.container }>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  )
}

export default App