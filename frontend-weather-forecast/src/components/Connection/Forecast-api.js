const Forecast_URL = 'http://localhost:8080/forecasts'

export const forecastGet = async () =>
  await fetch(`${Forecast_URL}/meterReadings`).then(response => response.json())
 // https://www.ilmateenistus.ee/ilma_andmed/xml/forecast.php?lang=eng

 