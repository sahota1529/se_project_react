import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
//import { defaultClothingItems } from "../../utils/constants";
import React from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function Main({ weatherData, handleCardClick, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          {" "}
          Today is {weatherData.temp[currentTemperatureUnit]} &deg;
          {currentTemperatureUnit} / You may want to wear:
        </p>

        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return (
                item.weather.toLowerCase() === weatherData.type.toLowerCase()
              );
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}
export default Main;
