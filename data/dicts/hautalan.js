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

dicts.hautalan = function () {

  return {
    displayName: 'Hauta Lana',
    description: 'Hauta Lanerako Euskal Hiztegia',

    homePage: 'http://www.euskara.euskadi.net/r59-15172x/eu/sarasola/sarasola.apl',
    pairs: ['eu-eu'], 
    method: 'POSTquery',

    mimeType: "text/html; charset=ISO-8859-1",
    type: "orokorrak",
    url:'http://www.euskara.euskadi.net/r59-15172x/eu/sarasola/sarasola.apl',
    
    getUrl: function (opts) {
      return 'http://www.euskara.euskadi.net/r59-15172x/eu/sarasola/sarasola.apl';
    },
        getUrlQuery: function (opts) {
      return 'http://www.euskara.euskadi.net/r59-15172x/eu/sarasola/sarasola.apl';
    },

    getParams: function (opts) {
      return null;
    }

  };

}();

self.port.on("exekutatu", postQuery);

function postQuery (exekutatu) {
if (document.getElementById("hitza").value == "") {
    var exekutatu = JSON.parse(exekutatu);
    document.getElementById("hitza").value = exekutatu.testua;
    document.getElementById('bilatu').click();
  } else {
  }
}

