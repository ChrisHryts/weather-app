import axios from 'axios';

const getWeather = async (city) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/weather?city=${city}`);

    return response.data;
  } catch (error) {
    console.error('Request failed:', error.message);

    throw new Error('Request failed');
  }
};

export default getWeather;
