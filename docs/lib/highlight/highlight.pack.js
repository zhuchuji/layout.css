!function(e){var r="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):r&&(r.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return r.hljs}))}(function(e){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function n(e,r){var t=e&&e.exec(r);return t&&0===t.index}function a(e){return v.test(e)}function c(e){var r,t={},n=Array.prototype.slice.call(arguments,1);for(r in e)t[r]=e[r];return n.forEach(function(e){for(r in e)t[r]=e[r]}),t}function i(e){var r=[];return function e(n,a){for(var c=n.firstChild;c;c=c.nextSibling)3===c.nodeType?a+=c.nodeValue.length:1===c.nodeType&&(r.push({event:"start",offset:a,node:c}),a=e(c,a),t(c).match(/br|hr|img|input/)||r.push({event:"stop",offset:a,node:c}));return a}(e,0),r}function s(e){function r(e){return e&&e.source||e}function t(t,n){return new RegExp(r(t),"m"+(e.cI?"i":"")+(n?"g":""))}!function n(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var s={},o=function(r,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");s[t[0]]=[r,t[1]?Number(t[1]):1]})};"string"==typeof a.k?o("keyword",a.k):d(a.k).forEach(function(e){o(e,a.k[e])}),a.k=s}a.lR=t(a.l||/\w+/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=r(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),null==a.r&&(a.r=1),a.c||(a.c=[]),a.c=Array.prototype.concat.apply([],a.c.map(function(e){return(r="self"===e?a:e).v&&!r.cached_variants&&(r.cached_variants=r.v.map(function(e){return c(r,{v:null},e)})),r.cached_variants||r.eW&&[c(r)]||[r];var r})),a.c.forEach(function(e){n(e,a)}),a.starts&&n(a.starts,i);var u=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(r).filter(Boolean);a.t=u.length?t(u.join("|"),!0):{exec:function(){return null}}}}(e)}function o(e,t,a,c){function i(e,r,t,n){var a='<span class="'+(n?"":M.classPrefix);return(a+=e+'">')+r+(t?"":E)}function l(){N+=null!=m.sL?function(){var e="string"==typeof m.sL;if(e&&!h[m.sL])return r(w);var t=e?o(m.sL,w,!0,v[m.sL]):u(w,m.sL.length?m.sL:void 0);return m.r>0&&(R+=t.r),e&&(v[m.sL]=t.top),i(t.language,t.value,!1,!0)}():function(){var e,t,n,a,c,s,o;if(!m.k)return r(w);for(a="",t=0,m.lR.lastIndex=0,n=m.lR.exec(w);n;)a+=r(w.substring(t,n.index)),c=m,s=n,o=g.cI?s[0].toLowerCase():s[0],(e=c.k.hasOwnProperty(o)&&c.k[o])?(R+=e[1],a+=i(e[0],r(n[0]))):a+=r(n[0]),t=m.lR.lastIndex,n=m.lR.exec(w);return a+r(w.substr(t))}(),w=""}function f(e){N+=e.cN?i(e.cN,"",!0):"",m=Object.create(e,{parent:{value:m}})}function b(e,r){if(w+=e,null==r)return l(),0;var t=function(e,r){var t,a;for(t=0,a=r.c.length;a>t;t++)if(n(r.c[t].bR,e))return r.c[t]}(r,m);if(t)return t.skip?w+=r:(t.eB&&(w+=r),l(),t.rB||t.eB||(w=r)),f(t),t.rB?0:r.length;var c,i,s=function e(r,t){if(n(r.eR,t)){for(;r.endsParent&&r.parent;)r=r.parent;return r}return r.eW?e(r.parent,t):void 0}(m,r);if(s){var o=m;for(o.skip?w+=r:(o.rE||o.eE||(w+=r),l(),o.eE&&(w=r));m.cN&&(N+=E),m.skip||(R+=m.r),(m=m.parent)!==s.parent;);return s.starts&&f(s.starts),o.rE?0:r.length}if(c=r,i=m,!a&&n(i.iR,c))throw new Error('Illegal lexeme "'+r+'" for mode "'+(m.cN||"<unnamed>")+'"');return w+=r,r.length||1}var g=p(e);if(!g)throw new Error('Unknown language: "'+e+'"');s(g);var d,m=c||g,v={},N="";for(d=m;d!==g;d=d.parent)d.cN&&(N=i(d.cN,"",!0)+N);var w="",R=0;try{for(var x,y,C=0;m.t.lastIndex=C,x=m.t.exec(t);)y=b(t.substring(C,x.index),x[0]),C=x.index+y;for(b(t.substr(C)),d=m;d.parent;d=d.parent)d.cN&&(N+=E);return{r:R,value:N,language:e,top:m}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{r:0,value:r(t)};throw e}}function u(e,t){t=t||M.languages||d(h);var n={r:0,value:r(e)},a=n;return t.filter(p).forEach(function(r){var t=o(r,e,!1);t.language=r,t.r>a.r&&(a=t),t.r>n.r&&(a=n,n=t)}),a.language&&(n.second_best=a),n}function l(e){return M.tabReplace||M.useBR?e.replace(w,function(e,r){return M.useBR&&"\n"===e?"<br>":M.tabReplace?r.replace(/\t/g,M.tabReplace):""}):e}function f(e){var n,c,s,f,b,d,h,v,w,E,R=function(e){var r,t,n,c,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=N.exec(i))return p(t[1])?t[1]:"no-highlight";for(r=0,n=(i=i.split(/\s+/)).length;n>r;r++)if(a(c=i[r])||p(c))return c}(e);a(R)||(M.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,b=n.textContent,s=R?o(R,b,!0):u(b),(c=i(n)).length&&((f=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=s.value,s.value=function(e,n,a){function c(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function i(e){l+="<"+t(e)+g.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+r(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function s(e){l+="</"+t(e)+">"}function o(e){("start"===e.event?i:s)(e.node)}for(var u=0,l="",f=[];e.length||n.length;){var b=c();if(l+=r(a.substring(u,b[0].offset)),u=b[0].offset,b===e){for(f.reverse().forEach(s);o(b.splice(0,1)[0]),(b=c())===e&&b.length&&b[0].offset===u;);f.reverse().forEach(i)}else"start"===b[0].event?f.push(b[0].node):f.pop(),o(b.splice(0,1)[0])}return l+r(a.substr(u))}(c,i(f),b)),s.value=l(s.value),e.innerHTML=s.value,e.className=(d=e.className,h=R,v=s.language,w=h?m[h]:v,E=[d.trim()],d.match(/\bhljs\b/)||E.push("hljs"),-1===d.indexOf(w)&&E.push(w),E.join(" ").trim()),e.result={language:s.language,re:s.r},s.second_best&&(e.second_best={language:s.second_best.language,re:s.second_best.r}))}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");g.forEach.call(e,f)}}function p(e){return e=(e||"").toLowerCase(),h[e]||h[m[e]]}var g=[],d=Object.keys,h={},m={},v=/^(no-?highlight|plain|text)$/i,N=/\blang(?:uage)?-([\w-]+)\b/i,w=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,E="</span>",M={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=o,e.highlightAuto=u,e.fixMarkup=l,e.highlightBlock=f,e.configure=function(e){M=c(M,e)},e.initHighlighting=b,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)},e.registerLanguage=function(r,t){var n=h[r]=t(e);n.aliases&&n.aliases.forEach(function(e){m[e]=r})},e.listLanguages=function(){return d(h)},e.getLanguage=p,e.inherit=c,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=function(r,t,n){var a=e.inherit({cN:"comment",b:r,e:t,c:[]},n||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e}),hljs.registerLanguage("javascript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},n={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},a={cN:"subst",b:"\\$\\{",e:"\\}",k:t,c:[]},c={cN:"string",b:"`",e:"`",c:[e.BE,a]};a.c=[e.ASM,e.QSM,c,n,e.RM];var i=a.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:t,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,c,e.CLCM,e.CBCM,n,{b:/[{,]\s*/,r:0,c:[{b:r+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:r,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+r+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:r},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:i}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:r}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:i}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}}),hljs.registerLanguage("css",function(e){var r={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:"[a-zA-Z-][a-zA-Z0-9_-]*",r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,r]}]}}),hljs.registerLanguage("xml",function(e){var r={eW:!0,i:/</,r:0,c:[{cN:"attr",b:"[A-Za-z0-9\\._:-]+",r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("\x3c!--","--\x3e",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[r],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[r],starts:{e:"<\/script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},r]}]}});