import React from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const TelaInicial = ({navigation}) => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Seja Bem-Vindos!!!</Text>

      <Button 
        title="Sobre o App" 
        onPress={ () => navigation.navigate('Sobre o App') }
      />
    </View>
  )
}

const TelaSobre = () => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
      <Text>Sobre Meu App 1.0</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed metus urna. Nam auctor ut libero eu consequat. Proin sollicitudin est congue justo rhoncus, vitae pellentesque turpis fringilla. Mauris sit amet pellentesque magna. Nulla in felis sed nulla porta dignissim. Duis neque mauris, gravida sit amet pretium in, molestie vel orci. Ut sed augue consequat, vulputate sem in, porta est. Phasellus commodo accumsan sapien, sed rutrum lectus molestie eget. Morbi in fringilla sem. Nulla congue est dictum, consectetur mi vestibulum, imperdiet ex. Vestibulum bibendum metus vel convallis mollis. Curabitur pellentesque a massa ac ullamcorper. Integer convallis sed orci ac venenatis. Suspendisse fermentum bibendum diam et lacinia. Pellentesque nisi arcu, viverra at tempus quis, condimentum a nisi.</Text>
    </View>
  )
}

const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Início">
        <Stack.Screen name="Início" component={ TelaInicial } />
        <Stack.Screen name="Sobre o App" component={ TelaSobre } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App