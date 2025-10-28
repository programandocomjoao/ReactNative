import React from 'react'
import { Text, View, StyleSheet, SectionList } from 'react-native'

const estilos = StyleSheet.create({
  container: { 
    flex: 1,
    paddingTop: 25,
    backgroundColor: 'silver'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 25
  },
  secao: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'gray',
    color: 'white'
  }
})

const App = () => {
  return(
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Lista de Games</Text>

      <SectionList
        sections = {[
          { title: 'Atari', data: ['Seaquest', 'Enduro', 'River Raid'] },
          { title: 'Nintendo', data: ['Super Mario Bros 3', 'Super Mario Bros', 'Yo! Noid', 'Felix, The Cat', 'Tiny Toons'] },
          { title: 'Master System', data: ['Sonic The Hedgehog', 'Alex Kid', 'Jogos de Verão', 'Double Dragon'] }
        ]}

        renderItem = {
          ({item}) => <Text style={ estilos.item }>{item}</Text>
        }

        renderSectionHeader = {
          ({section}) => <Text style={ estilos.secao }>{section.title}</Text>
        }
      />
    </View>
  )
}

export default App