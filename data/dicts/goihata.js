/*Goihata hiztegia
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

dicts.goihata = function () {

  return {
    displayName: 'Goihata',
    description: 'Goihata hiztegia',

    homePage: 'http://www.kotobai.com/',

    pairs: ['eu-jp', 'jp-eu'],

    method: 'POST',
    type: 'orokor_eleaniztunak',
    url:'http://www.kotobai.com/eu/euskara-japoniera-hiztegia/',
    
    getUrl: function (opts) {
      return 'http://www.kotobai.com/eu/euskara-japoniera-hiztegia/';
    },

        getParams: function (opts) {
            return [
        {"name" : "tx_ghdictionary_pi1[cmd]" , "value" :  "2"},
        {"name" : "tx_ghdictionary_pi1[q]" , "value" : opts[0].value },
        {"name" : "tx_ghdictionary_pi1[l]" , "value" : "basque" },
        {"name" : "tx_ghdictionary_pi1[t]" , "value" : "1" }

      ];
    }

  };

}();
