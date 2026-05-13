import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Estilos from './Estilos07'

const Sega = () => {
  return(
    <View style={ Estilos.principal }>
      <Text style={ Estilos.titulo }>SEGA</Text>

      <FlatList   
        data={[
          { game: 'Sonic The Hedgehog' },
          { game: 'Sonic The Hedgehog 2' },
          { game: 'Sonic The Hedgehog 3' },
          { game: 'Alex Kid' },
          { game: 'Altered Beast' },
          { game: 'Moonwlaker' },
          { game: 'Earthworm Jim' },
          { game: 'Super Mônaco GP' },
          { game: 'Super Mônaco GP II' }
        ]}

        renderItem={({item}) => <Text style={ Estilos.item }>{item.game}</Text>}
      />
    </View>
  )
}

export default Sega