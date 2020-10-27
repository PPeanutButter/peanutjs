// ==UserScript==
// @name         简书-去广告全屏
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.1.min.js
// @match        https://www.jianshu.com/p/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var $ = $ || window.$;
    var div = $("div[role='main']");
    div.css("width","98%");
    div.children("div").css("width","100%");
    div.find("aside").hide();
    $("header").hide();
    $("footer").hide();
    $("div#__next").children("div:last-child").hide();
})();