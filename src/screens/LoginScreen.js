import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import { StatusBar } from 'expo-status-bar'
import * as SecureStore from "expo-secure-store";
import { Link } from "react-router-native";
import { useState } from "react";
import { URL_BASE } from "../config/URL_BASE";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emptyValidate=()=>{
    if (email.trim()===""){
      alert("el email no puede estar vacio")


    }
    if (password.trim()===""){
      alert("El campo contraseña no puede estrar vacio")
    }
  }
  const onLoginPressed = async () => {
    emptyValidate()
    const url = `${URL_BASE}/auth/login/`;
    var data = {
      email: email,
      password: password,
    };
    const response = await fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    });

    const respuesta = await response.json();
    console.log(respuesta)
    if (respuesta.email === email) {
      await SecureStore.setItemAsync("token", respuesta.token);
    }else{
      alert(respuesta.email)
    }
    if(respuesta.detail){
      alert(detail)


    }
    
    

  };

  return (
    <>
      <View style={styles.screen}>


        <View style={styles.container}>
          <View style={styles.containerImg}>
            <Image
              style={styles.img}
              source={require("../../assets/ITSZ/LOGO.png")}
            ></Image>
          </View>
          <Text style={styles.titulo}>BIENVENIDO.</Text>
          <Text styles={styles.subTitle}>
            Al repositorio del Instituto tecnologico Superior de Zongolica.
          </Text>

          <SafeAreaView style={styles.formLogin}>
            <TextInput
              style={styles.input}
              label="Email"
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder="Correo Institucional"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              label="Password"
              returnKeyType="done"
              secureTextEntry
              placeholder="Contraseña"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <View style={styles.button}>
              <Button title="login" onPress={onLoginPressed}>
                Login
              </Button>
            </View>
            <View style={styles.row}>
              <Text>No tienes cuenta? </Text>
              {/* <Link to="/register">
          <Text style={styles.link}>Registrate ahora</Text>
        </Link> */}
            </View>
          </SafeAreaView>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#000",
    fontSize: 60,
    marginTop: 300,
    fontWeight: "bold",
  },
  subTitle: {
    color: "#fff",
    fontSize: 40,
    marginTop: 20,
    fontWeight: "bold",
    color: "gray",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    backgroundColor: "#fff",
    paddingStart: 30,
    padding: 10,
    width: 350,
    height: 50,
    padding: 10,
    marginTop: 30,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },

  img: {
    width: 200,
    height: 200,
    borderWidth: 2,
    resizeMode: "contain",
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 50,
    marginTop: 250,
    alignContent: "center",
  },
  containerImg: {
    width: 300,
    height: 300,
    alignContent: "center",
  },
  button: {
    height: 200,
    width: 350,
    borderRadius: 30,
  },
  formLogin: {
    alignContent: "center",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});


/* 
https://www.youtube.com/watch?v=aT44nKL1QAQ */