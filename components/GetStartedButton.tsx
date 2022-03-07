import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

const GetStartedButton = () => {
  return (
    <View style={{ position: "absolute", top: 579 }}>
      <Button
        title="Get Started"
        titleStyle={{ fontWeight: "700", fontSize: 21, lineHeight: 21 }}
        buttonStyle={styles.button}
        containerStyle={{
          width: 208,
          height: 58,
          borderRadius: 12,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(111, 202, 186, 1)",
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 12,
    paddingVertical: 8,
    width: 208,
    height: 58,
  },
});

export default GetStartedButton;
