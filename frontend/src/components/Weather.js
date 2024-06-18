import React, { useEffect, useState } from "react";
import { Box, Typography, CardContent, Card } from "@mui/material";
import {
  infoBoxStyles,
  cardStyles,
  cityStyles,
  dateStyles,
  infoDetailsBoxStyles,
} from "../styles/styles";
import getImageSrc from "../services/getImageSrc";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import TireRepairIcon from "@mui/icons-material/TireRepair";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const Weather = ({ weather }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const currentDate = new Date();
  const options = { month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const weatherDetails = [
    {
      icon: <DeviceThermostatIcon sx={{ color: "#0a5084" }} />,
      label: "Temperature",
      value: `${weather?.temperature}°C`,
    },
    {
      icon: <ExpandCircleDownIcon sx={{ color: "#0a5084" }} />,
      label: "",
      value: weather?.description,
    },
    {
      icon: <WaterDropIcon sx={{ color: "#0a5084" }} />,
      label: "Humidity",
      value: `${weather?.humidity}%`,
    },
    {
      icon: <AirIcon sx={{ color: "#0a5084" }} />,
      label: "Wind Speed",
      value: `${weather?.windSpeed} km/h`,
    },
    {
      icon: <TireRepairIcon sx={{ color: "#0a5084" }} />,
      label: "Pressure",
      value: `${weather?.pressure} mb`,
    },
    {
      icon: <VisibilityIcon sx={{ color: "#0a5084" }} />,
      label: "Visibility",
      value: `${weather?.visibility} m`,
    },
  ];

  return (
    <Box
      sx={{
        ...infoBoxStyles,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      <Card sx={cardStyles}>
        <CardContent>
          <Typography variant="h4" sx={cityStyles}>
            {weather.city},
          </Typography>

          <Typography variant="h6" sx={dateStyles}>
            {formattedDate}
          </Typography>

          {weatherDetails.map((detail, index) => (
            <Box key={index} sx={infoDetailsBoxStyles}>
              {detail.icon}
              <Typography
                variant={detail.label || "body1"}
                sx={{
                  textTransform: detail.label || "capitalize",
                }}
              >
                {detail.label ? `${detail.label}: ` : ""}
                {detail.value}
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>

      <Box
        component="img"
        src={getImageSrc(weather.description)}
        alt={weather.description}
        sx={{
          height: 200,
          width: 200,
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default Weather;
