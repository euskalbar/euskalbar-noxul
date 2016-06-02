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

dicts.jakinbai = function () {


  return {
    displayName: 'Jakinbai',
    description: 'Jakinbai lanbide heziketarako hiztegia',

    homePage: 'http://jakinbai.eus/elhuyar/hiztegia',

    pairs: ['eu-es', 'es-eu'],

    method: 'POSTquery',
    type:'terminologikoak_teknikoak',
    url:'http://jakinbai.eus/elhuyar/hiztegia',
    
    getUrl: function (opts) {
      return 'http://jakinbai.eus/elhuyar/hiztegia';
    },
    getUrlQuery: function (opts) {
      return 'http://jakinbai.eus/elhuyar/hiztegia';
    },

    getParams: function (opts) {
      return null;
    },
  };

}();

self.port.on("exekutatu", postQuery);

function postQuery (exekutatu) {
  if (document.getElementById("azalpena").innerText == "Hemen azalduko da zure bilaketaren emaitza.") {
    var exekutatu = JSON.parse(exekutatu);
          var i = 0;
      switch (exekutatu.source) {
        case 'eu':
          i = "Euskara";
          break;
        case 'es':
          i = "Gaztelania";
          break;
      }
    document.getElementById("field-bilatu").value = exekutatu.testua;
    document.getElementById("selectHizkuntza").value = i;
    document.getElementById("bot_bilatu").click();
  } else {
  }
}