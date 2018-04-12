var sliderIndex = 1;
showDivs(sliderIndex);

function plusDivs(n){
	showDivs(sliderIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlider");
	if (n > x.length) {sliderIndex = 1}
		if (n < 1) {sliderIndex = x.length}
			for (var i = 0; i < x.length; i++) {
				x[i].style.display = "none";
			}
			x[sliderIndex-1].style.display = "block";
}