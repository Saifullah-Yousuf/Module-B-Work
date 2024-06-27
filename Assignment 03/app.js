let input = document.getElementById("input_");
let button = document.getElementById("btnss");
let img = document.getElementById("Weather_img");
let temperature = document.getElementById("temperature");
let description = document.getElementById("description");
let last_line = document.getElementById("last-line");

// async function checkWeather(city) {
//     const apiKey = "68ba4020d9ed9899515ddc319e9a9512";
//     const url = `https://api.openweathermap.org/data/2.5/weather?${city}&app${apiKey}`;

//     const weatherData = await fetch(`${url}`)
//     .then(response => response.json());

//     console.log(weatherData);

// }

async function checkWeather(city) {
    const apiKey = "68ba4020d9ed9899515ddc319e9a9512";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weatherData = await fetch(`${url}`)
   .then(response => response.json());

    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    last_line.innerHTML = `Have A Nice Day`;

    switch(weatherData.weather[0].main){
        case('Clouds'):
            img.src = "images/case 01 Clouds.jpg";
            break;
        
        case ('Clear'):
            img.src = "images/case 02 Clear.jpg";
            break;
    
        case ('Rain'):
            img.src = "images/case 03 Rain.jpg";
            break;
    
        case ('Mist'):
            img.src = "images/case 04 Mist.jpg";
            break;
    
        case ('ClearSnow'):
            img.src = "images/case 05 ClearSnow.jpg";
            break;
    
        default :
        console.log("Error");
    }

    console.log(weatherData);
};

button.addEventListener('click',(event)=>{
    checkWeather(input.value);
    event.preventDefault();
});