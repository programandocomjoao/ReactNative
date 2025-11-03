import React from 'react'
import { View, StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
})

const App = () => {
  return(
    <View style={ estilos.container }>
      <View style={{ backgroundColor: 'red', width: 50, height: 75 }}></View>
      <View style={{ backgroundColor: 'yellow', width: 100, height: 125 }}></View>
      <View style={{ backgroundColor: 'orange', width: 150, height: 175 }}></View>
    </View>
  )
}

export default App