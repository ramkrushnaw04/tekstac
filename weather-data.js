// Mock dataset of known cities and their temperatures
const weatherData = {
  "Sydney": 28,
  "London": 15,
  "New York": 22,
  "Tokyo": 25,
  "Mumbai": 32
};

// Simulated API call that returns a promise
function fetchWeatherAPI(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!city) {
        reject("City name is missing");
      } else if (!weatherData.hasOwnProperty(city)) {
        reject("City not found");
      } else {
        resolve(weatherData[city]);
      }
    }, 1000); // simulate network delay
  });
}

// Async function using await + try...catch...finally
async function getWeather(city) {
  try {
    const temperature = await fetchWeatherAPI(city);
    console.log(`Temperature in ${city} is ${temperature}°C`);
  } catch (error) {
    console.log(`Failed to fetch weather: ${error}`);
  } finally {
    console.log("Weather check completed");
  }
}

// Sample calls
getWeather("Sydney");
getWeather("");
getWeather("Brazil");

// Export for use in other modules (Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = getWeather;
}
