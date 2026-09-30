import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  subContainer1: {
    backgroundColor: 'red', height: 75
  },
  subContainer2: {
    backgroundColor: 'yellow', height: 75
  },
  subContainer3: {
    backgroundColor: 'orange', height: 75
  },
})

const App = () => {
  return(
    <View style={ Estilos.container }>
      <View style={ Estilos.subContainer1 }></View>
      <View style={ Estilos.subContainer2 }></View>
      <View style={ Estilos.subContainer3 }></View>
    </View>
  )
}

export default App