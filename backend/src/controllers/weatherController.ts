import { Request, Response } from 'express';
import { getWeather } from '../services/weatherService';
import { Weather } from '../types/Weather';

export const weatherController = async (req: Request, res: Response) => {
  const city = req.query.city as string;
  
  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }

  try {
    const weatherData: Weather = await getWeather(city);

    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weаther data' });
  }
};
