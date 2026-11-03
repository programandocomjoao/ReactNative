import React, { useState } from 'react';

import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function App() {

  // Lista inicial de tarefas
  const [tarefas, setTarefas] = useState([
    { id: 1, descricao: 'Estudar React Native' },
    { id: 2, descricao: 'Desenvolver aplicativo mobile' },
    { id: 3, descricao: 'Estudar Banco de Dados' },
    { id: 4, descricao: 'Fazer atividade de programação' }
  ]);

  // Estados do Modal
  const [modalVisivel, setModalVisivel] = useState(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);

  // Abre o Modal
  function confirmarExclusao(tarefa) {

    setTarefaSelecionada(tarefa);
    setModalVisivel(true);

  }

  // Exclui a tarefa
  function excluirTarefa() {

    const novaLista = tarefas.filter(
      item => item.id !== tarefaSelecionada.id
    );

    setTarefas(novaLista);

    setModalVisivel(false);
    setTarefaSelecionada(null);

  }

  return (

    <View style={estilos.container}>

      <Text style={estilos.titulo}>
        Gerenciador de Tarefas
      </Text>

      <Text style={estilos.subtitulo}>
        Minhas atividades
      </Text>

      {/* LISTA DE TAREFAS */}
      {tarefas.map((tarefa) => (

        <View key={tarefa.id} style={estilos.item}>

          <Text style={estilos.textoTarefa}>
            {tarefa.descricao}
          </Text>

          <TouchableOpacity
            style={estilos.botaoExcluir}
            onPress={() => confirmarExclusao(tarefa)}
          >

            <Text style={estilos.textoBotao}>
              EXCLUIR
            </Text>

          </TouchableOpacity>

        </View>

      ))}

      {/* MENSAGEM QUANDO NÃO EXISTIREM TAREFAS */}
      {tarefas.length === 0 && (

        <Text style={estilos.mensagem}>
          Todas as tarefas foram excluídas!
        </Text>

      )}

      {/* JANELA MODAL */}
      <Modal
        visible={modalVisivel}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisivel(false)}
      >

        <View style={estilos.fundoModal}>

          <View style={estilos.modal}>

            <Text style={estilos.tituloModal}>
              Confirmar exclusão
            </Text>

            <Text style={estilos.mensagemModal}>
              Deseja realmente excluir esta tarefa?
            </Text>

            <Text style={estilos.tarefaModal}>
              {tarefaSelecionada?.descricao}
            </Text>

            {/* BOTÃO CONFIRMAR */}
            <TouchableOpacity
              style={estilos.botaoConfirmar}
              onPress={excluirTarefa}
            >

              <Text style={estilos.textoBotao}>
                SIM, EXCLUIR
              </Text>

            </TouchableOpacity>

            {/* BOTÃO CANCELAR */}
            <TouchableOpacity
              style={estilos.botaoCancelar}
              onPress={() => setModalVisivel(false)}
            >

              <Text style={estilos.textoBotao}>
                NÃO, CANCELAR
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </Modal>

    </View>

  );

}

// ESTILIZAÇÃO
const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    padding: 20,
    justifyContent: 'center'
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#273746'
  },

  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 25,
    color: '#566573'
  },

  item: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  textoTarefa: {
    fontSize: 14,
    flex: 1,
    marginRight: 8,
    color: '#333333'
  },

  botaoExcluir: {
    backgroundColor: '#C0392B',
    padding: 10,
    borderRadius: 7
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center'
  },

  fundoModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  modal: {
    backgroundColor: '#FFFFFF',
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

  mensagemModal: {
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
    width: '100%'
  },

  mensagem: {
    fontSize: 18,
    color: '#196F3D',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  }

});