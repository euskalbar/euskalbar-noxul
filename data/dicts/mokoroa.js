

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

dicts.mokoroa = function () {

  return {
    displayName: 'Mokoroa',
    description: 'Mokoroaren datu-basea',

    homePage: 'http://www.hiru.com/hirupedia',

    pairs: ['eu-es',
            'es-eu'],

    method: 'POSTquery',
    type:'fraseologia',
    url:'http://www.hiru.eus/hirupedia?p_p_id=indice_WAR_w25cIndexWAR_INSTANCE_zPs2&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_pos=1&p_p_col_count=2&_indice_WAR_w25cIndexWAR_INSTANCE_zPs2_action=entrarMokoroa',
    
    getUrl: function (opts) {
      return 'http://www.hiru.eus/hirupedia?p_p_id=indice_WAR_w25cIndexWAR_INSTANCE_zPs2&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_pos=1&p_p_col_count=2&_indice_WAR_w25cIndexWAR_INSTANCE_zPs2_action=entrarMokoroa';
    },
        getUrlQuery: function (opts) {
      return 'http://www.hiru.eus/hirupedia?p_p_id=indice_WAR_w25cIndexWAR_INSTANCE_zPs2&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_pos=1&p_p_col_count=2&_indice_WAR_w25cIndexWAR_INSTANCE_zPs2_action=entrarMokoroa';
    },



        getParams: function (opts) {
         var q =""
         var z =""

         if (opts[1].value == "es"){
          q = opts[0].value;
          z = "";
         } else {
          q = "";
          z = opts[0].value;
         }


            return [
        {"name" : "p_p_id" , "value" : "indice_WAR_w25cIndexWAR_INSTANCE_zPs2" },
        {"name" : "p_p_lifecycle" , "value" : "1"},
        {"name" : "p_p_state" , "value" : "normal"},
        {"name" : "p_p_mode" , "value" : "view"},
        {"name" : "p_p_col_id" , "value" :"column-1"},
        {"name" : "p_p_col_pos" , "value" : "1"},
        {"name" : "p_p_col_count" , "value" : "2" },
        {"name" : "_indice_WAR_w25cIndexWAR_INSTANCE_zPs2_action" , "value" : "buscarMokoroa"},
        {"name" : "_indice_WAR_w25cIndexWAR_INSTANCE_zPs2_mokoroaDialecto" , "value" : "Edozein Euskalki" },
        {"name" : "_indice_WAR_w25cIndexWAR_INSTANCE_zPs2_mokoroaTextoCastellano" , "value" : q},
        {"name" : "_indice_WAR_w25cIndexWAR_INSTANCE_zPs2_mokoroaTextoEuskera" , "value" : z}

      ];
    },

    scrap: function (data, opts) {
      return data.substring(data.indexOf('<font color'),
                            data.indexOf('<div id="justo_mokoroa">'));
    }

  };

}();

self.port.on("exekutatu", postQuery);

function postQuery (exekutatu) {
if (document.getElementsByTagName("strong")[0].firstElementChild.lastChild == null) {
    var exekutatu = JSON.parse(exekutatu);
    if (exekutatu.source == "es"){
      document.getElementsByTagName("input")[8].value = exekutatu.testua;
      document.getElementsByTagName("input")[9].value = "";
    } else {
      document.getElementsByTagName("input")[8].value = "";
      document.getElementsByTagName("input")[9].value = exekutatu.testua;
    }
    document.getElementsByTagName("input")[11].click();
  } else {
  }

}
