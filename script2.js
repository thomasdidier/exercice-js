//////////////////////////////////////////////////////////////////////////////////
/**** calculateur de lettre ****/

var print = function(msg){

	document.getElementById("output").innerHTML = "Length is " + msg;

}

document.getElementById("btn").onclick = function(event){
	print(document.getElementById('str').value.length);
}

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