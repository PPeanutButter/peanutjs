// ==UserScript==
// @name         BTBTT-批量下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @require      https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.1.min.js
// @author       You
// @match        http://91btbtt.com/thread-index-fid-950-tid-*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var $ = $ || window.$;
    //遍历帖子的table
    $("div.width table.post_table").each(function(){
        //判断附件贴并添加下载按钮
        if($(this).find("div.attachlist").text() != ''){
            var parrent = this;
            var btn=document.createElement("BUTTON");
            var t=document.createTextNode("批量下载");
            btn.appendChild(t);
            //设置按钮的点击
            btn.onclick = function(){
                //遍历帖子内所有附件
                //$(parrent).find("div.attachlist").each(function() {
                    //判断是否有连接
                    $(parrent).find("table tr a").each(function(){
                        var link = $(this).attr("href").replace("dialog","download");
                        console.log(link);
                        //开始下载
                        window.open(link);
                    });
                //});
            };
            $(this).find("td.post_td div.message").append(btn);
        }
    });
})();