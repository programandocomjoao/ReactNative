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
  },
  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  quadroModal: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center'
  },
  tituloModal: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C0392B',
    marginBottom: 20
  },
  textoModal: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15
  },
  tarefaModal: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#273746'
  },
  botaoConfirmar: {
    backgroundColor: '#C0392B',
    padding: 14,
    borderRadius: 8,
    width: '100%',
    marginBottom: 10
  },
    botaoCancelar: {
    backgroundColor: '#7F8C8D',
    padding: 14,
    borderRadius: 8,
    width: '100%',
    marginBottom: 10
  }
})

export default Estilos
