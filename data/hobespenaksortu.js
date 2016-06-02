function hobespenaksortu(hobespenaknormal,hobespenakenter,hobespenakshift,hobespenakctrl,hobespenakbesteak,dictsfitxategia,pairsfitxategia){
/*

1 TAB

- SELECT HIZKUNTZA
- FITXAK BERRERABILI
- FITXAK ATZEAN
- AZALA
- ERA HIZTMENUA
- ERA TESMENUA
- FOKUA KUTXAN

2 TAB

HIZTEGIAK BOTOIAK

3 TAB

ENTER HIZTEGIAK
SHIFT HIZTEGIAK
CTRL HIZTEGIAK
DENBORA

*/


//Hobespenakbesteak:azala, denbora, erahiztmenua, eratesmenua, fitxakatzean, fitxakberrerabili, fokuakutxan, hizkuntza

var hobespenakbesteakArray = Object.getOwnPropertyNames(hobespenakbesteak);
    hobespenakbesteakArray.forEach(function(entry7) {
    var hobespenakbesteakizena = entry7.toString();
    if (hobespenakbesteakizena == "azala" || hobespenakbesteakizena == "hizkuntza"){
        var selectizena = "select"+hobespenakbesteakizena;
        var selectizenaeditatuta = selectizena;
        selectizenaeditatuta = document.createElement("SELECT");
        selectizenaeditatuta.name = hobespenakbesteakizena;
        selectizenaeditatuta.id = hobespenakbesteakizena;
        selectizenaeditatuta.title = hobespenakbesteakizena;
        var selectlabelizena = "label"+hobespenakbesteakizena;
        var selectlabelizenaeditatuta = selectlabelizena;
        selectlabelizenaeditatuta = document.createElement("LABEL");           
        selectlabelizenaeditatuta.htmlFor = hobespenakbesteakizena;
        var selectbrizena = hobespenakbesteakizena+"br";
        var selectbrizenaeditatuta = selectbrizena;
        selectbrizenaeditatuta = document.createElement("BR");

        if (hobespenakbesteakizena == "hizkuntza"){
            var pairsfitxategiaArray = Object.getOwnPropertyNames(pairsfitxategia);
            for (var i=0;i<pairsfitxategiaArray.length;i++){
                if (pairsfitxategiaArray[i] != "eu-eu"){
                    var hizkuntzaoptionsizena = "option_"+pairsfitxategiaArray[i];
                    var hizkuntzaoptionsizenaeditatuta = hizkuntzaoptionsizena;
                    hizkuntzaoptionsizenaeditatuta = document.createElement("option");
                    hizkuntzaoptionsizenaeditatuta.text = pairsfitxategiaArray[i].replace("-", ">").toUpperCase();
                    hizkuntzaoptionsizenaeditatuta.value = pairsfitxategiaArray[i].replace("-", ">");
                    hizkuntzaoptionsizenaeditatuta.selected = false;
                    selectizenaeditatuta.options.add(hizkuntzaoptionsizenaeditatuta);                                    
                }
            }
        } else if (hobespenakbesteakizena == "azala"){
            var azalakArray = ["Euskalbar","Grisleun","Human","Oliba","Urgarden"];
            for (var i=0;i<azalakArray.length;i++){
                var azalakoptionsizena = "option_"+azalakArray[i];
                var azalakoptionsizenaeditatuta = azalakoptionsizena;
                azalakoptionsizenaeditatuta = document.createElement("option");
                azalakoptionsizenaeditatuta.text = azalakArray[i];
                azalakoptionsizenaeditatuta.value = azalakArray[i].toLowerCase(); ;
                azalakoptionsizenaeditatuta.selected = false;
                selectizenaeditatuta.options.add(azalakoptionsizenaeditatuta);
            }
        }
        selectizenaeditatuta.value = hobespenakbesteak[hobespenakbesteakizena];
    var divizena = hobespenakbesteakizena+"div";
    document.getElementById(divizena).appendChild(selectizenaeditatuta);
    document.getElementById(divizena).appendChild(selectlabelizenaeditatuta);
    document.getElementById(divizena).appendChild(selectbrizenaeditatuta);

    } else if (hobespenakbesteakizena == "denbora"){
        var numberizena = "number"+hobespenakbesteakizena;
        var numberizenaeditatuta = numberizena;
        numberizenaeditatuta = document.createElement("INPUT");
        numberizenaeditatuta.setAttribute("type", "number");
        numberizenaeditatuta.name = hobespenakbesteakizena;
        numberizenaeditatuta.id = hobespenakbesteakizena;
        numberizenaeditatuta.value = hobespenakbesteak[hobespenakbesteakizena];        

        var numberlabelizena = "label"+hobespenakbesteakizena;
        var numberlabelizenaeditatuta = numberlabelizena;
        numberlabelizenaeditatuta = document.createElement("LABEL"); 
        numberlabelizenaeditatuta.htmlFor = hobespenakbesteakizena;

        var numberlabelizenat = "label"+hobespenakbesteakizena+"t";
        var numberlabelizenateditatuta = numberlabelizenat;
        numberlabelizenateditatuta = document.createTextNode("Denbora-muga (seg)"); 

        var numberbrizena = hobespenakbesteakizena+"br";
        var numberbrizenaeditatuta = numberbrizena;
        numberbrizenaeditatuta = document.createElement("BR");

    var divizena2 = hobespenakbesteakizena+"div";
    document.getElementById(divizena2).appendChild(numberizenaeditatuta);
    document.getElementById(divizena2).appendChild(numberlabelizenaeditatuta);
    document.getElementById(divizena2).appendChild(numberbrizenaeditatuta);

    } else {

        var checkboxizena = "checkbox"+hobespenakbesteakizena;
        var checkboxizenaeditatuta = checkboxizena;
        checkboxizenaeditatuta = document.createElement("INPUT");
        checkboxizenaeditatuta.setAttribute("type", "checkbox");
        checkboxizenaeditatuta.name = hobespenakbesteakizena;
        checkboxizenaeditatuta.id = hobespenakbesteakizena;
        checkboxizenaeditatuta.value = hobespenakbesteakizena;
        checkboxizenaeditatuta.checked = hobespenakbesteak[hobespenakbesteakizena];

        var checkboxlabelizena = "label"+hobespenakbesteakizena;
        var checkboxlabelizenaeditatuta = checkboxlabelizena;
        checkboxlabelizenaeditatuta = document.createElement("LABEL"); 
        checkboxlabelizenaeditatuta.htmlFor = hobespenakbesteakizena;

        
        var checkboxlabelizenat = "label"+hobespenakbesteakizena+"t";
        var checkboxlabelizenateditatuta = checkboxlabelizenat;

        if (hobespenakbesteakizena == "erahiztmenua"){
            checkboxlabelizenateditatuta = document.createTextNode("Erakutsi hiztegien menua");
            checkboxlabelizenaeditatuta.appendChild(checkboxlabelizenateditatuta);
        } else if (hobespenakbesteakizena == "eratesmenua"){
            checkboxlabelizenateditatuta = document.createTextNode("Erakutsi testuinguru-menua");
            checkboxlabelizenaeditatuta.appendChild(checkboxlabelizenateditatuta);
        } else if (hobespenakbesteakizena == "fokuakutxan"){
            checkboxlabelizenateditatuta = document.createTextNode("Bilaketa ondoren, fokua bilaketa-kutxan jarri");            
            checkboxlabelizenaeditatuta.appendChild(checkboxlabelizenateditatuta);
        } else if (hobespenakbesteakizena == "fitxakberrerabili"){
            checkboxlabelizenateditatuta = document.createTextNode("Berrerabili Fitxak");            
            checkboxlabelizenaeditatuta.appendChild(checkboxlabelizenateditatuta);
        } else if (hobespenakbesteakizena == "fitxakatzean"){
            checkboxlabelizenateditatuta = document.createTextNode("Fitxak atzeko planoan ireki");            
            checkboxlabelizenaeditatuta.appendChild(checkboxlabelizenateditatuta);
        }

        var checkboxbrizena = hobespenakbesteakizena+"br";
        var checkboxbrizenaeditatuta = checkboxbrizena;
        checkboxbrizenaeditatuta = document.createElement("BR");

        if (hobespenakbesteakizena == "fitxakatzean" || hobespenakbesteakizena == "fitxakberrerabili"){
            document.getElementById("fitxenhobespenakdiv").appendChild(checkboxizenaeditatuta);
            document.getElementById("fitxenhobespenakdiv").appendChild(checkboxlabelizenaeditatuta);
            document.getElementById("fitxenhobespenakdiv").appendChild(checkboxbrizenaeditatuta);
        } else {
            document.getElementById("interfazeadiv").appendChild(checkboxizenaeditatuta);            
            document.getElementById("interfazeadiv").appendChild(checkboxlabelizenaeditatuta);
            document.getElementById("interfazeadiv").appendChild(checkboxbrizenaeditatuta);
        }
    }

});


/* 2.tab hiztegiak normal*/

var hobespenaknormalArray = Object.getOwnPropertyNames(hobespenaknormal);
	hobespenaknormalArray.forEach(function(entry) {
	var hobespenaknormalizena = entry.toString();
    var hobespenaknormalizena2 = hobespenaknormalizena;
    var  hobespenaknormalizena2 = document.createElement("INPUT");
    hobespenaknormalizena2.setAttribute("type", "checkbox");
	hobespenaknormalizena2.name = hobespenaknormalizena;
	hobespenaknormalizena2.id = hobespenaknormalizena;
	hobespenaknormalizena2.value = hobespenaknormalizena;
	hobespenaknormalizena2.checked = hobespenaknormal[hobespenaknormalizena];
	var hobespenaknormallabelizena = "label"+hobespenaknormalizena;
	var hobespenaknormallabelizena2 = hobespenaknormallabelizena;
	var hobespenaknormallabelizena2 = document.createElement("LABEL");
	hobespenaknormallabelizena2.htmlFor = hobespenaknormalizena2;
	var hobespenaknormalizenat = hobespenaknormalizena+"t";
	var hobespenaknormalizenat2 = hobespenaknormalizenat;
    var izenatextNodenormal= dictsfitxategia[hobespenaknormalizena].description.toString();
    if (izenatextNodenormal.indexOf("Ã±")>0){
        izenatextNodenormal = izenatextNodenormal.replace("Ã±", "ñ");
        var hobespenaknormalizenat2 = document.createTextNode(izenatextNodenormal);
    } else {
        var hobespenaknormalizenat2 = document.createTextNode(dictsfitxategia[hobespenaknormalizena].description);
    }
	hobespenaknormallabelizena2.appendChild(hobespenaknormalizenat2);
	var hobespenaknormalizenabr = hobespenaknormalizena+"br";
	var hobespenaknormalizenabr2 = hobespenaknormalizenabr;
	var hobespenaknormalizenabr2 = document.createElement("BR");
	document.getElementById("hobes_hiztegiak").appendChild(hobespenaknormalizena2);
	document.getElementById("hobes_hiztegiak").appendChild(hobespenaknormallabelizena2);
	document.getElementById("hobes_hiztegiak").appendChild(hobespenaknormalizenabr2);
	});
/* 2.tab hiztegiak normal DEFINITUTA eta sortuta	*/

/* 3.1.tab */


var hobespenakenterArray = Object.getOwnPropertyNames(hobespenakenter);
	hobespenakenterArray.forEach(function(entry2) {
	var hobespenakenterizena = entry2.toString();
    var hobespenakenterizenamoztuta = hobespenakenterizena.substr(0, hobespenakenterizena.indexOf("_enter"));
    var hobespenakenterizena2 = hobespenakenterizena;
    var  hobespenakenterizena2 = document.createElement("INPUT");
    hobespenakenterizena2.setAttribute("type", "checkbox");
	hobespenakenterizena2.name = hobespenakenterizena;
	hobespenakenterizena2.id = hobespenakenterizena;
	hobespenakenterizena2.value = hobespenakenterizena;
	hobespenakenterizena2.checked = hobespenakenter[hobespenakenterizena];
	var hobespenakenterlabelizena = "label"+hobespenakenterizena;
	var hobespenakenterlabelizena2 = hobespenakenterlabelizena;
	var hobespenakenterlabelizena2 = document.createElement("LABEL");
	hobespenakenterlabelizena2.htmlFor = hobespenakenterizena2;
	var hobespenakenterizenat = hobespenakenterizena+"t";
	var hobespenakenterizenat2 = hobespenakenterizenat;
    var izenatextNodeenter= dictsfitxategia[hobespenakenterizenamoztuta].description.toString();
    if (izenatextNodeenter.indexOf("Ã±")>0){
        izenatextNodeenter = izenatextNodeenter.replace("Ã±", "ñ");
        var hobespenakenterizenat2 = document.createTextNode(izenatextNodeenter);
    } else {
        var hobespenakenterizenat2 = document.createTextNode(dictsfitxategia[hobespenakenterizenamoztuta].description);
    }
	hobespenakenterlabelizena2.appendChild(hobespenakenterizenat2);
	var hobespenakenterizenabr = hobespenakenterizena+"br";
	var hobespenakenterizenabr2 = hobespenakenterizenabr;
	var hobespenakenterizenabr2 = document.createElement("BR");
	document.getElementById("enter_hiztegiak").appendChild(hobespenakenterizena2);
	document.getElementById("enter_hiztegiak").appendChild(hobespenakenterlabelizena2);
	document.getElementById("enter_hiztegiak").appendChild(hobespenakenterizenabr2);
});


var hobespenakshiftArray = Object.getOwnPropertyNames(hobespenakshift);
    hobespenakshiftArray.forEach(function(entry3) {
    var hobespenakshiftizena = entry3.toString();
    var hobespenakshiftizenamoztuta = hobespenakshiftizena.substr(0, hobespenakshiftizena.indexOf("_shift+enter"));
    var hobespenakshiftizena2 = hobespenakshiftizena;
    var  hobespenakshiftizena2 = document.createElement("INPUT");
    hobespenakshiftizena2.setAttribute("type", "checkbox");
    hobespenakshiftizena2.name = hobespenakshiftizena;
    hobespenakshiftizena2.id = hobespenakshiftizena;
    hobespenakshiftizena2.value = hobespenakshiftizena;
    hobespenakshiftizena2.checked = hobespenakshift[hobespenakshiftizena];
    var hobespenakshiftlabelizena = "label"+hobespenakshiftizena;
    var hobespenakshiftlabelizena2 = hobespenakshiftlabelizena;
    var hobespenakshiftlabelizena2 = document.createElement("LABEL");
    hobespenakshiftlabelizena2.htmlFor = hobespenakshiftizena2;
    var hobespenakshiftizenat = hobespenakshiftizena+"t";
    var hobespenakshiftizenat2 = hobespenakshiftizenat;
    var hobespenakshiftizenat2 = document.createTextNode(dictsfitxategia[hobespenakshiftizenamoztuta].description);
    hobespenakshiftlabelizena2.appendChild(hobespenakshiftizenat2);
    var hobespenakshiftizenabr = hobespenakshiftizena+"br";
    var hobespenakshiftizenabr2 = hobespenakshiftizenabr;
    var hobespenakshiftizenabr2 = document.createElement("BR");
    document.getElementById("shift+enter_hiztegiak").appendChild(hobespenakshiftizena2);
    document.getElementById("shift+enter_hiztegiak").appendChild(hobespenakshiftlabelizena2);
    document.getElementById("shift+enter_hiztegiak").appendChild(hobespenakshiftizenabr2);
});

var hobespenakctrlArray = Object.getOwnPropertyNames(hobespenakctrl);
    hobespenakctrlArray.forEach(function(entry4) {
    var hobespenakctrlizena = entry4.toString();
    var hobespenakctrlizenamoztuta = hobespenakctrlizena.substr(0, hobespenakctrlizena.indexOf("_ctrl+enter"));    
    var hobespenakctrlizena2 = hobespenakctrlizena;
    var  hobespenakctrlizena2 = document.createElement("INPUT");
    hobespenakctrlizena2.setAttribute("type", "checkbox");
    hobespenakctrlizena2.name = hobespenakctrlizena;
    hobespenakctrlizena2.id = hobespenakctrlizena;
    hobespenakctrlizena2.value = hobespenakctrlizena;
    hobespenakctrlizena2.checked = hobespenakctrl[hobespenakctrlizena];
    var hobespenakctrllabelizena = "label"+hobespenakctrlizena;
    var hobespenakctrllabelizena2 = hobespenakctrllabelizena;
    var hobespenakctrllabelizena2 = document.createElement("LABEL");
    hobespenakctrllabelizena2.htmlFor = hobespenakctrlizena2;
    var hobespenakctrlizenat = hobespenakctrlizena+"t";
    var hobespenakctrlizenat2 = hobespenakctrlizenat;
    var hobespenakctrlizenat2 = document.createTextNode(dictsfitxategia[hobespenakctrlizenamoztuta].description);
    hobespenakctrllabelizena2.appendChild(hobespenakctrlizenat2);
    var hobespenakctrlizenabr = hobespenakctrlizena+"br";
    var hobespenakctrlizenabr2 = hobespenakctrlizenabr;
    var hobespenakctrlizenabr2 = document.createElement("BR");
    document.getElementById("ctrl+enter_hiztegiak").appendChild(hobespenakctrlizena2);
    document.getElementById("ctrl+enter_hiztegiak").appendChild(hobespenakctrllabelizena2);
    document.getElementById("ctrl+enter_hiztegiak").appendChild(hobespenakctrlizenabr2);
});

}
