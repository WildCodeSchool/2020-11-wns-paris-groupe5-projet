import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Dimensions,
} from "react-native";

import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomCheckBox from "../../components/CheckBox/CustomCheckBox";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import { studentList, sendEmail } from "../../services/auth";

const fullWidth = Dimensions.get("window").width;
function ModalTester({ isModalVisible, setModalVisible, name, isError }) {
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              height: 100,
              width: "90%",
              backgroundColor: "#fff",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isError ? (
              <View
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}
              >
                <Text> Une erreur est survenue </Text>
                <Text>
                  <Entypo
                    style={{}}
                    name="emoji-sad"
                    size={25}
                    style={{ color: "#FF4500", marginBottom: 0 }}
                  />
                </Text>
              </View>
            ) : (
              <Text>
                Mail envoyé à {name}{" "}
                <Entypo style={{}} name="check" size={20} style={{ color: "#32CD32" }} />
              </Text>
            )}
          </View>
          <TouchableOpacity onPress={toggleModal}>
            <View
              style={{
                backgroundColor: "#fff",
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
                marginBottom: 40,
                marginTop: 40,
              }}
            >
              <Entypo style={{}} name="cross" size={32} />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default function Students() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [error, setIsError] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const fetchList = async () => {
    try {
      const studentListData = await studentList();
      setStudents(studentListData);
    } catch (err) {
      console.log("error studentListData", err);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleSendEmail = async (email, name) => {
    try {
      setIsError(false);
      const sentEmail = await sendEmail(email);
      console.log("sentEmail", sentEmail);
      if (sentEmail.success) {
        setName(name);
      }
    } catch (err) {
      setIsError(true);
      console.log("error setName");
    } finally {
      setModalVisible(true);
    }
  };

  const renderItem = ({ item }) => (
    <Item handleSendEmail={handleSendEmail} firstName={item.firstName} email={item.email} />
  );

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 20, marginBottom: 40 }}>
      <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
        <ModalTester
          isError={error}
          name={name}
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
        />
        <Text style={{ marginBottom: 20 }}>Liste des étudiants</Text>
        <FlatList data={students} renderItem={renderItem} keyExtractor={(item) => item._id} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    marginBottom: 20,
  },
});

function Item({ firstName, email, handleSendEmail }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: fullWidth * 0.9,
        // flex: 1,
        padding: 10,
        borderWidth: 0.5,
        borderColor: "lightgrey",
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      }}
    >
      <View style={{ justifyContent: "space-around", flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <EvilIcons
            style={{
              color: "#DE6262",
              backgroundColor: "transparent",
              display: "flex",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 5,
              marginRight: 3,
            }}
            name="user"
            size={40}
          />
          <Text style={styles.label}>{firstName}</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity onPress={() => console.log("send")}>
            <LinearGradient
              colors={["#DE6262", "#FFB88C"]}
              start={[0, 1]}
              end={[1, 0]}
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
                paddingLeft: 10,
                paddingRight: 10,
                height: 35,
              }}
            >
              <Text
                style={{
                  backgroundColor: "transparent",
                  fontSize: 13,
                  color: "#fff",
                  lineHeight: 20,
                }}
              >
                Envoyer SmS
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSendEmail(email, firstName)}>
            <LinearGradient
              colors={["#DE6262", "#FFB88C"]}
              start={[0, 1]}
              end={[1, 0]}
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
                paddingLeft: 10,
                paddingRight: 10,
                height: 35,
              }}
            >
              <Text
                style={{
                  backgroundColor: "transparent",
                  fontSize: 13,
                  color: "#fff",
                  lineHeight: 23,
                }}
              >
                Envoyer mail
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{}}>
        <CustomCheckBox text="Present" />
        <CustomCheckBox text="Absent" />
      </View>
    </View>
  );
}
