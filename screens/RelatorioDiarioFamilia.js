import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RelatorioDiario = () => {
  const relatorios = [
    {
      data: '04/05/2025',
      descricao: 'Idoso participou de atividade de pintura e tomou todos os medicamentos.',
    },
    {
      data: '03/05/2025',
      descricao: 'Idoso teve boa alimentação, caminhada leve e hidratação adequada.',
    },
    {
      data: '02/05/2025',
      descricao: 'Participou da oficina de pintura com interesse e interagiu bem com o grupo. Mostrou-se tranquilo ao longo do dia.',
    },
    {
      data: '01/05/2025',
      descricao: 'Realizou caminhada no pátio pela manhã e assistiu a uma apresentação musical. Demonstrou bom humor e atenção.',
    },
    {
      data: '30/04/2025',
      descricao: 'Preferiu repousar após o almoço. Conversou brevemente com a equipe e apresentou disposição estável.',
    },
   
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Título e Menu */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>Relatório diário</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="menu" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Lista de Relatórios */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {relatorios.map((item, index) => (
            <View key={index} style={styles.reportCard}>
              <Text style={styles.reportDate}>{item.data}</Text>
              <Text style={styles.reportText}>{item.descricao}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default RelatorioDiario;
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
  reportCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  reportDate: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  reportText: {
    fontSize: 14,
    color: '#333',
  },
});
