/*
 * Euskalbar - A Firefox extension for helping in Basque translations.
 * Copyright (C) 2015 Euskalbar Taldea (see AUTHORS file)
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

dicts.librezale = function () {

  return {
    displayName: 'Librezale',
    description: 'Librezale posta-zerrendako artxiboa',

    homePage: 'http://librezale.eus/pipermail/librezale/',
    pairs: ['eu-eu'], 
    method: 'GET',
    type:'posta_zerrendak',
    url:'https://www.google.com/search',
    
    getUrl: function (opts) {
      return 'https://www.google.com/search';
    },

        getParams: function (opts) {
            return [
        {"name" : "q" , "value" : opts[0].value+"site:http://librezale.eus/pipermail/librezale/" }
      ];
    }

  };

}();
