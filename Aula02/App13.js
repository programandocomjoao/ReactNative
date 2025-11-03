import React from 'react'
import { View, StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

const App = () => {
  return(
    <View style={ estilos.container }>
      <View style={{ backgroundColor: 'red', width: 75, height: 75 }}></View>
      <View style={{ backgroundColor: 'yellow', width: 75, height: 75 }}></View>
      <View style={{ backgroundColor: 'orange', width: 75, height: 75 }}></View>
    </View>
  )
}

export default App