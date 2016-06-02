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

dicts.justizia = function () {

  return {
    displayName: 'Justizia',
    description: 'Justizia Hiztegia',

    homePage: 'http://www.justizia.eus/euskara-justizian',

    pairs: ['eu-es',
            'es-eu'],

    method: 'GET',
    type:'terminologikoak_teknikoak',
    url:'http://www.justizia.eus/euskara-justizian',
    
    getUrl: function (opts) {
      return 'http://www.justizia.eus/euskara-justizian';
    },
        getParams: function (opts) {
          var hizkuntza ="";

          if  (opts[1].value == "eu"){
            hizkuntza = "Eu";
          } else {
            hizkuntza = "ES";
          }
            return [
        {"name" : "cjterm" , "value" : opts[0].value },
        {"name" : "bjterm" , "value" : "Bilatu"},
        {"name" : "idiomaBusq" , "value" : hizkuntza }
      ];
    }

  };

}();
