import React from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'

const Estilos = StyleSheet.create({
  principal: {
    flex: 1
  },
  cabecalho: {
    flex: 2,
    backgroundColor: '#003399',
    alignItems: 'center',
    justifyContent: 'center'
  },
  conteudo: {
    flex: 7
  },
  rodape: {
    flex: 1,
    backgroundColor: '#eeeebb',
    borderTop: '#003399 2px solid',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
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
    fontSize: 18,
    padding: 10
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
      <Text style={ Estilos.titulo }>Games Retrô</Text>
    </View>
  )
}

const Conteudo = () => {
  return(
    <View style={ Estilos.conteudo }>
      <SectionList
        sections = {[
          { title: 'Atari 2600', data: ['Seaquest', 'Enduro', 'River-Raid', 'Moonpatrol'] },
          { title: 'Nintendo (NES)', data: ['Super Mario Bros', 'Ninja Gaiden', 'Tartarugas Ninjas II'] },
          { title: 'Master System', data: ['Sonic The Hedgehog', 'Alex Kid in The Miracle World', 'Double Dragon'] },
          { title: 'Mega Drive', data: ['Altered Beast', 'Castle of Ilusion'] },
          { title: 'Super Nintendo (SNES)', data: ['Super Mario World', 'Donkey Kong Country', 'Top Gear'] }
        ]}

        renderSectionHeader = {
          ({section}) => <Text style={ Estilos.secao }>{ section.title }</Text>
        }

        renderItem={
          ({item}) => <Text style={ Estilos.item }>{ '\u2022' } { item }</Text>
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
    <View style={ Estilos.principal }>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  )
}

export default App