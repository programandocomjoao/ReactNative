import { StyleSheet } from 'react-native'

const Estilos = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: 150,
    height: 47,
    marginTop: 30,
    marginBottom: 30
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  },
  paragrafo: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'justify'
  },
  container: {
    flex: 1
  },
  cabecalho: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subcontainer: {
    flex: 3,
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  rodape: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icone: {
    width: 75,
    height: 75
  },
  coluna: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Estilos