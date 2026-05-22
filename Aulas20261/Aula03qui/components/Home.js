import React from 'react'
import { View, Image, Text, Button } from 'react-native'
import Estilos from './Estilos'

const Home = ({ navigation }) => {
  return(
    <View style={ Estilos.principal }>
      <Image
        source={ require('../assets/logoUnilasalle.png') }
        style={ Estilos.logo }  
      />

      <Text style={ Estilos.titulo }>Nossa Missão e Valores</Text>

      <Text style={ Estilos.paragrafo }>A missão do La Salle é "transformar vidas com excelência educativa". A universidade busca formar profissionais integralmente, com ética e senso crítico, preparando-os para atuar na sociedade de forma inovadora e sustentável. Isso é realizado através de uma pedagogia que promove a produção, apropriação e socialização do conhecimento.</Text>

      <Button
        title="Mídias Sociais"
        onPress={ () => navigation.navigate('Mídias Sociais') }
      />
    </View>
  )
}

export default Home