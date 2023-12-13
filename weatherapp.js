const express = require('express');
const app = express();
const port = 8002;
const https = require('https');

app.get('/', (req, res) => {
  // Make the API call here
  https.get('https://api.weatherapi.com/v1/current.json?key=33dbd53c589146229d8194846231212&q=Paris&aqi=yes', (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const weatherData = JSON.parse(data);
      if (response.statusCode === 200) {
        const temperature = weatherData.current.temp_c;
        const description = weatherData.current.condition.text;
        // Send the weather information as a response to the request
        res.send(`Temperature: ${temperature}°C, Weather: ${description}`);
      } else {
        res.status(response.statusCode).send(`Error: ${response.statusCode}`);
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
