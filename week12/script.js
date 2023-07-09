// Home Page - Weather Card
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,us&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=Carlsbad,us&units=metric&cnt=3&appid=${apiKey}`;

function getWeather() {
  fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const condition = data.weather[0].description;
      const humidity = data.main.humidity;
      document.getElementById('temperature').textContent = temperature + '°C';
      document.getElementById('condition').textContent = condition;
      document.getElementById('humidity').textContent = humidity + '%';
    })
    .catch(error => console.log('Error fetching weather data:', error));
}

function getForecast() {
  fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      const forecastList = data.list;
      const forecastElement = document.getElementById('forecast');
      forecastList.forEach(day => {
        const temperature = day.temp.day;
        const forecastItem = document.createElement('li');
        forecastItem.textContent = temperature + '°C';
        forecastElement.appendChild(forecastItem);
      });
    })
    .catch(error => console.log('Error fetching forecast data:', error));
}

getWeather();
getForecast();

// Home Page - Information Card
let drinkCount = localStorage.getItem('drinkCount');
drinkCount = drinkCount ? parseInt(drinkCount) : 0;
document.getElementById('drinkCount').textContent = drinkCount;

// Fresh Page - Form Submission
const drinkForm = document.getElementById('drinkForm');
const outputArea = document.getElementById('outputArea');

drinkForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const fruit1 = document.getElementById('fruit1').value;
  const fruit2 = document.getElementById('fruit2').value;
  const fruit3 = document.getElementById('fruit3').value;
  const instructions = document.getElementById('instructions').value;

  // Calculate total nutritional values based on selected fruits (assumed data available)
  const fruitData = {
    // Replace with actual data from the Fruit Data source
  };
  const fruit1Data = fruitData[fruit1];
  const fruit2Data = fruitData[fruit2];
  const fruit3Data = fruitData[fruit3];

  const totalCarbohydrates = fruit1Data.carbohydrates + fruit2Data.carbohydrates + fruit3Data.carbohydrates;
  const totalProtein = fruit1Data.protein + fruit2Data.protein + fruit3Data.protein;
  const totalFat = fruit1Data.fat + fruit2Data.fat + fruit3Data.fat;
  const totalSugar = fruit1Data.sugar + fruit2Data.sugar + fruit3Data.sugar;
  const totalCalories = fruit1Data.calories + fruit2Data.calories + fruit3Data.calories;

  const currentDate = new Date().toLocaleDateString();

  const formattedOutput = `
    <h2>Your Order</h2>
    <p>First Name: ${firstName}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Fruit 1: ${fruit1}</p>
    <p>Fruit 2: ${fruit2}</p>
    <p>Fruit 3: ${fruit3}</p>
    <p>Special Instructions: ${instructions}</p>
    <p>Order Date: ${currentDate}</p>
    <h3>Total Nutritional Values</h3>
    <p>Carbohydrates: ${totalCarbohydrates}g</p>
    <p>Protein: ${totalProtein}g</p>
    <p>Fat: ${totalFat}g</p>
    <p>Sugar: ${totalSugar}g</p>
    <p>Calories: ${totalCalories}cal</p>
  `;

  outputArea.innerHTML = formattedOutput;

  // Increment drink count and store in localStorage
  drinkCount++;
  localStorage.setItem('drinkCount', drinkCount);
});

// About Us Page - Google Map
function initMap() {
  const mapElement = document.getElementById('map');
  const mapOptions = {
    center: { lat: 33.1581, lng: -117.3506 }, // Coordinates for Carlsbad
    zoom: 12,
  };
  const map = new google.maps.Map(mapElement, mapOptions);
}

// Footer - Last Modified Date
const lastModified = new Date(document.lastModified);
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = lastModified.toLocaleString();
