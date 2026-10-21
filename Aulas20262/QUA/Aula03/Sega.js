import React from 'react'
import { View, Text, Image } from 'react-native'
import Estilos from '../Estilos'

const Sega = () => {
  return(
    <View style={ Estilos.principal }>
      <Image
        source={ require('../assets/logoSega.png') }
        style={ Estilos.logo }
      />

      <Text style={ Estilos.paragrafo }>Sega Corporation é uma desenvolvedora e publicadora japonesa de jogos eletrônicos e consoles sediada em Tóquio, possuindo ramos internacionais sediados em Irvine nos Estados Unidos e em Londres no Reino Unido. A empresa foi fundada em 1960 pelo norte-americano Martin Bromley, originalmente como duas companhias separadas chamadas Nihon Goraku Bussan e Nihon Kikai Seizō, que tinham a intenção de assumir os negócios da antiga Service Games of Japan, uma empresa especializada em máquinas caça-níqueis para bases militares.</Text>
    </View>
  )
}

export default Sega