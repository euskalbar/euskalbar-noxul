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

dicts.eurovoc = function () {


  return {
    displayName: 'Eurovoc',
    description: 'Eurovoc Thesaurusa',

    homePage: 'http://www.bizkaia.eus/kultura/eurovoc/index.asp?Tem_Codigo=2861&idioma=EU&dpto_biz=4&codpath_biz=4|292|2861',
        pairs: ['eu-eu'], 

    method: 'POSTquery',

    mimeType: "text/html; charset=ISO-8859-1",
    type: 'terminologikoak_teknikoak',
    url:'http://www.bizkaia.eus/kultura/eurovoc/resultados.asp?busqueda=&Idioma=EU',
    
    getUrl: function (opts) {
      return 'http://www.bizkaia.eus/kultura/eurovoc/resultados.asp?busqueda=&Idioma=EU';
    },
    getUrlQuery: function (opts) {
      return 'http://www.bizkaia.eus/kultura/eurovoc/resultados.asp?busqueda=&Idioma=EU';
    },

            getParams: function (opts) {
            return [
        {"name" : "txtBuscar" , "value" : "S" },
        {"name" : "query" , "value" : opts[0].value},
        {"name" : "idioma" , "value" : "EU" }

      ];
    }

  };

}();

self.port.on("exekutatu", postQuery);

function postQuery (exekutatu) {
if (document.getElementById("busqueda").value == "Sartu Zure Kontsulta") {
    var exekutatu = JSON.parse(exekutatu);
    document.getElementById("busqueda").value = exekutatu.testua;
    document.getElementById('btnBuscar').click();
  } else {
  }

}