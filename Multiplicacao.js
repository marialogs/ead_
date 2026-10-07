import { StyleSheet, Text, View } from 'react-native';

export default function Multiplicacao({ valor1, valor2, valor3 }) {
  const resultado = valor1 * valor2 * valor3;

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Multiplicação</Text>
      <Text>Valor 1: {valor1}</Text>
      <Text>Valor 2: {valor2}</Text>
      <Text>Valor 3: {valor3}</Text>
      <Text>Resultado: {resultado}</Text>
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
