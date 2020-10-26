// ==UserScript==
// @name         知乎宽屏模式
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://zhuanlan.zhihu.com/p/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.getElementsByClassName("Post-Header")[0].setAttribute('style','width:90%;');
    document.getElementsByClassName("Post-RichTextContainer")[0].setAttribute('style','width:90%;');
    document.getElementsByClassName("ContentItem-time")[0].setAttribute('style','width:90%;');
    document.getElementsByClassName("Post-topicsAndReviewer")[0].setAttribute('style','width:90%;');
})();