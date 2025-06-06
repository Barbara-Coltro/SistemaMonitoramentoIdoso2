import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Picker, ScrollView } from 'react-native';
import { Picker as SelectPicker } from '@react-native-picker/picker';

export default function GestaoUsuarios() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nome: 'Maria Silva', funcao: 'Cuidadora' },
    { id: 2, nome: 'João Oliveira', funcao: 'Familiar' },
  ]);

  const [usuarioSelecionado, setUsuarioSelecionado] = useState('Maria Silva');
  const [funcao, setFuncao] = useState('Cuidadora');

  const removerUsuario = (id) => {
    const novaLista = usuarios.filter((u) => u.id !== id);
    setUsuarios(novaLista);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Gestão de Usuários</Text>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Lista de Usuários</Text>
        {usuarios.map((usuario) => (
          <View key={usuario.id} style={styles.userRow}>
            <Text style={styles.userText}>
              <Text style={{ fontWeight: 'bold' }}>{usuario.nome}</Text> - {usuario.funcao}
            </Text>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removerUsuario(usuario.id)}
              >
                <Text style={styles.removeText}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Controle de Acesso</Text>

        <Text style={styles.label}>Selecionar Usuário</Text>
        <View style={styles.selectContainer}>
          <SelectPicker
            selectedValue={usuarioSelecionado}
            onValueChange={(itemValue) => setUsuarioSelecionado(itemValue)}
          >
            {usuarios.map((usuario) => (
              <SelectPicker.Item label={usuario.nome} value={usuario.nome} key={usuario.id} />
            ))}
          </SelectPicker>
        </View>

        <Text style={styles.label}>Função</Text>
        <View style={styles.selectContainer}>
          <SelectPicker selectedValue={funcao} onValueChange={(itemValue) => setFuncao(itemValue)}>
            <SelectPicker.Item label="Cuidadora" value="Cuidadora" />
            <SelectPicker.Item label="Familiar" value="Familiar" />
            <SelectPicker.Item label="Admin" value="Admin" />
          </SelectPicker>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Atualizar Permissão</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDF4E3',
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#2E7D32',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    width: '100%',
    marginBottom: 20,
    elevation: 4,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  userRow: {
    marginBottom: 10,
  },
  userText: {
    fontSize: 14,
    marginBottom: 4,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  editButton: {
    backgroundColor: '#90CAF9',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginRight: 8,
  },
  editText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#EF9A9A',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  removeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    marginTop: 10,
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#333',
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#81C784',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
