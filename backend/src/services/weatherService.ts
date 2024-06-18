import axios from 'axios';
import dotenv from 'dotenv';
import { Weather } from '../types/Weather';

dotenv.config();

const apiKey = process.env.OPENWEATHER_API_KEY;

if (!apiKey) {
  console.error('Invalid API key');
}

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city: string): Promise<Weather> => {
  const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    const weather: Weather = {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      pressure: data.main.pressure,
      visibility: data.visibility,
    };

    return weather;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching weather data:', error.response?.data || error.message);
      throw new Error(`Error fetching weather data: ${error.response?.data?.message || error.message}`);
    } else {
      console.error('Unknown error:', error);
      throw new Error('An unknown error occurred while fetching weather data');
    }
  }
};
