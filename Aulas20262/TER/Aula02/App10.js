import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Estilos = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer1: {
    backgroundColor: 'red', flex: 3
  },
  subContainer2: {
    backgroundColor: 'yellow', flex: 5
  },
  subContainer3: {
    backgroundColor: 'orange', flex: 2
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