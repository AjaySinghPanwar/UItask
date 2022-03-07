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
  }[],
  scrollX: any;
};
