// import React, { useState } from 'react';
// import { View, StyleSheet, TouchableOpacity, Text, Modal, Pressable, TextInput, FlatList, CheckBox } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { SketchPicker } from 'react-color';

// export default function App() {
//   const [squares, setSquares] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedColor, setSelectedColor] = useState('#007bff');
//   const [title, setTitle] = useState('');
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editText, setEditText] = useState('');
//   const [selectedSquares, setSelectedSquares] = useState(new Set()); // Para armazenar os índices dos quadrados selecionados

//   // Lista de cores
//   const colorPalette = [
//     'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet',
//     'pink', 'purple', 'brown', 'gray', 'black', 'white', 'cyan', 'magenta'
//   ];

//   const addSquare = () => {
//     if (title.trim() === '') {
//       alert('Por favor, insira um título.');
//       return;
//     }
//     setSquares([...squares, { color: selectedColor, title, content: '' }]);
//     setModalVisible(false);
//     setTitle('');
//   };

//   const startEditing = (index) => {
//     setEditingIndex(index);
//     setEditText(squares[index].content);
//   };

//   const finishEditing = (index) => {
//     const updatedSquares = squares.map((square, idx) => 
//       idx === index ? { ...square, content: editText } : square
//     );
//     setSquares(updatedSquares);
//     setEditingIndex(null);
//     setEditText('');
//   };

//   const cancelEditing = () => {
//     setEditingIndex(null);
//     setEditText('');
//   };

//   const toggleSelectSquare = (index) => {
//     const updatedSelectedSquares = new Set(selectedSquares);
//     if (updatedSelectedSquares.has(index)) {
//       updatedSelectedSquares.delete(index);
//     } else {
//       updatedSelectedSquares.add(index);
//     }
//     setSelectedSquares(updatedSelectedSquares);
//   };

//   const deleteSelectedSquares = () => {
//     setSquares(squares.filter((_, index) => !selectedSquares.has(index)));
//     setSelectedSquares(new Set()); // Limpa seleção após a exclusão
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.textContainer}>
//         <Icon name="edit" size={24} color="#000" />
//         <Text style={styles.text}>Anotações</Text>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
//         <MaterialCommunityIcons name="plus" size={24} color="white" />
//       </TouchableOpacity>
      
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(false);
//         }}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Escolha uma cor e insira um título</Text>
//             <TextInput
//               style={styles.titleInput}
//               placeholder="Título do quadrado"
//               value={title}
//               onChangeText={setTitle}
//             />
//             <FlatList
//               data={colorPalette}
//               numColumns={4} // Número de colunas para organizar as cores
//               renderItem={({ item }) => (
//                 <Pressable
//                   style={[styles.colorButton, { backgroundColor: item }]}
//                   onPress={() => setSelectedColor(item)}
//                 />
//               )}
//               keyExtractor={(item) => item}
//               columnWrapperStyle={styles.colorRow} // Estilo para as linhas de cores
//             />
//             <TouchableOpacity style={styles.modalButton} onPress={addSquare}>
//               <Text style={styles.modalButtonText}>Adicionar Quadrado</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       <FlatList
//         data={squares}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item, index }) => (
//           <View style={styles.squareContainer}>
//             <TouchableOpacity style={[styles.square, { backgroundColor: item.color }]} onPress={() => startEditing(index)}>
//               {editingIndex === index ? (
//                 <>
//                   <TextInput
//                     style={styles.squareTextInput}
//                     multiline
//                     value={editText}
//                     onChangeText={setEditText}
//                     onBlur={() => finishEditing(index)}
//                   />
//                 </>
//               ) : (
//                 <Text style={styles.squareTitle}>{item.content || item.title}</Text>
//               )}
//             </TouchableOpacity>
//             <CheckBox
//               value={selectedSquares.has(index)}
//               onValueChange={() => toggleSelectSquare(index)}
//             />
//           </View>
//         )}
//       />
      
//       <TouchableOpacity style={styles.deleteButton} onPress={deleteSelectedSquares}>
//         <Text style={styles.deleteButtonText}>Concluído</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 20,
    
//   },
//   textContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     marginLeft: 8,
//     userSelect: 'none',
//   },
//   button: {
//     position: 'absolute',
//     bottom: 20,
//     right: 20,
//     width: 60,
//     height: 60,
//     backgroundColor: '#007bff',
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   squareContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   square: {
//     flex: 1,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 10,
//     padding: 10,
//     position: 'relative',
//     borderRadius: 5,
//   },
//   squareTitle: {
//     color: 'white',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   squareTextInput: {
//     width: '100%',
//     height: '100%',
//     color: 'white',
//     fontSize: 14,
//     textAlign: 'center',
//     padding: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     width: 300,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   titleInput: {
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   colorOptions: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   colorButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginHorizontal: 10,
//   },
//   colorRow: {
//     justifyContent: 'space-between',
//   },
//   modalButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   modalButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   cancelButton: {
//     position: 'absolute',
//     bottom: 10,
//     backgroundColor: '#ff4d4d',
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   cancelButtonText: {
//     color: 'white',
//     fontSize: 14,
//   },
//   deleteButton: {
//     backgroundColor: '#ff4d4d',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginTop: 20,
//     marginBottom: 10,
//     alignItems: 'center',
//     width: 200,
//   },
//   deleteButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal, Pressable, TextInput, FlatList, CheckBox } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const [squares, setSquares] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#007bff');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [selectedSquares, setSelectedSquares] = useState(new Set());

  const colorPalette = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet',
    'pink', 'purple', 'brown', 'gray', 'black'
  ];

  const addSquare = () => {
    if (title.trim() === '') {
      alert('Por favor, insira um título.');
      return;
    }
    setSquares([...squares, { color: selectedColor, title, content }]);
    setModalVisible(false);
    setTitle('');
    setContent('');
  };

  const finishEditing = (index) => {
    const updatedSquares = squares.map((square, idx) => 
      idx === index ? { ...square, content: editText } : square
    );
    setSquares(updatedSquares);
    setEditingIndex(null);
    setEditText('');
    setEditModalVisible(false); // Fecha o modal de edição
  };

  const openEditModal = (index) => {
    setEditingIndex(index);
    setEditText(squares[index].content);
    setEditModalVisible(true);
  };

  const toggleSelectSquare = (index) => {
    const updatedSelectedSquares = new Set(selectedSquares);
    if (updatedSelectedSquares.has(index)) {
      updatedSelectedSquares.delete(index);
    } else {
      updatedSelectedSquares.add(index);
    }
    setSelectedSquares(updatedSelectedSquares);
  };

  const deleteSelectedSquares = () => {
    setSquares(squares.filter((_, index) => !selectedSquares.has(index)));
    setSelectedSquares(new Set());
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Icon name="edit" size={24} color="#000" />
        <Text style={styles.text}>Anotações</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <MaterialCommunityIcons name="plus" size={24} color="white" />
      </TouchableOpacity>
      
      {/* Modal para adicionar quadrado */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Escolha uma cor e insira um título</Text>
            <TextInput
              style={styles.titleInput}
              placeholder="Título do quadrado"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={[styles.titleInput, { height: 100 }]} // Aumenta a altura do campo de resumo
              placeholder="Resumo"
              value={content}
              onChangeText={setContent}
              multiline
            />
            <FlatList
              data={colorPalette}
              numColumns={4}
              renderItem={({ item }) => (
                <Pressable
                  style={[styles.colorButton, { backgroundColor: item }]}
                  onPress={() => setSelectedColor(item)}
                />
              )}
              keyExtractor={(item) => item}
              columnWrapperStyle={styles.colorRow}
            />
            <TouchableOpacity style={styles.modalButton} onPress={addSquare}>
              <Text style={styles.modalButtonText}>Adicionar Quadrado</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para editar o resumo */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={() => {
          setEditModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Resumo</Text>
            <TextInput
              style={[styles.titleInput, { height: 100 }]} // Aumenta a altura do campo de resumo
              placeholder="Resumo"
              value={editText}
              onChangeText={setEditText}
              multiline
            />
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                finishEditing(editingIndex);
              }}
            >
              <Text style={styles.modalButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <FlatList
        data={squares}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.squareContainer}>
            <TouchableOpacity style={[styles.square, { backgroundColor: item.color }]} onPress={() => openEditModal(index)}>
              <Text style={styles.squareTitle}>{item.title}</Text> {/* Exibe apenas o título */}
            </TouchableOpacity>
            <CheckBox
              value={selectedSquares.has(index)}
              onValueChange={() => toggleSelectSquare(index)}
            />
          </View>
        )}
      />
      
      <TouchableOpacity style={styles.deleteButton} onPress={deleteSelectedSquares}>
        <Text style={styles.deleteButtonText}>Concluído</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginLeft: 8,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: '#007bff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  square: {
    flex: 1,
    height: 100, // Aumente a altura do quadrado aqui
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 10, // Adiciona um pouco de padding
  },
  squareTitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
  },
  colorRow: {
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    width: 200,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
