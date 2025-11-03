import React from 'react'
import { View, StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const App = () => {
  return(
    <View style={ estilos.container }>
      <View style={{ backgroundColor: 'red', width: 50, height: 75, alignSelf: 'flex-start'}}></View>
      <View style={{ backgroundColor: 'yellow', width: 100, height: 125 }}></View>
      <View style={{ backgroundColor: 'orange', width: 150, height: 175, alignSelf: 'flex-end' }}></View>
    </View>
  )
}

export default App