export type WeatherType = {
  day: {
    mintemp_c: string;
    maxtemp_c: string;
    condition: { text: string };
    daily_chance_of_rain: string;
  };
};

export type WeatherStackParams = {
  WeatherDetail: { item: WeatherType };
  WeatherList: undefined;
};
