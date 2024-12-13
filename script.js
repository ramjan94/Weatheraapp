 const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

    async function fetchWeather() {
      const city = document.getElementById('cityInput').value.trim();
      const weatherInfo = document.getElementById('weatherInfo');

      if (!city) {
        weatherInfo.innerHTML = '<p style="color: red;">Please enter a valid city name.</p>';
        return;
      }

      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();

        const { name, weather, main, wind } = data;
        weatherInfo.innerHTML = `
                    <h2>${name}</h2>
                    <p><strong>${weather[0].description.toUpperCase()}</strong></p>
                    <p>Temperature: <strong>${main.temp}&deg;C</strong></p>
                    <p>Feels Like: <strong>${main.feels_like}&deg;C</strong></p>
                    <p>Humidity: <strong>${main.humidity}%</strong></p>
                    <p>Wind Speed: <strong>${wind.speed} m/s</strong></p>
                `;
      } catch (error) {
        weatherInfo.innerHTML = `<p style="color: red;">${error.message}</p>`;
      }
    }