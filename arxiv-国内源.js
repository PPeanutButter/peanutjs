// ==UserScript==
// @name         arxiv-国内源
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://arxiv.org/pdf/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var id = window.location.pathname;
	id = id.substring(id.lastIndexOf('/') + 1, id.length);
    window.location.href="http://cn.arxiv.org/pdf/"+id;
    function close(){
        window.location.href="about:blank";
        window.close();
    }
    setTimeout(close, 5000);
})();