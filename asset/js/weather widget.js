// weather-widget.js
document.addEventListener('DOMContentLoaded', function() {
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const city = 'Bengaluru';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Function to fetch and display weather data
  function updateWeather() {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        if (data.cod === 200) {
          const description = data.weather[0].description;
          const temperature = data.main.temp;
          const humidity = data.main.humidity;
          const windSpeed = data.wind.speed;

          document.getElementById('weather-description').textContent = `Weather: ${description}`;
          document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
          document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
          document.getElementById('wind').textContent = `Wind Speed: ${windSpeed} m/s`;
        } else {
          document.getElementById('weather-info').innerHTML = `<p>Error fetching weather data: ${data.message}</p>`;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('weather-info').innerHTML = `<p>Error fetching weather data.</p>`;
      });
  }

  // Call the function to update weather on page load
  updateWeather();
});
/**
 * 
 */