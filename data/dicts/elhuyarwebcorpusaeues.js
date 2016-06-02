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

dicts.elhuyarwebcorpusaeues = function () {

  return {
    displayName: 'ElhWebCorp eu-es',
    description: 'Elhuyar Web Corpusa - Paraleloa (eu-es)',

    homePage: 'http://webcorpusak.elhuyar.eus',

    pairs: ['eu-es', 'es-eu'],

    method: 'GET',
    type:'corpus_eleaniztunak',
    url:'http://webcorpusak.elhuyar.eus/cgi-bin/kontsulta2.py',
    
    getUrl: function (opts) {
      return 'http://webcorpusak.elhuyar.eus/cgi-bin/kontsulta2.py';
    },

    getParams: function (opts) {
      return [
      {"name" : "testuhitza" , "value" : opts[0].value},
      {"name" : "hizkuntza" , "value" : opts[1].value},
      {"name" : "formalema" , "value" : "lema"},
      {"name" : "konparazioa" , "value" : "da"}
      ];
    }
  };

}();
