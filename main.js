var { ActionButton } = require('sdk/ui/button/action');
var { Frame } = require("sdk/ui/frame");
var { Toolbar } = require("sdk/ui/toolbar");
var tabs = require("sdk/tabs");
var preferences = require("sdk/simple-prefs").prefs;
var self = require("sdk/self");
var windows = require("sdk/windows").browserWindows;
var worker = null;
var { Hotkey } = require("sdk/hotkeys");
var {observer} = require("sdk/keyboard/observer");
var map = [];
var framekomorigin=null;
var framekomsource=null;
var dictsfitxategia=null;
var pairsfitxategia=null;
var cm = require("sdk/context-menu");
var euskalbarMenu=null;

function eratesmenuaezabatu(euskalbarMenu){
  euskalbarMenu.destroy();
}

var button = ActionButton({
  id: "euskalbar_icon",
  label: "Euskalbar",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: function(tab) {
    tabs.open({
          url: ("./baliabideak.html")
        });
}
});

var testukutxa=null;

var frame = new Frame({
  width: 180,
  height: 180,
  url: ("./frame.html"),
    onMessage: (e) => {
                  testukutxa=e.data.textua;
          if (preferences["fokuakutxan"] == true){
            framekomsource.postMessage(JSON.stringify({'mezua':"fokuakutxanezarrihasieran","preferences":preferences}), framekomorigin);
          } else if (preferences["fokuakutxan"] == false){
          }
      if (e.data.event == "klik" || e.data.event == "enter" || e.data.event == "contextMenu"){    
        if (preferences.fitxakberrerabili == true){
            for (let tab of tabs){
              var urlb = tab.url;
              var urlz = e.data.urlzaharra;
            if (urlb.indexOf(urlz) > -1){
              tab.url=e.data.getUrl;
              break;
            } else if (tab.index == tabs.length-1) {
              if (urlb.indexOf(urlz) == -1){
                  enter_click_context_Euskalbar(e,testukutxa);
              }
            }
            }//for (let tab of tabs){
        } else {
          enter_click_context_Euskalbar(e,testukutxa);
        } //.else (preferences.fitxakberrerabili == true){    
      } else if (e.data.event == "ctrl"){
        if (preferences.fitxakberrerabili == true){
          for (let tab of tabs){
            if (tab.url == "resource://euskalbar-plugin/data/ctrlEuskalbar.html"){
              tab.close();
              ctrlEuskalbar(e,testukutxa);
              break;
            } else if (tab.index == tabs.length-1) {
               if (tab.url != "resource://euskalbar-plugin/data/ctrlEuskalbar.html"){
                  ctrlEuskalbar(e,testukutxa);
               }
            } else {
            }//.else if (tab.url == "resource://euskalbar-plugin/data/ctrlEuskalbar.html"){
          }//.for (let tab of tabs){
        }//.if (preferences.fitxakberrerabili == true){
         else {
            ctrlEuskalbar(e,testukutxa);
        } 
      } else if (e.data.event == "shift"){
        if (preferences.fitxakberrerabili == true){
          for (let tab of tabs){
            if (tab.url == "resource://euskalbar-plugin/data/shiftEuskalbar.html"){
              tab.close();
              shiftEuskalbar(e,testukutxa);
              break;
            } else if (tab.index == tabs.length-1) {
               if (tab.url != "resource://euskalbar-plugin/data/shiftEuskalbar.html"){
                  shiftEuskalbar(e,testukutxa);
               }
            } else {
            }//.else if (tab.url == "resource://euskalbar-plugin/data/shiftEuskalbar.html"){
          }//.for (let tab of tabs){          
        } else {
          shiftEuskalbar(e,testukutxa);
        }
      } else if (e.data.event == "hobespenakdei"){
        dictsfitxategia = e.data.dictsfitxategia;
        pairsfitxategia = e.data.pairsfitxategia;
        handleClick();
      } else if (e.data.event == "baliabideakdei"){
        dictsfitxategia = e.data.dictsfitxategia;
        baliabideakireki();
      } else if (e.data.event == "eratesmenuahasi"){
        var pairsArray = Object.getOwnPropertyNames(e.data.pairsfitxategia);//pairs array
        var contextArray = e.data.contextArray;//context item array
        euskalbarMenu = cm.Menu({
        label: "Euskalbar",
        contentScript: 'self.on("click", function (node, data) {' +
                       '  data = JSON.parse(data);' +
                       '  textua = window.getSelection().toString();' +
                       '  self.postMessage({"textua": textua , "source" : data.source , "target" : data.target , "izena": data.izena});' +
                       '});',     
        onMessage: function (selectionText) {
          framekomsource.postMessage(JSON.stringify({'mezua':"contextMenu","obj":selectionText}), framekomorigin);
        },
          items: []
        });
        //PAIRS ARRAY 21 - 21 ONDO

        var sinonimoakmenu = cm.Menu({
          label: "Sinonimoak",
          items: [] ,
          parentMenu: euskalbarMenu
        });//menuak sortzen ditu


      for (var b=0;b<pairsArray.length;b++){
        var source = pairsArray[b].substr(0,2);
        var target = pairsArray[b].substr(3,5);
        var menuizena = source+"_"+target+"_Menu";
        var menuizenaeditatuta = menuizena;
        var labelizenaeditatu = source+">"+target;
        menuizenaeditatuta = cm.Menu({
          label: labelizenaeditatu,
          items: [] ,
          parentMenu: euskalbarMenu
        });//menuak sortzen ditu
        
        //CONTEXT ARRAY 63 - undefined
          if (contextArray.length == undefined){
            var kontagailu = e.data.kont-5;//5 kenud behar dira: "hizkuntza","erahiztmenua","fitxakberrerabili","fitxakatzean","eratesmenua" 
            for (var f=0;f<kontagailu;f++){
              var contextizena = contextArray[f].name;
              var pairskop = contextArray[f].pairslength;
              for (var g=0;g<pairskop;g++){
                if (contextArray[f].pairs[g].indexOf(pairsArray[b]) != -1 ) {
                  if (contextArray[f].name == "adorez" || contextArray[f].name == "uzei" && pairsArray[b] == "eu-eu"){
                  var contizena = contextizena+"_"+source+"_"+target+"_item";
                  var contizenaeditatuta = contizena;
                  var parentmenuizena = source+"_"+target+"_Menu";
                  contizenaeditatuta = cm.Item({
                  label: contextArray[f].displayName,
                  data: JSON.stringify({"source" : source , "target" : target , "izena":contextizena}), 
                  parentMenu: sinonimoakmenu
                });
                } else if (contextArray[f].name == "elebila" || contextArray[f].name == "xuxenweb" && pairsArray[b] == "eu-eu" ){
                    if (contextArray[f].name == "elebila"){
                      var elebilaitem = cm.Item({
                        label: contextArray[f].displayName,
                        data: JSON.stringify({"source" : source , "target" : target , "izena":contextizena}), 
                        parentMenu: euskalbarMenu
                      });
                    } else {
                      var xuxenitem = cm.Item({
                        label: contextArray[f].displayName,
                        data: JSON.stringify({"source" : source , "target" : target , "izena":contextizena}), 
                        parentMenu: euskalbarMenu
                      });                      
                    }
                } else {
                    var contizena = contextizena+"_"+source+"_"+target+"_item";
                    var contizenaeditatuta = contizena;
                    var parentmenuizena = source+"_"+target+"_Menu";
                    contizenaeditatuta = cm.Item({
                    label: contextArray[f].displayName,
                    data: JSON.stringify({"source" : source , "target" : target , "izena":contextizena}), 
                    parentMenu: menuizenaeditatuta
                  });
                    menuizenaeditatuta.addItem(contizenaeditatuta);
                }
              }
              }
            }
          } else {
            for (var c=0;c<contextArray.length;c++){
              var contextizena = contextArray[c];
                var pairsaldagai = contextArray[c].pairs;
              if (pairsaldagai.indexOf(pairsArray[b]) != -1 ) {
                if (contextizena.name == "adorez" || contextizena.name == "uzei" && pairsArray[b] == "eu-eu"){
                  var contizena = contextizena+"_"+source+"_"+target+"_item";
                  var contizenaeditatuta = contizena;
                  var parentmenuizena = source+"_"+target+"_Menu";
                  contizenaeditatuta = cm.Item({
                  label: contextizena.displayName,
                  data: JSON.stringify({"source" : source , "target" : target , "izena":contextizena}), 
                  parentMenu: sinonimoakmenu
                });
                } else if (contextizena.name == "elebila" || contextizena.name == "xuxenweb" && pairsArray[b] == "eu-eu" ){
                    if (contextizena.name == "elebila"){
                      var elebilaitem = cm.Item({
                        label: contextizena.displayName,
                        data: JSON.stringify({"source" : source , "target" : target , "izena":contextizena}), 
                        parentMenu: euskalbarMenu
                      });
                    } else {
                      var xuxenitem = cm.Item({
                        label: contextizena.displayName,
                        data: JSON.stringify({"source" : source , "target" : target , "izena":contextizena}), 
                        parentMenu: euskalbarMenu
                      });                      
                    }
                } else {
                  var contizena = contextizena+"_"+source+"_"+target+"_item";
                  var contizenaeditatuta = contizena;
                  var parentmenuizena = source+"_"+target+"_Menu";
                  contizenaeditatuta = cm.Item({
                  label: contextizena.displayName,
                  data: JSON.stringify({"source" : source , "target" : target , "izena":contextizena}), 
                  parentMenu: menuizenaeditatuta
                });
                  menuizenaeditatuta.addItem(contizenaeditatuta);
                }
              }
            }////for (var c=0;c<contextArray.length;c++){
         }
        euskalbarMenu.addItem(menuizenaeditatuta);
      }//.for (var b=0;b<pairsArray2.length;b++){
        euskalbarMenu.addItem(sinonimoakmenu);
        euskalbarMenu.addItem(elebilaitem);
        euskalbarMenu.addItem(xuxenitem);
    } else if (e.data.event == "eratesmenuaezabatu"){
      eratesmenuaezabatu(euskalbarMenu);
    }

  }//.onMessage: (e) => {
});//.var frame = new Frame({

function shiftEuskalbar(e,testukutxa){
            tabs.open({
            url:"./shiftEuskalbar.html",
            onReady: function(tab) {
                  var cssshift = preferences.azala;
                  var shiftPreferences = JSON.parse(e.data.shiftPreferences);
                  var attachscriptshift = [self.data.url("jquery-1.12.3.js"),
                  self.data.url("dicts.js"),
                  self.data.url("shiftEuskalbar.js")];
                  for (var i=0;i<Object.getOwnPropertyNames(shiftPreferences).length;i++){
                    var urlizenashift = Object.getOwnPropertyNames(shiftPreferences)[i].substr(0,Object.getOwnPropertyNames(shiftPreferences)[i].indexOf("_shift+enter"));
                    urlizenashift = self.data.url("dicts/"+urlizenashift+".js");
                    attachscriptshift.push(urlizenashift);
                  }
                  worker = tab.attach({
                  contentScriptFile:attachscriptshift
                  });
                  worker.port.emit("ajax", JSON.stringify({"hizkuntza" : e.data.hizkuntza , "testua": testukutxa, "shiftPreferences" : shiftPreferences , "cssshift": cssshift }));
          }
          }); //.tabs.open({
}

function ctrlEuskalbar(e,testukutxa){
          tabs.open({
          url:"./ctrlEuskalbar.html",
          onReady: function(tab) {
                var cssctrl = preferences.azala;
                var ctrlPreferences = JSON.parse(e.data.ctrlPreferences);
                var attachscriptctrl = [self.data.url("jquery-1.12.3.js"),
                self.data.url("dicts.js"),
                self.data.url("ctrlEuskalbar.js")];
                for (var i=0;i<Object.getOwnPropertyNames(ctrlPreferences).length;i++){
                  var urlizenactrl = Object.getOwnPropertyNames(ctrlPreferences)[i].substr(0,Object.getOwnPropertyNames(ctrlPreferences)[i].indexOf("_ctrl+enter"));
                  urlizenactrl = self.data.url("dicts/"+urlizenactrl+".js");
                  attachscriptctrl.push(urlizenactrl);
                }
                worker = tab.attach({
                contentScriptFile:attachscriptctrl
                });

                worker.port.emit("ajax", JSON.stringify({"hizkuntza" : e.data.hizkuntza , "testua":testukutxa , "ctrlPreferences" : JSON.parse(e.data.ctrlPreferences) , "cssctrl": cssctrl }));
        }
        });
}

function enter_click_context_Euskalbar(e,testukutxa){
            tabs.open({
          url:e.data.getUrl,
          onReady: function(tab) {
              if (e.data.metodoa == "POSTquery"){
                worker = tab.attach({
                contentScriptFile:[
                self.data.url("dicts.js"),
                self.data.url("dicts/"+e.data.izena+".js")
                ]
                });
                worker.port.emit("exekutatu", JSON.stringify({"testua":testukutxa,"source":e.data.source,"target":e.data.target , "params" : e.data.params , "izena" : e.data.izena }));
              } else {
              }
        }//.onReady: function(tab) {
        }); //. tabs.open({
}

frame.on("ready", initbuttons);

function initbuttons(e){
  framekomsource=e.source;
  framekomorigin=e.origin;
  framekomsource.postMessage(JSON.stringify({'mezua':"initbuttons","preferences":preferences}), framekomorigin);

}/*function initbuttons*/

var toolbar = Toolbar({
  title: "Euskalbar",
  items: [frame]
});


function baliabideakireki(state){
    tabs.open({
  url: "./baliabideak.html",
  onReady: function(tab) {
    worker = tab.attach({
      contentScriptFile:[self.data.url("baliabideak.js"),self.data.url("jquery-1.12.3.js"),self.data.url("jquery-ui.js"),self.data.url("jquery-ui.css")]
    });
     dictsfitxategia = JSON.parse(dictsfitxategia);
     worker.port.emit("hasibaliabideak", JSON.stringify({"dicts":dictsfitxategia}));
  }
});
}


function handleClick(state) {
  tabs.open({
  url: "./hobespenak.html",
  onReady: function(tab) {
    worker = tab.attach({
      contentScriptFile:[self.data.url("hobespenak.js"),self.data.url("hobespenaksortu.js"),self.data.url("jquery-1.12.3.js"),self.data.url("jquery-ui.css"),self.data.url("jquery-ui.js")]
    });
     dictsfitxategia = JSON.parse(dictsfitxategia);
     pairsfitxategia = JSON.parse(pairsfitxategia);
     worker.port.emit("hasieratu", JSON.stringify({"dicts":dictsfitxategia,"preferences":preferences, "pairs" : pairsfitxategia}));
     worker.port.on("close", function closeWindow(closeWindow) {
     tabs.activeTab.close();
     });
     worker.port.on("save", function changePreferences(hobespenak) {
     hobespenberriakArray = Object.getOwnPropertyNames(hobespenak);
     hobespenberriakArray = hobespenberriakArray.sort();
     hobespenberriakArray.forEach(function(entry) {
      var hobespenberriakizena = entry.toString();
      preferences[hobespenberriakizena] = hobespenak[hobespenberriakizena];
     });
     tabs.activeTab.close();
      framekomsource.postMessage(JSON.stringify({'mezua':"showhide","preferences":preferences}), framekomorigin);
     });    
  }
});
}/*.function handleClick*/

//Enter sakatutzen dugunean

    observer.on("keypress", function(event) {
        keylogger(event);
    });

    function keylogger(e)
    {
      if (e.type == 'keypress' && e.keyCode==13){
 //       map[e.keyCode] = e.type == 'keypress';
        //if(map[13]){ 
          if (!e.shiftKey && ! e.ctrlKey){
          framekomsource.postMessage(JSON.stringify({"mezua":"enterSakatu","preferences":preferences}), framekomorigin);
          } else  if (e.shiftKey && ! e.ctrlKey){
          framekomsource.postMessage(JSON.stringify({"mezua":"shiftEnterSakatu","preferences":preferences}), framekomorigin);
          } else if (e.ctrlKey && !e.shiftKey ){
          framekomsource.postMessage(JSON.stringify({"mezua":"ctrlEnterSakatu","preferences":preferences}), framekomorigin);            
          }
        }
    }


