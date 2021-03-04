import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomCheckBox from "../../components/CheckBox/CustomCheckBox";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import { studentList, sendEmail } from "../../services/auth";

function ModalTester({ isModalVisible, setModalVisible, name, isError }) {
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <Button title="Show modal" onPress={toggleModal} /> */}

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
              <View style={{flexDirection:'row', justifyContent: "center", alignItems: "center"}}>
                <Text> Une erreur est survenue </Text>
                <Text>
            <Entypo style={{}} name="emoji-sad" size={25} style={{ color: "#FF4500", marginBottom: 0}}/>

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
  const [isChecked, setChecked] = useState(false);
  const [error, setIsError] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const fetchList = async () => {
    try {
      const studentListData = await studentList();
      setStudents(studentListData);
      // console.log("studentListData", studentListData);
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
        // setModalVisible(true);
        setName(name);
      }
    } catch (err) {
      setIsError(true);
      // setModalVisible(true);
      console.log("error setName");
    } finally {
      setModalVisible(true);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ModalTester
            isError={error}
            name={name}
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
          />
          <Text>Liste des étudiants</Text>
          {students.map((student) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "95%",
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
                  <Text key={student._id} style={styles.label}>
                    {student.firstName}
                    {/* {student.lastName}
              {student.sendEmail}
              {student.sendSms}
              {student.email}
              {student.phoneNumber}  */}
                  </Text>
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
                  <TouchableOpacity
                    onPress={() => handleSendEmail(student.email, student.firstName)}
                  >
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
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                  {/* <Text>Envoyer par sms</Text>
          <Text>Envoyer par mail</Text> */}
                </TouchableOpacity>
              </View>
              <View style={{}}>
                <CustomCheckBox text="Present" />
                <CustomCheckBox text="Absent" />
              </View>
              {/* <CheckBox textStyle={{fontSize:10}} size={15} iconRight title={"Present"} onPress={() => setChecked(bool => !bool)} center checked={isChecked} />
            <CheckBox textStyle={{fontSize:10}} size={15} iconRight title={"Absent"} onPress={() => setChecked(bool => !bool)} center checked={isChecked} /> */}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    marginBottom: 20,
  },
});
