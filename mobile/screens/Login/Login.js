import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import { login } from '../../services/auth';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const loginData = await login({email, password});
      console.log("loginData", loginData)
       navigation.navigate('Students')
    } catch (err) {
      console.log("error login")
    }
  }

  

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", width: "100%" }}>
      <View
        style={{
          width: "85%",
          borderRadius: 15,
          backgroundColor: "#DCE1E3",
          alignItems: "center",
          paddingBottom: 30,
          paddingTop: 30,
          marginBottom: 35,
        }}
      >
        <Text style={styles.title}>Connectez vous</Text>
        <View
          style={{ flexDirection: "row", marginTop: 25, width: "90%", backgroundColor: "#fff" }}
        >
          <EvilIcons
            style={{
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 5,
              backgroundColor: "#fff",
            }}
            name="user"
            size={24}
            color="black"
          />

          <TextInput
            keyboardType="email-address"
            style={{
              height: 35,
              borderColor: "gray",
              backgroundColor: "#fff",
              paddingLeft: 10,
              flex: 1,
              textTransform: "lowercase",
            }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Adresse mail"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 25,
            width: "90%",
            backgroundColor: "#fff",
            marginBottom: 15,
          }}
        >
          <EvilIcons
            style={{
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 5,
              backgroundColor: "#fff",
            }}
            name="lock"
            size={24}
            color="black"
          />

          <TextInput
            secureTextEntry={true}
            style={{
              height: 35,
              borderColor: "gray",
              backgroundColor: "#fff",
              paddingLeft: 10,
              flex: 1,
            }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Mot de passe"
          />
        </View>

        <TouchableOpacity style={{ marginBottom: 20, marginTop: 15 }}>
          <Text style={styles.forgot_button}>Mot de passe oublié?</Text>
        </TouchableOpacity>
      </View>

      {/* <Button
        style=
        {{ borderWidth: 2, borderRadius: 15}}
        title="Envoyer"
        onPress={() => Alert.alert("Simple Button pressed")}
      /> */}
      <TouchableOpacity onPress={handleLogin}>
        <LinearGradient
          colors={["#0093FF", "#00DEFF"]}
          start={[0, 1]}
          end={[1, 0]}
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            paddingLeft: 10,
            paddingRight: 10,
            height: 45,
          }}
        >
          <Text
            style={{
              backgroundColor: "transparent",
              fontSize: 17,
              color: "#fff",
              lineHeight: 23,
            }}
          >
            Se connecter
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 20,
  },
});
