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

dicts.xxmendea = function () {

  return {
    displayName: 'XX. mendekoa',
    description: 'XX. mendeko Euskararen Corpus estatistikoa',

    homePage: 'http://xxmendea.euskaltzaindia.eus/Corpus/aurkezpena.html',
    pairs: ['eu-eu'], 
    method: 'GET',
    type:'corpus_orokorrak',
    url:'http://xxmendea.euskaltzaindia.eus/Corpus/index.jsp',    
    getUrl: function (opts) {
      return 'http://xxmendea.euskaltzaindia.eus/Corpus/index.jsp';
    },

        getParams: function (opts) {

          var hizkuntza = "";

          if (opts[1].value == "eu"){
            hizkuntza = "Eu"
          } else {
            hizkuntza ="ES";
          }

            return [
        {"name" : "hasiera" , "value" : "true" },
        {"name" : "aurreratua" , "value" : "false"},
        {"name" : "atala" , "value" : "" },
        {"name" : "epea" , "value" : "0"},
        {"name" : "euskalkia" , "value" : "0" },
        {"name" : "testu_mota" , "value" : "0"},
        {"name" : "formalema1" , "value" : "lema" },
        {"name" : "testu_hitza1" , "value" : opts[0].value},
        {"name" : "non1" , "value" : "0" },
        {"name" : "galdera_mota1" , "value" : "0"},
        {"name" : "btn_bilatu" , "value" : "Bilatu" }
      ];
    }

  };

}();
