import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RotinaDiaria() {
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho com título e botão de menu */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>Rotina Diária</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* Rotinas existentes */}
      <View style={styles.rotinaCard}>
        <Text style={styles.rotinaData}>04/05/2025</Text>
        <Text style={styles.rotinaTexto}>
          Idoso participou de atividade de pintura e tomou todos os medicamentos.
        </Text>
      </View>

      <View style={styles.rotinaCard}>
        <Text style={styles.rotinaData}>03/05/2025</Text>
        <Text style={styles.rotinaTexto}>
          Idoso teve boa alimentação, caminhada leve e hidratação adequada.
        </Text>
      </View>

      {/* Formulário para adicionar rotina */}
      <View style={styles.cardForm}>
        <Text style={styles.cardTitle}>Registrar Rotina</Text>

        <Text style={styles.label}>Data:</Text>
        <TextInput
          style={styles.input}
          placeholder="Coloque a data"
          value={data}
          onChangeText={setData}
        />

        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Coloque a descrição"
          multiline
          numberOfLines={4}
          value={descricao}
          onChangeText={setDescricao}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF7DF',
    flexGrow: 1,
    padding: 20,
    paddingTop: 20,
  },
  headerRow: {
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
  },
  menuButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  rotinaCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  rotinaData: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rotinaTexto: {
    fontSize: 14,
    color: '#333',
  },
  cardForm: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    marginBottom: 30,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
    color: '#2E7D32',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 14,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
