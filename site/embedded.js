!function(){"use strict";var i,r;function a(){if(null==i){var e=function(){var e=window.location;"about:srcdoc"==e.href&&(e=window.parent.location);var t={};return function(e,i,n){for(;n=i.exec(e);)t[decodeURIComponent(n[1])]=decodeURIComponent(n[2])}(e.search.substring(1).replace(/\+/g,"%20"),/([^&=]+)=?([^&]*)/g),t}();i="referrer"in e?/^https:\/\/medium.com\//.test(e.referrer):!("auto"in e)}return i}function s(e){var i=e||window.innerWidth;return 999<i?650:599<i?575:400}function d(e,i){if(window.top!==window.self){var n=window;if("srcdoc"==n.location.pathname&&(n=n.parent),r)return e=parseInt(e,10),void n.parent.postMessage({sentinel:"amp",type:"embed-size",height:e},"*");var t={sender:"Flourish",context:"iframe.resize",method:"resize",height:e,src:n.location.toString()};if(i)for(var o in i)t[o]=i[o];n.parent.postMessage(JSON.stringify(t),"*")}}function u(){return-1!==navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")}function c(o){window.addEventListener("message",function(i){if(null!=i.source&&(i.origin===document.location.origin||i.origin.match(/\/\/localhost:\d+$|\.flourish\.(?:local(:\d+)?|rocks|studio)$/))){var e;try{e=JSON.parse(i.data)}catch(e){return void console.warn("Unexpected non-JSON message: "+JSON.stringify(i.data))}if("Flourish"===e.sender){for(var n=document.querySelectorAll("iframe"),t=0;t<n.length;t++)if(n[t].contentWindow==i.source||n[t].contentWindow==i.source.parent)return void o(e,n[t]);console.warn("could not find frame",e)}}}),u()&&window.addEventListener("resize",e)}function e(){for(var e=document.querySelectorAll(".flourish-embed"),i=0;i<e.length;i++){var n=e[i];if(!n.getAttribute("data-width"))n.querySelector("iframe").style.width=n.offsetWidth+"px"}}!function(){if(window.top!==window.self){var i,n=(r="#amp=1"==window.location.hash,{isFixedHeight:a,getHeightForBreakpoint:s,startEventListeners:c,notifyParentWindow:d,isSafari:u}),t=!0;Flourish.uploadImage=function(e){if("story_editor"!==Flourish.environment)throw"Invalid upload request";var i={sender:"Flourish",method:"request-upload",name:e.name,accept:e.accept};window.parent.postMessage(JSON.stringify(i),"*")},Flourish.setHeight=function(e){Flourish.fixed_height||(t=null==(i=e),o())},Flourish.checkHeight=function(){var e=Flourish.__container_height;null!=e?(Flourish.fixed_height=!0,n.notifyParentWindow(e)):n.isFixedHeight()?Flourish.fixed_height=!0:(Flourish.fixed_height=!1,o())},Flourish.fixed_height=n.isFixedHeight(),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}else Flourish.setHeight=function(){};function o(){var e;Flourish.fixed_height||(null!=i?e=i:t&&(e=n.getHeightForBreakpoint()),e!==window.innerHeight&&n.notifyParentWindow(e))}function e(){o(),window.addEventListener("resize",o)}}()}();
//# sourceMappingURL=embedded.js.map
