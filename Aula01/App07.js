import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

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
  }
})

const App = () => {
  return(
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Lista de Games</Text>

      <FlatList
        data = {[
          {game: 'Seaquest'},
          {game: 'Enduro'},
          {game: 'River Raid'},
          {game: 'Super Mario Bros 3'},
          {game: 'Super Mario Bros'},
          {game: 'Yo! Noid'},
          {game: 'Sonic The Hedgehog'},
          {game: 'Alex Kid'},
          {game: 'Jogos de Verão'},
        ]}

        renderItem = {
          ({item}) => <Text style={ estilos.item }>{item.game}</Text>
        }
      />
    </View>
  )
}

export default App