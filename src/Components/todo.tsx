import { Button, TextInput, View, StyleSheet, Text } from "react-native";

export default function TodoForm({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => navigation.navigate("home")}
        style={{ marginBottom: 20 }}
      >
        home
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          borderWidth: 1,
          borderColor: "gray",
          padding: 5,
          justifyContent: "space-between",
          borderRadius: 10,
        }}
      >
        <TextInput style={{ width: "80%" }} placeholder="enter todo" />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
});
