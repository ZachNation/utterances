!function(){"use strict";function e(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}for(var t=document.currentScript,n={},r=0;r<t.attributes.length;r++){var i=t.attributes.item(r);n[i.name]=i.value}n.url=location.href,n.origin=location.origin,n.pathname=location.pathname.substr(1).replace(/\.\w+$/,""),n.title=document.title;var a=document.querySelector("meta[name='description']");n.description=a?a.content:"",document.head.insertAdjacentHTML("afterbegin","<style>\n    .utterances {\n      position: relative;\n      width: 100%;\n    }\n    .utterances-frame {\n      position: absolute;\n      left: 0;\n      right: 0;\n      width: 1px;\n      min-width: 100%;\n      max-width: 100%;\n      height: 100%;\n      border: 0;\n    }\n  </style>");var o=t.src.replace(/\/client(\.debug)?\.js(?:$|\?)/,"/utterances$1.html");t.insertAdjacentHTML("afterend",'<div class="utterances">\n    <iframe class="utterances-frame" scrolling="no" src="'+o+"?"+e(n)+'"></iframe>\n  </div>');var s=t.nextElementSibling;t.parentElement.removeChild(t),addEventListener("message",function(e){var t=e.data;t&&"resize"===t.type&&t.height&&(s.style.height=t.height+"px")})}();