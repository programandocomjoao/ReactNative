import { StyleSheet } from 'react-native'

const Estilos = StyleSheet.create({
  principal: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20 },
  logo: { width: 150, height: 47, marginTop: 30, marginBottom: 30 },
  titulo: { fontWeight: 'bold', fontSize: 24, fontVariant: 'small-caps' },
  paragrafo: { paddingTop: 20, paddingBottom: 20 },
  container: { flex: 1 },
  cabecalho: { flex: 3, justifyContent: 'center', alignItems: 'center' },
  subcontainer: { flex: 3, flexDirection: 'row', alignItems: 'stretch' },
  rodape: { flex: 1, justifyContent: 'center', alignItems: 'center'},
  coluna: { flex: 1, justifyContent: 'center', alignItems: 'center'},
  icone: { width: 75, height: 75 }
})

export default Estilos