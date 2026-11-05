import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'
import Estilos from './Estilos'

const App = () => {
  const [wifi, setWifi] = useState(false)
  const [bluetooth, setBluetooth] = useState(false)
  const [modo, setModo] = useState(false)

  return(
    <View style={[ Estilos.container,
      { backgroundColor: modo? '#222222' : '#CCCCCC' }
    ]}>
      <Text style={[ Estilos.titulo,
        { color: modo? 'white' : '#222222' }
      ]}>
        Painel de Configurações
      </Text>

      <View style={ Estilos.item }>
        <Text style={ Estilos.texto }>Wi-Fi</Text>
        <Switch
          value={ wifi }
          onValueChange={ setWifi }
        />
      </View>

      <View style={ Estilos.item }>
        <Text style={ Estilos.texto }>Bluetooth</Text>
        <Switch
          value={ bluetooth }
          onValueChange={ setBluetooth }
        />
      </View>

      <View style={ Estilos.item }>
        <Text style={ Estilos.texto }>Modo Noturno</Text>
        <Switch
          value={ modo }
          onValueChange={ setModo }
        />
      </View>

      <View style={ Estilos.painel }>
        <Text style={ Estilos.subtitulo }>
          Status das Configurações
        </Text>

        <Text style={ Estilos.status }>
          Wi-Fi: { wifi? 'Ativado' : 'Desativado' }
        </Text>

        <Text style={ Estilos.status }>
          Bluetooth: { bluetooth? 'Ativado' : 'Desativado' }
        </Text>

        <Text style={ Estilos.status }>
          Modo Noturno: { modo? 'Ativado' : 'Desativado' }
        </Text>
      </View>
    </View>
  )
}

export default App