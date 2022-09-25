import React, { memo } from "react";
import "./ForecastItem.css";

const Winds = ({ data = [] }) => {
  return (
    <div style={{ marginBottom: 80 }}>
      {data.map((item, index) => {
        return (
          <div>
            <p class="card-text" key={`${index}'s name`}>
              Name: {item.name}
            </p>
            <p class="card-text" key={`${index}'s phen`}>
              Direction: {item.direction}
            </p>
            <p class="card-text" key={`${index}'s temp`}>
              Speedmax: {item.speedmax}
            </p>
            <p class="card-text" key={`${index}'s temp`}>
              Speedmin: {item.speedmin}
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

export default memo(Winds);
