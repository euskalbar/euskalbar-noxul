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

  dicts.oeh = function () {

  return {
    displayName: 'Orotarikoa',
    description: 'Orotariko Euskal Hiztegia',

    homePage: 'http://www.euskaltzaindia.eus/oeh',
    pairs: ['eu-eu'], 
    method: 'POST',
    type: "orokorrak",
    url:'http://www.euskaltzaindia.eus/index.php',
    
    getUrl: function (opts) {
      return 'http://www.euskaltzaindia.eus/index.php';
    },

       getParams: function (opts) {
            return [
        {"name" : "option" , "value" : "com_oeh" },
        {"name" : "lang" , "value" : "eu"},
        {"name" : "view" , "value" : "frontpage" },
        {"name" : "Itemid" , "value" : "340"},
        {"name" : "sarrera" , "value" : opts[0].value }
      ];
    },

    scrap: function (data, opts) {
      data = data.substring(data.indexOf('<div class="grid7 oehResultContent">'),
                            data.indexOf('<div class="contentSearchBlock oehSearchBlock">'));
      if (data.indexOf('oehResultContent') === -1) {
        data = "Ez da aurkitu";
      }
      data = data.replace(
            /index.php/g,
            "http://www.euskaltzaindia.net/index.php"

      );
      data = data.replace(
            /images/g,
            "http://www.euskaltzaindia.net/images"

      );
      return data;
    }

  };

}();
