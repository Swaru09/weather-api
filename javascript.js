const app=document.querySelector('.weather-app');
const temp=document.querySelector('.temp');
const dateOutput=document.querySelector('.date');
const timeOutput=document.querySelector('.time');
const conditionOutput=document.querySelector('.condition');
const nameOutput=document.querySelector('.name');
const icon=document.querySelector('.icon');
const cloudOutput=document.querySelector('.cloud');
const humidityOutput=document.querySelector('.humidity');
const windOutput=document.querySelector('.wind');
const form=document.querySelector('.locationInput');
const search=document.querySelector('.search');
const btn=document.querySelector('.submit');
const cities=document.querySelector('.city');
let cityInput="London";
cities.forEach((city)=>{
    city.addEventListener('click',(e)=>{
        cityInput=e.target.innerHTML;
        fetchWeatherData();
        app.style.opacity="0";
    });
})
form.addEventListener('submit',(e)=>{
    if(search.value.length==0){
        alert('Please type in a city name');
    }else{
        cityInput=search.value;
        fetchWeatherData();
        search.value="";
        app.style.opacity="0";
    }
    e.preventDefault();
});
function dayOfTheWeek(day,month,year){
    const weekday=[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date('${day}/${month}/${year}').getDay()];
};
function fetchWeatherData(){
    fetch('http://api.weatherapi.com/v1/current.json?key=ddfd97022c294fb181a201519221608&q=${cityInput}')
    .then(response=>response.json())
    .then(data =>{
        console.log(data);
        temp.innerHTML=data.current.temp_c+"&#176;";
        conditionOutput.innerHTML=data.current.condition.text;
        // const date:data.location.localtime;
        // const y:parseInt(date.substr(0,4));
        // const m:parseInt(date.substr(5,2));
        // const d:parseInt(date.substr(8,2));
        dateOutput.innerHTML='${dayOfTheWeek(d,m,y)}${d},${m} ${y}';
        timeOutput.innerHTML=time;
        nameOutput.innerHTML=data.location.name;
        const iconId=data.current.condition.icon.substr("https://cdn.weatherapi.com/weather/128x128/night/143.png".length);
        // icon.src="./icons/"+iconId;
        cloudOutput.innerHTML=data.current.cloud+"%"
    })
}