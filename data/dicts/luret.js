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

dicts.luret = function () {

  return {
    displayName: 'Lur ET',
    description: 'Lur Entziklopedia Tematikoa',

    homePage: 'http://www.euskara.euskadi.eus/r59-lursubhe/eu/contenidos/informacion/lursubhe/eu_lursubhe/lursubhe.html',
    pairs: ['eu-eu'], 
    method: 'GET',

    mimeType: "text/html; charset=ISO-8859-1",
    type:'entziklopedikoak',
    url:'http://www.euskara.euskadi.eus/r59-lursresd/eu',
    
    getUrl: function (opts) {
      return 'http://www.euskara.euskadi.eus/r59-lursresd/eu';
    },


        getParams: function (opts) {
            return [
        {"name" : "r01kQry" , "value" : "tC:euskadi;tF:diccionario_enciclopedia;tT:articulo;m:documentLanguage.EQ.eu;m:documentDescription.LIKE."+opts[0].value }
      ];
    }

  };

}();
