const weatherSection = document.querySelector('.weather_section')
const data = ['Odesa', 'Kyiv','Kherson','Zhytomyr','Lviv','Ivano-Frankivsk', 'Simferopol', 'Nadlymanske','London']
createWeatherSectionMarkup(data)

const getWeather = document.querySelector('.get_weather');
const weather = document.querySelector('.weather');
const selectCity = document.querySelector('.select_city')

getWeather.addEventListener('click', function () {
    const selectedCity = selectCity.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`
    fetch(`${url}`)
        .then((response) => response.json())
        .then((json) => {
            weather.innerHTML = createGetWeatherMarkup(json);
        })
        .catch((error) => {
            console.log(error)
            alert('Help')
        })
})

function createWeatherSectionMarkup(sities) {
    const markup = `
<label for="select_city">Select city</label>
<select class="select_city" id="select_city">
    ${sities.map((sity) => `
        <option value="${sity}">${sity}</option>  
    `).join("")}
</select>
<button class="get_weather">Get weather</button>
<div class="weather"></div>`
    weatherSection.innerHTML = markup
}

function createGetWeatherMarkup(json) {
    const imgUrl = `https://openweathermap.org/img/w/${json.weather[0].icon}.png`
    return `
    <div 
    style="max-width: 350px;margin: 20px auto;background: #323264;
    border-radius: 20px;padding: 10px">
    <img src="${imgUrl}" alt="weather"><h2>Sity:${json.name}</h2>
    <p>Temperature:${json.main.temp}&#xb0</p>
    <p>Pressure:${json.main.pressure}Pa</p>
    <p>Description: ${json.weather[0].description}</p>
    <p>Humidity: ${json.main.humidity}%</p>
    <p>Wind speed: ${json.wind.speed}Km/h</p>
    <p>Wind degrees: ${json.wind.deg}&#xb0</p>
    </div>`
}