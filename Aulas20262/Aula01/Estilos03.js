import { StyleSheet } from 'react-native'

const Estilos = StyleSheet.create(
  {
    principal: {
      flex: 1
    },
    cabecalho: {
      backgroundColor: '#0080c0',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    conteudo: {
      backgroundColor: '#eeeebb',
      flex: 2,
      justifyContent: 'center'
    },
    titulo: {
      fontWeight: 'bold',
      fontSize: '24pt',
      color: 'white'
    },
    subtitulo: {
      fontWeight: 'bold',
      fontSize: '16pt',
    }
  }
)

export default Estilos