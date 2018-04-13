//////////////////////////////////////////////////////////////////////////////////
/**** horloge ****/

setInterval(function() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();

if (hours >= 24){
hours = -24;
}
	
	if(seconds < 10){
		seconds = "0" + seconds;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	var clockTime = hours + ":" + minutes + ":" + seconds;
	var clock = document.getElementById("clock");
	clock.innerText = clockTime;
 }, 1000);


//////////////////////////////////////////////////////////////////////////////////
/**** meteo ****/

$(document).ready(function(){
	$('#submitWeather').click(function(){
	var city = $("#city").val();
	
	if(city != ""){
		
		$.ajax({
			url:'http://api.openweathermap.org/data/2.5/weather?q='+ city + ',fr&units=metric&lang=fr&appid=06a821a408fbe8ad9d8881394efee483',
			type: "GET",
			dataType:"jsonp",
			success: function(data){
				var widget = show(data);

				$("#show").html(widget);
				$("#city").val('');
			}
		});
	
	}else{
		$("#error").html('Field connot be empty');
	}

	});
	
});

function show(data){

	return"<h3><img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'></h3>" +
		"<h3><strong>description</strong>:"+ data.weather[0].description +"</h3>" +
		"<h3><strong>Meteo a</strong>:"+ " " + data.name + ", " + data.sys.country +" </h3>" +
		"<h3><strong>temperature</strong>:"+ " " + data.main.temp + " °" +"</h3>" +
		"<h3><strong>temperature min</strong>:"+ " " + data.main.temp_min + " °" +"</h3>" +
		"<h3><strong>temperature max</strong>:"+ " " + data.main.temp_max + " °" +"</h3>" +
		"<h3><strong>Vent</strong>:"+ " " + data.wind.speed +"</h3>" + 
		"<h3><strong>humidity</strong>:"+ " " + data.main.humidity + " %" +"</h3>" +
		"<h3><strong>pression</strong>:"+ " " + data.main.pressure +"</h3>";
		;
}

