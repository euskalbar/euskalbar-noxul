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

dicts.elhuyarwebcorpusaeu = function () {

  return {
    displayName: 'ElhWebCorp eu',
    description: 'Elhuyar Web Corpusa - Euskarazkoa',

    homePage: 'http://webcorpusak.elhuyar.eus/sarrera_elebakarra.html',
        pairs: ['eu-eu'], 

    method: 'GET',
    type:'corpus_orokorrak',
    url:'http://webcorpusak.elhuyar.eus/cgi-bin/kontsulta.py',
    
    getUrl: function (opts) {
      return 'http://webcorpusak.elhuyar.eus/cgi-bin/kontsulta.py';
    },

    getParams: function (opts) {
      return [
      {"name" : "testu-hitza1" , "value" : opts[0].value},
      {"name" : "formalema1" , "value" : "lema"},
      {"name" : "konparazioa1" , "value" : "da"},
      {"name" : "ordenatu" , "value" : "ordenadok"}
      ];
    }

  };

}();
