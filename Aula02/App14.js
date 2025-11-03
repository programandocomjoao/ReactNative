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
      <View style={{ backgroundColor: 'red', height: 75 }}></View>
      <View style={{ backgroundColor: 'yellow', height: 75 }}></View>
      <View style={{ backgroundColor: 'orange', height: 75 }}></View>
    </View>
  )
}

export default App