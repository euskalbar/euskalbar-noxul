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

dicts.berria = function () {

  return {
    displayName: 'Berria',
    description: 'Berriaren estilo liburua',

    homePage: 'http://www.berria.eus/estiloliburua',
        pairs: ['eu-eu'], 

    method: 'GET',
    type:'estilo_liburuak',
    url:'http://www.berria.eus/estiloliburua/bilatu',
    
    getUrl: function (opts) {
      return 'http://www.berria.eus/estiloliburua/bilatu';
    },

    getParams: function (opts) {
      return [
      {"name" : "d" , "value" : "all" },
      {"name" : "s" , "value" : opts[0].value}
      ];
    }

  };

}();
