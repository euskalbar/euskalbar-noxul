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

dicts.automatikoak = function () {


  return {
    displayName: 'Automatikoak',
    description: 'Elhuyarren Automatikoki Sortutako Hiztegiak',

    homePage: 'http://hiztegiautomatikoak.elhuyar.eus',

    pairs: ['eu-de', 'eu-zh', 'eu-hi', 'eu-sw', 'eu-ar', 'eu-oc',
            'de-eu', 'zh-eu', 'hi-eu', 'sw-eu', 'ar-eu', 'oc-eu'],

    method: 'POSTquery',
    type: 'orokor_eleaniztunak',
    url:'http://hiztegiautomatikoak.elhuyar.eus/bilaketa/eu',
    
    getUrl: function (opts) {
      return [
        'http://hiztegiautomatikoak.elhuyar.eus/bilaketa/eu'
      ].join('');
    },

    getUrlQuery: function (opts) {
       return [
        'http://hiztegiautomatikoak.elhuyar.eus/bilaketa/eu'
      ].join('');
    },

    getParams: function (opts) {
      var mota = "";
      if (opts[1].value=='eu' && opts[2].value=='de')
      {
          mota='1';
      }
      else if (opts[1].value=='eu' && opts[2].value=='zh')
      {
          mota='2';
      }
      else if (opts[1].value=='eu' && opts[2].value=='hi')
      {
          mota='3';
      }
      else if (opts[1].value=='eu' && opts[2].value=='sw')
      {
          mota='4';
      }
      else if (opts[1].value=='eu' && opts[2].value=='ar')
      {
          mota='5';
      }
      else if (opts[1].value=='eu' && opts[2].value=='oc')
      {
          mota='11';
      }
      else if (opts[1].value=='de' && opts[2].value=='eu')
      {
          mota='6';
      }
      else if (opts[1].value=='zh' && opts[2].value=='eu')
      {
          mota='7';
      }
      else if (opts[1].value=='hi' && opts.value=='eu')
      {
          mota='8';
      }
      else if (opts[1].value=='sw' && opts[2].value=='eu')
      {
          mota='9';
      }
      else if (opts[1].value=='ar' && opts[2].value=='eu')
      {
          mota='10';
      }
      else if (opts[1].value=='oc' && opts[2].value=='eu')
      {
          mota='12';
      };
      return [
        { "name" : "search_type" , "value": mota },
        { "name" : "search_text" , "value": opts[0].value},
        { "name" : "search" , "value": "Bilatu"}
      ];
    }

  };

}();

self.port.on("exekutatu", postQuery);

function postQuery (exekutatu) {

if (document.getElementById("id_search_text").value == "") {
    var exekutatu = JSON.parse(exekutatu);
    document.getElementById('id_search_text').value = exekutatu.testua;
    if (exekutatu.source == "eu" && exekutatu.target == "de"){
      document.getElementById("id_search_type").value = 1
    } else if (exekutatu.source == "eu" && exekutatu.target == "zh") {
     document.getElementById("id_search_type").value = 2
    }  else if (exekutatu.source == "eu" && exekutatu.target == "hi") {
     document.getElementById("id_search_type").value = 3
    }  else if (exekutatu.source == "eu" && exekutatu.target == "sw") {
     document.getElementById("id_search_type").value = 4
    }  else if (exekutatu.source == "eu" && exekutatu.target == "ar") {
     document.getElementById("id_search_type").value = 5
    }  else if (exekutatu.source == "eu" && exekutatu.target == "oc") {
     document.getElementById("id_search_type").value = 6
    }  else if (exekutatu.source == "de" && exekutatu.target == "eu") {
     document.getElementById("id_search_type").value = 7
    }  else if (exekutatu.source == "zh" && exekutatu.target == "eu") {
     document.getElementById("id_search_type").value = 8
    }  else if (exekutatu.source == "hi" && exekutatu.target == "eu") {
     document.getElementById("id_search_type").value = 9
    }  else if (exekutatu.source == "sw" && exekutatu.target == "eu") {
     document.getElementById("id_search_type").value = 10
    }  else if (exekutatu.source == "ar" && exekutatu.target == "eu") {
     document.getElementById("id_search_type").value = 12
    }  else if (exekutatu.source == "oc" && exekutatu.target == "eu") {
     document.getElementById("id_search_type").value = 12
    }
    document.getElementById("bot_bilatu").click();
  } else {
  }

}
