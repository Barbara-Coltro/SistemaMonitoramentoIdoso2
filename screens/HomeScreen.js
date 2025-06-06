import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebaseConfig'; // Ajuste o caminho se necessário

export default function HomeScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const q = query(
        collection(db, 'acessos'),
        where('usuario', '==', email),
        where('senha', '==', senha)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        const tipo = userData.tipo?.toLowerCase();

        Alert.alert('Login bem-sucedido', `Bem-vindo, ${userData.usuario}`);

        // Navegação condicional
        if (tipo === 'cuidador') {
          navigation.navigate('DashboardCuidador');
        } else {
          navigation.navigate('DashboardFamilia');
        }
      } else {
        Alert.alert('Erro', 'Usuário ou senha incorretos');
      }
    } catch (error) {
        console.error(error);
        Alert.alert('Erro ao acessar o banco de dados');
      }
    };


  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Bem-vindo ao{'\n'}<Text style={styles.bold}>Sistema</Text></Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 16,
    width: '85%',
    alignItems: 'center',
    elevation: 3,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    marginTop: 5,
  },
  input: {
    width: '100%',
    height: 44,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#9cd49d',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    color: '#2e7d32',
    marginTop: 6,
    fontSize: 14,
  },
});