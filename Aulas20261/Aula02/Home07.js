import React from 'react'
import { Text, View, Button } from 'react-native'
import Estilos from './Estilos07'

const Home = ({ navigation }) => {
  return (
    <View style={Estilos.principal}>
      <Text style={Estilos.titulo}>Game App</Text>

      <Text>
        Um videogame, jogo de computador, ou simplesmente jogo é um jogo
        eletrônico que envolve interação com uma interface de usuário ou
        dispositivo de entrada (como um joystick , controle , teclado ou
        dispositivo de detecção de movimento ) para gerar feedback visual a
        partir de um dispositivo de exibição , geralmente mostrado em formato de
        vídeo em um aparelho de televisão , monitor de computador , tela plana
        ou tela sensível ao toque em dispositivos portáteis ou um headset de
        realidade virtual . A maioria dos videogames modernos são audiovisuais ,
        com áudio complementar fornecido por alto-falantes ou fones de ouvido e,
        às vezes, também com outros tipos de feedback sensorial (por exemplo,
        tecnologia háptica que fornece sensações táteis ). Alguns videogames
        também permitem entradas de microfone e webcam para bate-papo e
        transmissão ao vivo durante o jogo .
      </Text>

      <Button
        title="Nintendo"
        style={ Estilos.botao }
        onPress={() => navigation.navigate('Nintendo')} 
      />

      <Button
        title="Sega"
        style={ Estilos.botao }
        onPress={() => navigation.navigate('Sega')} 
      />

      <Button
        title="Consoles"
        style={ Estilos.botao }
        onPress={() => navigation.navigate('Consoles')} 
      />
    </View>
  )
}

export default Home