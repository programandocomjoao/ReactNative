import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  container: { alignItems: 'center' },
  titulo: { margin: 50, fontWeight: 'bold', fontSize: '14pt' }
})

const Saudacao = (props) => {
  return(
    <Text>Olá {props.nome} {props.sobrenome}!!!</Text>
  )
}

const App = () => {
  return(
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Lista de Alunos</Text>

      <Saudacao nome='José' sobrenome='Nunes' />
      <Saudacao nome='Maria' sobrenome='da Conceição' />
      <Saudacao nome='Gabriel' sobrenome='Francisco' />
      <Saudacao nome='Tainá' sobrenome='Duarte' />
      <Saudacao nome='Mariana' sobrenome='da Costa' />
    </View>
  )
}

export default App