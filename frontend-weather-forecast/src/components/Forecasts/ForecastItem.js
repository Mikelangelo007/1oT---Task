import "./ForecastItem.css";
import Card from "../UI/Card";
import Places from "./Places";
import Winds from "./Winds";

const ForecastItem = ({
  dayPhen,
  dayTemp,
  dayText,
  dayPlaces,
  dayWind,
  daySea,
  dayPeipsi,
  nightPhen,
  nightTemp,
  nightText,
  nightPlaces,
  nightWind,
  nightSea,
  nightPeipsi,
  date,
}) => {
  return (
    <li>
      <Card>
        <div class="row">
          <div class="col col-sm-6">
            <div class="card">
              <div class="card-body">
                <div className="forecast-item__price">Date {date}</div>
                <h5 class="card-title">Day time</h5>
                <p class="card-text">Phenomenon:{dayPhen}</p>
                <p class="card-text">Temperatues:{dayTemp}</p>
                <p class="card-text">Text:{dayText}</p>
                <div>
                  <p class="card-text">Places:</p>
                  <Places isDay={true} data={dayPlaces} />
                </div>
                <div>
                  <p class="card-text">Winds:</p>
                  <Winds data={dayWind} />
                </div>
                {typeof daySea === "string" && (
                  <p class="card-text">Sea:{daySea}</p>
                )}
                <p class="card-text">peipsi:{dayPeipsi}</p>
              </div>
            </div>
          </div>
          <div class="col col-sm-6">
            <div class="card">
              <div class="card-body">
                <div className="forecast-item__price">Date {date}</div>

                <h5 class="card-title">Night time</h5>

                <p class="card-text">Phenomenon:{nightPhen}</p>
                <p class="card-text">Temperatues:{nightTemp}</p>
                <p class="card-text">Text:{nightText}</p>
                <div>
                  <p class="card-text">Places:</p>
                  <Places data={nightPlaces} />
                </div>
                <div>
                  <p class="card-text">Winds:</p>
                  <Winds data={nightWind} />
                </div>
                <p class="card-text">Sea:{nightSea}</p>
                <p class="card-text">Peipsi:{nightPeipsi}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ForecastItem;
