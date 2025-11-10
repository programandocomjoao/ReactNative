import React from 'react'
import { View, Image, Text, Button } from 'react-native'

const Home = ({ navigation }) => {
  return(
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20 }}>
      <Image
        style={{ width: 150, height: 47, marginTop: 30, marginBottom: 30 }}
        source={ require('../assets/logoUnilasalle.png') }
      />

      <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Nossa Missão e Valores</Text>

      <Text style={{ paddingTop: 20, paddingBottom: 20 }}>A missão do La Salle é "transformar vidas com excelência educativa". A universidade busca formar profissionais integralmente, com ética e senso crítico, preparando-os para atuar na sociedade de forma inovadora e sustentável. Isso é realizado através de uma pedagogia que promove a produção, apropriação e socialização do conhecimento.</Text>

      <Button 
        title="Mídias Sociais"
        onPress={ () => navigation.navigate('Mídias Sociais') }
      />
    </View>
  )
}

export default Home