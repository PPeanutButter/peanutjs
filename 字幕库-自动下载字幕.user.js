// ==UserScript==
// @name         字幕库-自动下载字幕
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://zmk.pw/dld/*
// @grant        none
// ==/UserScript==

(function() {
    var a = document.getElementsByClassName("down clearfix")[0].getElementsByTagName('li')[4].getElementsByTagName('a')[0];
    a.click();

    function close(){
        window.location.href="about:blank";
        window.close();
    }

    setTimeout(close, 5000);
})();