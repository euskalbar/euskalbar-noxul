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

dicts.ehuskaratuak = function () {

  return {
    displayName: 'EHUskaratuak',
    description: 'EHUskaratuak, EHUren itzulpen-memoriak',

    homePage: 'http://ehuskaratuak.ehu.eus/',

    pairs: ['eu-es', 'eu-en', 'eu-fr',
            'es-eu', 'fr-eu', 'en-eu'],

    method: 'POSTquery',
    type:'corpus_eleaniztunak',
    url:'http://ehuskaratuak.ehu.eus/bilaketa/',
    
    getUrl: function (opts) {
      return 'http://ehuskaratuak.ehu.eus/bilaketa/';
    },

    getUrlQuery: function (opts) {
      return 'http://ehuskaratuak.ehu.eus/bilaketa/';
    },

    getParams: function (opts) {
      return [
        { "name" : "mota" , "value": "arrunta" },
        { "name" : "hizkuntza" , "value": opts[1].value},
        { "name" : "formalema" , "value": "lema"},
        { "name" : "testuhitza" , "value": opts[0].value},
        { "name" : "kategoria" , "value": "" },
        { "name" : "alor" , "value": "guz"},
        { "name" : "azpialor" , "value": "guz"},
        { "name" : "aurreratua" , "value": "arrunta"},
        { "name" : "hizkuntza2" , "value": opts[2].value},
        { "name" : "formalema2" , "value": "forma"},
        { "name" : "testuhitza2" , "value": ""},
        { "name" : "kategoria2" , "value": ""},
        { "name" : "distantzia" , "value": "0" },
        { "name" : "emaitza" , "value": opts[2].value },
        { "name" : "grafauk" , "value": "1forma"},
        { "name" : "grafiko_aukerak" , "value": "1forma"}                        
      ];
    }
  };

}();

self.port.on("exekutatu", postQuery);

function postQuery (exekutatu) {

if (document.getElementById('testuhitza').value == "" ||  document.getElementById('testuhitza').value.length == 0) {
    var exekutatu = JSON.parse(exekutatu);
    document.getElementById('hizkuntza').value = exekutatu.source;
    document.getElementById('formalema').value = "lema";
    document.getElementById('testuhitza').value = exekutatu.testua;
    document.getElementById('hizkuntza2').value = exekutatu.target;
    document.getElementById('bot_bilatu').click();
  } else {
  }
}
