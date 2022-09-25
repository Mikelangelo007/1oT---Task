import Container from "react-bootstrap/Container";

function ForecastHeader() {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "15vh",
      }}
    >
      <h1>Weather Forecast</h1>
    </Container>
  );
}

export default ForecastHeader;
