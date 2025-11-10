import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'

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

const Midias = () => {
  return(
    <View style={ estilos.container }>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/logoUnilasalle.png')} 
        style={{ width: 150, height: 47, marginTop: 30 }} />
      </View>

      <View style={ estilos.subcontainer }>
        <View style={[estilos.coluna, {backgroundColor: 'lightblue'}]}>
          <TouchableOpacity 
            onPress={() => Linking.openURL('https://www.unilasalle.edu.br/rj')}>  
            <Image source={require('../assets/iconeSite.png')} style={estilos.icone} />
          </TouchableOpacity>
        </View>
        <View style={[estilos.coluna, {backgroundColor: 'yellow'}]}>
          <TouchableOpacity 
            onPress={() => Linking.openURL('https://maps.app.goo.gl/U3KebEPfNiS333mz9')}>
            <Image source={require('../assets/iconeMaps.png')} style={estilos.icone} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={ estilos.subcontainer }>
        <View style={[estilos.coluna, {backgroundColor: 'pink'}]}>
          <TouchableOpacity 
            onPress={() => Linking.openURL('mailto:joao.voigtlaender@lasalle.org.br')}>
            <Image source={require('../assets/iconeEmail.png')} style={estilos.icone} />
          </TouchableOpacity>
        </View>
        <View style={[estilos.coluna, {backgroundColor: 'lightgreen'}]}>
          <TouchableOpacity 
            onPress={() => Linking.openURL('http://api.whatsapp.com/send?phone=5521967803455')}>
            <Image source={require('../assets/iconeWhatsapp.png')} style={estilos.icone} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={ estilos.subcontainer }>
        <View style={[estilos.coluna, {backgroundColor: 'lightblue'}]}>
          <TouchableOpacity 
            onPress={() => Linking.openURL('https://www.facebook.com/unilasallerj/?locale=pt_BR')}>
            <Image source={require('../assets/iconeFacebook.png')} style={estilos.icone} />
          </TouchableOpacity>
        </View>
        <View style={[estilos.coluna, {backgroundColor: 'pink'}]}>
          <TouchableOpacity 
            onPress={() => Linking.openURL('https://www.instagram.com/unilasallerj/?hl=pt')}>
            <Image source={require('../assets/iconeInstagram.png')} style={estilos.icone} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1 }}></View>
    </View>
  )
}

export default Midias