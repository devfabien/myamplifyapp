import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function HomePage({ navigation }: { navigation: any }) {
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
