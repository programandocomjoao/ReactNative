import React from 'react'
import { View, StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
})

const App = () => {
  return(
    <View style={ estilos.container }>
      <View style={{ backgroundColor: 'red', width: 50 }}></View>
      <View style={{ backgroundColor: 'yellow', width: 100 }}></View>
      <View style={{ backgroundColor: 'orange', width: 150 }}></View>
    </View>
  )
}

export default App