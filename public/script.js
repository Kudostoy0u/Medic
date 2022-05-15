/*
Script.js is for exclusively the introduction sequence
*/


// fake jquery DOM accesor
const $ = document.querySelector.bind(document);

// skip?
if (localStorage.getItem("hasplayed")) {
	$("#start").style.display = "none"
} else {
  // or commence introduction sequence
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
	
		setTimeout(() => {
			$("#acorn").classList.remove("acorn")
			$("#acorn").classList.add("acornin")
			$("#plant").classList.add("plant")
		}, 22000)
		$("#acorn").addEventListener("click", () => {
			location.reload()
		})
		typewriter.typeString('6 million people die every year from low quality healthcare...')
			.pauseFor(1500)
			.deleteAll()
			.pauseFor(500)
			.start()
		typewriter.typeString('Healthcare isn\'t doing enough...')
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