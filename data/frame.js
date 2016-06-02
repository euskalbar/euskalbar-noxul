var contextArray = [];
var daudenak = [];
var converseDatanormal = {};
var converseDataenter = {};
var converseDatashift = {};
var converseDatactrl = {};
var kontagailu = 0;
var kontagailualdagaia = 1; 
window.addEventListener("message", begiratuMezua, false);

function begiratuMezua(message) {
	var data = JSON.parse(message.data);
	if (data.mezua == "initbuttons"){
		initbuttons(conversedata(data));
	} else if (data.mezua == "enterSakatu"){
		enterSakatu(conversedata(data));
	} else if (data.mezua == "ctrlEnterSakatu"){
		ctrlEnterSakatu(conversedata(data));
	} else if (data.mezua == "shiftEnterSakatu"){
		shiftEnterSakatu(conversedata(data));
	} else if (data.mezua == "contextMenu"){
		contextMenu(data.obj);//context menu osoa bidali behar dio .
	} else if (data.mezua == "showhide"){
		showhidebuttons(conversedata(data));
	} else if (data.mezua == "fokuakutxanezarrihasieran"){
		fokuaezarribilatzailean();
	} 
}

function fokuaezarribilatzailean(){
	window.document.getElementById("bilatzailea").focus();
}

function conversedata(data){
	var preferences = data.preferences;
	var preferencesArray = Object.getOwnPropertyNames(preferences);
	preferencesArray.forEach(function(entry) {
		if (entry == "hizkuntza" || entry == "erahiztmenua" || entry == "eratesmenua"){
			converseDatanormal[entry]=preferences[entry];
		}  else {
			if (entry.indexOf("_") == -1 && entry != "erahiztmenua" && entry != "eratesmenua" && entry != "sdk.version" && entry != "sdk.load.reason" && entry != "sdk.rootURI" && entry != "sdk.baseURI" && entry != "sdk.domain" && entry != "sdk.load.command" && entry != "fokuakutxan" && entry != "azala" && entry != "hizkuntza" && entry != "denbora"){
				converseDatanormal[entry]=preferences[entry];
			} else {
				if (entry.indexOf("_enter") > 0 ){
					converseDataenter[entry]=preferences[entry];
				} else if (entry.indexOf("_shift+enter") > 0 ){
					converseDatashift[entry]=preferences[entry];
				}	else if (entry.indexOf("_ctrl+enter") > 0){
					converseDatactrl[entry]=preferences[entry];
				} else {
				}
			}			
		}
	});
	if (data.mezua == "initbuttons" || data.mezua == "showhide"){
		return converseDatanormal;
	} else if (data.mezua == "enterSakatu"){
		return converseDataenter;
	} else if (data.mezua == "ctrlEnterSakatu"){
		return converseDatactrl;
	} else if (data.mezua == "shiftEnterSakatu"){
		return converseDatashift;	
	}
}

function contextMenu(contextMenu){
	var opts = [{"name" : "textua" , "value" :contextMenu.textua },{"name" : "source" , "value" :contextMenu.source },{"name" : "target" , "value" :contextMenu.target }];
	if (dicts[contextMenu.izena.name].method == "POSTquery"){
		var getUrl = dicts[contextMenu.izena.name].getUrlQuery(opts);
	} else {
		var getUrl = dicts[contextMenu.izena.name].getUrl(opts);
	}
	var getParams = dicts[contextMenu.izena.name].getParams(opts);
	if (dicts[contextMenu.izena.name].method == "POSTquery"){
	} else {
		var string = "?";
		for (var i=0;i<getParams.length;i++){
			string += getParams[i].name+"="+getParams[i].value+"&";
		}
			string = string.substr(0, (string.length-1));
			getUrl = getUrl+string;
	    }
	    var url = 	dicts[contextMenu.izena.name].url;
	var obj = { "event" :  "contextMenu" , "getUrl" : getUrl , "metodoa" : dicts[contextMenu.izena.name].method , "textua" : contextMenu.textua , "source" : contextMenu.source , "target" : contextMenu.target , "params" : getParams , "izena" : contextMenu.izena.name , "urlzaharra" : url };
	window.parent.postMessage(obj,"*");
}

function shiftEnterSakatu (preferences) {
	converseDatashift = {};
	var shiftPreferencesArray = Object.getOwnPropertyNames(preferences);
	shiftPreferencesArray.forEach(function(entry) {
		var shiftizena = entry.toString();
		if (preferences[shiftizena] == true){
			converseDatashift[shiftizena]=preferences[shiftizena];
		} 
	});	
	var textua = document.getElementById("bilatzailea").value;
	var shizkuntza = document.getElementById("hizkuntza").value;
	if (document.hasFocus()) {
		    	var obj = { "event" :  "shift" , "textua" : textua ,"hizkuntza" : shizkuntza , "shiftPreferences" : JSON.stringify(converseDatashift) };  
			window.parent.postMessage(obj,"*");
	} else {
	}
	
}


function ctrlEnterSakatu (preferences) {
	converseDatactrl = {}
	var ctrlPreferencesArray = Object.getOwnPropertyNames(preferences);
	ctrlPreferencesArray.forEach(function(entry) {
		var ctrlizena = entry.toString();
		if (preferences[ctrlizena] == true){
			converseDatactrl[ctrlizena]=preferences[ctrlizena];
		} 
	});
	var textua = document.getElementById("bilatzailea").value;
	var shizkuntza = document.getElementById("hizkuntza").value;
	if (document.hasFocus()) {
		    var obj = { "event" :  "ctrl" , "textua" : textua ,"hizkuntza" : shizkuntza , "ctrlPreferences" : JSON.stringify(converseDatactrl) };  
			window.parent.postMessage(obj,"*");
	} else {
	}
}

function enterSakatu (preferences) {
converseDataenter = {};
var hiztegiakArray = Object.getOwnPropertyNames(preferences);
	hiztegiakArray.forEach(function(entry) {
		var enterizena = entry.toString();
		if (preferences[enterizena] == true){
			converseDataenter[enterizena]=preferences[enterizena];
		} 
	});
var converseDataenterArray = Object.getOwnPropertyNames(converseDataenter);
var textua = document.getElementById("bilatzailea").value;
var shizkuntza = document.getElementById("hizkuntza").value;
	if (document.hasFocus()) {
		converseDataenterArray.forEach(function(entry) {
			var id = entry.substring(0,(entry.length-6));
			var homePage = dicts[id].homePage; 
			var method = dicts[id].method;//metodoa get / post
		    	var source = shizkuntza.substring(0, 2);
		    	var target = shizkuntza.substring(3,5);
		    	var opts = [
		    		{"name" : "textua" , "value" :textua },
		    		{"name" : "source", "value" :source },
		    		{"name" : "target", "value" :target }];
		    	var getUrl = dicts[id].getUrl(opts);//url-a
		    	var getParams = dicts[id].getParams(opts);
		    	if (method == "POSTquery"){
		    	} else {
					var string = "?";
					for (var i=0;i<getParams.length;i++){
						string += getParams[i].name+"="+getParams[i].value+"&";
					}
					string = string.substr(0, (string.length-1));
					getUrl = getUrl+string;
		    	}
		    	var url = 	dicts[id].url;
		    	var obj = { "event" :  "enter" , "getUrl" : getUrl , "metodoa" : method , "textua" : textua , "source" : source , "target" : target , "params" : getParams , "izena" : id , "urlzaharra" : url };
		    	window.parent.postMessage(obj,"*");
		});
	}//.if (document.hasFocus())
}

function clickbuttonopentab(id){
		var id = id.target.id;
		var textua = document.getElementById("bilatzailea").value;
    	var shizkuntza = document.getElementById("hizkuntza").value;
	    	var homePage = dicts[id].homePage; 
	    	var method = dicts[id].method;//metodoa get / post
	    	var source = shizkuntza.substring(0, 2);
	    	var target = shizkuntza.substring(3,5);
	    	var opts = [
	    		{"name" : "textua" , "value" :textua },
	    		{"name" : "source", "value" :source },
	    		{"name" : "target", "value" :target }];
			if (method == "POSTquery"){
				var getUrl = dicts[id].getUrlQuery(opts);
			} else {
				var getUrl = dicts[id].getUrl(opts);
			}
	    	var getParams = dicts[id].getParams(opts);
	    	if (method == "POSTquery"){
	    	} else {
				var string = "?";
				for (var i=0;i<getParams.length;i++){
					string += getParams[i].name+"="+getParams[i].value+"&";
				}
				string = string.substr(0, (string.length-1));
				getUrl = getUrl+string;
	    	}
	    	var url = 	dicts[id].url;
	    	var obj = { "event" :  "klik" , "getUrl" : getUrl , "metodoa" : method , "textua" : textua , "source" : source , "target" : target , "params" : getParams , "izena" : id , "urlzaharra" : url };
	    	window.parent.postMessage(obj,"*");	
}


function initbuttons(preferences) {
contextArray = [];
document.getElementById("hizkuntza").value = preferences.hizkuntza;
document.getElementById("euskalbar_icon").addEventListener("click",hobespenakdei);
document.getElementById("baliabideak_icon").addEventListener("click",baliabideakdei);
if (preferences.erahiztmenua == false){
	document.getElementById("baliabideak_icon").setAttribute("style",'display:none');
}
var hiztegiakArray = Object.getOwnPropertyNames(preferences);
hiztegiakArray = hiztegiakArray.sort();
kontagailu = hiztegiakArray.length;
	hiztegiakArray.forEach(function(entry) {
		if (entry != "hizkuntza" && entry != "erahiztmenua" && entry != "fitxakberrerabili"  && entry != "fitxakatzean" && entry != "eratesmenua"){
			var dictURI = 'resource://euskalbar-plugin/data/dicts/' + entry + '.js';
			loadScript(dictURI, function(){
				var btn = document.createElement("BUTTON");
				var t = document.createTextNode(entry);
				btn.appendChild(t);
				btn.className += " buttonHizkuntza";
				btn.name = entry ;
				btn.value = entry;
				btn.id = entry;
				document.body.appendChild(btn);
				btn.addEventListener("click",clickbuttonopentab);
				if (preferences[entry] == false ){
					var botoia=document.getElementById(entry);	
					botoia.setAttribute("style",'display:none');
				} else {
					var selectHizkuntza = document.getElementById("hizkuntza").value.replace(">", "-"); 
		    		if ((dicts[entry].pairs.indexOf(selectHizkuntza) == -1) && (dicts[entry].pairs.indexOf("eu-eu") == -1 )){
						var botoia=document.getElementById(entry);	
						botoia.setAttribute("style",'display:none');			
					} else {
						var botoia=document.getElementById(entry);
						botoia.addEventListener("click",clickbuttonopentab);
					} 
					daudenak.push(entry);
				}

				if (preferences.eratesmenua == true){
					var displayname = dicts[entry].displayName;
					var pairsaldagaia = dicts[entry].pairs;
					var obj = {"name" : entry , "displayName" :  displayname , "pairs" :  pairsaldagaia};
					contextArray.push(obj);
					if (kontagailualdagaia == kontagailu){
						var erantzuna = {"event" : "eratesmenuahasi" ,  "contextArray" : contextArray, "pairsfitxategia":pairs};
						window.parent.postMessage(erantzuna,"*");
					} else {
						kontagailualdagaia = kontagailualdagaia + 1;
					}
				}	
			});		
		} else {
			kontagailualdagaia = kontagailualdagaia + 1;
		}
	});
}

function showhidebuttons(preferences) {
	daudenak = [];
	contextArray = [];
if (preferences.erahiztmenua == false){
	document.getElementById("baliabideak_icon").setAttribute("style",'display:none');
} else {
	document.getElementById("baliabideak_icon").setAttribute("style",'display:inline');
}
document.getElementById("hizkuntza").value = preferences["hizkuntza"];
var hiztegiakArray = Object.getOwnPropertyNames(preferences);
hiztegiakArray = hiztegiakArray.sort();
kontagailu = hiztegiakArray.length;
kontagailualdagaia = 1;
	hiztegiakArray.forEach(function(entry) {
		var showhideizena = entry.toString();		
			if (showhideizena != "hizkuntza" && showhideizena != "erahiztmenua"  && showhideizena !== "fitxakberrerabili" && showhideizena !== "fitxakatzean" && entry != "eratesmenua"){	
				if (preferences[showhideizena] == false ){
				var botoia=document.getElementById(showhideizena);	
				botoia.setAttribute("style",'display:none');
				} else {
					var selectHizkuntza = document.getElementById("hizkuntza").value.replace(">", "-");
		    		if ((dicts[showhideizena].pairs.indexOf(selectHizkuntza) == -1) && (dicts[showhideizena].pairs.indexOf("eu-eu") == -1 )){
						var botoia=document.getElementById(showhideizena);	
						botoia.setAttribute("style",'display:none');			
					} else {
						var botoia=document.getElementById(showhideizena);
						botoia.setAttribute("style",'display:inline');	
					} 
					daudenak.push(showhideizena);
				}

				if (preferences.eratesmenua == true){
					var displayname = dicts[showhideizena].displayName;
					var pairsaldagaia = dicts[showhideizena].pairs;
					var pairslength = pairsaldagaia.length;
					var obj = {"name" : showhideizena , "displayName" :  displayname , "pairs" :  pairsaldagaia, "pairslength" : pairslength};
					contextArray.push(obj);
					if (kontagailualdagaia == kontagailu){
						var erantzuna = {"event" : "eratesmenuahasi" ,  "contextArray" : contextArray, "pairsfitxategia":pairs , "kont" : kontagailu};
						window.parent.postMessage(erantzuna,"*");
					} else {
						kontagailualdagaia = kontagailualdagaia + 1;
					}
				} else {
					if (kontagailualdagaia == kontagailu){
						var erantzuna = {"event" : "eratesmenuaezabatu"};
						window.parent.postMessage(erantzuna,"*");
					} else {
						kontagailualdagaia = kontagailualdagaia + 1;
					}

				}
			} else {
				kontagailualdagaia = kontagailualdagaia + 1;
			}
	});
}


function hizkuntza_aldatu(){
	var selectHizkuntza = window.document.getElementById("hizkuntza").value;
	daudenak.forEach(function(entry) {
    	selectHizkuntza = selectHizkuntza.replace(">", "-"); 
		if ((dicts[entry].pairs.indexOf(selectHizkuntza) == -1) && (dicts[entry].pairs.indexOf("eu-eu") == -1 )){
				var botoia=window.document.getElementById(entry);
				botoia.setAttribute("style",'display:none');				
		} else {
			var botoia=window.document.getElementById(entry);
			botoia.setAttribute("style",'display:inline');
		}    	
    }, this);
}


//EZ DA EZABATU BEHAR
function loadScript(url, callback){
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function hobespenakdei(id){
	var obj = { "event" :  "hobespenakdei" , "pairsfitxategia" :  JSON.stringify(pairs) ,  "dictsfitxategia" : JSON.stringify(dicts) };  
	window.parent.postMessage(obj,"*");
}

function baliabideakdei(id){
	var obj = { "event" :  "baliabideakdei" , "dictsfitxategia" : JSON.stringify(dicts)};  
	window.parent.postMessage(obj,"*");
}
