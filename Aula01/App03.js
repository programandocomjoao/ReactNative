import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'

const App = () => {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: '20pt', fontWeight: 'bold' }}>Sistema Solar</Text>

      <View style={{ backgroundColor: 'darkblue' }}>
        <Text style={{ color: 'lightblue', fontSize: '15pt', fontWeight: 'bold', textAlign: 'center', padding: '10px' }}>Planeta Terra</Text>

        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Terra.png' }} style={{ width: 200, height: 200 }} />
      </View>

      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, color: '#003399', fontFamily: 'verdana', fontSize: '12pt', marginTop: '10px' }} />
    </View>
  )
}

export default App