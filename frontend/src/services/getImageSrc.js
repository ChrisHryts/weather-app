import WEATHER_TYPES from '../constants/weatherTypes';

const getImageSrc = (description) => {
  description = description.toLowerCase();

  if (WEATHER_TYPES.CLEAR_WEATHER.includes(description))
    return process.env.PUBLIC_URL + '/picture/1.png';
  if (WEATHER_TYPES.CLOUDY_WEATHER.includes(description))
    return process.env.PUBLIC_URL + '/picture/2.png';
  if (WEATHER_TYPES.FOGGY_WEATHER.includes(description))
    return process.env.PUBLIC_URL + '/picture/3.jpeg';
  if (WEATHER_TYPES.OTHER_WEATHER.includes(description))
    return process.env.PUBLIC_URL + '/picture/4.jpeg';
  if (WEATHER_TYPES.RAINY_WEATHER.includes(description))
    return process.env.PUBLIC_URL + '/picture/5.png';

  return '';
};

export default getImageSrc;
