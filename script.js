

const tempel = document.querySelector('.temp')
const city = document.querySelector('.city')
const humidity = document.querySelector('.humidity')
const windspeed = document.querySelector('.windspeed')

const userInput = document.querySelector('.header input');
const userBtn = document.querySelector('.btn')

let cityName = ""

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&appid=5de5be93e658189aeb08049b8e331d4d&units=metric'
async function weatherReport(){
    
    const getData = await fetch(apiUrl +cityName + `${apiKey}`);
    let data = await getData.json()
    // console.log(apiUrl);

    tempel.innerHTML = Math.round(data.main.temp)
    city.innerHTML = data.name
    humidity.innerHTML = data.main.humidity
    windspeed.innerHTML = data.wind.speed

    // console.log(tempel);
}
// weatherReport()


userBtn.addEventListener('click', ()=>{
    cityName = userInput.value
    weatherReport()
})