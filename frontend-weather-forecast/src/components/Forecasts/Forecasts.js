import { Card } from "react-bootstrap";
import ForecastHeader from "./ForecastHeader";
import ForecastList from "./ForecastList";
import "./Forecasts.css"
const Forecasts = (props) => {
    return(
       <Card className="Forecasts">
            <ForecastHeader></ForecastHeader>
            <ForecastList></ForecastList>
       </Card>
    );
};
export default Forecasts;