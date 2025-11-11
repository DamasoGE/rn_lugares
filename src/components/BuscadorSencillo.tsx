import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Lugares } from '../model/Tipos';
import { globalStyles } from '../styles/GlobalStyles';
import { buscarLugares } from '../utils/CrudLugares';

type Props = {
    setListaLugares: React.Dispatch<React.SetStateAction<Lugares>>
}

export default function BuscadorSencillo({setListaLugares}: Props) {
    const [textoBusqueda, setTextoBusqueda] = useState<string>("");

    useEffect(() => {
      accionBuscarLugares()
    }, [textoBusqueda])
    

    function accionBuscarLugares(){
        buscarLugares(textoBusqueda)
        .then(lugares => setListaLugares(lugares))
        .catch( error => console.log(error.toString()))
    }

  return (
    <TextInput
        placeholder={"Búsqueda por nombre"}
        style={globalStyles.buscador}
        value={textoBusqueda}
        onChangeText={setTextoBusqueda}
    />
  )
}

const styles = StyleSheet.create({})