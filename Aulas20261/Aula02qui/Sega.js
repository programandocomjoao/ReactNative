import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import Estilos from './Estilos06'

const Sega = () => {
  return(
    <View style={ Estilos.principal }>
      <Image
        source={ require('../assets/logoSega.png') }
        style={{ width: 172, height: 50 }}  
      />

      <FlatList
        data={[
          { game: 'Sonic The Hedgehog' },
          { game: 'Sonic The Hedgehog 2' },
          { game: 'Sonic The Hedgehog 3' },
          { game: 'Alex Kid' },
          { game: 'Shinobi' },
          { game: 'Altered Beast' },
          { game: 'Super Mônaco GP' },
          { game: 'Super Mônaco GP II' },
          { game: 'Cyborg Justice' }
        ]}

        renderItem={ ({item}) => <Text style={ Estilos.item }>{ item.game }</Text> }
      />
    </View>
  )
}

export default Sega