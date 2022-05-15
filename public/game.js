
let index = 0;
if (!localStorage.getItem("tps")) {
	localStorage.setItem("tps",0)
}
$("#money").innerHTML = "Money: " + localStorage.getItem("money");
let producerdata = {}
fetch('./producers.json')
	.then(response => response.json())
	.then(data => {
		producerdata = data["producers"]
		producerdata = Object.values(producerdata)
		producerdata.forEach(e => {
			$("#producers").innerHTML += `
			<div id = "${e.name.replace(/\s/g, '')}" data-product = "${e.product}" data-name = "${e.name}" data-value="${e.product}" data-cost="${e.cost}" class="producer">
			<img class = "${e.name == "Mask" ? "mimg" : "pimg"}" src="./assets/${e.icon}" style="width:40%;height:20%;">
			  <h4>${e.name} - <span>${localStorage.getItem(`${e.name.replace(/\s/g, '')}total`) || 0}</span> </h4> 
			  <h8>${e.description} <br> <span style = "color:green">Costs $${e.cost}</span></h8> 
		      </div>
			`
		})
		$("#producers").innerHTML += "<br><br>"
		document.querySelectorAll(".producer").forEach(e => e.addEventListener("click", function () {
			if (Number(this.dataset.cost) <= Number(localStorage.getItem("money"))) {
				localStorage.setItem("tps", String(Number(localStorage.getItem("tps")) + Number(this.dataset.product)))
				localStorage.setItem("money", String(Number(localStorage.getItem("money")) - Number(this.dataset.cost)))
				localStorage.setItem(`${this.dataset.name.replace(/\s/g, '')}total`, (Number(localStorage.getItem(`${this.dataset.name.replace(/\s/g, '')}total`)) || 0) + 1)
				$(`#${this.id} > h4 > span`).innerHTML = localStorage.getItem(`${this.dataset.name.replace(/\s/g, '')}total`)
			} else {
				notie.alert({ type: 3, text: 'Not enough funds!', position: 'top' })
			}
		}))
	});
if (localStorage.getItem("hasplayed")) {
	let audio = new Audio("assets/russle.mp3")
	$("#health").addEventListener("click", () => {
		audio.play()
    $("#health").classList.add("dilate")
    setTimeout(() => {
      $("#health").classList.remove("dilate")
    },600)
		localStorage.setItem("money", Number(localStorage.getItem("money")) + 1)
		$("#mnoey").innerHTML = "Money: " + localStorage.getItem("money")
	})

}
setInterval(() => {
	localStorage.setItem("money", String(
		Number(localStorage.getItem("money")) + Number(localStorage.getItem("tps"))
	))
	$("#money").innerHTML = "Money: " + localStorage.getItem("money");
	$("#oxygen").innerHTML = "Research Points: " + localStorage.getItem("oxygen");
	$("#tps").innerHTML = "Money per second: " + Number(localStorage.getItem("tps")) || 0
	localStorage.setItem("oxygen", Math.floor(Number(localStorage.getItem("money")) * 0.001))
	
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
			<img class = "${e.name == "Vaccine" ? "mimg" : "rimg"}" src="./assets/${e.icon}" style="width:40%;height:20%;">
			  <h4>${e.name} - <span>${localStorage.getItem(`${e.name.replace(/\s/g, '')}total`) || 0}</span> </h4> 
			  <h8>${e.description} <br> <span style = "color:green">Costs <span>${e.cost} </span>RP</span></h8> 
		      </div>
			`
		})
		$("#research").innerHTML += "<br><br>"
		document.querySelectorAll(".researcher").forEach(e => e.addEventListener("click", function () {
			if (Number(this.dataset.cost) <= Number(localStorage.getItem("oxygen"))) {
				localStorage.setItem("tps", String(Math.ceil(Number(localStorage.getItem("tps")) * Number(this.dataset.product))))
				localStorage.setItem("oxygen", String(Number(localStorage.getItem("money")) - Number(this.dataset.cost)))
				localStorage.setItem(`${this.dataset.name.replace(/\s/g, '')}total`, Number(localStorage.getItem(`${this.dataset.name.replace(/\s/g, '')}total`)) + 1)
        $(`#${this.id.replace(/\s/g, '')} > h8 > span > span`).innerHTML = String(Number($(`#${this.id.replace(/\s/g, '')} > h8 > span > span`).innerHTML)*1000) + " "
  this.setAttribute("data-cost", String(Number($(`#${this.id.replace(/\s/g, '')} > h8 > span > span`).innerHTML)*1000)); 
				$(`#${this.id.replace(/\s/g, '')} > h4 > span`).innerHTML = localStorage.getItem(`${this.dataset.name.replace(/\s/g, '')}total`)
			} else {
								notie.alert({ type: 3, text: 'Not enough funds!', position: 'top' })
			}
		}))
	});