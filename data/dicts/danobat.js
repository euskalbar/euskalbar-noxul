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

dicts.danobat = function () {

  return {
    displayName: 'Danobat',
    description: 'Danobat hiztegia',

    homePage: "http://hiztegia.danobatgroup.eus/",

    pairs: ['eu-es', 'es-eu'],

    method: 'POSTquery',
    type: 'terminologikoak_teknikoak',
    url:'http://hiztegia.danobatgroup.eus/eu/dictionary/search',
    
    getUrl: function (opts) {
      return 'http://hiztegia.danobatgroup.eus/eu/dictionary/search';
    },
    getUrlQuery: function (opts) {
      return 'http://hiztegia.danobatgroup.eus/eu/dictionary/';
    },
    getParams: function (opts) {
      var hizkuntza = opts[1].value+"-"+opts[2].value;
      return [
      { "name" : "direction_filter" , "value" : hizkuntza },
      { "name" : "term_filter" , "value" : opts[0].value },
      { "name" : "search" , "value" : "search" }
      ];
    },
    scrap: function (data, opts) {
      return data.substring(data.indexOf('<div id="searchresult">'),
                            data.indexOf('</article>'));
    }
  };
}();

self.port.on("exekutatu", postQuery);

function postQuery (exekutatu) {

if (document.getElementById('term_filter').value == "") {
    var exekutatu = JSON.parse(exekutatu);
    document.getElementById('term_filter').value = exekutatu.testua;
    
    if (exekutatu.source == "es" && exekutatu.target == "eu"){
      document.getElementById('direction_es_eu').checked = "checked";

    } else if (exekutatu.source == "eu" && exekutatu.target == "es") {
    
      document.getElementById('direction_eu_es').checked = "checked";
    }
    document.getElementsByClassName('btn')[0].click();
  } else {
  }

}
