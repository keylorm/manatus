/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.flexboxlegacy=function(){return I("boxDirection")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
jQuery(document).ready(function($) {



//	if ((window.location.href.split("/")[4] != 'regular-packages-rates') && (window.location.href.split("/")[5] != 'paquetes-regulares-tarifas')  && (window.location.href.split("/")[3] != 'tortuguero-area') && (window.location.href.split("/")[4] != 'gallery') && (window.location.href.split("/")[5] != 'gallery')&& (window.location.href.split("/")[5] != 'area-de-tortuguero')&& (window.location.href.split("/")[5] != 'contacto') && (window.location.href.split("/")[4] !='contact-us') && (window.location.href.split("/")[4] !='reservation-step1') && (window.location.href.split("/")[5] !='reservaciÃ³n-paso1') && (window.location.href.split("/")[4] !='blog') && (window.location.href.split("/")[4] !='etiquetas') && (window.location.href.split("/")[5] !='etiquetas') && (window.location.href.split("/")[5] !='blog-category') && (window.location.href.split("/")[4] !='blog-category') && (window.location.href.split("/")[5] != 'paquetes-regulares-tarifas') && (window.location.href.split("/")[5] !='regular-packages-rates') && (window.location.href.split("/")[5] !='garden')&& (window.location.href.split("/")[6] !='jardines')&& (window.location.href.split("/")[6] !='piscina')&& (window.location.href.split("/")[5] !='pool')&& (window.location.href.split("/")[5] !='deck')&& (window.location.href.split("/")[6] !='deck')&& (window.location.href.split("/")[5] !='rooms')&& (window.location.href.split("/")[6] !='habitaciones')&& (window.location.href.split("/")[5] !='parque-nacional-tortuguero')&& (window.location.href.split("/")[4] !='tortuguero-national-park')) {
//
//        jQuery('.m-carousel').carousel();
//
//    }

    

    if(jQuery(window).width() <= 690){

        var btn = jQuery('.body-pack-col2 .btn-book-pack');

        jQuery('.body-pack-col1 p').after(btn);

    }



    

    var custom_acordion1 = jQuery("#block-views-paquetes-regulares-block-2 .views-row-1 .views-field-nothing .accordion");

    jQuery("#block-views-paquetes-regulares-block-2 .views-row-1 .views-field-title h3").after(custom_acordion1);



    jQuery("#block-views-paquetes-regulares-block-2 .views-row-2 .views-field-title h3").addClass('header-accordion-2');

    var acordion_header_2 = jQuery('.header-accordion-2');

    jQuery("#block-views-paquetes-regulares-block-2 .views-row-1 .views-field-title .accordion").after(acordion_header_2);



    jQuery("#block-views-paquetes-regulares-block-2 .views-row-2 .views-field-nothing .accordion").addClass('accordion-2');

    var acordion_2 = jQuery('.accordion-2');

    jQuery(".header-accordion-2").after(acordion_2);



    jQuery("#block-views-paquetes-regulares-block-2 .views-row-3 .views-field-title h3").addClass('header-accordion-3');

    var acordion_header_3 = jQuery('.header-accordion-3');

    jQuery("#block-views-paquetes-regulares-block-2 .views-row-1 .views-field-title .accordion-2").after(acordion_header_3);



    jQuery("#block-views-paquetes-regulares-block-2 .views-row-3 .views-field-nothing .accordion").addClass('accordion-3');

    var acordion_3 = jQuery('.accordion-3');

    jQuery(".header-accordion-3").after(acordion_3);



    var custom_acordion1_es = jQuery("#block-views-paquetes-regulares-block-3 .views-row-1 .views-field-nothing .accordion");

    jQuery("#block-views-paquetes-regulares-block-3 .views-row-1 .views-field-title h3").after(custom_acordion1_es);    



    jQuery("#block-views-paquetes-regulares-block-3 .views-row-2 .views-field-title h3").addClass('header-accordion-2-es');

    var acordion_header_2_es = jQuery('.header-accordion-2-es');

    jQuery("#block-views-paquetes-regulares-block-3 .views-row-1 .views-field-title .accordion").after(acordion_header_2_es);



    jQuery("#block-views-paquetes-regulares-block-3 .views-row-2 .views-field-nothing .accordion").addClass('accordion-2-es');

    var acordion_2_es = jQuery('.accordion-2-es');

    jQuery(".header-accordion-2-es").after(acordion_2_es);



    jQuery("#block-views-paquetes-regulares-block-3 .views-row-3 .views-field-title h3").addClass('header-accordion-3-es');

    var acordion_header_3_es = jQuery('.header-accordion-3-es');

    jQuery("#block-views-paquetes-regulares-block-3 .views-row-1 .views-field-title .accordion-2-es").after(acordion_header_3_es);



    jQuery("#block-views-paquetes-regulares-block-3 .views-row-3 .views-field-nothing .accordion").addClass('accordion-3-es');

    var acordion_3_es = jQuery('.accordion-3-es');

    jQuery(".header-accordion-3-es").after(acordion_3_es);



    jQuery( ".accordion" ).accordion();

 

    jQuery('#ui-accordion-1-header-0').text("2 DAYS 1 NIGHT");

    jQuery('#ui-accordion-1-header-1').text("3 days 2 NIGHTS");

    jQuery('#ui-accordion-1-header-2').text("CUSTOM PACKAGE");



    $(".ui-accordion-header").click(function() {

      $("html, body").animate({ scrollTop: 500 }, "slow");

      return false;

    });

	

    if ($("body").hasClass( "node-type-tipos-de-paquetes" )) {

    	var activoNaranja = $("body").find(".orange-package");

    	var activoVino = $("body").find(".wine-package");

    	var activoRojo = $("body").find(".red-package");

    	if (activoNaranja) {

    		$(".p-orange").addClass( "active-arrow" );

    	} else if (activoVino) {

    		$(".p-wine").addClass( "active-arrow" );

    	} else if (activoRojo) {

    		$(".p-red").addClass( "active-arrow" );

    	}

    }

	

	$("#webform-component-fechas #edit-submitted-fechas-check-in").datepicker();

	$("#webform-component-fechas #edit-submitted-fechas-check-out").datepicker();

	$("#webform-component-fechas #edit-submitted-fechas-check-in-esp").datepicker();

	$("#webform-component-fechas #edit-submitted-fechas-check-out-esp").datepicker();

	$("#webform-component-check-in #edit-submitted-check-in").datepicker();

	$("#webform-component-check-out #edit-submitted-check-out").datepicker();
	
	$("#webform-component-fecha-de-entrada #edit-submitted-fecha-de-entrada").datepicker();
	
	$("#webform-component-fecha-de-salida #edit-submitted-fecha-de-salida").datepicker();

    

    $("#webform-component-fechas #edit-submitted-fechas-check-in").attr("placeholder", "Check-In");

    $("#webform-component-fechas #edit-submitted-fechas-check-out").attr("placeholder", "Check-Out");

    $("#webform-component-fechas #edit-submitted-fechas-check-in-esp").attr("placeholder", "Check-In");

    $("#webform-component-fechas #edit-submitted-fechas-check-out-esp").attr("placeholder", "Check-Out");

    $(".node-type-blog.i18n-en #comments #comment-form #edit-name").attr("placeholder", "Your Name");

    $(".node-type-blog.i18n-es #comments #comment-form #edit-name").attr("placeholder", "Su Nombre");

    $(".node-type-blog.i18n-en #comments #comment-form #edit-subject").attr("placeholder", "Your Subject");

    $(".node-type-blog.i18n-es #comments #comment-form #edit-subject").attr("placeholder", "Asunto");

    $(".node-type-blog.i18n-en #comments #comment-form #edit-comment-body textarea").attr("placeholder", "Your Comment");

    $(".node-type-blog.i18n-es #comments #comment-form #edit-comment-body textarea").attr("placeholder", "Su Comentario");

    $(".node-type-blog.i18n-en #comments #edit-submit").val("Comment");

    $(".node-type-blog.i18n-es #comments #edit-submit").val("Comentar");;

   

    $("#edit-submitted-number-of-people").attr("placeholder", "");

    $("#edit-submitted-numero-de-personas").attr("placeholder","");

   /* $(".page-node-30 .title-container h1.title").text("Manatus Experience");

    $(".page-node-49 .title-container h1.title").text("Manatus Experience");

    $(".page-node-52 .title-container h1.title").text("Manatus Experience");

    $(".page-node-55 .title-container h1.title").text("Manatus Experience");

    $(".page-node-58 .title-container h1.title").text("Manatus Experience");

    $(".page-node-61 .title-container h1.title").text("Experiencia Manatus");

    $(".page-node-67 .title-container h1.title").text("Experiencia Manatus");

    $(".page-node-70 .title-container h1.title").text("Experiencia Manatus");

    $(".page-node-73 .title-container h1.title").text("Experiencia Manatus");

	

   $(".node-type-blog #header #header-region h1.title").text("Blog");

    $(".section-etiquetas #header #header-region h1.title").text("Blog");

    $(".section-blog-category #header #header-region h1.title").text("Blog");*/
    $(".page-tours-and-activities .title-container h1.title").text("What to do?");

    $(".page-tours-actividades .title-container h1.title").text("What to do?");

    $("#edit-submitted-numero-de-personas").attr("placeholder","");

    $("#block-views-main-slider-block .views-slideshow-controls-bottom #views_slideshow_controls_text_next_main_slider-block a").text("");

    $("#block-views-main-slider-block .views-slideshow-controls-bottom #views_slideshow_controls_text_previous_main_slider-block a").text("");

    $(".page-gallery #block-system-main .view-gallery-page .views-slideshow-controls-bottom #views_slideshow_controls_text_gallery_page-page #views_slideshow_controls_text_previous_gallery_page-page a").text("");

    $(".page-gallery #block-system-main .view-gallery-page .views-slideshow-controls-bottom #views_slideshow_controls_text_gallery_page-page #views_slideshow_controls_text_next_gallery_page-page a").text("");

    var bloque_related_post = $(".node-type-blog #block-views-dc196aef6a44f7ad51f2c746684916c7");

    $(".node-type-blog #comments").before(bloque_related_post);

    var bloque_related_post_esp = $(".node-type-blog #block-views-23030c3a60c05df90602904e4f49bfba");

    $(".node-type-blog #comments").before(bloque_related_post_esp);
    
    $(".page-node-270 .title-container h1.title").text("Ofertas de Temporada");
    
    $(".page-node-269 .title-container h1.title").text("Ofertas de Temporada");
    
    $(".page-node-268 .title-container h1.title").text("Seasonal Offers");

/* Cambiar titulo en men¨² de sitemap */

$(".page-sitemap.i18n-en .site-map-menus h2").text("Main Menu");

    

});



jQuery(function($){

      $.datepicker.regional['es'] = {

            closeText: 'Cerrar',

            prevText: '&#x3c;Ant',

            nextText: 'Sig&#x3e;',

            currentText: 'Hoy',

            monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',

            'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],

            monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',

            'Jul','Ago','Sep','Oct','Nov','Dic'],

            dayNames: ['Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','S&aacute;bado'],

            dayNamesShort: ['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],

            dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S&aacute;'],

            weekHeader: 'Sm',

            dateFormat: 'dd/mm/yy',

            firstDay: 1,

            isRTL: false,

            showMonthAfterYear: false,

            yearSuffix: ''};

      $.datepicker.setDefaults($.datepicker.regional['es']);

	  $(function () {

		$(".not-front .region-header #block-menu-menu-men-principal-responsivo .menu").tinyNav({

			active: 'active-trail'  

		});

		$(".front .region-header #block-menu-menu-men-principal-responsivo .menu").tinyNav({

			active: 'first'  

		});

		

		$(".not-front #footer #block-menu-menu-men-principal-responsivo--2 .menu").tinyNav({

			active: 'active-trail'  

		});

	  });

	  

	   $(function() {

			$( ".pestanas" ).tabs();

			$( ".acordeon" ).accordion();

			$('.m-carousel').carousel();

		});




});



function mostrar_paquete_2_1(){

    jQuery("#block-views-paquetes-regulares-block .view-content .views-row-1").css("display", "block");

    jQuery("#block-views-paquetes-regulares-block .view-content .views-row-2").css("display", "none");

    jQuery("#block-views-paquetes-regulares-block .view-content .views-row-3").css("display", "none");

    jQuery(".bloque-paquete-2-1 .bottom").css("background-image", "url(sites/all/themes/mnts/img/bg-box-paquete-1-bottom-activo.png)");

    jQuery(".bloque-paquete-3-2 .bottom").css("background-image", "url(sites/all/themes/mnts/img/bg-box-paquete-2-bottom-inactivo.png)");

    jQuery(".bloque-paquete-custom .bottom").css("background-image", "url(sites/all/themes/mnts/img/bg-box-paquete-3-bottom-inactivo.png)");

}



function mostrar_paquete_3_2(){

    jQuery("#block-views-paquetes-regulares-block .view-content .views-row-1").css("display", "none");

    jQuery("#block-views-paquetes-regulares-block .view-content .views-row-2").css("display", "block");

    jQuery("#block-views-paquetes-regulares-block .view-content .views-row-3").css("display", "none");

    jQuery(".bloque-paquete-2-1 .bottom").css("background-image", "url(sites/all/themes/mnts/img/bg-box-paquete-1-bottom-inactivo.png)");

    jQuery(".bloque-paquete-3-2 .bottom").css("background-image", "url(sites/all/themes/mnts/img/bg-box-paquete-2-bottom-activo.png)");

    jQuery(".bloque-paquete-custom .bottom").css("background-image", "url(sites/all/themes/mnts/img/bg-box-paquete-3-bottom-inactivo.png)");

}







function mostrar_paquete_custom(){

    jQuery("#block-views-paquetes-regulares-block .view-content .views-row-1").css("display", "none");

    jQuery("#block-views-paquetes-regulares-block .view-content .views-row-2").css("display", "none");

    jQuery("#block-views-paquetes-regulares-block .view-content .views-row-3").css("display", "block");

    jQuery(".bloque-paquete-2-1 .bottom").css("background-image", "url(sites/all/themes/mnts/img/bg-box-paquete-1-bottom-inactivo.png)");

    jQuery(".bloque-paquete-3-2 .bottom").css("background-image", "url(sites/all/themes/mnts/img/bg-box-paquete-2-bottom-inactivo.png)");

    jQuery(".bloque-paquete-custom .bottom").css("background-image", "url(sites/all/themes/mnts/img/bg-box-paquete-3-bottom-activo.png)");

}



function mostrar_paquete_2_1_esp(){

    jQuery("#block-views-paquetes-regulares-block-1 .view-content .views-row-1").css("display", "block");

    jQuery("#block-views-paquetes-regulares-block-1 .view-content .views-row-2").css("display", "none");

    jQuery("#block-views-paquetes-regulares-block-1 .view-content .views-row-3").css("display", "none");

    jQuery(".bloque-paquete-2-1 .bottom").css("background-image", "url(../sites/all/themes/mnts/img/bg-box-paquete-1-bottom-activo.png)");

    jQuery(".bloque-paquete-3-2 .bottom").css("background-image", "url(../sites/all/themes/mnts/img/bg-box-paquete-2-bottom-inactivo.png)");

    jQuery(".bloque-paquete-custom .bottom").css("background-image", "url(../sites/all/themes/mnts/img/bg-box-paquete-3-bottom-inactivo.png)");

}



function mostrar_paquete_3_2_esp(){

    jQuery("#block-views-paquetes-regulares-block-1 .view-content .views-row-1").css("display", "none");

    jQuery("#block-views-paquetes-regulares-block-1 .view-content .views-row-2").css("display", "block");

    jQuery("#block-views-paquetes-regulares-block-1 .view-content .views-row-3").css("display", "none");

    jQuery(".bloque-paquete-2-1 .bottom").css("background-image", "url(../sites/all/themes/mnts/img/bg-box-paquete-1-bottom-inactivo.png)");

    jQuery(".bloque-paquete-3-2 .bottom").css("background-image", "url(../sites/all/themes/mnts/img/bg-box-paquete-2-bottom-activo.png)");

    jQuery(".bloque-paquete-custom .bottom").css("background-image", "url(../sites/all/themes/mnts/img/bg-box-paquete-3-bottom-inactivo.png)");

}







function mostrar_paquete_custom_esp(){

    jQuery("#block-views-paquetes-regulares-block-1 .view-content .views-row-1").css("display", "none");

    jQuery("#block-views-paquetes-regulares-block-1 .view-content .views-row-2").css("display", "none");

    jQuery("#block-views-paquetes-regulares-block-1 .view-content .views-row-3").css("display", "block");

    jQuery(".bloque-paquete-2-1 .bottom").css("background-image", "url(../sites/all/themes/mnts/img/bg-box-paquete-1-bottom-inactivo.png)");

    jQuery(".bloque-paquete-3-2 .bottom").css("background-image", "url(../sites/all/themes/mnts/img/bg-box-paquete-2-bottom-inactivo.png)");

    jQuery(".bloque-paquete-custom .bottom").css("background-image", "url(../sites/all/themes/mnts/img/bg-box-paquete-3-bottom-activo.png)");

}



;
/*! http://tinynav.viljamis.com v1.1 by @viljamis */
(function(a,i,g){a.fn.tinyNav=function(j){var b=a.extend({active:"selected",header:"",label:""},j);return this.each(function(){g++;var h=a(this),d="tinynav"+g,f=".l_"+d,e=a("<select/>").attr("id",d).addClass("tinynav "+d);if(h.is("ul,ol")){""!==b.header&&e.append(a("<option/>").text(b.header));var c="";h.addClass("l_"+d).find("a").each(function(){c+='<option value="'+a(this).attr("href")+'">';var b;for(b=0;b<a(this).parents("ul, ol").length-1;b++)c+="- ";c+=a(this).text()+"</option>"});e.append(c);
b.header||e.find(":eq("+a(f+" li").index(a(f+" li."+b.active))+")").attr("selected",!0);e.change(function(){i.location.href=a(this).val()});a(f).after(e);b.label&&e.before(a("<label/>").attr("for",d).addClass("tinynav_label "+d+"_label").append(b.label))}})}})(jQuery,this,0);;
var Mobify = window.Mobify = window.Mobify || {};
Mobify.$ = Mobify.$ || window.Zepto || window.jQuery;
Mobify.UI = Mobify.UI ? Mobify.$.extend(Mobify.UI, { classPrefix: 'm-' }) : { classPrefix: 'm-' };

(function($, document) {
    $.support = $.support || {};

    $.extend($.support, {
        'touch': 'ontouchend' in document
    });

})(Mobify.$, document);



/**
    @module Holds common functions relating to UI.
*/
Mobify.UI.Utils = (function($) {
    var exports = {}
        , has = $.support
        , ua = navigator.userAgent;

    /**
        Events (either touch or mouse)
    */
    exports.events = (has.touch)
        ? {down: 'touchstart', move: 'touchmove', up: 'touchend'}
        : {down: 'mousedown', move: 'mousemove', up: 'mouseup'};

    /**
        Returns the position of a mouse or touch event in (x, y)
        @function
        @param {Event} touch or mouse event
        @returns {Object} X and Y coordinates
    */
    exports.getCursorPosition = (has.touch)
        ? function(e) {e = e.originalEvent || e; return {x: e.touches[0].clientX, y: e.touches[0].clientY}}
        : function(e) {return {x: e.clientX, y: e.clientY}};


    /**
        Returns prefix property for current browser.
        @param {String} CSS Property Name
        @return {String} Detected CSS Property Name
    */
    exports.getProperty = function(name) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms', '']
          , testStyle = document.createElement('div').style;
        
        for (var i = 0; i < prefixes.length; ++i) {
            if (testStyle[prefixes[i] + name] !== undefined) {
                return prefixes[i] + name;
            }
        }

        // Not Supported
        return;
    };

    $.extend(has, {
        'transform': !! (exports.getProperty('Transform'))

        // Usage of transform3d on *android* would cause problems for input fields:
        // - https://coderwall.com/p/d5lmba
        // - http://static.trygve-lie.com/bugs/android_input/
      , 'transform3d': !! (window.WebKitCSSMatrix && 'm11' in new WebKitCSSMatrix() && !/android\s+[1-2]/i.test(ua)) 
    });

    // translateX(element, delta)
    // Moves the element by delta (px)
    var transformProperty = exports.getProperty('Transform');
    if (has.transform3d) {
        exports.translateX = function(element, delta) {
             if (typeof delta == 'number') delta = delta + 'px';
             element.style[transformProperty] = 'translate3d(' + delta  + ',0,0)';
        };
    } else if (has.transform) {
        exports.translateX = function(element, delta) {
             if (typeof delta == 'number') delta = delta + 'px';
             element.style[transformProperty] = 'translate(' + delta  + ',0)';
        };
    } else {
        exports.translateX = function(element, delta) {
            if (typeof delta == 'number') delta = delta + 'px';
            element.style.left = delta;
        };
    }

    // setTransitions
    var transitionProperty = exports.getProperty('Transition')
      , durationProperty = exports.getProperty('TransitionDuration');

    exports.setTransitions = function(element, enable) {
        if (enable) {
            element.style[durationProperty] = '';
        } else {
            element.style[durationProperty] = '0s';
        }
    }


    // Request Animation Frame
    // courtesy of @paul_irish
    exports.requestAnimationFrame = (function() {
        var prefixed = (window.requestAnimationFrame       || 
                        window.webkitRequestAnimationFrame || 
                        window.mozRequestAnimationFrame    || 
                        window.oRequestAnimationFrame      || 
                        window.msRequestAnimationFrame     || 
                        function( callback ){
                            window.setTimeout(callback, 1000 / 60);
                        });

        var requestAnimationFrame = function() {
            prefixed.apply(window, arguments);
        };

        return requestAnimationFrame;
    })();

    return exports;

})(Mobify.$);

Mobify.UI.Carousel = (function($, Utils) {
    var defaults = {
            dragRadius: 10
          , moveRadius: 20
          , classPrefix: undefined
          , classNames: {
                outer: 'carousel'
              , inner: 'carousel-inner'
              , item: 'item'
              , center: 'center'
              , touch: 'has-touch'
              , dragging: 'dragging'
              , active: 'active'
              , fluid: 'fluid'
            }
        }
       , has = $.support;

    // Constructor
    var Carousel = function(element, options) {
        this.setOptions(options);
        this.initElements(element);
        this.initOffsets();
        this.initAnimation();
        this.bind();
    };

    // Expose Dfaults
    Carousel.defaults = defaults;
    
    Carousel.prototype.setOptions = function(opts) {
        var options = this.options || $.extend({}, defaults, opts);
        
        /* classNames requires a deep copy */
        options.classNames = $.extend({}, options.classNames, opts.classNames || {});

        /* By default, classPrefix is `undefined`, which means to use the Mobify-wide level prefix */
        options.classPrefix = options.classPrefix || Mobify.UI.classPrefix;

        
        this.options = options;
    };

    Carousel.prototype.initElements = function(element) {
        this._index = 1;  // 1-based index
        
        this.element = element;
        this.$element = $(element);
        this.$inner = this.$element.find('.' + this._getClass('inner'));
        this.$items = this.$inner.children();
        
        this.$start = this.$items.eq(0);
        this.$sec = this.$items.eq(1);
        this.$current = this.$items.eq(this._index - 1);  // convert to 0-based index

        this._length = this.$items.length;
        this._alignment = this.$element.hasClass(this._getClass('center')) ? 0.5 : 0;

        this._isFluid = this.$element.hasClass(this._getClass('fluid'));
    };

    Carousel.prototype.initOffsets = function() {
        this._offsetDrag = 0;
    }

    Carousel.prototype.initAnimation = function() {
        this.animating = false;
        this.dragging = false;
        this._needsUpdate = false;
        this._enableAnimation();
    };


    Carousel.prototype._getClass = function(id) {
        return this.options.classPrefix + this.options.classNames[id];
    };


    Carousel.prototype._enableAnimation = function() {
        if (this.animating) {
            return;
        }

        Utils.setTransitions(this.$inner[0], true);
        this.$inner.removeClass(this._getClass('dragging'));
        this.animating = true;
    }

    Carousel.prototype._disableAnimation = function() {
        if (!this.animating) {
            return;
        }
        
        Utils.setTransitions(this.$inner[0], false);
        this.$inner.addClass(this._getClass('dragging'));
        this.animating = false;
    }

    Carousel.prototype.update = function() {
        /* We throttle calls to the real `_update` for efficiency */
        if (this._needsUpdate) {
            return;
        }

        var self = this;
        this._needsUpdate = true;
        Utils.requestAnimationFrame(function() {
            self._update();
        });
    }

    Carousel.prototype._update = function() {
        if (!this._needsUpdate) {
            return;
        }

        var $current = this.$current
          , $start = this.$start
          , currentOffset = $current.prop('offsetLeft') + $current.prop('clientWidth') * this._alignment
          , startOffset = $start.prop('offsetLeft') + $start.prop('clientWidth') * this._alignment
          , x = Math.round(-(currentOffset - startOffset) + this._offsetDrag);

        Utils.translateX(this.$inner[0], x);

        this._needsUpdate = false;
    }

    Carousel.prototype.bind = function() {
        var abs = Math.abs
            , dragging = false
            , canceled = false
            , dragRadius = this.options.dragRadius
            , xy
            , dx
            , dy
            , dragThresholdMet
            , self = this
            , $element = this.$element
            , $inner = this.$inner
            , opts = this.options
            , lockLeft = false
            , lockRight = false
            , windowWidth = $(window).width();

        function start(e) {
            if (!has.touch) e.preventDefault();

            dragging = true;
            canceled = false;

            xy = Utils.getCursorPosition(e);
            dx = 0;
            dy = 0;
            dragThresholdMet = false;

            // Disable smooth transitions
            self._disableAnimation();

            lockLeft = self._index == 1;
            lockRight = self._index == self._length;
        }

        function drag(e) {
            if (!dragging || canceled) return;

            var newXY = Utils.getCursorPosition(e)
              , dragLimit = self.$element.width();
            dx = xy.x - newXY.x;
            dy = xy.y - newXY.y;

            if (dragThresholdMet || abs(dx) > abs(dy) && (abs(dx) > dragRadius)) {
                dragThresholdMet = true;
                e.preventDefault();
                
                if (lockLeft && (dx < 0)) {
                    dx = dx * (-dragLimit)/(dx - dragLimit);
                } else if (lockRight && (dx > 0)) {
                    dx = dx * (dragLimit)/(dx + dragLimit);
                }
                self._offsetDrag = -dx;
                self.update();
            } else if ((abs(dy) > abs(dx)) && (abs(dy) > dragRadius)) {
                canceled = true;
            }
        }

        function end(e) {
            if (!dragging) {
                return;
            }

            dragging = false;
            
            self._enableAnimation();

            if (!canceled && abs(dx) > opts.moveRadius) {
                // Move to the next slide if necessary
                if (dx > 0) {
                    self.next();
                } else {
                    self.prev();
                }
            } else {
                // Reset back to regular position
                self._offsetDrag = 0;
                self.update();
            }

        }

        function click(e) {
            if (dragThresholdMet) e.preventDefault();
        }

        $inner
            .on(Utils.events.down + '.carousel', start)
            .on(Utils.events.move + '.carousel', drag)
            .on(Utils.events.up + '.carousel', end)
            .on('click.carousel', click)
            .on('mouseout.carousel', end);

        $element.on('click', '[data-slide]', function(e){
            e.preventDefault();
            var action = $(this).attr('data-slide')
              , index = parseInt(action, 10);

            if (isNaN(index)) {
                self[action]();
            } else {
                self.move(index);
            }
        });

        $element.on('afterSlide', function(e, previousSlide, nextSlide) {
            self.$items.eq(previousSlide - 1).removeClass(self._getClass('active'));
            self.$items.eq(nextSlide - 1).addClass(self._getClass('active'));

            self.$element.find('[data-slide=\'' + previousSlide + '\']').removeClass(self._getClass('active'));
            self.$element.find('[data-slide=\'' + nextSlide + '\']').addClass(self._getClass('active'));
        });

        $(window).on('resize orientationchange', function(e) {
            // Disable animation for now to avoid seeing 
            // the carousel sliding, as it updates its position.
            // Animation will be enabled automatically when you're swiping.
            // Don't update Carousel on window height change
            if(windowWidth == $(window).width())
                return;

            self._disableAnimation();
            windowWidth = $(window).width();
            self.update();
        });

        $element.trigger('beforeSlide', [1, 1]);
        $element.trigger('afterSlide', [1, 1]);

        self.update();

    };

    Carousel.prototype.unbind = function() {
        this.$inner.off();
    }

    Carousel.prototype.destroy = function() {
        this.unbind();
        this.$element.trigger('destroy');
        this.$element.remove();
        
        // Cleanup
        this.$element = null;
        this.$inner = null;
        this.$start = null;
        this.$current = null;
    }

    Carousel.prototype.move = function(newIndex, opts) {
        var $element = this.$element
            , $inner = this.$inner
            , $items = this.$items
            , $start = this.$start
            , $current = this.$current
            , length = this._length
            , index = this._index;
                
        opts = opts || {};

        // Bound Values between [1, length];
        if (newIndex < 1) {
            newIndex = 1;
        } else if (newIndex > this._length) {
            newIndex = length;
        }
        
        // Bail out early if no move is necessary.
        if (newIndex == this._index) {
            //return; // Return Type?
        }

        // Making sure that animation is enabled before moving
        this._enableAnimation();

        // Trigger beforeSlide event
        $element.trigger('beforeSlide', [index, newIndex]);


        // Index must be decremented to convert between 1- and 0-based indexing.
        this.$current = $current = $items.eq(newIndex - 1);

        this._offsetDrag = 0;
        this._index = newIndex;
        this.update();
        // Trigger afterSlide event
        $element.trigger('afterSlide', [index, newIndex]);
    };

    Carousel.prototype.next = function() {
        this.move(this._index + 1);
    };
    
    Carousel.prototype.prev = function() {
        this.move(this._index - 1);
    };

    return Carousel;

})(Mobify.$, Mobify.UI.Utils);



(function($) {
    /**
        jQuery interface to set up a carousel


        @param {String} [action] Action to perform. When no action is passed, the carousel is simply initialized.
        @param {Object} [options] Options passed to the action.
    */
    $.fn.carousel = function (action, options) {
        var initOptions = $.extend({}, $.fn.carousel.defaults);

        // Handle different calling conventions
        if (typeof action == 'object') {
            initOptions = $(initOptions, action);
            options = null;
            action = null;
        }

        this.each(function () {
            var $this = $(this)
              , carousel = this._carousel;

            
            if (!carousel) {
                carousel = new Mobify.UI.Carousel(this, initOptions);
            }

            if (action) {
                carousel[action](options);

                if (action === 'destroy') {
                    carousel = null;
                }
            }
            
            this._carousel = carousel;
        })

        return this;
    };

    $.fn.carousel.defaults = {};

})(Mobify.$);
;
