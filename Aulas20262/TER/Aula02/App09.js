import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Estilos = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer1: {
    backgroundColor: 'red', width: 100, height: 100
  },
  subContainer2: {
    backgroundColor: 'yellow', width: 150, height: 150
  },
  subContainer3: {
    backgroundColor: 'orange', width: 200, height: 200
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