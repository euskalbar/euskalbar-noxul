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

dicts.euskalterm = function () {

  return {
    displayName: 'Euskalterm',
    description: 'Euskalterm datu-basea',

    homePage: "http://www.euskara.euskadi.eus/euskalterm/",

    pairs: ['eu-es', 'eu-fr', 'eu-en', 'eu-de', 'eu-la',
            'es-eu', 'fr-eu', 'en-eu', 'de-eu', 'la-eu'],

    method: 'POST',

    mimeType: "text/html; charset=ISO-8859-1",
    type: 'terminologikoak_teknikoak',
    url:'http://www.euskara.euskadi.eus/q91EusTermWar/kontsultaJSP/q91aBilaketaAction.do',
    
    getUrl: function (opts) {
      return 'http://www.euskara.euskadi.eus/q91EusTermWar/kontsultaJSP/q91aBilaketaAction.do';
    },

    getParams: function (opts) {
      var term = opts[0].value;
      var langMap = {
            'es': 'ES',
            'en': 'EN',
            'fr': 'FR',
            'la': 'LA',
            'de': 'DE',
          },
          lang = langMap[opts[1].value] || 'eu';

      // Hitz zatiak erabiltzen direnean, * komodina erabiliko bailitzan
      // egin ditzala bilaketak
      if (term.charAt(term.length - 1) != "%") {
        term = term + "%";
      }

      return [
      {"name" : "ekintza"  , "value" : "HASI" },
      {"name" : "ekin"  , "value" : "HASI" },
      {"name" : "datuakaBilaketarako(galderakoHizkuntza)"  , "value" : lang },
      {"name" : "datuakaBilaketarako(galdera)"  , "value" : term },
      {"name" : "zerrenda"  , "value" : "" },
      {"name" : "hizkuntza"  , "value" : "eu" }
      ];
    },

    scrap: function (data, opts) {
      var output = data;
      output = output.substring(
          output.indexOf('<input type="hidden" name="datuakaFormBil(unekoSailZenbakia)" value="" id="unekoSailZenbakia" />'),
          output.indexOf('<div class="clr"/>')
      );
      output = output.replace(
          /q91aBilaketaAction/g,
          "http://www.euskara.euskadi.eus/q91EusTermWar/kontsultaJSP/q91aBilaketaAction"
      );
      output = output.replace(
          /<table  class=\"erantzuna\"/g,
          "<hr><table  class=\"erantzuna\""
      );
      output = output.replace(
          /img/g,
          "span"
      );

      return output;
    }
  };
}();
