let loc=document.getElementById('location');
let ticon=document.getElementById('icon');
let value=document.getElementById('value');
let climate=document.getElementById('climate');
let iconfile;
const input=document.getElementById("search-input");
const button=document.getElementById("button");
button.addEventListener("click", (e)=>{
  e.preventDefault();
  getWeather(input.value);
  input.value='';
})

const getWeather=async(city)=>{
  try{
    const proxy="https://cors-anywhere.herokuapp.com/";
    const response=await fetch(`${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&appid=dab3af44de7d24ae7ff86549334e45bd`)
    const Weatherdata=await response.json();
    const{name}=Weatherdata;
    const{feels_like}=Weatherdata.main;
    const{id,main}=Weatherdata.weather[0];
    loc.textContent=name;
    climate.textContent=main;
    value.textContent=Math.round(feels_like-273);
    if(id>200 && id<300){
      ticon.src="Icons/thunderstrom.png"
    }
    else if(id>300 && id<400){
      ticon.src="Icons/sun & clouds.png"
    }
    else if(id>500 && id<600){
      ticon.src="Icons/rain.png"
    }
    else if(id>600 && id<700){
      ticon.src="Icons/snow.png"
    }
    else if(id>700 && id<800){
      ticon.src="Icons/humidity.png"
    }
    else if(id==800){
      ticon.src="Icons/sun.png"
    }
    else if(id>800){
      ticon.src="Icons/clouds.png"
    }
    console.log(Weatherdata);
  }
  catch(error){
    alert('City not Found')
  }
}

window.addEventListener("load" , ()=>{
  let lat;
  let long;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position)=>{
    long=position.coords.longitude;
    lat=position.coords.latitude;
    const proxy="https://cors-anywhere.herokuapp.com/";
    const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=dab3af44de7d24ae7ff86549334e45bd`;
    fetch(api).then((response)=>{
      return response.json();
    })
    .then ((data)=>{
      const{name}=data;
      const{feels_like}=data.main;
      const{id,main}=data.weather[0];

      loc.textContent=name;
      climate.textContent=main;
      value.textContent=Math.round(feels_like-273);
      if(id>200 && id<300){
        ticon.src="Icons/thunderstrom.png"
      }
      else if(id>300 && id<400){
        ticon.src="Icons/sun & clouds.png"
      }
      else if(id>500 && id<600){
        ticon.src="Icons/rain.png"
      }
      else if(id>600 && id<700){
        ticon.src="Icons/snow.png"
      }
      else if(id>700 && id<800){
        ticon.src="Icons/humidity.png"
      }
      else if(id==800){
        ticon.src="Icons/sun.png"
      }
      else if(id>800){
        ticon.src="Icons/clouds.png"
      }
      console.log(data);
    })
  }
  )
  }
})
