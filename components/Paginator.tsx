import {
  Image,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
} from "react-native";
import { SliderDataProps } from "../types/types";

const Paginator: React.FC<SliderDataProps> = ({
  data,
  scrollX,
}: SliderDataProps) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1, 0.8],
          extrapolate: "clamp",
        });

        return (
          <Animated.Image
            source={require("../assets/images/slider.png")}
            style={[styles.image, { resizeMode: "contain", opacity }]}
            key={index.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 500,
    width: 56,
    height: 16,
  },
  image: {
    width: 13,
    height: 13,
  },
});

export default Paginator;
