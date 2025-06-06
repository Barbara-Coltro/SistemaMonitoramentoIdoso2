import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // <-- Importa o hook

export default function DashboardFamiliar() {
  const navigation = useNavigation(); // <-- Usa o hook DENTRO do componente

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Cabeçalho */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>Painel do Familiar</Text>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Status Geral */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Status Geral</Text>
            <Text style={styles.cardText}>
              <Text style={styles.bold}>Status do dia:</Text> Estável
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.bold}>Alertas de Saúde:</Text> Nenhum
            </Text>
          </View>

          {/* Atividades Recentes */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Atividades Recentes</Text>
            <Text style={styles.cardText}>• 08:00 - Café da manhã</Text>
            <Text style={styles.cardText}>• 09:00 - Medicação</Text>
            <Text style={styles.cardText}>• 10:00 - Banho</Text>
            <Text style={styles.cardText}>• 12:00 - Almoço</Text>
          </View>

          {/* Consultas e Exames */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Consultas e exames</Text>
            <Text style={styles.cardText}>
              <Text style={styles.bold}>Tipo de exame:</Text> Hemograma, Raio-X
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.bold}>Dia:</Text> 01/05/2025
            </Text>
          </View>

          {/* Datas Comemorativas */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Datas Comemorativas</Text>
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
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
});
