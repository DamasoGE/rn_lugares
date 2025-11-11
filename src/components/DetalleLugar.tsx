import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Lugar } from "../model/Tipos";
import { globalStyles } from "../styles/GlobalStyles";
import { Image } from "expo-image";
import Boton from "./Boton";
import Fab from "./Fab";

type Props = {
  lugarSeleccionado: Lugar;
  salirPulsado: () => void;
  accionAbrirEditorLugar: () => void;
  accionBorrarLugar: () => void;
};

export default function DetalleLugar({
  lugarSeleccionado,
  salirPulsado,
  accionAbrirEditorLugar,
  accionBorrarLugar,
}: Props) {
  return (
    <View style={styles.contenedor}>
      <Text style={globalStyles.titulo}>{lugarSeleccionado.nombre}</Text>
      <Image
        source={lugarSeleccionado.foto}
        style={globalStyles.foto}
        contentFit={"cover"}
      />
      <Text style={styles.descripcion}>{lugarSeleccionado.descripcion}</Text>
      <Boton texto={"Salir"} onPress={salirPulsado} />

      <View style={styles.fila}>
        <Fab icono={"delete"} bgColor={"#ef4444"} onPress={accionBorrarLugar} />
        <Fab icono={"edit"} bgColor={"#10b981"} onPress={accionAbrirEditorLugar} />        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
    backgroundColor: "#f9fafb",
    rowGap: 20,
  },
  descripcion: {
    color: "#4b5563",
  },
  fila: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "flex-end",
    columnGap: 10,
  },
});
