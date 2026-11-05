import { StyleSheet } from 'react-native'

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 35
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  painel: {
    backgroundColor: '#D6EAF8',
    padding: 20,
    borderRadius: 10,
    marginTop: 25
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  status: {
    fontSize: 16,
    marginBottom: 8
  }
})

export default Estilos