// ==UserScript==
// @name         校园网-自动登录
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://172.30.16.34/srun_portal_pc.php?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByName('username')[0].value = '你的卡号';
    document.getElementsByName('password')[0].value = '你的密码';
    document.getElementById('action_login').click();
})();