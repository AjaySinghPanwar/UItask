import { JSXElementConstructor, ReactElement } from "react";

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
};
