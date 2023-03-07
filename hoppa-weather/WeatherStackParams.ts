export type WeatherType = {
  day: {
    mintemp_c: string;
    maxtemp_c: string;
    condition: { text: string };
  };
};

export type WeatherStackParams = {
  WeatherDetail: { item: WeatherType };
  WeatherList: undefined;
};
