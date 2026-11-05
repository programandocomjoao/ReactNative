import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import Estilos from './Estilos'

const App = () => {
  const [tarefas, setTarefas] = useState([
    { id: 1, descricao: 'Estudar React Native' },
    { id: 2, descricao: 'Fazer o trabalho de Mobile' },
    { id: 3, descricao: 'Aprender Sistemas Distribuídos' },
    { id: 4, descricao: 'Atualizar currículo' }
  ])

  return(
    <View style={ Estilos.container }>
      <Text style={ Estilos.titulo }>
        Gerenciador de Tarefas
      </Text>

      <Text style={ Estilos.subtitulo }>
        Minhas Atividades
      </Text>

      {tarefas.map(
        (tarefa) => (
          <View style={ Estilos.item } key={ tarefa.id }>
            <Text style={ Estilos.texto }>
              { tarefa.descricao }
            </Text>

            <TouchableOpacity style={ Estilos.botaoExcluir }>
              <Text style={ Estilos.textoBotao }>EXCLUIR</Text>
            </TouchableOpacity>
          </View>
        )
      )}
    </View>
  )
}

export default App