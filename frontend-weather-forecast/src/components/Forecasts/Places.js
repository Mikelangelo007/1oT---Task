import React, { memo } from "react";
import "./ForecastItem.css";

const Places = ({ data = [], isDay = false }) => {
  return (
    <div style={{ marginBottom: 80 }}>
      {data.map((item, index) => {
        return (
          <div>
            <p class="card-text" key={`${index}'s name`}>
              Location: {item.name}
            </p>
            <p class="card-text" key={`${index}'s phen`}>
              Phenomenon: {item.phenomenon}
            </p>
            <p class="card-text" key={`${index}'s temp`}>
              {isDay ? "Tempmax: " : "Tempmin: "}
              {isDay ? item.tempmax : item.tempmin}
            </p>
            <div
              style={{
                backgroundColor: "#226daec6",
                borderRadius: 10,
                alignSelf: "center",
                height: 5,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default memo(Places);
