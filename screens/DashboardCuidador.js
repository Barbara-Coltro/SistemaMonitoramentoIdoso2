import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardCuidador() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Linha com título e botão de menu */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>Painel do Cuidador</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* Cartões */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Status Geral</Text>
        <Text style={styles.cardText}>
          <Text style={styles.label}>Status do dia:</Text> Estável
        </Text>
        <Text style={styles.cardText}>
          <Text style={styles.label}>Alertas de Saúde:</Text> Nenhum
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Atividades Recentes</Text>
        <Text style={styles.cardText}>• 08:00 - Café da manhã</Text>
        <Text style={styles.cardText}>• 09:00 - Medicação</Text>
        <Text style={styles.cardText}>• 10:00 - Banho</Text>
        <Text style={styles.cardText}>• 12:00 - Almoço</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Consultas e exames</Text>
        <Text style={styles.cardText}>
          <Text style={styles.label}>Tipo de exame:</Text> Hemograma, Raio-X
        </Text>
        <Text style={styles.cardText}>
          <Text style={styles.label}>Dia:</Text> 01/05/2025
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Medicamento atual</Text>
        <Text style={styles.cardText}>
          <Text style={styles.label}>Nome:</Text> Paracetamol
        </Text>
        <Text style={styles.cardText}>
          <Text style={styles.label}>Horário:</Text> 08:00, 14:00, 20:00
        </Text>
        <Text style={styles.cardText}>
          <Text style={styles.label}>Dosagem:</Text> 500mg
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF7DF',
    flexGrow: 1,
    padding: 20,
    paddingTop: 20, // Reduzi de 60 para 20
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
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
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#2E7D32',
  },
  cardText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  label: {
    fontWeight: 'bold',
  },
});
