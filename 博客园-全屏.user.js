// ==UserScript==
// @name         博客园-全屏
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.cnblogs.com/*/p/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.getElementById("sideBar").setAttribute("style","display:none");
})();