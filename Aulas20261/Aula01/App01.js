import React from 'react'
import { View, Text } from 'react-native'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#87ceeb', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Aprender React Native é construir o futuro!</Text>
      </View>

      <View style={{ flex: 3, backgroundColor: '#e0f6ff', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Programar é fazer do mundo um lugar melhor!</Text>
      </View>
    </View>
  )
}

export default App