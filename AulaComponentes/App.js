import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';

// PERGUNTAS DO JOGO
const perguntas = [
  {
    pergunta: 'Qual linguagem é muito utilizada no desenvolvimento Android?',
    alternativas: ['Python', 'Java', 'SQL', 'HTML'],
    correta: 1,
    categoria: 'Programação'
  },
  {
    pergunta: 'Qual comando SQL recupera dados de uma tabela?',
    alternativas: ['INSERT', 'DELETE', 'SELECT', 'UPDATE'],
    correta: 2,
    categoria: 'Banco de Dados'
  },
  {
    pergunta: 'Qual é a principal finalidade da Engenharia de Software?',
    alternativas: [
      'Criar jogos',
      'Desenvolver software com qualidade',
      'Montar computadores',
      'Configurar redes'
    ],
    correta: 1,
    categoria: 'Engenharia de Software'
  },
  {
    pergunta: 'O que significa a sigla HTTP?',
    alternativas: [
      'HyperText Transfer Protocol',
      'High Technology Transfer Program',
      'Hyper Terminal Text Process',
      'Home Transfer Technology Protocol'
    ],
    correta: 0,
    categoria: 'Redes'
  },
  {
    pergunta: 'Qual estrutura de dados utiliza o conceito FIFO?',
    alternativas: [
      'Pilha',
      'Árvore',
      'Fila',
      'Lista'
    ],
    correta: 2,
    categoria: 'Programação'
  },
  {
    pergunta: 'Qual linguagem é utilizada para estruturar páginas web?',
    alternativas: [
      'Python',
      'HTML',
      'Java',
      'C'
    ],
    correta: 1,
    categoria: 'Desenvolvimento Web'
  },
  {
    pergunta: 'O que é uma chave primária em um banco de dados?',
    alternativas: [
      'Uma senha de acesso',
      'Um campo que identifica cada registro',
      'Uma tabela auxiliar',
      'Um comando SQL'
    ],
    correta: 1,
    categoria: 'Banco de Dados'
  },
  {
    pergunta: 'Qual é a função de um algoritmo?',
    alternativas: [
      'Armazenar arquivos',
      'Executar tarefas automaticamente',
      'Descrever uma sequência de passos para resolver um problema',
      'Conectar computadores'
    ],
    correta: 2,
    categoria: 'Programação'
  },
  {
    pergunta: 'O que significa a sigla CPU?',
    alternativas: [
      'Central Processing Unit',
      'Computer Personal Unit',
      'Central Program Utility',
      'Control Processing User'
    ],
    correta: 0,
    categoria: 'Hardware'
  },
  {
    pergunta: 'Qual modelo de desenvolvimento utiliza ciclos curtos e incrementais?',
    alternativas: [
      'Cascata',
      'Ágil',
      'Tradicional',
      'Sequencial'
    ],
    correta: 1,
    categoria: 'Engenharia de Software'
  }
];

// COMPONENTE PRINCIPAL
export default function App() {

  const [tela, setTela] = useState('inicio');
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [respondeu, setRespondeu] = useState(false);

  // VERIFICA RESPOSTA
  function verificarResposta(indice) {

    if (respondeu) return;

    setRespostaSelecionada(indice);
    setRespondeu(true);

    if (indice === perguntas[questaoAtual].correta) {
      setPontos(pontos + 10);
    }
  }

  // AVANÇA PARA PRÓXIMA QUESTÃO
  function proximaQuestao() {

    if (questaoAtual < perguntas.length - 1) {

      setQuestaoAtual(questaoAtual + 1);
      setRespostaSelecionada(null);
      setRespondeu(false);

    } else {

      setTela('resultado');

    }
  }

  // REINICIA O JOGO
  function reiniciarJogo() {

    setTela('inicio');
    setQuestaoAtual(0);
    setPontos(0);
    setRespostaSelecionada(null);
    setRespondeu(false);

  }

  // TELA INICIAL
  if (tela === 'inicio') {

    return (

      <SafeAreaView style={estilos.container}>

        <View style={estilos.card}>

          <Text style={estilos.icone}>🎮</Text>

          <Text style={estilos.titulo}>
            DESAFIO SI
          </Text>

          <Text style={estilos.subtitulo}>
            Teste seus conhecimentos em
            Sistemas de Informação!
          </Text>

          <View style={estilos.info}>
            <Text style={estilos.textoInfo}>
              📝 10 perguntas
            </Text>

            <Text style={estilos.textoInfo}>
              ⭐ 10 pontos por acerto
            </Text>

            <Text style={estilos.textoInfo}>
              🏆 100 pontos possíveis
            </Text>
          </View>

          <TouchableOpacity
            style={estilos.botao}
            onPress={() => setTela('jogo')}
          >
            <Text style={estilos.textoBotao}>
              COMEÇAR JOGO
            </Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>

    );

  }

  // TELA DE PERGUNTAS
  if (tela === 'jogo') {

    const pergunta = perguntas[questaoAtual];

    return (

      <SafeAreaView style={estilos.container}>

        <View style={estilos.topo}>

          <Text style={estilos.tituloPequeno}>
            DESAFIO SI
          </Text>

          <Text style={estilos.pontos}>
            ⭐ {pontos} pontos
          </Text>

        </View>

        <View style={estilos.progresso}>

          <View
            style={[
              estilos.progressoAtual,
              {
                width:
                  `${((questaoAtual + 1) / perguntas.length) * 100}%`
              }
            ]}
          />

        </View>

        <Text style={estilos.numeroQuestao}>
          QUESTÃO {questaoAtual + 1} DE {perguntas.length}
        </Text>

        <Text style={estilos.categoria}>
          {pergunta.categoria}
        </Text>

        <View style={estilos.cardPergunta}>

          <Text style={estilos.pergunta}>
            {pergunta.pergunta}
          </Text>

        </View>

        {pergunta.alternativas.map((alternativa, indice) => {

          let corFundo = '#292944';

          if (respondeu) {

            if (indice === pergunta.correta) {
              corFundo = '#16804A';
            }

            else if (indice === respostaSelecionada) {
              corFundo = '#C03939';
            }

          }

          return (

            <TouchableOpacity
              key={indice}
              style={[
                estilos.alternativa,
                { backgroundColor: corFundo }
              ]}
              onPress={() => verificarResposta(indice)}
              disabled={respondeu}
            >

              <Text style={estilos.textoAlternativa}>
                {String.fromCharCode(65 + indice)}.
                {' '}{alternativa}
              </Text>

            </TouchableOpacity>

          );

        })}

        {respondeu && (

          <View>

            <Text style={estilos.feedback}>

              {respostaSelecionada === pergunta.correta
                ? '🎉 Resposta correta! +10 pontos'
                : '❌ Resposta incorreta!'}

            </Text>

            <TouchableOpacity
              style={estilos.botao}
              onPress={proximaQuestao}
            >

              <Text style={estilos.textoBotao}>
                {questaoAtual === perguntas.length - 1
                  ? 'VER RESULTADO'
                  : 'PRÓXIMA QUESTÃO'}
              </Text>

            </TouchableOpacity>

          </View>

        )}

      </SafeAreaView>

    );

  }

  // TELA DE RESULTADO
  if (tela === 'resultado') {

    return (

      <SafeAreaView style={estilos.container}>

        <View style={estilos.card}>

          <Text style={estilos.icone}>🏆</Text>

          <Text style={estilos.titulo}>
            FIM DE JOGO!
          </Text>

          <Text style={estilos.subtitulo}>
            Confira seu resultado:
          </Text>

          <Text style={estilos.resultado}>
            {pontos} / 100
          </Text>

          <Text style={estilos.feedback}>

            {pontos >= 80
              ? 'Excelente! Você domina o assunto!'
              : pontos >= 50
              ? 'Muito bem! Continue estudando!'
              : 'Continue praticando. Você consegue!'}

          </Text>

          <TouchableOpacity
            style={estilos.botao}
            onPress={reiniciarJogo}
          >

            <Text style={estilos.textoBotao}>
              JOGAR NOVAMENTE
            </Text>

          </TouchableOpacity>

        </View>

      </SafeAreaView>

    );

  }

}

// ESTILIZAÇÃO
const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#17172E',
    padding: 20,
    justifyContent: 'center'
  },

  card: {
    backgroundColor: '#292944',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center'
  },

  icone: {
    fontSize: 65,
    marginBottom: 15
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15
  },

  subtitulo: {
    fontSize: 17,
    color: '#CCCCDD',
    textAlign: 'center',
    marginBottom: 25
  },

  info: {
    marginBottom: 25
  },

  textoInfo: {
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 6
  },

  botao: {
    backgroundColor: '#7B61FF',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },

  topo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  tituloPequeno: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold'
  },

  pontos: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold'
  },

  progresso: {
    height: 10,
    backgroundColor: '#44445E',
    borderRadius: 10,
    marginBottom: 25,
    overflow: 'hidden'
  },

  progressoAtual: {
    height: 10,
    backgroundColor: '#7B61FF'
  },

  numeroQuestao: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8
  },

  categoria: {
    color: '#A99AFF',
    fontSize: 14,
    marginBottom: 15
  },

  cardPergunta: {
    backgroundColor: '#292944',
    padding: 25,
    borderRadius: 15,
    marginBottom: 20
  },

  pergunta: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  alternativa: {
    padding: 17,
    borderRadius: 12,
    marginBottom: 12
  },

  textoAlternativa: {
    color: '#FFFFFF',
    fontSize: 16
  },

  feedback: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15
  },

  resultado: {
    color: '#FFD700',
    fontSize: 55,
    fontWeight: 'bold',
    marginVertical: 20
  }

});