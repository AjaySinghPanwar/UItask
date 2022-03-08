import { Image, StyleSheet, View } from "react-native";
import Onboarding from "./Screens/Onboarding";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter: require("./assets/fonts/Inter-Bold.ttf"),
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
    marginTop: 54,
  },
});
