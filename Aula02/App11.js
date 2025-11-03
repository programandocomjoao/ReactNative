import React from 'react'
import { View, StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
})

const App = () => {
  return(
    <View style={ estilos.container }>
      <View style={{ backgroundColor: 'red', flex: 3 }}></View>
      <View style={{ backgroundColor: 'yellow', flex: 5 }}></View>
      <View style={{ backgroundColor: 'orange', flex: 2 }}></View>
    </View>
  )
}

export default App