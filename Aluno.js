import { StyleSheet, Text, View } from 'react-native';

export default function Aluno({ nome, idade, turma, nota1, nota2 }) {
  const media = (nota1 + nota2) / 2;

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Aluno</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Turma: {turma}</Text>
      <Text>Nota 1: {nota1}</Text>
      <Text>Nota 2: {nota2}</Text>
      <Text>Média: {media}</Text>
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
