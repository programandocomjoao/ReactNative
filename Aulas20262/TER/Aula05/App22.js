import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import Estilos from './Estilos'

const App = () => {
  const [modal, setModal] = useState(false)

  confirmarExclusao = function() {
    setModal(true)
  } 

  return(
    <View style={ Estilos.container }>
      <Text style={ Estilos.titulo }>Gerenciador de Tarefas</Text>
      <Text style={ Estilos.subtitulo }>Minhas Atividades</Text>

      <View style={ Estilos.item }>
        <Text style={ Estilos.texto }>Estudar React Native</Text>

        <TouchableOpacity style={ Estilos.botaoExcluir }>
          <Text style={ Estilos.textoBotao }>EXCLUIR</Text>
        </TouchableOpacity>
      </View>

      <View style={ Estilos.item }>
        <Text style={ Estilos.texto }>Fazer o trabalho de Mobile</Text>

        <TouchableOpacity style={ Estilos.botaoExcluir }>
          <Text style={ Estilos.textoBotao }>EXCLUIR</Text>
        </TouchableOpacity>
      </View>

      <View style={ Estilos.item }>
        <Text style={ Estilos.texto }>Aprender Java</Text>

        <TouchableOpacity style={ Estilos.botaoExcluir }>
          <Text style={ Estilos.textoBotao }>EXCLUIR</Text>
        </TouchableOpacity>
      </View>

      <View style={ Estilos.item }>
        <Text style={ Estilos.texto }>Atualizar Currículo</Text>

        <TouchableOpacity style={ Estilos.botaoExcluir }>
          <Text style={ Estilos.textoBotao }>EXCLUIR</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={ modal }
        transparent={ true }
        animationType='fade'
        onRequestClose={ () => setModal(false) }
      >
        <Text>Tem certeza que deseja excluir a tarefa?</Text>
      </Modal>
    </View>
  )
}

export default App