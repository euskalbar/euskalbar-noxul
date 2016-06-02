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

dicts.intza = function () {

  return {
    displayName: 'Intza',
    description: 'Intza proiektuaren lokuzioak',

    homePage: 'http://intza.armiarma.eus/',

    pairs: ['eu-es', 'eu-fr',
            'es-eu', 'fr-eu'],

    method: 'GET',

    mimeType: "text/html; charset=ISO-8859-1",
    type:'fraseologia',
    url:'http://intza.armiarma.eus/cgi-bin/bilatu2.pl',
    
    getUrl: function (opts) {
      return 'http://intza.armiarma.eus/cgi-bin/bilatu2.pl';
    },

        getParams: function (opts) {
          var q ="";

          if  (opts[1].value == "es"){
            q = "eeki";
          } else if (opts[1].value == "fr"){
            q = "feki";
          } else {
            q = "giltzarriak";
          }


            return [
        {"name" : "hitza1" , "value" : opts[0].value },
        {"name" : "eremu3" , "value" : "1"},
        {"name" : "eremu1" , "value" : q }
      ];
    },

    scrap: function (data, opts) {
      var output = data;

      var output2 = output.split("Bilaketaren emaitza")[2];
      output = '<strong><font face="bitstream vera sans, verdana, arial" size="3">'
        + opts[0].value + '</font></strong>' + output2;

      var output3 = output.split("<form")[0];
      output = output3.replace(
          /<font size=5>/g,
          '<font size="3">'
      );
      output = output.replace(
          /\/cgi-bin/g,
          "http:\/\/intza.armiarma.com\/cgi-bin"
      );
      output = output.replace(
          /\/intza\/kon/g,
          "http:\/\/intza.armiarma.com\/intza\/kon"
      );

      return output;
    }

  };

}();
