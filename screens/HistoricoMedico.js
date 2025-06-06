import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function HistoricoMedico() {
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>Histórico Médico</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* Consultas e Exames */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Consultas e Exames</Text>
        <Text>Última consulta: <Text style={styles.bold}>01/05/2025</Text></Text>
        <Text>Exames recentes: <Text style={styles.bold}>Hemograma, Raio-X</Text></Text>
      </View>

      {/* Necessidades especiais */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Necessidades especiais</Text>
        <Text>Uso de cadeira de rodas. Acompanhamento com cardiologista mensal.</Text>
      </View>

      {/* Registrar Atividade */}
      <View style={styles.cardForm}>
        <Text style={styles.formTitle}>Registrar Atividade</Text>

        <Text style={styles.label}>Data:</Text>
        <TextInput
          style={styles.input}
          placeholder="Selecione a data"
          value={data}
          onChangeText={setData}
        />

        <Text style={styles.label}>Horário:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escolha o horário"
          value={horario}
          onChangeText={setHorario}
        />

        <Text style={styles.label}>Tipo:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={tipo}
            onValueChange={(itemValue) => setTipo(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Consulta" value="consulta" />
            <Picker.Item label="Exame" value="exame" />
            <Picker.Item label="Outro" value="outro" />
          </Picker>
        </View>

        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={styles.input}
          placeholder="Descreva detalhes do compromisso"
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  cardForm: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 5,
    marginBottom: 30,
  },
  formTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
    color: '#2E7D32',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  pickerContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 10,
  },
  picker: {
    height: 55,
    paddingHorizontal: 10,
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
