// var video = document.getElementById("player1").load();
var video = document.querySelector(".video").load();

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// do I want to update the video volume every time I hit play?
// do I have to use variables?

document.querySelector("#play").addEventListener("click", function() {
	document.querySelector('.video').play();
	console.log("Play Video");
	var volumeValue = document.getElementById('slider').value;
	// document.getElementById('volume').innerHTML = volumeValue;
	document.getElementById('volume').innerHTML = volumeValue + "%";
	console.log("Update the volume");
});

document.querySelector("#pause").addEventListener("click", function() {
	document.querySelector('.video').pause();
	console.log("Pause Video");
});

function slowDown(a){
	x = a * 0.95
	return x
}

var defaultSpeed = 1.0

function speedUp(a){
	x = a * 1.05
	return x
}

document.querySelector("#slower").addEventListener("click", function() {
	
	var slowDownBy = slowDown(defaultSpeed);
	document.querySelector('.video').playbackRate = slowDownBy;
	console.log("New speed is: " + slowDownBy);
	defaultSpeed = slowDownBy
});

document.querySelector("#faster").addEventListener("click", function() {
	
	var speedUpBy = speedUp(defaultSpeed);
	document.querySelector('.video').playbackRate = speedUpBy;
	console.log("New speed is: " + speedUpBy);
	defaultSpeed = speedUpBy
});

function getTime(a = 67.403333, b){
	x = a - b
	return x
}


document.querySelector("#skip").addEventListener("click", function() {
	var videoLenght = document.querySelector(".video").duration;
	console.log(videoLenght)
	var currentVtime = document.querySelector(".video").currentTime;
	console.log("Original location " + currentVtime);
	// lenght is 67.403333
	// var newTime = getTime(document.querySelector(".video").duration, currentVtime);
	// console.log(newTime);
	
	if ((currentVtime + 15) > videoLenght){
		var newPosition = document.querySelector(".video").currentTime;
		newPosition = 0;
		document.querySelector(".video").load();
		console.log("New position " + newPosition);
	} else {
		var newTime = currentVtime + 15;
		document.querySelector(".video").currentTime = newTime;
		document.querySelector('.video').play();
		console.log("New position " + newTime);

	}
	
});

var count = 1

document.querySelector("#mute").addEventListener("click", function() {

	if (count % 2 != 0) {
		var vid = document.querySelector('.video');
		vid.muted = true;
		document.querySelector("#mute").innerText = "Unmute";
		console.log("Video muted");
	} else {
		var vid = document.querySelector('.video');
		vid.muted = false;
		document.querySelector("#mute").innerText = "Mute";
		console.log("Video unmuted");
	}
	count += 1
});


// var rangeInput = document.getElementById("slider");

// rangeInput.addEventListener('mouseup', function() {
//     if (rangeInput.value > 0 && rangeInput.value < 10) {
//         document.getElementById('volume').innerHTML = "10" + "%";
//     } else if (rangeInput.value >= 10 && rangeInput.value < 20){
//         document.getElementById('volume').innerHTML = "20%";
//     }
// });


var i = document.querySelector('input'),
    o = document.querySelector('#volume');

i.addEventListener('input', function () {
	o.innerHTML = i.value + "%";
	var vid = document.querySelector('.video');
	var newVolume = i.value / 100;
	vid.volume = newVolume;

}, false);

document.querySelector("#vintage").addEventListener("click", function() {
	
	var circle = document.querySelector('.video');
	circle.classList.add('oldSchool');
	
});

document.querySelector("#orig").addEventListener("click", function() {
	
	var circle = document.querySelector('.video');
	circle.classList.remove('oldSchool');
	
});




