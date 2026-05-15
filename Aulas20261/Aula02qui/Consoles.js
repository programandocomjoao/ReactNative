import React from 'react'
import { View, Text, SectionList } from 'react-native'
import Estilos from './Estilos06'

const Consoles = () => {
  return(
    <View style={ Estilos.principal }>
      <Text style={ Estilos.titulo }>Principais Consoles</Text>

      <SectionList
        sections={[
          { title: 'NINTENDO', data: ['Nintendo(NES)', 'Super Nintendo', 'Nintendo 64', 'Nintendo Cube', 'Nintendo Wii', 'Nintendo U', 'Nintendo Switch'] },
          { title: 'SEGA', data: ['Master System', 'Mega Drive', 'Sega CD', 'Dreamcast'] }
        ]}

        renderItem={ ({item}) => <Text>{item}</Text> }

        renderSectionHeader={ ({section}) => <Text style={ Estilos.tituloSecao }>{section.title}</Text> }
      />
    </View>
  )
}

export default Consoles