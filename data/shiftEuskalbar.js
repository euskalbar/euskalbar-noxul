$( document ).ready(function() {
self.port.on("ajax", ajaxHasi);
function ajaxHasi(ajax){
var data = JSON.parse(ajax);
var cssizena = data.cssshift;
var css = document.createElement("LINK");
css.href = cssizena+".css";
css.title = cssizena;
css.type = "text/css";
css.rel = "stylesheet";
document.getElementsByTagName("HEAD")[0].appendChild(css)
	var preferences = data.shiftPreferences;
	var hizkuntza = data.hizkuntza;
	var textua = data.testua;
	var source = hizkuntza.substring(0, 2);
	var target = hizkuntza.substring(3, 5);
	var opts = [
		{"name" : "textua" , "value" :textua },
		{"name" : "source", "value" :source },
		{"name" : "target", "value" :target }];	
	var hiztegiakArraySHIFT = Object.getOwnPropertyNames(preferences);	
	hiztegiakArraySHIFT.forEach( function(hiztegishiftEuskalbar) {	
		var dictName = hiztegishiftEuskalbar.substr(0,hiztegishiftEuskalbar.length-12);
		var displayName = dicts[dictName].displayName;
		var description = dicts[dictName].description;
		var homePage = dicts[dictName].homePage;
		var pairs = dicts[dictName].pairs;
		var method = dicts[dictName].method;
        var mimeType = dicts[dictName].mimeType;
		var getUrl = dicts[dictName].getUrl(opts);
		var getParams = dicts[dictName].getParams(opts);
 		document.getElementById("buruak").innerHTML = document.getElementById("buruak").innerHTML + "<th id='dictname"+dictName+"'>"+displayName+"</th>";
    var atd = document.createElement('td');
    atd.setAttribute("id", "a" + dictName);
    atd.setAttribute("class", "gorputza");
    document.getElementById('gorputzak').appendChild(atd); 
    var ato = document.createElement('td');
    ato.setAttribute("id", "o" + dictName);
    ato.setAttribute("class", "gorputza");
    document.getElementById('oinak').appendChild(ato);
    var oharra = document.createElement("div");
    oharra.setAttribute("id", "oharradiv");
    ato.appendChild(oharra);
    document.getElementById("oharra").innerHTML = "<p>Orri honetako HTMLa eta CSSa nahierara erabil daitezke.<br>Orri honetan ageri diren hiztegiek bakoitzak bere lizentzia dauka (begiratu zutabe bakoitzaren azpian dagoen estekan).</p>";

    if (method == "POSTquery"){
    	method = "POST";
    }
    $.ajax({
        type: method,
        url: getUrl,
        data:getParams,
        async:true,
        mimeType: mimeType || "",
        scriptCharset: "UTF-8",
        crossDomain:true,
              headers: {
                    'Access-Control-Allow-Origin': '*'
                },
        success: function(data, status, xhr) {
            var output = dicts[dictName].scrap(data,opts);
            atd.innerHTML = output;
            ato.innerHTML = '<div id="oharra"><a href="' + homePage + '">' +
                       displayName + '&nbsp;<sup>&curren;</sup></a></div>';
        },
        error:function(jqXHR,textStatus,errorThrown){
     } 
    });

	});//daudenakshiftEuskalbar.forEach
}//.function ajaxHasi(ajax){
});//$( document ).ready(function() {



