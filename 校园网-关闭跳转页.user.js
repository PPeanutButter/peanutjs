// ==UserScript==
// @name         校园网-关闭跳转页
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://edge.microsoft.com/captiveportal/generate_204
// @grant        none
// ==/UserScript==

(function() {
    window.location.href="about:blank";
    window.close();
})();