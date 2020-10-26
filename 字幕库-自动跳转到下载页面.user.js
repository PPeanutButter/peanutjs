// ==UserScript==
// @name         字幕库-自动跳转到下载页面
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.zimuku.la/detail/*
// @grant        none
// ==/UserScript==

(function() {
    var id = window.location.pathname;
	id = id.substring(id.lastIndexOf('/') + 1, id.length);
    console.log(id);
    window.location.href="http://zmk.pw/dld/"+id;
})();