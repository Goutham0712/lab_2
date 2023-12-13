//Require express
const express = require('express');
const app = express();
const port = 8002;

// start server on port 8002
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Search stackoverflow about how to make an external API call
const https = require('https');

// Use https.get()
https.get('https://api.weatherapi.com/v1/current.json?key=33dbd53c589146229d8194846231212&q=Paris&aqi=yes', (response) => {
  let data = '';


  // Accumulate data chunks
  response.on('data', (chunk) => {
    data += chunk;
  });

  // Process the data after receiving it
  response.on('end', () => {
    // Parse the result from https.get() using JSON.parse()
    const weatherData = JSON.parse(data);

    // Check if the status code is 200
    if (response.statusCode === 200) {
      // Get the temperature and weather description data
      const temperature = weatherData.current.temp_c;
      const description = weatherData.current.condition.text;

      // Display on your website
      console.log(`Temperature: ${temperature}°C, Weather: ${description}`);
    } else {
      console.error(`Error: ${response.statusCode}`);
    }
  });
});