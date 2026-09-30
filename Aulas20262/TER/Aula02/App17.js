import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  subContainer1: {
    backgroundColor: 'red', width: 100, height: 100
  },
  subContainer2: {
    backgroundColor: 'yellow', width: 100, height: 100
  },
  subContainer3: {
    backgroundColor: 'orange', width: 100, height: 100
  },
  subContainer4: {
    backgroundColor: 'violet', width: 100, height: 100
  },
  subContainer5: {
    backgroundColor: 'purple', width: 100, height: 100
  },
  subContainer6: {
    backgroundColor: 'pink', width: 100, height: 100
  },
  subContainer7: {
    backgroundColor: 'blue', width: 100, height: 100
  },
  subContainer8: {
    backgroundColor: 'green', width: 100, height: 100
  },
  subContainer9: {
    backgroundColor: 'darkblue', width: 100, height: 100
  },
  subContainer10: {
    backgroundColor: 'darkgreen', width: 100, height: 100
  },
  subContainer11: {
    backgroundColor: 'brown', width: 100, height: 100
  },
})

const App = () => {
  return(
    <View style={ Estilos.container }>
      <View style={ Estilos.subContainer1 }></View>
      <View style={ Estilos.subContainer2 }></View>
      <View style={ Estilos.subContainer3 }></View>
      <View style={ Estilos.subContainer4 }></View>
      <View style={ Estilos.subContainer5 }></View>
      <View style={ Estilos.subContainer6 }></View>
      <View style={ Estilos.subContainer7 }></View>
      <View style={ Estilos.subContainer8 }></View>
      <View style={ Estilos.subContainer9 }></View>
      <View style={ Estilos.subContainer10 }></View>
      <View style={ Estilos.subContainer11 }></View>
    </View>
  )
}

export default App