const apiKey = '198a6376dabdfa3a7085a9bbf049636e';

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                document.getElementById('weather-result').innerHTML = `<p>City not found. Please try again.</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weather-result').innerHTML = `<p>Unable to retrieve weather information. Please try again later.</p>`;
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const description = weather[0].description;
    const temperature = main.temp;
    const humidity = main.humidity;

    const resultHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Condition: ${description}</p>
    `;

    document.getElementById('weather-result').innerHTML = resultHTML;
}
