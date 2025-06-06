import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

export default function TelaStatus() {
  const [status, setStatus] = useState('');
  const [alerta, setAlerta] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Título com menu hambúrguer */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>Status Geral</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="menu" size={26} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Card de status atual */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Status Geral</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editText}>Editar</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.cardText}><Text style={styles.bold}>Status do dia:</Text> Estável</Text>
          <Text style={styles.cardText}><Text style={styles.bold}>Alertas de Saúde:</Text> Nenhum</Text>
        </View>

        {/* Card de registro */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Registrar Rotina</Text>

          <Text style={styles.label}>Status:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={status}
              onValueChange={(value) => setStatus(value)}
            >
              <Picker.Item label="Selecione uma opção" value="" />
              <Picker.Item label="Estável" value="estavel" />
              <Picker.Item label="Necessita Atenção" value="atencao" />
              <Picker.Item label="Crítico" value="critico" />
            </Picker>
          </View>

          <Text style={styles.label}>Alertas de Saúde:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={alerta}
              onValueChange={(value) => setAlerta(value)}
            >
              <Picker.Item label="Selecione uma opção" value="" />
              <Picker.Item label="Nenhum" value="nenhum" />
              <Picker.Item label="Pressão Alta" value="pressao" />
              <Picker.Item label="Febre" value="febre" />
              <Picker.Item label="Queda" value="queda" />
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
  pickerContainer: {
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
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
