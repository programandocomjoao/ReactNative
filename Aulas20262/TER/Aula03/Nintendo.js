import React from 'react';
import { View, Text, Image } from 'react-native';
import Estilos from '../Estilos';

const Nintendo = () => {
  return(
    <View style={ Estilos.principal }>
      <Image
        source={ require('../assets/logoNintendo.png') }
        style={ Estilos.logo }
      />

      <Text style={ Estilos.paragrafo }>Nintendo Co., Ltd. é uma desenvolvedora e publicadora japonesa de jogos eletrônicos e consoles sediada em Quioto, no Japão. Foi fundada em setembro de 1889 pelo artesão e empresário Fusajiro Yamauchi, e originalmente era uma fabricante de cartas de baralho tradicionais japonesas.</Text>
    </View>
  )
}

export default Nintendo