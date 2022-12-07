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
import { useState } from "react";
import { URL_BASE } from "../config/URL_BASE";
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [matricula, setMatricula] = useState("");
  const [apellido_materno, setApellido_materno] = useState("");
  const [status, setStatus] = useState("failed");


  const cleanInputs=()=>{


    setEmail("");
    setPassword("");
    setFirst_name("");
    setLast_name("");
    setMatricula("");
    setApellido_materno("");
  }
  const onSignupPressed = async () => {
    const url = `${URL_BASE}/auth/signup/`;
    const data = {
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      matricula: matricula,
      apellido_materno: apellido_materno,
    };
    const solicitud = await fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respuesta = await solicitud.json();
    console.log("Respuesta del backend", respuesta);
    console.log(respuesta.status);
    if (respuesta.status === "success") {
      setStatus("success");
      cleanInputs();
    }else{

      setStatus("failed");
      cleanInputs();
    }
  };
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Correo Electronico"
        style={styles.input}
        label="Email"
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        label="Password"
        returnKeyType="done"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        placeholder="Nombre"
        style={styles.input}
        label="first_name"
        autoCapitalize="none"
        autoCompleteType=""
        textContentType=""
        keyboardType=""
        value={first_name}
        onChangeText={(text) => setFirst_name(text)}
      />
      <TextInput
        placeholder="Apellido Paterno"
        style={styles.input}
        label="Last_name"
        autoCapitalize="none"
        autoCompleteType=""
        textContentType=""
        keyboardType=""
        value={last_name}
        onChangeText={(text) => setLast_name(text)}
      />
      <TextInput
        placeholder="Matricula"
        style={styles.input}
        label="Matricula"
        autoCapitalize="none"
        autoCompleteType=""
        textContentType=""
        keyboardType=""
        value={matricula}
        onChangeText={(text) => setMatricula(text)}
      />
      <TextInput
        placeholder="Apellido Paterno"
        style={styles.input}
        label="Apellido_paterno"
        autoCapitalize="none"
        autoCompleteType=""
        textContentType=""
        keyboardType=""
        value={apellido_materno}
        onChangeText={(text) => setApellido_materno(text)}
      />
      <Button title="Registrarse" onPress={onSignupPressed}>
        Registrarse
      </Button>
      <Text>Ya tienes cuenta</Text>
      <Button title="Iniciar sesion">Inicia sesion</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
