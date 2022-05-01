const $ = document.querySelector.bind(document);
// id = setInterval(frame, 5);

// function frame() {
//   if (/* test for finished */) {
//     clearInterval(id);
//   } else {
//     /* code to change the element style */ 
//   }
// }
$("#container").style.display = "none";
$("body").style.background = "black";
const start = () => {
	$("#play").style.display = "none"
	let typewriter = new Typewriter($("#typewriter"), {
		loop: false,
		delay: 50,
		deleteSpeed: 10
	});
	var audio = new Audio("assets/Flowery.mp3")

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
	}, 18000)
	
	setTimeout(() => {
		$("#acorn").classList.remove("acorn")
		$("#acorn").classList.add("acornin")
	}, 21000)

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
	

}