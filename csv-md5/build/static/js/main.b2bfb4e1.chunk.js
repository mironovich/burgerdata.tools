(this["webpackJsonpcsv-md5"]=this["webpackJsonpcsv-md5"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),u=n(2),i=n(3),l=n.n(i);function s(e,t){var n=e[0],r=e[1],a=e[2],c=e[3];n=f(n,r,a,c,t[0],7,-680876936),c=f(c,n,r,a,t[1],12,-389564586),a=f(a,c,n,r,t[2],17,606105819),r=f(r,a,c,n,t[3],22,-1044525330),n=f(n,r,a,c,t[4],7,-176418897),c=f(c,n,r,a,t[5],12,1200080426),a=f(a,c,n,r,t[6],17,-1473231341),r=f(r,a,c,n,t[7],22,-45705983),n=f(n,r,a,c,t[8],7,1770035416),c=f(c,n,r,a,t[9],12,-1958414417),a=f(a,c,n,r,t[10],17,-42063),r=f(r,a,c,n,t[11],22,-1990404162),n=f(n,r,a,c,t[12],7,1804603682),c=f(c,n,r,a,t[13],12,-40341101),a=f(a,c,n,r,t[14],17,-1502002290),n=m(n,r=f(r,a,c,n,t[15],22,1236535329),a,c,t[1],5,-165796510),c=m(c,n,r,a,t[6],9,-1069501632),a=m(a,c,n,r,t[11],14,643717713),r=m(r,a,c,n,t[0],20,-373897302),n=m(n,r,a,c,t[5],5,-701558691),c=m(c,n,r,a,t[10],9,38016083),a=m(a,c,n,r,t[15],14,-660478335),r=m(r,a,c,n,t[4],20,-405537848),n=m(n,r,a,c,t[9],5,568446438),c=m(c,n,r,a,t[14],9,-1019803690),a=m(a,c,n,r,t[3],14,-187363961),r=m(r,a,c,n,t[8],20,1163531501),n=m(n,r,a,c,t[13],5,-1444681467),c=m(c,n,r,a,t[2],9,-51403784),a=m(a,c,n,r,t[7],14,1735328473),n=v(n,r=m(r,a,c,n,t[12],20,-1926607734),a,c,t[5],4,-378558),c=v(c,n,r,a,t[8],11,-2022574463),a=v(a,c,n,r,t[11],16,1839030562),r=v(r,a,c,n,t[14],23,-35309556),n=v(n,r,a,c,t[1],4,-1530992060),c=v(c,n,r,a,t[4],11,1272893353),a=v(a,c,n,r,t[7],16,-155497632),r=v(r,a,c,n,t[10],23,-1094730640),n=v(n,r,a,c,t[13],4,681279174),c=v(c,n,r,a,t[0],11,-358537222),a=v(a,c,n,r,t[3],16,-722521979),r=v(r,a,c,n,t[6],23,76029189),n=v(n,r,a,c,t[9],4,-640364487),c=v(c,n,r,a,t[12],11,-421815835),a=v(a,c,n,r,t[15],16,530742520),n=b(n,r=v(r,a,c,n,t[2],23,-995338651),a,c,t[0],6,-198630844),c=b(c,n,r,a,t[7],10,1126891415),a=b(a,c,n,r,t[14],15,-1416354905),r=b(r,a,c,n,t[5],21,-57434055),n=b(n,r,a,c,t[12],6,1700485571),c=b(c,n,r,a,t[3],10,-1894986606),a=b(a,c,n,r,t[10],15,-1051523),r=b(r,a,c,n,t[1],21,-2054922799),n=b(n,r,a,c,t[8],6,1873313359),c=b(c,n,r,a,t[15],10,-30611744),a=b(a,c,n,r,t[6],15,-1560198380),r=b(r,a,c,n,t[13],21,1309151649),n=b(n,r,a,c,t[4],6,-145523070),c=b(c,n,r,a,t[11],10,-1120210379),a=b(a,c,n,r,t[2],15,718787259),r=b(r,a,c,n,t[9],21,-343485551),e[0]=w(n,e[0]),e[1]=w(r,e[1]),e[2]=w(a,e[2]),e[3]=w(c,e[3])}function d(e,t,n,r,a,c){return t=w(w(t,e),w(r,c)),w(t<<a|t>>>32-a,n)}function f(e,t,n,r,a,c,o){return d(t&n|~t&r,e,t,a,c,o)}function m(e,t,n,r,a,c,o){return d(t&r|n&~r,e,t,a,c,o)}function v(e,t,n,r,a,c,o){return d(t^n^r,e,t,a,c,o)}function b(e,t,n,r,a,c,o){return d(n^(t|~r),e,t,a,c,o)}function h(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return n}var p="0123456789abcdef".split("");function g(e){for(var t="",n=0;n<4;n++)t+=p[e>>8*n+4&15]+p[e>>8*n&15];return t}function E(e){return function(e){for(var t=0;t<e.length;t++)e[t]=g(e[t]);return e.join("")}(function(e){var t,n=e.length,r=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=e.length;t+=64)s(r,h(e.substring(t-64,t)));e=e.substring(t-64);var a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<e.length;t++)a[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(a[t>>2]|=128<<(t%4<<3),t>55)for(s(r,a),t=0;t<16;t++)a[t]=0;return a[14]=8*n,s(r,a),r}(e))}var w=function(e,t){return e+t&4294967295};"5d41402abc4b2a76b9719d911017c592"!==E("hello")&&(w=function(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n});var j=E,y=n(6),k=n(1);k.WritableStream=y.a;var C=function(){var e,t,n=Object(r.useState)([]),c=Object(u.a)(n,2),o=c[0],i=c[1],s=Object(r.useState)({}),d=Object(u.a)(s,2),f=d[0],m=d[1],v=Object(r.useState)(0),b=Object(u.a)(v,2),h=b[0],p=b[1],g=Object(r.useRef)(),E=Object(r.useRef)(),w=Object(r.useRef)(0),y=TextEncoder.prototype.encode.bind(new TextEncoder);window.isSecureContext&&window.addEventListener("beforeunload",(function(e){t.abort()}));var C={header:!1,worker:!1,step:function(e,n){!function(e,n){w.current?"undefined"!==typeof g.current&&(e.data[g.current]=j(e.data[g.current])):(i(e.data),n.pause(),m(n)),w.current++,t.write(y(e.data.join(",")+"\n"))}(e,n)},complete:function(){console.log("rows processed:",w.current),p(w.current),i([]),E.current.value="",w.current=0,t.close()}};return a.a.createElement("div",{style:{padding:"1rem 2rem"}},a.a.createElement("div",null,a.a.createElement("h2",null,"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),a.a.createElement("button",{onClick:function(){e=k.createWriteStream("md5.csv"),t=e.getWriter(),l.a.parse("contact,field2\n123,test\n343443,test2\n34t34t23t4,test3\nwefawef,test4",C)}},"test string")),a.a.createElement("br",null),a.a.createElement("h2",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),a.a.createElement("div",null,"\u0412\u044b\u0431\u0435\u0440\u0438 \u0444\u0430\u0439\u043b \u0434\u043b\u044f \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),a.a.createElement("br",null),a.a.createElement("input",{type:"file",onChange:function(n){l.a.parse(E.current.files[0],C),e=k.createWriteStream("".concat(n.target.value,"_md5.csv")),t=e.getWriter(),console.log("File selected:\n",n.target.value)},ref:E,id:"input",multiple:!0}),a.a.createElement("br",null),o.length>0&&a.a.createElement("div",null,a.a.createElement("div",{style:{padding:"1rem 0"}},"\u0412\u044b\u0431\u0435\u0440\u0438 \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),o.map((function(e,t){return a.a.createElement("button",{style:{display:"block"},key:e,onClick:function(){!function(e){g.current=e,f.resume()}(t)}},e)}))),h>0&&a.a.createElement("div",{style:{padding:"1rem 0"}},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e ",h," \u0441\u0442\u0440\u043e\u043a"))};n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.b2bfb4e1.chunk.js.map