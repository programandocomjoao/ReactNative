import React from 'react'
import { View } from 'react-native'

const App = () => {
  return(
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: '#003399' }}>      
      </View>

      <View style={{ flex: 7 }}>
      </View>

      <View style={{ flex: 1, backgroundColor: '#eeeebb', borderTop: '#003399 2px solid' }}>
      </View>
    </View>
  )
}

export default App