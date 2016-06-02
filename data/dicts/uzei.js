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

dicts.uzei = function () {


  return {
    displayName: 'UZEI sin.',
    description: 'UZEI Sinonimoen Hiztegia',
    contextCategory: 'context.Synonyms',

    homePage: 'http://www.uzei.eus/zerbitzuak-eta-produktuak/produktuen-katalogoa/sinonimoen-hiztegia/',
    pairs: ['eu-eu'], 
    method: 'POST',
    type:'sinonimoak',
    url:'http://www.uzei.eus/online/sinonimoen-hiztegia-iruzkinak',
    
    getUrl: function (opts) {
      return 'http://www.uzei.eus/online/sinonimoen-hiztegia-iruzkinak';
    },

        getParams: function (opts) {
            return [
        {"name" : "w" , "value" : opts[0].value }
      ];
    },

    scrap: function (data, opts) {
      data = data.substring(data.indexOf('<div class=\"column_inner uzei_sinonimoak_body\">'),
                            data.indexOf('<div class=\"comment_holder\" id="comments">'));

      return data;
    }

  };

}();
