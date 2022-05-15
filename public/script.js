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
	
		setTimeout(() => {
			$("#acorn").classList.remove("acorn")
			$("#acorn").classList.add("acornin")
			$("#plant").classList.add("plant")
		}, 22000)
		$("#acorn").addEventListener("click", () => {
			location.reload()
		})
		typewriter.typeString('Thousands of people die every hour...')
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