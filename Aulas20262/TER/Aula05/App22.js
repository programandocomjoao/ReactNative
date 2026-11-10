import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import Estilos from './Estilos'

const App = () => {
  const [tarefas, setTarefas] = useState([
    { id: 1, descricao: 'Estudar React Native' },
    { id: 2, descricao: 'Terminar trabalho de Mobile' },
    { id: 3, descricao: 'Aprender Web em Camadas' },
    { id: 4, descricao: 'Atualizar currículo' }
  ])

  const [visivel, setVisivel] = useState(false)
  const [tarefa, setTarefa] = useState(null)
  
  confirmarExclusao = function(t) {
    setTarefa(t)
    setVisivel(true)
  }

  excluirTarefa = function() {
    const novaLista = tarefas.filter(
      item => item.id !== tarefa.id
    )

    setTarefas(novaLista)
    setVisivel(false)
    setTarefa(null)
  }

  return(
    <View style={ Estilos.container }>
      <Text style={ Estilos.titulo }>
        Gerenciador de Tarefas
      </Text>
      
      <Text style={ Estilos.subtitulo }>
        Minhas Atividades
      </Text>

      {tarefas.map(
        (t) => (
          <View style={ Estilos.item } key={ t.id }>
            <Text style={ Estilos.texto }>
              { t.descricao }
            </Text> 

            <TouchableOpacity
              style={ Estilos.botaoExcluir }
              onPress={ () => confirmarExclusao(t) }
            >
              <Text style={ Estilos.textoBotao }>Excluir</Text>
            </TouchableOpacity>
          </View>
        )
      )}

      <Modal
        visible={ visivel }
        transparent={ true }
        animationType='fade'
        onRequestClose={ () => setVisivel(false) }
      >
        <View style={ Estilos.fundoModal }>
          <View style={ Estilos.caixaModal }>
            <Text style={ Estilos.tituloModal }>
              Confirmar Exclusão
            </Text>

            <Text style={ Estilos.textoModal }>
              Deseja realmente excluir esta tarefa?
            </Text>

            <Text style={ Estilos.tarefaModal }>
              { tarefa?.descricao }
            </Text>

            <TouchableOpacity
              style={ Estilos.botaoConfirmar }
              onPress={ excluirTarefa }
            >
              <Text style={ Estilos.textoBotao }>
                SIM, EXCLUIR
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={ Estilos.botaoCancelar }
              onPress={ () => setVisivel(false) }  
            >
              <Text style={ Estilos.textoBotao }>
                NÃO, CANCELAR
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default App
