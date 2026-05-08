import React from 'react'
import { View, Text, Image } from 'react-native'

const App = () => {
  return(
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: '#eeeebb', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={ require('./assets/LogoUniLaSalle.png') } style={{ width: 188, height: 60 }} />
      </View>

      <View style={{ flex: 7, backgroundColor: '#87ceeb', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Aprender React Native é construir o futuro!</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: '#e0f6ff', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Venha você também aprender o mehor do JavaScript!</Text>
      </View>
    </View>
  )
}

export default App