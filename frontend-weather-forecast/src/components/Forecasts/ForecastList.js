import React from "react";

import ForecastItem from "./ForecastItem";
import "./ForecastList.css";
import forecastsJson from "../../forecasts.json";

const forecastsArray = forecastsJson.forecasts;

const ForecastList = () => {
  return (
    <ul className="forecast-list">
      {forecastsArray.map((item, index) => {
        const nightForecastItem = item.forecast[0].night;
        const dayForecastItem = item.forecast[0].day;
        return (
          <ForecastItem
            key={`${index}'s forecast`}
            date={item.forecast[0].date}
            nightPhen={nightForecastItem["phenomenon"]}
            nightPlaces={nightForecastItem["place"]}
            nightSea={nightForecastItem["sea"]}
            nightTemp={`min: ${nightForecastItem["tempmin"]}, max: ${nightForecastItem["tempmax"]}`}
            nightText={nightForecastItem["text"]}
            nightPeipsi={nightForecastItem["peipsi"]}
            nightWind={nightForecastItem["wind"]}
            dayPeipsi={dayForecastItem["peipsi"]}
            dayPhen={dayForecastItem["phenomenon"]}
            dayPlaces={dayForecastItem["place"]}
            daySea={dayForecastItem["sea"]}
            dayTemp={`min: ${dayForecastItem["tempmin"]}, max: ${dayForecastItem["tempmax"]}`}
            dayText={dayForecastItem["text"]}
            dayWind={dayForecastItem["wind"]}
          />
        );
      })}
    </ul>
  );
};
export default ForecastList;
