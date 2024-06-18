import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import getWeather from "./services/weatherService";
import { containerStyles } from "./styles/styles";
import Search from "./components/Search";
import Weather from "./components/Weather";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    setWeather(null);

    try {
      const weatherData = await getWeather(city);

      setWeather(weatherData);
    } catch (error) {
      setError("Invalid input, please try again.");
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <Container sx={containerStyles}>
      <Search
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
        setError={setError}
      />

      {error && (
        <Typography
          variant="h6"
          color="#eba000"
          sx={{ fontStyle: "italic", fontWeight: "bold" }}
        >
          {error}
        </Typography>
      )}

      {weather && <Weather weather={weather} />}
    </Container>
  );
};

export default App;
