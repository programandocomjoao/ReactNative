import React from 'react'
import { View, Text, Image } from 'react-native'
import Estilos from '../Estilos'

const Nintendo = () => {
  return(
    <View style={ Estilos.principal }>
      <Image
        source={ require('../assets/logoNintendo.png') }
        style={ Estilos.logo }
      />

      <Text style={ Estilos.paragrafo }>Nintendo Co., Ltd. é uma desenvolvedora e publicadora japonesa de jogos eletrônicos e consoles sediada em Quioto, no Japão. Foi fundada em setembro de 1889 pelo artesão e empresário Fusajiro Yamauchi, e originalmente era uma fabricante de cartas de baralho tradicionais japonesas. A Nintendo continuou nesse ramo por mais de meio século, no caminho passando por períodos de sucesso e dificuldade, começando a se aventurar em novos negócios a partir da década de 1960.</Text>
    </View>
  )
}

export default Nintendo