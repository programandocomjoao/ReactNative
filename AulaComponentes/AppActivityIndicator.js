
import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

export default function App() {

  // Estados da aplicação
  const [carregando, setCarregando] = useState(false);
  const [resultado, setResultado] = useState(false);

  // Simula uma consulta ao servidor
  function consultarDados() {

    setCarregando(true);
    setResultado(false);

    setTimeout(() => {

      setCarregando(false);
      setResultado(true);

    }, 3000);

  }

  return (

    <View style={estilos.container}>

      <Text style={estilos.titulo}>
        Consulta de Dados
      </Text>

      <Text style={estilos.subtitulo}>
        Clique no botão para consultar os dados.
      </Text>

      {/* BOTÃO DE CONSULTA */}
      <TouchableOpacity
        style={estilos.botao}
        onPress={consultarDados}
        disabled={carregando}
      >

        <Text style={estilos.textoBotao}>
          CONSULTAR DADOS
        </Text>

      </TouchableOpacity>

      {/* INDICADOR DE CARREGAMENTO */}
      {carregando && (

        <View style={estilos.carregamento}>

          <ActivityIndicator
            size="large"
            color="#2874A6"
          />

          <Text style={estilos.textoCarregamento}>
            Consultando servidor...
          </Text>

        </View>

      )}

      {/* RESULTADO DA CONSULTA */}
      {resultado && (

        <View style={estilos.resultado}>

          <Text style={estilos.textoResultado}>
            Consulta realizada com sucesso!
          </Text>

          <Text style={estilos.dados}>
            Nome: João
          </Text>

          <Text style={estilos.dados}>
            Curso: Sistemas de Informação
          </Text>

          <Text style={estilos.dados}>
            Status: Ativo
          </Text>

        </View>

      )}

    </View>

  );

}

// ESTILIZAÇÃO
const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    padding: 25
  },

  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#273746'
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#566573'
  },

  botao: {
    backgroundColor: '#2874A6',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },

  carregamento: {
    alignItems: 'center',
    marginTop: 35
  },

  textoCarregamento: {
    fontSize: 16,
    color: '#2874A6',
    marginTop: 15
  },

  resultado: {
    backgroundColor: '#D5F5E3',
    padding: 20,
    borderRadius: 10,
    marginTop: 30
  },

  textoResultado: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#196F3D',
    marginBottom: 15,
    textAlign: 'center'
  },

  dados: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333333'
  }

});