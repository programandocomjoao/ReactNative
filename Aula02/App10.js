import React from 'react'
import { Text, View, StyleSheet, SectionList } from 'react-native'

const estilos = StyleSheet.create({
  container: { 
    flex: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
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
  },
  rodape: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
})

const App = () => {
  return(
    <View style={ estilos.container }>
      <View style={{ backgroundColor: 'black', flex: 2, justifyContent: 'center' }}>
        <Text style={ estilos.titulo }>Lista de Games</Text>
      </View>

      <View style={{ backgroundColor: 'white', flex: 7 }}>
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

      <View style={{ backgroundColor: 'black', flex: 1, justifyContent: 'center' }}>
        <Text style={ estilos.rodape }>2025 &copy; Todos os direitos reservados</Text>
      </View>
    </View>
  )
}

export default App