import { Image, StyleSheet, View } from "react-native";
import Onboarding from "./components/Onboarding";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./assets/images/logo.png")}
      />
      <Onboarding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   
  },

  image: {
    marginTop: 76,
  },
});
