let notifier = new AWN({ icons: { enabled: false }, durations: { global: 1000 }})
const threeTrees = ["OakTree.png", "PineTree.png", "SequoiaTree.png"]
let index = 0;
if (!localStorage.getItem("tps")) {
	localStorage.setItem("tps",0)
}
$("#trees").innerHTML = "Trees: " + localStorage.getItem("trees");
let producerdata = {}
fetch('./producers.json')
	.then(response => response.json())
	.then(data => {
		producerdata = data["producers"]
		producerdata = Object.values(producerdata)
		producerdata.forEach(e => {
			$("#producers").innerHTML += `
			<div id = "${e.name.replace(/\s/g, '')}" data-product = "${e.product}" data-name = "${e.name}" data-value="${e.product}" data-cost="${e.cost}" class="producer">
			<img class = "pimg" src="./assets/${e.icon}" style="width:40%;height:20%;">
			  <h4>${e.name} - <span>${localStorage.getItem(`${e.name.replace(/\s/g, '')}total`) || 0}</span> </h4> 
			  <h8>${e.description} <br> <span style = "color:green">Costs ${e.cost} Trees</span></h8> 
		      </div>
			`
		})
		$("#producers").innerHTML += "<br><br>"
		document.querySelectorAll(".producer").forEach(e => e.addEventListener("click", function () {
			if (Number(this.dataset.cost) <= Number(localStorage.getItem("trees"))) {
				localStorage.setItem("tps", String(Number(localStorage.getItem("tps")) + Number(this.dataset.product)))
				localStorage.setItem("trees", String(Number(localStorage.getItem("trees")) - Number(this.dataset.cost)))
				localStorage.setItem(`${this.dataset.name.replace(/\s/g, '')}total`, (Number(localStorage.getItem(`${this.dataset.name.replace(/\s/g, '')}total`)) || 0) + 1)
				$(`#${this.id} > h4 > span`).innerHTML = localStorage.getItem(`${this.dataset.name.replace(/\s/g, '')}total`)
			} else {
				notifier.warning('Lack of Funds!')
			}
		}))
	});
if (localStorage.getItem("hasplayed")) {
	let audio = new Audio("assets/russle.mp3")
	$("#tree").addEventListener("click", () => {
		audio.play()
		index += 1;
		localStorage.setItem("trees", Number(localStorage.getItem("trees")) + 1)
		$("#tree").src = "./assets/" + threeTrees[index % 3]
		$("#trees").innerHTML = "Trees: " + localStorage.getItem("trees")
	})

}
setInterval(() => {
	localStorage.setItem("trees", String(
		Number(localStorage.getItem("trees")) + Number(localStorage.getItem("tps"))
	))
	$("#trees").innerHTML = "Trees: " + localStorage.getItem("trees");
	$("#oxygen").innerHTML = "Oxygen: " + localStorage.getItem("oxygen");
	$("#tps").innerHTML = "TPS: " + Number(localStorage.getItem("tps")) || 0
	localStorage.setItem("oxygen", Math.floor(Number(localStorage.getItem("trees")) * 0.001))
	
}, 1000)
document.querySelectorAll(".ticker__item").forEach(e => e.innerHTML += "&nbsp;".repeat(10))

fetch('./research.json')
	.then(response => response.json())
	.then(data => {
		researchdata = data["research"]
		researchdata = Object.values(researchdata)
		researchdata.forEach(e => {
			$("#research").innerHTML += `
			<div id = "${e.name.replace(/\s/g, '')}" data-product = "${e.product}" data-name = "${e.name.replace(/\s/g, '')}" data-value="${e.product}" data-cost="${e.cost}" class="researcher">
			<img class = "rimg" src="./assets/${e.icon}" style="width:40%;height:20%;">
			  <h4>${e.name} - <span>${localStorage.getItem(`${e.name.replace(/\s/g, '')}total`) || 0}</span> </h4> 
			  <h8>${e.description} <br> <span style = "color:green">Costs ${e.cost} Oxygen</span></h8> 
		      </div>
			`
		})
		$("#research").innerHTML += "<br><br>"
		document.querySelectorAll(".researcher").forEach(e => e.addEventListener("click", function () {
			if (Number(this.dataset.cost) <= Number(localStorage.getItem("oxygen"))) {
				localStorage.setItem("tps", String(Math.ceil(Number(localStorage.getItem("tps")) * Number(this.dataset.product))))
				localStorage.setItem("oxygen", String(Number(localStorage.getItem("trees")) - Number(this.dataset.cost)))
				localStorage.setItem(`${this.dataset.name.replace(/\s/g, '')}total`, Number(localStorage.getItem(`${this.dataset.name.replace(/\s/g, '')}total`)) + 1)
				$(`#${this.id.replace(/\s/g, '')} > h4 > span`).innerHTML = localStorage.getItem(`${this.dataset.name.replace(/\s/g, '')}total`)
			} else {
				alert("Lack of Funds!")
			}
		}))
	});