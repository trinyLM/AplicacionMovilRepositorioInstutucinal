import { useEffect, useState, useCallback } from "react"
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Button,
  Linking,
} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store'
import { URL_BASE } from "../config/URL_BASE";
export default function Home() {


  const [data, setData] = useState([]);

  const getLibros = async () => {
    let token = await SecureStore.getItemAsync("token");
    const URL = `${URL_BASE}/archivo`;
    const solicitud = await fetch(URL, {
      //hacemos la peticion con fetch
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}` },
      //falta igresar un header con Autorization: Token sbfkdgfkjdgfkjsdgfksjgd
    })
    const respuesta = await solicitud.json();
    console.log(respuesta)
    setData(respuesta.results)



  }
  useEffect(() => {
    //use efect para que cuando se carge el componentete se ejecute la funcion posFata
    getLibros();
  }, []);
  async (url) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };
  return (
    <ScrollView>
      {data.map((element) => (
        <View>
          <View>
            <Image style={styles.imagen} source={{ uri: element.imagen }} />
            <Text>{element.titulo}</Text>
            <Text>{element.materia}</Text>
            <Text>{element.resumen}</Text>
            <OpenURLButton url={element.pdf} title="pdf"></OpenURLButton>
            <Text>{element.pdf}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
const OpenURLButton = ({ url, title }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={title} onPress={handlePress} />;
};
const styles = StyleSheet.create({
  imagen: {
    width: 100,
    height: 100,
  },
});
