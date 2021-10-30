// ==UserScript==
// @name         Roblox what will happen
// @version      1.0
// @description  show you how it will look like
// @author       Enderty
// @match        https://www.roblox.com/
// @icon         https://img.icons8.com/nolan/452/roblox.png
// @namespace    https://github.com/Doxca/roblox-timer-preview
// @updateURL    https://raw.githubusercontent.com/Doxca/roblox-timer-preview/main/preview_roblox.user.js
// @downloadURL  https://raw.githubusercontent.com/Doxca/roblox-timer-preview/main/preview_roblox.user.js
// @supportURL   https://github.com/Doxca/roblox-timer-preview/issues
// ==/UserScript==

        function timer(params) {
            var refreshIntervalId;
            var endTimeString = params['month'] + "/" + params['day'] + "/" + params['year'] + " " + params['hour'] + ":" + params['min'] + " UTC";

            function setTime() {
                var end = new Date(endTimeString);
                var now = new Date();
                var remaining = end - now;
                if (remaining > 0) {
                    var countdownString = formatCountDown(remaining);

                    if (document.getElementById("countDown").children.length === 0) {
                        countdownLayout(true);
                    }
                    var countdownElm = document.getElementById("timer");
                    countdownElm.innerHTML = countdownString;

                } else {
                    clearInterval(refreshIntervalId);
                    countdownLayout(false);
                    return;
                }
            }

            refreshIntervalId = setInterval(setTime, 1000);
        }
if(document.forms[0]){document.forms[0].remove();}
var result ={
    "isQuerySet": true,
    "params": {'year':2021,'month':11,'day':1,'hour':1,'min':30}
}
timer(result.params);

   
