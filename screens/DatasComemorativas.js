import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DatasComemorativas() {
  const [titulo, setTitulo] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [descricao, setDescricao] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Datas Comemorativas</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Card de Data Atual */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Datas comemorativas</Text>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editText}>Editar</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.cardText}>
              <Text style={styles.bold}>Nome:</Text> Festa Junina
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.bold}>Data:</Text> 07/06/2025
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.bold}>Horário:</Text> 20:00
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.bold}>Descrição:</Text> Venham caracterizados
            </Text>
          </View>

          {/* Formulário de Registro */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Registrar Data</Text>

            <Text style={styles.label}>Título da comemoração:</Text>
            <TextInput
              style={styles.input}
              placeholder="Coloque o título"
              value={titulo}
              onChangeText={setTitulo}
            />

            <Text style={styles.label}>Data:</Text>
            <TextInput
              style={styles.input}
              placeholder="Coloque a data da comemoração"
              value={data}
              onChangeText={setData}
            />

            <Text style={styles.label}>Horário:</Text>
            <TextInput
              style={styles.input}
              placeholder="Coloque o horário"
              value={horario}
              onChangeText={setHorario}
            />

            <Text style={styles.label}>Descrição:</Text>
            <TextInput
              style={styles.input}
              placeholder="Descreva os detalhes"
              value={descricao}
              onChangeText={setDescricao}
            />

            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
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
    backgroundColor: '#6FCF97',
    padding: 8,
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  editButton: {
    backgroundColor: '#6FCF97',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  editText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 4,
    backgroundColor: '#fff',
  },
  saveButton: {
    backgroundColor: '#6FCF97',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
