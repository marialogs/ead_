import { StyleSheet, Text, View } from 'react-native';

export default function Funcionario({ nome, idade, setor }) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Funcionário</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Setor: {setor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: 280,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
