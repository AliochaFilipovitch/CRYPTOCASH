var Init_percent_change_1h = 0;
var Sum_percent_change_1h;
var Ave_percent_change_1h;
var i = 0;

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

ajaxGet("https://api.coinmarketcap.com/v1/ticker/", function (reponse) {
    var cryptomoneys = JSON.parse(reponse);
    cryptomoneys.forEach(function (cryptomoney) {
    	Sum_percent_change_1h = parseFloat(cryptomoney.percent_change_1h) + parseFloat(Init_percent_change_1h);
    	Init_percent_change_1h = parseFloat(cryptomoney.percent_change_1h);
    	i++;
    });
    Ave_percent_change_1h = precisionRound(Sum_percent_change_1h/i, 4);
    var averageElt = document.getElementById("average");
	var realAverageElt = document.createElement("h6");
	realAverageElt.textContent = Ave_percent_change_1h+" % change in 1hr. on average";
	averageElt.appendChild(realAverageElt);
	if (b == 1) {
		averageElt.removeChild(averageElt.childNodes[0]);
		realAverageElt.textContent = Ave_percent_change_1h+" % change in 1hr. on average";
		averageElt.appendChild(realAverageElt);
	}
});