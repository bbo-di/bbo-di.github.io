const APIKEY = 'b870891260ddeabb3e57c6dcf09e33c2'
const loading_div = document.createElement('div');
const weather_id = document.querySelector('#weather');
weather_id.appendChild(loading_div);
const weather_div = weather_id.querySelector('div');
weather_div.classList.add('loading');
const loading = document.querySelector('.loading');
const loading_span = document.createElement('span');
loading.appendChild(loading_span);
const loading_Span = loading.querySelector('span');
loading_Span.innerText = 'LOADING'

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`;
    fetch(url).then(Response => Response.json()).then(data => {
        const loading = document.querySelector('.loading');
        loading.remove();
        const weather = document.querySelector('#weather li:first-child span');
        const city = document.querySelector('#weather li:last-child span');
        const weather_icon = document.querySelector('#weather ul li:first-child');
        city.innerText = data.name;
        weather.innerText = data_weather = `${data.weather[0].main}${data.main.temp}°C`;
        const img = document.createElement('img');
        weather_icon.appendChild(img);
        img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    }); //서버가 바로 가지고 올 수 있도록 만들어주는 then()
}
function onGeoError(){
    alert("can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)