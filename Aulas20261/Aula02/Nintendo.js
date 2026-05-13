import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Estilos from './Estilos07'

const Nintendo = () => {
  return(
    <View style={ Estilos.principal }>
      <Text style={ Estilos.titulo }>NINTENDO</Text>

      <FlatList   
        data={[
          { game: 'Super Mario Bros' },
          { game: 'Super Mario Bros 2' },
          { game: 'Super Mario Bros 3' },
          { game: 'Mega Man' },
          { game: 'Yo!Noid' },
          { game: 'Tartarugas Ninjas' },
          { game: 'Tartarugas Ninjas II' },
          { game: 'Tartarugas Ninjas III' },
          { game: 'Ninja Gaiden' }
        ]}

        renderItem={({item}) => <Text style={ Estilos.item }>{item.game}</Text>}
      />
    </View>
  )
}

export default Nintendo