/*
 * Euskalbar - A Firefox extension for helping in Basque translations.
 * Copyright (C) 2013 Euskalbar Taldea (see AUTHORS file)
 *
 * This file is part of Euskalbar.
 *
 * Euskalbar is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */



dicts.morris = function () {

  return {
    displayName: 'Morris',
    description: 'Morris Hiztegia',

    homePage: 'http://www1.euskadi.net/morris/',

    pairs: ['eu-en', 'en-eu'],

    method: 'POSTquery',
    type: 'orokor_eleaniztunak',
    url:'http://www1.euskadi.net/morris/resultado.asp',
    
    getUrl: function (opts) {
      return 'http://www1.euskadi.net/morris/resultado.asp';
    },

    getUrlQuery: function (opts) {
      return 'http://www1.euskadi.net/morris/';
    },
        getParams: function (opts) {
        
          var q = "";

          if (opts[1].value == "en"){
            q = "txtIngles";
          } else {
             q = "txtEuskera";
          }

            return [
        {"name" : q , "value" : opts[0].value }
      ];
    },

    scrap: function (data, opts) {
      if (data.match("Barkatu, baina sarrera hau ez dago hiztegian")) {
        // FIXME: L10n
        return "Ez da aurkitu " + opts.term + " hitza.";
      }

      var output = data;
      var table = output.split("<hr>");

      output = table[1].slice(0, table[1].lastIndexOf("<table"));
      output = output.split("<td class=\"titularMaior\"")[0];
      output = output.replace(
          /images/g,
          "http://www1.euskadi.net/morris/images"
      );
      output = output.replace(
          /datuak/g,
          "http://www1.euskadi.net/morris/datuak"
      );
      output = output.replace(
          /font-size: 8pt/g,
          "font-size: 10pt"
      );
      output = output.replace(
          /font-size:11ptl/g,
          "font-size: 12pt<br>"
      );
      output = output.replace(
          /color:green/g,
          "color: #000000"
      );
      output = output.replace(
          /Arial, Helvetica, sans-serif/g,
          "bitstream vera sans, verdana, arial"
      );
      output = output.replace(
          /width="550"/g,
          ""
      );
      output = output.replace(
          /width="150"/g,
          ""
      );

      return output;
    }

  };

}();

self.port.on("exekutatu", postQuery);

function postQuery (exekutatu) {

if (document.getElementsByClassName("titularMaior")[0].firstChild.nodeValue == "How to look a word up" ){
  var exekutatu = JSON.parse(exekutatu);
  if (exekutatu.source == "en" && exekutatu.target == "eu"){
    document.getElementsByName("txtIngles")[0].value = exekutatu.testua;
    document.getElementsByName("Submit")[1].click();
    return;
  } else if (exekutatu.source == "eu" && exekutatu.target == "en"){
    document.getElementsByName("txtEuskera")[0].value = exekutatu.testua;
    document.getElementsByName("Submit")[0].click();
    return;
  } else {

  }

}

}
