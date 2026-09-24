import { StyleSheet } from 'react-native'

const Estilos = StyleSheet.create(
  {
    principal: { 
      backgroundColor: 'lightblue',
      flex: 1
    },
    cabecalho: {
      backgroundColor: '#0080c0',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    games: {
      flex: 4
    },
    conteudo: {
      backgroundColor: '#eeeebb',
      flex: 1,
      padding: 10
    },
    titulo: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white'
    },
    subtitulo: {
      fontSize: 24,
      fontWeight: 'bold'
    }
  }
)

export default Estilos