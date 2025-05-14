export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherOptions = [
  {
    day: true,
    condition: "cloudy",
    url: new URL("../images/day/cloudy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../images/day/fog.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../images/day/rain.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../images/day/snow.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "storm",
    url: new URL("../images/day/storm.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "clear",
    url: new URL("../images/day/sunny.svg", import.meta.url).href,
  },

  {
    day: false,
    condition: "cloudy",
    url: new URL("../images/night/cloudy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "foggy",
    url: new URL("../images/night/foggy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "rainy",
    url: new URL("../images/night/rainy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "snowy",
    url: new URL("../images/night/snowy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "stormy",
    url: new URL("../images/night/stormy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../images/night/sunny.svg", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../images/Day/default.png", import.meta.url).href,
  },
  night: {
    url: new URL("../images/Night/default.png", import.meta.url).href,
  },
};

export const coordinates = {
  latitude: 38.29603,
  longitude: -86.95286,
};

export const APIkey = "3adad73a7a96636d6b780941994be53f";
