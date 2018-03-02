var walletElt = document.getElementById("wallet");
var maxPercent_change_1h = 0;
var nbr = getQueryVariable("a") ;

ajaxGet("http://localhost/CRYPTOCASH/php/post_json.json", function (reponse) {
    var cryptodata = JSON.parse(reponse);
    console.log(cryptodata);
    var myMoney = cryptodata.myMoney;
    var mySymbol = cryptodata.mySymbol;
});

ajaxGet("https://api.coinmarketcap.com/v1/ticker/", function (reponse) {
    var cryptomoneys = JSON.parse(reponse);
    cryptomoneys.forEach(function (cryptomoney) {
       	if (cryptomoney.percent_change_1h > maxPercent_change_1h) {
    		maxSymbol = cryptomoney.symbol;
    		maxPrice = cryptomoney.price_usd;
    		maxPercent_change_1h = cryptomoney.percent_change_1h;
		}
    });

    cryptomoneys.forEach(function (cryptomoney) {
		if (cryptomoney.symbol == mySymbol) {

    		var symbolElt = document.createElement("h1");
    		symbolElt.textContent = myMoney+" "+cryptomoney.symbol;
    		walletElt.appendChild(symbolElt);

    		var myMoneyElt = document.createElement("h3");
    		var myMoney_usd = Math.round(cryptomoney.price_usd * myMoney);
    		myMoneyElt.textContent = "= "+myMoney_usd+" $";
    		walletElt.appendChild(myMoneyElt);

    		var percentchangeElt = document.createElement("h6");
    		percentchangeElt.textContent = cryptomoney.percent_change_1h+" % (1hr.)";
    		walletElt.appendChild(percentchangeElt);

    			var manageElt = document.getElementById("manage");

    			if (cryptomoney.percent_change_1h < maxPercent_change_1h) {
    				console.log("YOU HAVE TO SELL");
    				console.log("NEW CRYPTO :");
    				console.log(maxSymbol);
    				console.log("NEW MONEY :");
    				console.log(myMoney_usd/maxPrice);
                    		console.log(allTest);

                    		if (nbr == 1) {
                        		manageElt.innerHTML = "SELL and BUY : "+Math.round(myMoney_usd/maxPrice)+" "+maxSymbol+'<br><br><p style="color:red;">In pogress..</p>';
                       			var allTest = {
                        			myMoney: Math.round(myMoney_usd/maxPrice),
                       	 			mySymbol: maxSymbol
                        		};

                        		ajaxPost("http://localhost/CRYPTOCASH/php/post_json.php", allTest, function (reponse) {
                                		console.log("Les données " + JSON.stringify(allTest) + " ont été envoyé au serveur");
                                		nbr = 0;
                                		refreshPage ();
                                        
                                    /// write to file
                                    var txtFile = "/Users/alexisqueune/Desktop/Crypto-datas-generator/test.rtf";
                                    var file = new File(txtFile);
                                    var str = "My string of text";

                                    file.open("w"); // open file with write access
                                    file.writeln("First line of text");
                                    file.writeln("Second line of text " + str);
                                    file.write(str);
                                    file.close();
                            			},
                            		true // Valeur du paramètre isJson
                       	 		);
                    		} else {
                        		manageElt.innerHTML = "SELL and BUY : "+Math.round(myMoney_usd/maxPrice)+" "+maxSymbol+'<br><br><a href="index.html?a=1" class="btn btn-danger btn-sm">Do it</a>';
                        		//refreshPage ();
                    		} 
     			} else {
				    manageElt.innerHTML = "There are nothing to do.";
          			//refreshPage ();
     			} 
    		}
    	});
});
