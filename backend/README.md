# Weather Backend API

A weather backend API built with Node.js, Express, and TypeScript that uses the OpenWeather API to fetch current weather data for a given city.

## Features

- Fetch current weather data for a specified city
- Automatically reload server during development using `nodemon`
- Structured project with controllers, routes, and services

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

## Getting Started

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/prossik/weather-backend.git
    cd weather_app_backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your OpenWeather API key:

    ```plaintext
    OPENWEATHER_API_KEY=your_api_key_here
    ```


### Running the Server

#### Development

To start the server in development mode with automatic reloading:

```bash
npm run dev
```


### Usage

You can use Postman or just your default system browser to test app.

Example:

```bash
http://localhost:3000/api/weather?city=Lviv
```

Output result for current datetime weaher

```bash
{
   "city":"Lviv",
   "temperature":18.38,
   "description":"few clouds",
   "humidity":73,
   "windSpeed":2.61,
   "pressure":1013,
   "visibility":10000
}
```

## Enjoy!