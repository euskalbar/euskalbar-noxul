/*
 * Euskalbar - A Firefox extension for helping in Basque translations.
 * Copyright (C) 2015 Euskalbar Taldea (see AUTHORS file)
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



dicts.bizkaiera = function () {

  return {
    displayName: 'Bizkaiera',
    description: 'Bizkaiera idatziaren corpusa',

    homePage: 'http://www.bizkaiera.biz/index.php',
        pairs: ['eu-eu'], 

    method: 'POSTquery',
    type:'corpus_orokorrak',
    url:'http://www.bizkaiera.biz/index.php?id=95',
    
    getUrl: function (opts) {
      return 'http://www.bizkaiera.biz/index.php?id=95';
    },
    getUrlQuery: function (opts) {
      return 'http://www.bizkaiera.biz/index.php?id=95';
    },
getParams: function (opts) {
      return [
        { "name" : "id" , "value": "95" },
        { "name" : "registro[testoa]" , "value": opts[0].value }
      ];
    }

  };

}();

self.port.on("exekutatu", postQuery);

function postQuery (exekutatu) {

if (document.getElementById('testoa').value == ""){
    var exekutatu = JSON.parse(exekutatu);
    document.getElementById('testoa').value = exekutatu.testua;
    document.getElementsByClassName('ibutton')[1].click();
  } else {
  }
}