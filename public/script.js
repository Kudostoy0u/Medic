const $ = document.querySelector.bind(document);
if (localStorage.getItem("hasplayed")) {
	$("#start").style.display = "none"
} else {
	localStorage.setItem("hasplayed", "true");
	$("#container").style.display = "none";
	$("body").style.background = "black";
	$("#navbar").style.display = "none"
	$(".ticker").style.display = "none "
	$("#play").addEventListener("click",() => {
		
		$("#play").style.display = "none"
		let typewriter = new Typewriter($("#typewriter"), {
			loop: false,
			delay: 50,
			deleteSpeed: 10
		});
		let audio = new Audio("assets/Flowery.mp3")
		audio.volume = 0.11
		audio.play() // the world is now ravaged by deforestation
		setTimeout(() => {

			audio.pause() // (stop)
			audio.currentTime = 0
		}, 3050)
		setTimeout(() => {
			audio.play()    // the repurcussions are insurmountable 
		}, 8000)
		setTimeout(() => {
			audio.pause() // (stop)
			audio.currentTime = 0
		}, 10500)
		setTimeout(() => {
			audio.play() // It's up to you to help!
		}, 15200)
		setTimeout(() => {
			audio.pause() //(stop)
			audio.currentTime = 0
		}, 16900)
	
		setTimeout(() => {
			$("#acorn").classList.remove("acorn")
			$("#acorn").classList.add("acornin")
			$("#plant").classList.add("plant")
		}, 22000)
		$("#acorn").addEventListener("click", () => {
			location.reload()
		})
	
		typewriter.typeString('The world is now ravaged by deforestation...')
			.pauseFor(1500)
			.deleteAll()
			.pauseFor(500)
			.start()
		typewriter.typeString('The repercussions are insurmountable...')
			.pauseFor(1500)
			.deleteAll()
			.pauseFor(500)
			.typeString('It\'s up to you to help!')
			.pauseFor(1500)
			.deleteAll()
			.pauseFor(500)
			.start().stop();
	

	})
}	