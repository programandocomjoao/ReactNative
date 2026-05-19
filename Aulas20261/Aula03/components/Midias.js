import React from 'react'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native'
import Estilos from './Estilos'

const Midias = () => {
  return(
    <View style={ Estilos.container }>
      <View style={ Estilos.cabecalho }>
        <Image source={ require('../assets/logoUnilasalle.png') } style={ Estilos.logo } />
      </View>

      <View style={ Estilos.subcontainer }>
        <View style={ [Estilos.coluna, { backgroundColor: 'lightblue' }] }>
          <TouchableOpacity onPress={ () => Linking.openURL('https://www.unilasalle.edu.br/rj') }>
            <Image source={ require('../assets/iconeSite.png') } style={ Estilos.icone } />
          </TouchableOpacity>
        </View>
        <View style={ [Estilos.coluna, { backgroundColor: 'yellow' }] }>
          <TouchableOpacity onPress={ () => Linking.openURL('https://maps.app.goo.gl/U3KebEPfNiS333mz9') }>
            <Image source={ require('../assets/iconeMaps.png') } style={ Estilos.icone } />
          </TouchableOpacity>
        </View>
      </View>

      <View style={ Estilos.subcontainer }>
        <View style={ [Estilos.coluna, { backgroundColor: 'pink' }] }>
          <TouchableOpacity onPress={ () => Linking.openURL('mailto:joao.voigtlaender@lasalle.org.br') }>
            <Image source={ require('../assets/iconeEmail.png') } style={ Estilos.icone } />
          </TouchableOpacity>
        </View>
        <View style={ [Estilos.coluna, { backgroundColor: 'lightgreen' }] }>
          <TouchableOpacity onPress={ () => Linking.openURL('http://api.whatsapp.com/send?phone=5521967803455') }>
            <Image source={ require('../assets/iconeWhatsapp.png') } style={ Estilos.icone } />
          </TouchableOpacity>
        </View>
      </View>

      <View style={ Estilos.subcontainer }>
        <View style={ [Estilos.coluna, { backgroundColor: 'lightblue' }] }>
          <TouchableOpacity onPress={ () => Linking.openURL('https://www.facebook.com/unilasallerj/?locale=pt_BR') }>
            <Image source={ require('../assets/iconeFacebook.png') } style={ Estilos.icone } />
          </TouchableOpacity>
        </View>
        <View style={ [Estilos.coluna, { backgroundColor: 'pink' }] }>
          <TouchableOpacity onPress={ () => Linking.openURL('https://www.instagram.com/unilasallerj/?hl=pt') }>
            <Image source={ require('../assets/iconeInstagram.png') } style={ Estilos.icone } />
          </TouchableOpacity>
        </View>
      </View>

      <View style={ Estilos.rodape }>
        Todos os direitos reservados
      </View>
    </View>
  )
}

export default Midias