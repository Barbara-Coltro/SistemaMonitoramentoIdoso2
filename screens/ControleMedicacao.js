import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

export default function TelaMedicacao() {
  const [nome, setNome] = useState('');
  const [horarios, setHorarios] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [medicamentoAtual, setMedicamentoAtual] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Cabeçalho com título e menu hambúrguer */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>Controle de medicação</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="menu" size={26} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Card: Medicamento atual */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Medicamento Atual</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editText}>Editar</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.cardText}><Text style={styles.bold}>Nome:</Text> Paracetamol</Text>
          <Text style={styles.cardText}><Text style={styles.bold}>Horário:</Text> 08:00, 14:00, 20:00</Text>
          <Text style={styles.cardText}><Text style={styles.bold}>Dosagem:</Text> 500mg</Text>
        </View>

        {/* Card: Registrar novo medicamento */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Registrar Medicamento</Text>

          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Coloque o nome do medicamento"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Horários:</Text>
          <TextInput
            style={styles.input}
            placeholder="Escolha os horários"
            value={horarios}
            onChangeText={setHorarios}
          />

          <Text style={styles.label}>Dosagem:</Text>
          <TextInput
            style={styles.input}
            placeholder="Coloque a dosagem"
            value={dosagem}
            onChangeText={setDosagem}
          />

          <Text style={styles.label}>É um medicamento atual?</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={medicamentoAtual}
              onValueChange={itemValue => setMedicamentoAtual(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Sim" value="sim" />
              <Picker.Item label="Não" value="nao" />
            </Picker>
          </View>

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
  bold: {
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
    padding: 10,
    marginBottom: 10,
  },
  pickerWrapper: {
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    marginBottom: 12,
  },
  picker: {
    height: 55,
    paddingLeft: 10,
  },
  saveButton: {
    backgroundColor: '#6BBF59',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
