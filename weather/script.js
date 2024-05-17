let weather ={
    "apikey":"33443cf34f090fe504c788be59317eda", 
     fetchWeather :function (city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
         + city 
         + "&units=metric&appid=" 
         + this.apikey
         )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));

     },
     displayWeather : function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } =data.wind;
        //console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText="Weather in " + name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp  + "°C";
        document.querySelector(".humidity").innerText="Humidity: " + humidity+"%" ;
        document.querySelector(".wind").innerText="Wind Speed: " + speed+"km/hr";
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1445586831130-7f00f5eac0f2?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";

        
        
     },
     search:function(){
      this.fetchWeather(document.querySelector(".search-bar").value);
     }

 }; 
 document.querySelector(".search button")
 .addEventListener("click",function(){
   weather.search();
 });
 document.querySelector(".search-bar")
   .addEventListener("keyup",function(event){
      if((event.key=="Enter"))
      {
         weather.search();
      }
   }
 );