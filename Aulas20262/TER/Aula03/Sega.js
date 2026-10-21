import React from 'react';
import { View, Text, Image } from 'react-native';
import Estilos from '../Estilos';

const Sega = () => {
  return(
    <View style={ Estilos.principal }>
      <Image
        source={ require('../assets/logoSega.png') }
        style={ Estilos.logo }
      />

      <Text style={ Estilos.paragrafo }>Sega Corporation é uma desenvolvedora e publicadora japonesa de jogos eletrônicos e consoles sediada em Tóquio, possuindo ramos internacionais sediados em Irvine nos Estados Unidos e em Londres no Reino Unido.</Text>
    </View>
  )
}

export default Sega