import { View, Text, FlatList, StyleSheet } from "react-native";
import { veiculos } from "../data/veiculos";

function Cabecalho() {
  return <Text style={styles.tituloCabecalho}>Lista de Veículos</Text>;
}

function Rodape() {
  return <Text>Total de veículos: {veiculos.length}</Text>;
}

function Separador() {
  return <View style={styles.separador} />;
}

export default function Veiculos() {
  function mostrarVeiculo({ item }) {
    return (
      <View style={styles.item}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text>Marca: {item.marca}</Text>
        <Text>Ano: {item.ano}</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.lista}
      data={veiculos}
      keyExtractor={(item) => item.id}
      renderItem={mostrarVeiculo}
      ListHeaderComponent={Cabecalho}
      ListHeaderComponentStyle={styles.cabecalho}
      ListFooterComponent={Rodape}
      ListFooterComponentStyle={styles.rodape}
      ItemSeparatorComponent={Separador}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    flex: 1,
    paddingTop: 50,
  },
  cabecalho: {
    padding: 15,
    backgroundColor: "lightgray",
  },
  tituloCabecalho: {
    fontSize: 22,
    fontWeight: "bold",
  },
  item: {
    padding: 15,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  separador: {
    height: 1,
    backgroundColor: "gray",
  },
  rodape: {
    padding: 15,
    backgroundColor: "lightgray",
  },
});
