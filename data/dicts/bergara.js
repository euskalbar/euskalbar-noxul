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

dicts.bergara = function () {

  return {
    displayName: 'Bergara',
    description: 'Bergaraldeko Hiztegia',
    homePage: 'http://www.bergarakoeuskara.eus/hiztegia/',
    pairs: ['eu-eu'], 
    method: 'POSTquery',
    type:'euskalkiak_herrietakoak',
    url:'http://www.bergarakoeuskara.eus/hiztegia/bilatu',
    
    getUrl: function (opts) {
      return 'http://www.bergarakoeuskara.eus/hiztegia/bilatu';
    },

    getUrlQuery: function (opts) {
      return 'http://www.bergarakoeuskara.eus/hiztegia/bilatu';
    },
    getParams: function (opts) {
      return [
      {"name" : "berbaki" , "value" : opts[0].value },
      {"name" : "form_id" , "value" : "berba_bilatu"}
      ];
    }
  };
}();

self.port.on("exekutatu", postQuery);

function postQuery (exekutatu) {

if (document.getElementById("edit-berbaki").value == "") {
    var exekutatu = JSON.parse(exekutatu);
    document.getElementById('edit-berbaki').value = exekutatu.testua;
    document.getElementById("edit-submit").click();
  } else {
  }

}