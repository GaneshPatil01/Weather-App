const apiKey = "c41df11ffef3ae1a7ec935373c535b34";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =document.querySelector('.search input');
const searchBtn =document.querySelector('.search button');
const weathericon = document.querySelector('.weathericon');


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)
    document.querySelector('.city').innerHTML = data.name; 
    document.querySelector('.temp').innerHTML = data.main.temp + ' °C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';  
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";  
    
    if(data.weather[0].main == "Clouds")
    {
        weathericon.src = "img/images/clouds.png";

    }
    else if(data.weather[0].main == "Clear")
    {
        weathericon.src = "img/images/clear.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        weathericon.src = "img/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weathericon.src = "img/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist")
    {
        weathericon.src = "img/images/mist.png";
    }
    
}
searchBtn.addEventListener("click", (e)=>{
    console.log(searchBox.value);
    
    checkWeather(searchBox.value);
});

