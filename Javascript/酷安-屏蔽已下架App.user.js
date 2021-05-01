// ==UserScript==
// @name         酷安-屏蔽已下架App
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://developer.coolapk.com/do?c=apk&m=myList*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var $ = $ || window.$;
    // Your code here...
    $("main.mdl-layout__content div:first-of-type").hide();
    $("main.mdl-layout__content table tbody tr").each(function(){
        if($($(this).find("td")[4]).text().indexOf("已下架") != -1){
            $(this).hide();
        }
    });
})();