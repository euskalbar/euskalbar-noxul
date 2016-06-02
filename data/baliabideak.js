self.port.on("hasibaliabideak", hasibaliabideak);

	function hasibaliabideak(hasibaliabideak){
	var hasibaliabideakGuztiak = JSON.parse(hasibaliabideak);
	var dictsfitxategia = hasibaliabideakGuztiak.dicts;
	var dictsArray = Object.getOwnPropertyNames(dictsfitxategia);
	dictsArray = dictsArray.sort();
	dictsArray.forEach( function(dict) {
		var liizena = "li"+dict;
		var liizenaeditatuta = liizena;
		liizenaeditatuta = document.createElement("li");
		var text = "text"+dict;
		var texteditatuta = text;
		var ahref = "a"+dict;
		var ahrefeditatuta = ahref;
		ahrefeditatuta = document.createElement("a");
		ahrefeditatuta.setAttribute('href', dictsfitxategia[dict].homePage);
		ahrefeditatuta.id = dict;
		texteditatuta = document.createTextNode(dictsfitxategia[dict].description);
		ahrefeditatuta.appendChild(texteditatuta);
		liizenaeditatuta.appendChild(ahrefeditatuta);
		document.getElementById(dictsfitxategia[dict].type).appendChild(liizenaeditatuta); 
		document.getElementById(dict).addEventListener("mouseover", mouseover);
	});
}

function mouseover(id){
	var href = id.target.href;
	document.getElementById("iframebox").src = href;
}