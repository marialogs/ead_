import { ScrollView, StyleSheet } from 'react-native';
import Funcionario from '../components/Funcionario';
import Aluno from '../components/Aluno';
import Multiplicacao from '../components/Multiplicacao';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Funcionario nome="Carlos Silva" idade={35} setor="Financeiro" />
      <Aluno nome="Maria Souza" idade={20} turma="3A" nota1={8} nota2={6} />
      <Multiplicacao valor1={2} valor2={3} valor3={4} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
});
