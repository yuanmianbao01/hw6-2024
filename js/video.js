var video = document.getElementById("player1");

window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").textContent = video.volume*100;
	
});

document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = video.playbackRate*0.9;
	console.log("Video playspeed: " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate*1.1;
	console.log("Video playspeed: " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 10;
	if(video.currentTime == video.duration){
		video.currentTime = 0;
	}
	console.log("Video location: " + video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted !==true){
		video.muted = true;
		this.innerHTML = "Unmute";

	}
	else{
		video.muted = false;
		this.innerHTML = "Mute";
	}
})

document.querySelector("#slider").addEventListener("input", function(){
	video.volume = this.value/100;
	document.querySelector("#volume").textContent = this.value;
	console.log("The current volume:" + this.value +"%");
})

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
})