import React, { JSXElementConstructor, ReactElement } from "react";
import { GestureResponderEvent } from "react-native";

export type OnboardingItemProps = {
  item: {
    key: Number;
    image: any;
    title: String;
    description: String;
  };
};

export type SliderDataProps = {
  data: {
    key: Number;
    image: any;
    title: String;
    description: String;
  }[];
  scrollX: any;
};

export type ButtonElementProps = {
  title:
    | string
    | ReactElement<{}, string | JSXElementConstructor<any>>
    | undefined;
  onPress: () => void;
};
