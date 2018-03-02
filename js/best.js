var maxPercent_change_1h = 0;
var maxSymbol;
var maxPrice;

ajaxGet("https://api.coinmarketcap.com/v1/ticker/", function (reponse) {
    var cryptomoneys = JSON.parse(reponse);
    cryptomoneys.forEach(function (cryptomoney) {
    if (cryptomoney.percent_change_1h > maxPercent_change_1h) {
        maxSymbol = cryptomoney.symbol;
        maxPrice = cryptomoney.price_usd;
        maxPercent_change_1h = cryptomoney.percent_change_1h;
        }
    });
    var bestElt = document.getElementById("best");
    var realBestElt = document.createElement("h6");
    realBestElt.textContent = maxPrice+" "+maxSymbol;
    bestElt.appendChild(realBestElt);
    if (c == 1) {
        bestElt.removeChild(bestElt.childNodes[0]);
        realBestElt.textContent = maxPrice+" "+maxSymbol;
        bestElt.appendChild(realBestElt);
    }
});