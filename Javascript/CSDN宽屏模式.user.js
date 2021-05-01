// ==UserScript==
// @name         CSDN宽屏模式
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://blog.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.getElementsByClassName("main_father clearfix d-flex justify-content-center")[0].setAttribute('style','width:100%;');
    document.getElementById("mainBox").setAttribute('style','width:100%;');
    document.getElementById("rightAside").setAttribute('style','display:none');
    document.getElementById("mainBox").getElementsByTagName("main")[0].setAttribute('style','width:100%;');
})();