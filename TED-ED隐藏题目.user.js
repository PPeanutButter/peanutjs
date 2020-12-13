// ==UserScript==
// @name         TED-ED隐藏题目
// @namespace    http://tampermonkey.net/
// @version      0.1
// @require      https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.1.min.js
// @description  try to take over the world!
// @author       花生酱啊
// @match        https://ed.ted.com/lessons/*/review_open
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var $ = $ || window.$;
    var questions = $("div[class='question scrollable text-ultralight']");
    questions.each(function(){
        var answer = $(this).children();
        $(this).empty();
        $(this).append("题目已被油猴脚本隐藏,关闭脚本显示题目");
        $(this).append(answer);
    });
})();