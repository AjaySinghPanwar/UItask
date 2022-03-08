import { useRef, useState } from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";
import { slides } from "../util/data";
import ButtonElement from "../Components/ButtonElement";
import OnboardingItem from "../Components/OnboardingItem";
import Paginator from "../Components/Paginator";

const Onboarding: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

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
      >
        {slides.map((item, index) => {
          return <OnboardingItem item={item} key={index.toString()} />;
        })}
      </ScrollView>

      <Paginator data={slides} scrollX={scrollX} />

      <ButtonElement title={"Get Started"} />
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
