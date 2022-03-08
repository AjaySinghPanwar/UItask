import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { OnboardingItemProps } from "../types/types";

const OnboardingItem: React.FC<OnboardingItemProps> = ({
  item,
}: OnboardingItemProps) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { resizeMode: "contain" }]}
      />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    justifyContent: "center",
    height: 200,
    marginTop: 65,
    marginBottom: 60,
  },

  title: {
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 42,
    fontStyle: "normal",
    fontFamily: "Inter",
    marginBottom: 8,
    color: "#262626",
    textAlign: "center",
  },

  description: {
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 25,
    fontStyle: "normal",
    fontFamily: "Inter",
    marginHorizontal: 48,
    marginBottom: 8,
    color: "#A6A6A6",
    textAlign: "center",
  },
});

export default OnboardingItem;
