import React, { useState } from 'react';

import {
  View,
  Text,
  Switch,
  StyleSheet
} from 'react-native';

export default function App() {

  // Estados dos componentes Switch
  const [wifi, setWifi] = useState(false);
  const [bluetooth, setBluetooth] = useState(false);
  const [modoNoturno, setModoNoturno] = useState(false);

  return (

    <View style={[
      estilos.container,
      { backgroundColor: modoNoturno ? '#222222' : '#EEEEEE' }
    ]}>

      <Text style={[
        estilos.titulo,
        { color: modoNoturno ? '#FFFFFF' : '#222222' }
      ]}>
        Painel de Configurações
      </Text>

      {/* CONFIGURAÇÃO WI-FI */}
      <View style={estilos.item}>

        <Text style={estilos.texto}>
          📶 Wi-Fi
        </Text>

        <Switch
          value={wifi}
          onValueChange={setWifi}
        />

      </View>

      {/* CONFIGURAÇÃO BLUETOOTH */}
      <View style={estilos.item}>

        <Text style={estilos.texto}>
          🔵 Bluetooth
        </Text>

        <Switch
          value={bluetooth}
          onValueChange={setBluetooth}
        />

      </View>

      {/* CONFIGURAÇÃO MODO NOTURNO */}
      <View style={estilos.item}>

        <Text style={estilos.texto}>
          🌙 Modo Noturno
        </Text>

        <Switch
          value={modoNoturno}
          onValueChange={setModoNoturno}
        />

      </View>

      {/* STATUS DAS CONFIGURAÇÕES */}
      <View style={estilos.resultado}>

        <Text style={estilos.subtitulo}>
          Status das configurações
        </Text>

        <Text style={estilos.status}>
          Wi-Fi: {wifi ? 'Ativado' : 'Desativado'}
        </Text>

        <Text style={estilos.status}>
          Bluetooth: {bluetooth ? 'Ativado' : 'Desativado'}
        </Text>

        <Text style={estilos.status}>
          Modo Noturno: {modoNoturno ? 'Ativado' : 'Desativado'}
        </Text>

      </View>

    </View>

  );
}

// ESTILIZAÇÃO
const estilos = StyleSheet.create({

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
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10
  },

  texto: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  resultado: {
    backgroundColor: '#D6EAF8',
    padding: 20,
    borderRadius: 10,
    marginTop: 25
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15
  },

  status: {
    fontSize: 16,
    marginBottom: 8
  }

});