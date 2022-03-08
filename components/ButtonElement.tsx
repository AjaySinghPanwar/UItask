import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { ButtonElementProps } from "../types/types";

const ButtonElement: React.FC<ButtonElementProps> = ({
  title,
}: ButtonElementProps) => {
  return (
    <View style={{ flex: 3 }}>
      <Button
        title={title}
        titleStyle={{
          fontFamily: "Roboto",
          fontWeight: "700",
          fontSize: 21,
          lineHeight: 21,
        }}
        buttonStyle={styles.button}
        containerStyle={{
          width: 208,
          height: 58,
          borderRadius: 12,
        }}
        onPress={() => console.log("I am clicked")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#87B8B5",
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 12,
    paddingVertical: 8,
    width: 208,
    height: 58,
  },
});

export default ButtonElement;
