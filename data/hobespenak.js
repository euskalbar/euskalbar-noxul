var hobespenaknormal = {};
var hobespenakenter = {};
var hobespenakshift = {};
var hobespenakctrl = {};
var hobespenakbesteak = {};
var hobespenGuztiakArray = [];
var hobespenGuztiak = {};
self.port.on("hasieratu", hasieratu);
document.getElementById('close').addEventListener('click',closeWindow);
document.getElementById('save').addEventListener('click',saveWindow);
function hasieratu(hasieratu){
var hasieratuGuztiak = JSON.parse(hasieratu);
hobespenGuztiak = hasieratuGuztiak.preferences;
hobespenGuztiakArray = Object.getOwnPropertyNames(hobespenGuztiak);
hobespenGuztiakArray = hobespenGuztiakArray.sort();
	hobespenGuztiakArray.forEach(function(entry) {
		if (entry == "hizkuntza" || entry == "fitxakberrerabili" || entry == "fitxakatzean" || entry == "erahiztmenua" || entry == "eratesmenua" || entry == "fokuakutxan" || entry == "azala" || entry == "hizkuntza" || entry == "denbora"){
			hobespenakbesteak[entry]=hobespenGuztiak[entry];
		}  else {
			if (entry.indexOf("_") == -1 && entry != "erahiztmenua" && entry != "eratesmenua" && entry != "sdk.version" && entry != "sdk.load.reason" && entry != "sdk.rootURI" && entry != "sdk.baseURI" && entry != "sdk.domain" && entry != "sdk.load.command" && entry != "fokuakutxan" && entry != "azala" && entry != "hizkuntza" && entry != "denbora"){
				hobespenaknormal[entry]=hobespenGuztiak[entry];
			} else {
				if (entry.indexOf("_enter") > 0 ){
					hobespenakenter[entry]=hobespenGuztiak[entry];
				} else if (entry.indexOf("_shift+enter") > 0 ){
					hobespenakshift[entry]=hobespenGuztiak[entry];
				}	else if (entry.indexOf("_ctrl+enter") > 0){
					hobespenakctrl[entry]=hobespenGuztiak[entry];
				}
			}			
		}
	});

var dictsfitxategia = hasieratuGuztiak.dicts;
var pairsfitxategia = hasieratuGuztiak.pairs;
hobespenaksortu(hobespenaknormal,hobespenakenter,hobespenakshift,hobespenakctrl,hobespenakbesteak,dictsfitxategia,pairsfitxategia);
}

function closeWindow(){
	self.port.emit("close", "closeString");
}

function saveWindow(){
	var result = confirm("Aldaketak gorde nahi dituzu?");
	if (result){
		hobespenGuztiakArray.forEach(function(entry){
			var hobespenGuztiakizena = entry.toString();
			if (hobespenGuztiakizena !== "sdk.baseURI" && hobespenGuztiakizena !== "sdk.domain" && hobespenGuztiakizena !== "sdk.load.command" && hobespenGuztiakizena !== "sdk.load.reason" && hobespenGuztiakizena !== "sdk.rootURI" && hobespenGuztiakizena !== "sdk.version"){
				if (document.getElementById(hobespenGuztiakizena).type == "checkbox"){
				hobespenGuztiak[hobespenGuztiakizena] = document.getElementById(hobespenGuztiakizena).checked;
				} else {
				hobespenGuztiak[hobespenGuztiakizena] = document.getElementById(hobespenGuztiakizena).value;
				}
			} else {

			}
		});
		self.port.emit("save", hobespenGuztiak);
	} else {
		alert("Aldaketak ez dira gorde.")
	}

}