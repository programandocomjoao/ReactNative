import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  subcontainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  coluna: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icone: {
    width: 75,
    height: 75
  }
})

const App = () => {
  return(
    <View style={ estilos.container }>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('/assets/logoUnilasalle.png')} 
        style={{ width: 150, height: 47, marginTop: 30 }} />
      </View>

      <View style={ estilos.subcontainer }>
        <View style={[estilos.coluna, {backgroundColor: 'pink'}]}>
          <Image source={require('/assets/iconeEmail.png')} style={estilos.icone} />
        </View>
        <View style={[estilos.coluna, {backgroundColor: 'lightgreen'}]}>
          <Image source={require('/assets/iconeWhatsapp.png')} style={estilos.icone} />
        </View>
      </View>

      <View style={ estilos.subcontainer }>
        <View style={[estilos.coluna, {backgroundColor: 'lightblue'}]}>
          <Image source={require('/assets/iconeFacebook.png')} style={estilos.icone} />
        </View>
        <View style={[estilos.coluna, {backgroundColor: 'pink'}]}>
          <Image source={require('/assets/iconeInstagram.png')} style={estilos.icone} />
        </View>
      </View>
    </View>
  )
}

export default App