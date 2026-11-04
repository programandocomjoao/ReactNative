import { StyleSheet } from 'react-native'

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#CCCCCC'
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#273746'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10
  },
  texto: {
    fontSize: 14,
    flex: 1,
    marginRight: 8,
    color: '#333333'
  },
  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 25,
    color: '#566573'
  },
  botaoExcluir: {
    backgroundColor: '#C0392B',
    padding: 10,
    borderRadius: 7
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center'
  }
})

export default Estilos