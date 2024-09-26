import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

const ResumoScreen = () => {
  // Estado para armazenar a lista de botões
  const [botoes, setBotoes] = useState([]);

  // Função para adicionar um novo botão
  const adicionarBotao = () => {
    setBotoes([...botoes, {}]); // Adiciona um novo botão vazio à lista
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Resumo</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.botoesContainer}>
          {botoes.map((_, index) => (
            <Button
              key={index} // Usando o índice como chave única
              mode="contained"
              style={styles.botao}
              onPress={() => console.log(`Botão ${index} pressionado`)}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.mainButton}
          icon="plus"
          color="#FFD700" // Cor amarela para o botão
          accessibilityLabel="Adicionar novo botão"
          onPress={adicionarBotao} // Adiciona um novo botão ao clicar
        >
          Adicionar
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9400d3',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  mainButton: {
    width: 80,     // Largura do botão principal
    height: 80,    // Altura do botão principal
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffacd',
    borderRadius: 2, // Para tornar o botão com bordas quadradas
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  botoesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  botao: {
    width: 80,     // Largura do botão quadrado
    height: 80,    // Altura do botão quadrado
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6',
    borderRadius: 2, // Para manter o botão quadrado
  },
});

export default ResumoScreen;
