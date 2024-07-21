import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { database } from "../model";
import { useEffect } from "react";

export default function HomePage({ navigation }: { navigation: any }) {
  const fetchTasks = async () => {
    const res = await database.get("tasks").query().fetch();
    console.log(res);
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Hello World 👋</Text>
      <Text
        onPress={() => navigation.navigate("todo")}
        style={{
          marginTop: 20,
          backgroundColor: "black",
          padding: 9,
          borderRadius: 10,
          color: "white",
          cursor: "pointer",
        }}
      >
        {" "}
        Add todo
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
