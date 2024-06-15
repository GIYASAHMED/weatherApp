

const tempel = document.querySelector('.temp')
const city = document.querySelector('.city')
const humidity = document.querySelector('.humidity')
const windspeed = document.querySelector('.windspeed')

const userInput = document.querySelector('.header input');
const userBtn = document.querySelector('.btn')

const weatherIcon = document.querySelector('.icon')
const mainHead = document.querySelector('#main')
console.log(mainHead);

let cityName = ""

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&appid=5de5be93e658189aeb08049b8e331d4d&units=metric'


async function weatherReport(){
    
    const getData = await fetch(apiUrl +cityName + `${apiKey}`);
    let data = await getData.json()
    console.log(data.weather[0].main);

    tempel.innerHTML = Math.round(data.main.temp)
    city.innerHTML = data.name
    humidity.innerHTML = data.main.humidity
    windspeed.innerHTML = data.wind.speed

    // image change as per weather
    if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'images/rain.png'
        mainHead.style.backgroundImage = "url('./images/rainbg.jpg')";
    }else if(data.weather[0].main == 'Cloud'){
        weatherIcon.src = 'images/clouds.png'
    }else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png'
    }else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png'
    }else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png'
    }else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = 'images/snow.png'
    }

    

}
weatherReport()


userBtn.addEventListener('click', ()=>{
    cityName = userInput.value
    weatherReport()
})