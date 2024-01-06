 const apiKey = "bb913f1e7fe189a508e87a2357ddb453";
 const apiURL= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
 const searchBox=document.querySelector(".search input");
 const searchBtn=document.querySelector(".search button");
 const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const response =await fetch(apiURL+city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".Weather").style.display="none";
    }
    else{
        var data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "images/images_weatherApp/clouds.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "images/images_weatherApp/rain.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "images/images_weatherApp/clear.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "images/images_weatherApp/mist.png";
    }
    else if(data.weather[0].main=="Drizzlz"){
        weatherIcon.src = "images/images_weatherApp/drizzle.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src = "images/images_weatherApp/snow.png";
    }
    }
    var data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "images/images_weatherApp/clouds.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "images/images_weatherApp/rain.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "images/images_weatherApp/clear.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "images/images_weatherApp/mist.png";
    }
    else if(data.weather[0].main=="Drizzlz"){
        weatherIcon.src = "images/images_weatherApp/drizzle.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src = "images/images_weatherApp/snow.png";
    }

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    document.querySelector(".Weather").style.display = "block";
    document.querySelector(".error").style.display="none";
});


searchBox.addEventListener('keypress',function(event){
    if(event.keyCode==13){
        checkWeather(searchBox.value);
        document.querySelector(".Weather").style.display = "block";
        document.querySelector(".error").style.display="none";
    }
});

