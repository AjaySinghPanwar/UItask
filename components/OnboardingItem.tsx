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
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
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
    width: 350,
    height: 350,
    position: "absolute",
    top: 0,
  },

  title: {
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 42,
    fontStyle: "normal",
    marginTop: 68,
    marginBottom: 8,
    color: "#262626",
    textAlign: "center",
  },

  description: {
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 25,
    fontStyle: "normal",
    marginBottom: 25,
    marginHorizontal: 48,
    color: "#A6A6A6",
    textAlign: "center",
  },
});

export default OnboardingItem;
