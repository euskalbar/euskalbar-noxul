

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

dicts.corpeus = function () {

  return {
    displayName: 'CorpEus',
    description: 'CorpEus - Internet euskarazko corpus gisa',

    homePage: 'http://corpeus.elhuyar.eus/',
    pairs: ['eu-eu'], 
    method: 'POSTquery',
    type:'corpus_orokorrak',
    url:'http://corpeus.elhuyar.eus/cgi-bin/kontsulta.py',
    
    getUrl: function (opts) {
      return 'http://corpeus.elhuyar.eus/cgi-bin/kontsulta.py';
    },

        getUrlQuery: function (opts) {
      return 'http://corpeus.elhuyar.eus/cgi-bin/kontsulta.py';
    },

        getParams: function (opts) {
      if (opts[0].value.indexOf(' ') != -1) {
        var q = '"' + opts[0].value + '"';
      } else {
        q = opts[0].value;
      }


      return [
        { "name" : "bilagaiid" , "value": "" },
        { "name" : "formalema" , "value": "lema" },
        { "name" : "motorea" , "value": "microsoft" },
        { "name" : "testu-hitza" , "value": q}
      ];
    }

  };

}();

self.port.on("exekutatu", postQuery);

function postQuery (exekutatu) {

if (document.getElementById('testu-hitza').value == "" || document.getElementById('testu-hitza').value.length == 0){
    var exekutatu = JSON.parse(exekutatu);
    document.getElementById('formalema').value = "lema";
    document.getElementById('motorea').value = "microsoft";
    document.getElementById('testu-hitza').value = exekutatu.testua;
    document.getElementById('bot_bilatu').click();
  } else {
  }

}