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




dicts.bfaterminologikoa = function () {

  return {
    displayName: 'BFA Term.',
    description: 'BFA Hiztegi Terminologikoa',

    homePage: 'http://apps.bizkaia.net/TK00/index.jsp?Idioma=e',

    pairs: ['eu-es',
            'es-eu'],

    method: 'POSTquery',
    type: 'terminologikoak_teknikoak',
    url:'http://apps.bizkaia.net/TK00/index.jsp?Idioma=e',
    
    getUrl: function (opts) {
      return 'http://apps.bizkaia.net/TK00/index.jsp?Idioma=e';
    },
    getUrlQuery: function (opts) {
      return 'http://apps.bizkaia.net/TK00/index.jsp?Idioma=e';
    },

    getParams: function (opts) {
      return [];
    }

  };

}();

self.port.on("exekutatu", postQuery);

function postQuery (exekutatu) {

if (document.getElementById('termino').value == ""){
    var exekutatu = JSON.parse(exekutatu);
      var mota;
      if (exekutatu.source =='eu' &&  exekutatu.target)
      {
          mota=0;
      }
      else if (exekutatu.source =='es' && exekutatu.target)
      {
          mota=1;
      };

    document.getElementById('termino').value = exekutatu.testua; 
    document.getElementById('idioma').selectedIndex = mota;
    document.getElementsByClassName('boton_input')[0].click();
  } else {

  }
}