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

dicts.zthiztegia = function () {


  return {
    displayName: 'ZT Hiztegia',
    description: 'Zientzia eta Teknologiaren hiztegi entziklopedikoa',

    homePage: 'http://zthiztegia.elhuyar.eus',

    pairs: ['eu-es', 'eu-fr', 'eu-en', 'eu-la',
            'es-eu', 'fr-eu', 'en-eu', 'la-eu'],

    method: 'GET',
    type: 'terminologikoak_teknikoak',
    url:'http://zthiztegia.elhuyar.eus',
    getUrl: function (opts) {
      return 'http://zthiztegia.elhuyar.eus';
    },

    getUrl: function (opts) {
      return [
        'http://zthiztegia.elhuyar.eus/terminoa',  '/', opts[1].value, '/', opts[0].value
      ].join('');
    },


    getParams: function (opts) {
      return [];
    },
  };

}();
