import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, SafeAreaView } from 'react-native';

const AddSummaryScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    // Aqui você pode adicionar a lógica para salvar o título e o conteúdo
    console.log('Título:', title);
    console.log('Conteúdo:', content);

    // Voltar para a tela anterior
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Título:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.label}>Conteúdo:</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={4}
          value={content}
          onChangeText={setContent}
        />
        <Button title="Salvar" onPress={handleSave} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default AddSummaryScreen;
