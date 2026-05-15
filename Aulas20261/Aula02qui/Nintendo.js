import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import Estilos from './Estilos06'

const Nintendo = () => {
  return(
    <View style={ Estilos.principal }>
      <Image
        source={ require('../assets/logoNintendo.png') }
        style={{ width: 172, height: 50 }}  
      />

      <FlatList
        data={[
          { game: 'Super Mario Bros' },
          { game: 'Super Mario Bros 2' },
          { game: 'Super Mario Bros 3' },
          { game: 'Ninja Gaiden' },
          { game: 'Yo!Noid' },
          { game: 'Tartarugas Ninjas' },
          { game: 'Tartarugas Ninjas II' },
          { game: 'Tartarugas Ninjas III' },
          { game: 'Road Fighter' }
        ]}

        renderItem={ ({item}) => <Text style={ Estilos.item }>{ item.game }</Text> }
      />
    </View>
  )
}

export default Nintendo