var now = new Date();
var annee   = now.getFullYear();
var mois    = now.getMonth() + 1;
var jour    = now.getDate();
var heure   = now.getHours();
var minute  = now.getMinutes();
var seconde = now.getSeconds();

var timeElt = document.getElementById("time");
var realTimeElt = document.createElement("h6");
realTimeElt.textContent = jour+"/"+mois+"/"+annee+" - "+heure+":"+minute+":"+seconde;
timeElt.appendChild(realTimeElt);

if (a == 1) {
	timeElt.removeChild(timeElt.childNodes[0]);
	realTimeElt.textContent = jour+"/"+mois+"/"+annee+" - "+heure+":"+minute+":"+seconde;
	timeElt.appendChild(realTimeElt);
}