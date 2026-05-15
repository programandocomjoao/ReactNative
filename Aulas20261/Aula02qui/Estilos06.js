import { StyleSheet } from 'react-native'

const Estilos = StyleSheet.create({
  principal: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 15 },
  titulo: { fontSize: '16pt', fontWeight: 'bold', fontVariant: 'small-caps', marginBottom: 10 },
  paragrafo: { marginBottom: 10, textAlign: 'justify' },
  item: { padding: 10, borderBottom: 'black 1px solid', fontSize: 18, height: 44 },
  tituloSecao: { padding: 5, fontSize: 20, backgroundColor: 'gray', color: 'white', fontWeight: 'bold', fontStyle: 'italic' }
})

export default Estilos