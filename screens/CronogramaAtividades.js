import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TelaCronograma() {
  const [descricao, setDescricao] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Título com menu hambúrguer */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>Cronograma das atividades</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="menu" size={26} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Card de atividades recentes */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Atividades Recentes</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editText}>Editar</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.cardText}>• 08:00 - Café da manhã</Text>
          <Text style={styles.cardText}>• 09:00 - Medicação</Text>
          <Text style={styles.cardText}>• 10:00 - Banho</Text>
          <Text style={styles.cardText}>• 12:00 - Almoço</Text>
        </View>

        {/* Card de registro */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Registrar Cronograma</Text>

          <Text style={styles.label}>Descrição:</Text>
          <TextInput
            style={styles.input}
            placeholder="Coloque a descrição"
            value={descricao}
            onChangeText={setDescricao}
            multiline
          />

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF4E3',
  },
  content: {
    padding: 16,
   },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 10,
  },
  iconButton: {
    backgroundColor: '#6BBF59',
    padding: 8,
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 4,
  },
  editButton: {
    backgroundColor: '#A8D5A1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  editText: {
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    height: 100,
    textAlignVertical: 'top',
    padding: 10,
    marginBottom: 12,
  },
  saveButton: {
    backgroundColor: '#6BBF59',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
