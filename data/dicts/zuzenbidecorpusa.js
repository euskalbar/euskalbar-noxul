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

dicts.zuzenbidecorpusa = function () {

  return {
    displayName: 'ZCP',
    description: 'Zuzenbide Corpusa',

    homePage: 'http://www.ehu.eus/ehg/zuzenbidea/',
    pairs: ['eu-eu'], 
    method: 'GET',
    type:'corpus_espezializatuak',
    mimeType: "text/html; charset=ISO-8859-1",
    url:'http://www.ehu.eus/ehg/cgi/zuzenbidea/bilatu.pl',

    getUrl: function (opts) {
      return 'http://www.ehu.eus/ehg/cgi/zuzenbidea/bilatu.pl';
    },

        getParams: function (opts) {
            return [
        {"name" : "o" , "value" :  "1"},
        {"name" : "k1" , "value" : "1"},
        {"name" : "m1" , "value" :  "lema"},
        {"name" : "d2" , "value" : "1"},
        {"name" : "h1" , "value" : opts[0].value },
      ];
    }

  };

}();
