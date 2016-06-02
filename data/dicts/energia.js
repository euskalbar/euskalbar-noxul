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

dicts.energia = function () {


  return {
    displayName: 'Energia',
    description: 'EEEren Energia Hiztegia',

    homePage: 'http://www.eve.eus/diccionario.aspx',

    pairs: ['eu-es', 'eu-en', 'eu-fr',
            'es-eu', 'en-eu', 'fr-eu'],

    method: 'POSTquery',
    type: 'terminologikoak_teknikoak',
    url:'http://www.eve.eus/Aula-didactica/Hiztegia.aspx?terminoEstado',
    
    getUrl: function (opts) {
      return [
        'http://www.eve.eus/Aula-didactica/Hiztegia.aspx?terminoEstado=' + opts[0].value+
        '&idiomaEstado=' + opts[1].value +
        '&arloaEstado=edozein&fuzzyEstado=True&busquedaTerminoEstado=True' +
        '&tipoBusqueda=terminoak&term=' + opts[0].value + '#tabs-1'
      ];
    },
        getUrlQuery: function (opts) {
      return 'http://www.eve.eus/La-energia/Diccionario.aspx';
    },
    

    getParams: function (opts) {
      return {};
    },

    postQuery: function (opts) {
      var link = opts.doc.getElementById("p_lt_Contenido_ContenidoPlaceHolder_ContenidoPlaceHolder_lt_zoneMain_EveElhuyarHiztegia_rpTerminos_ctl00_hlTermino");
      if (link)
      {
        link.click();
      };
    }

  };

}();

self.port.on("exekutatu", postQuery);

function postQuery (exekutatu) {

if (document.getElementById('p_lt_Contenido_ContenidoPlaceHolder_ContenidoPlaceHolder_lt_zoneMain_EveElhuyarHiztegia_txtTerminoa').value == "") {
    var exekutatu = JSON.parse(exekutatu);
    document.getElementById('p_lt_Contenido_ContenidoPlaceHolder_ContenidoPlaceHolder_lt_zoneMain_EveElhuyarHiztegia_txtTerminoa').value = exekutatu.testua;
    
    if (exekutatu.source == "eu"){
      document.getElementById('p_lt_Contenido_ContenidoPlaceHolder_ContenidoPlaceHolder_lt_zoneMain_EveElhuyarHiztegia_ddlHizkuntza').value = "eu";
    } else if (exekutatu.source == "en") {
      document.getElementById('p_lt_Contenido_ContenidoPlaceHolder_ContenidoPlaceHolder_lt_zoneMain_EveElhuyarHiztegia_ddlHizkuntza').value = "en";
    } else if (exekutatu.source == "es") {
      document.getElementById('p_lt_Contenido_ContenidoPlaceHolder_ContenidoPlaceHolder_lt_zoneMain_EveElhuyarHiztegia_ddlHizkuntza').value = "es";
    } else if (exekutatu.source == "fr") {
      document.getElementById('p_lt_Contenido_ContenidoPlaceHolder_ContenidoPlaceHolder_lt_zoneMain_EveElhuyarHiztegia_ddlHizkuntza').value = "fr";
    }
document.getElementById("p_lt_Contenido_ContenidoPlaceHolder_ContenidoPlaceHolder_lt_zoneMain_EveElhuyarHiztegia_btnBilatu").click();
  } else {
  }

}
