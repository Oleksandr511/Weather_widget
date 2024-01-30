const weatherBlock = document.querySelector('#weather');
const containerForWeatherBlock = weatherBlock.innerHTML;

let imageArray = new Map([
    ['01d', './img/01d@2x.png'],
    ['02d', './img/02d@2x.png'],
    ['03d' , './img/03d@2x.png'],
    ['04d' , './img/04d@2x.png'],
    ['09d' , './img/09d@2x.png'],
    ['10d' , './img/10d@2x.png'],
    ['11d' , './img/11d@2x.png'],
    ['13d' , './img/13d@2x.png'],
    ['50d' , './img/50d@2x.png'],
    ['01n' , './img/01n@2x.png'],
    ['02n' , './img/02n@2x.png'],
    ['03n' , './img/03d@2x.png'],
    ['04n' , './img/04d@2x.png'],
    ['09n' , './img/09d@2x.png'],
    ['10n' , './img/10d@2x.png'],
    ['11n' , './img/11d@2x.png'],
    ['13n' , './img/13d@2x.png'],
    ['50n' , './img/50d@2x.png']
]);

const button = document.querySelector('.search__city');
button.addEventListener('click', function b() {
    loadWeather();
})
async function loadWeather() {

    const city = document.querySelector('.search').value;
    const server = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68f0472eea5da644d727be8207c8fff6`;
    const responce = await fetch(server, {
        method: 'GET',
    });
    const responceResult = await responce.json();

    if (!responce.ok) {
        weatherBlock.innerHTML = responceResult.message;
        weatherBlock.style.color = 'rgb(255, 0, 0)';
    }
    if (responce.ok) {

        weatherBlock.innerHTML = containerForWeatherBlock;
        weatherBlock.style.color = 'rgb(0, 0, 0)';
    }
    document.querySelector('.info').style.display = 'block';

    const weatherCity = document.querySelector('.weather__city');
    weatherCity.innerHTML = responceResult.name;
    const temperature = document.querySelector('.weather__temp');

    temperature.innerHTML = Math.round((responceResult.main.temp - 273.15), 2) + '˚C';
    const desc = document.querySelector('.weather__desc');
    desc.innerHTML = responceResult.weather[0].main;
    const img = document.querySelector("img");
    const icon = responceResult.weather[0].icon;
    img.src = imageArray.get(icon);
}




