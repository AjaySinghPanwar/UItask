import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { slides } from "../util/data";
import ButtonElement from "../Components/ButtonElement";
import OnboardingItem from "../Components/OnboardingItem";
import Paginator from "../Components/Paginator";

const Onboarding: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<any>(null);

  useEffect(() => {
    if (currentIndex < slides.length) {
      slidesRef.current?.scrollTo({
        x: Dimensions.get("window").width * currentIndex,
        animated: true,
      });
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex, scrollX]);

  const goNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        ref={slidesRef}
      >
        {slides.map((item, index) => {
          return <OnboardingItem item={item} key={index.toString()} />;
        })}
      </ScrollView>

      <Paginator data={slides} scrollX={scrollX} />

      <ButtonElement title={"Next"} onPress={goNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Onboarding;
