const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    const city = document.getElementById('city-name').value;
    
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found!");
                return;
            }

            const cityName = data.name;
            const temperature = `${data.main.temp}°C`;
            const description = data.weather[0].description;
            const humidity = `Humidity: ${data.main.humidity}%`;
            const windSpeed = `Wind Speed: ${data.wind.speed} m/s`;

            document.getElementById('city').innerText = cityName;
            document.getElementById('temperature').innerText = temperature;
            document.getElementById('description').innerText = description;
            document.getElementById('humidity').innerText = humidity;
            document.getElementById('wind-speed').innerText = windSpeed;

            document.getElementById('weather-info').style.display = 'block';
        })
        .catch(error => {
            alert("Error fetching weather data!");
            console.log(error);
        });
}
