/*!
	Colorbox v1.5.9 - 2014-04-25
	jQuery lightbox and modal window plugin
	(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(z+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){z=0,e&&e!==!1?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),z=W.index(_.el),-1===z&&(W=W.add(_.el),z=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data("colorbox"),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),L=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(L),D=T.height()+k.height()+b.outerHeight(!0)-b.height(),j=C.width()+H.width()+b.outerWidth(!0)-b.width(),A=L.outerHeight(!0),N=L.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=(l!==!1?Math.min(h,a(l,"x")):h)-N-j,_.h=(f!==!1?Math.min(s,a(f,"y")):s)-A-D,L.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(I).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}v.css({opacity:parseFloat(_.get("opacity"))||"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){!x&&e.body&&(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),S=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(I=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),F=n("button","Slideshow"),S),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(F),t(e.body).append(v,x.append(y,M)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-A-D:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-N-j:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-N-j,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-A-D,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){S.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=new Image,t(U).addClass(Z+"Photo").bind("error",function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;t.each(["alt","longdesc","aria-describedby"],function(e,i){var n=t(_.el).attr(i)||t(_.el).attr("data-"+i);n&&U.setAttribute(i,n)}),_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[z+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,L,M,S,I,R,F,K,P,B,O,_,D,j,A,N,z,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[z+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){F.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),F.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,F.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),F.show())}}();t.colorbox||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;if(e=e||{},t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;return o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-j+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-D+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-N-j-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-N-j,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-A-D-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-A-D,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+N+j,height:_.h+A+D,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,y[0].style.width=_.w+N+j+"px",y[0].style.height=_.h+A+D+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),i&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-N-j),t.innerWidth&&(_.w=a(t.innerWidth,"x")),L.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-A-D),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=L.scrollTop(),L.css({height:"auto"}),_.h=L.height()),L.css({height:_.h}),e&&L.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||L.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||L.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");L.remove(),L=n(se,"LoadedContent").append(i),L.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),S.hide(),u(ne),_.get("onComplete")},I.html(_.get("title")).show(),L.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",z+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>z?"show":"hide"]().html(_.get("next")),P[_.get("loop")||z?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=e.createElement("iframe"),"frameBorder"in n&&(n.frameBorder=0),"allowTransparency"in n&&(n.allowTransparency="true"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0}).one("load",o).appendTo(L),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[z+1])&&(z=h(1),f(W[z]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||z)&&(z=h(-1),f(W[z]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),L.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t.colorbox.close(),x.stop().remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }
    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        p[e[1]] = e[2];
      }
      return p;
    };
    $('.colorbox-load', context)
      .once('init-colorbox-load', function () {
        var params = $.urlParams($(this).attr('href'));
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

})(jQuery);
;
/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(a){a.flexslider=function(b,c){var d=a(b);d.vars=a.extend({},a.flexslider.defaults,c);var j,e=d.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart"in window||f||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,h="click touchend MSPointerUp",i="",k="vertical"===d.vars.direction,l=d.vars.reverse,m=d.vars.itemWidth>0,n="fade"===d.vars.animation,o=""!==d.vars.asNavFor,p={},q=!0;a.data(b,"flexslider",d),p={init:function(){d.animating=!1,d.currentSlide=parseInt(d.vars.startAt?d.vars.startAt:0,10),isNaN(d.currentSlide)&&(d.currentSlide=0),d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" ")),d.slides=a(d.vars.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=a(d.vars.sync).length>0,"slide"===d.vars.animation&&(d.vars.animation="swing"),d.prop=k?"top":"marginLeft",d.args={},d.manualPause=!1,d.stopped=!1,d.started=!1,d.startTimeout=null,d.transitions=!d.vars.video&&!n&&d.vars.useCSS&&function(){var a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return d.pfx=b[c].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",!0;return!1}(),d.ensureAnimationEnd="",""!==d.vars.controlsContainer&&(d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)),""!==d.vars.manualControls&&(d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)),d.vars.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),d.doMath(),d.setup("init"),d.vars.controlNav&&p.controlNav.setup(),d.vars.directionNav&&p.directionNav.setup(),d.vars.keyboard&&(1===a(d.containerSelector).length||d.vars.multipleKeyboard)&&a(document).bind("keyup",function(a){var b=a.keyCode;if(!d.animating&&(39===b||37===b)){var c=39===b?d.getTarget("next"):37===b?d.getTarget("prev"):!1;d.flexAnimate(c,d.vars.pauseOnAction)}}),d.vars.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var f=0>b?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(f,d.vars.pauseOnAction)}),d.vars.pausePlay&&p.pausePlay.setup(),d.vars.slideshow&&d.vars.pauseInvisible&&p.pauseInvisible.init(),d.vars.slideshow&&(d.vars.pauseOnHover&&d.hover(function(){d.manualPlay||d.manualPause||d.pause()},function(){d.manualPause||d.manualPlay||d.stopped||d.play()}),d.vars.pauseInvisible&&p.pauseInvisible.isHidden()||(d.vars.initDelay>0?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play())),o&&p.asNav.setup(),g&&d.vars.touch&&p.touch(),(!n||n&&d.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",p.resize),d.find("img").attr("draggable","false"),setTimeout(function(){d.vars.start(d)},200)},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(e+"active-slide").eq(d.currentItem).addClass(e+"active-slide"),f?(b._slider=d,d.slides.each(function(){var b=this;b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",function(a){a.preventDefault(),a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)},!1),b.addEventListener("MSGestureTap",function(b){b.preventDefault();var c=a(this),e=c.index();a(d.vars.asNavFor).data("flexslider").animating||c.hasClass("active")||(d.direction=d.currentItem<e?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction,!1,!0,!0))})})):d.slides.on(h,function(b){b.preventDefault();var c=a(this),f=c.index(),g=c.offset().left-a(d).scrollLeft();0>=g&&c.hasClass(e+"active-slide")?d.flexAnimate(d.getTarget("prev"),!0):a(d.vars.asNavFor).data("flexslider").animating||c.hasClass(e+"active-slide")||(d.direction=d.currentItem<f?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){d.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var f,g,b="thumbnails"===d.vars.controlNav?"control-thumbs":"control-paging",c=1;if(d.controlNavScaffold=a('<ol class="'+e+"control-nav "+e+b+'"></ol>'),d.pagingCount>1)for(var j=0;j<d.pagingCount;j++){if(g=d.slides.eq(j),f="thumbnails"===d.vars.controlNav?'<img src="'+g.attr("data-thumb")+'"/>':"<a>"+c+"</a>","thumbnails"===d.vars.controlNav&&!0===d.vars.thumbCaptions){var k=g.attr("data-thumbcaption");""!=k&&void 0!=k&&(f+='<span class="'+e+'caption">'+k+"</span>")}d.controlNavScaffold.append("<li>"+f+"</li>"),c++}d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),p.controlNav.set(),p.controlNav.active(),d.controlNavScaffold.delegate("a, img",h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},setupManual:function(){d.controlNav=d.manualControls,p.controlNav.active(),d.controlNav.bind(h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},set:function(){var b="thumbnails"===d.vars.controlNav?"img":"a";d.controlNav=a("."+e+"control-nav li "+b,d.controlsContainer?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(e+"active").eq(d.animatingTo).addClass(e+"active")},update:function(b,c){d.pagingCount>1&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),p.controlNav.set(),d.pagingCount>1&&d.pagingCount!==d.controlNav.length?d.update(c,b):p.controlNav.active()}},directionNav:{setup:function(){var b=a('<ul class="'+e+'direction-nav"><li><a class="'+e+'prev" href="#">'+d.vars.prevText+'</a></li><li><a class="'+e+'next" href="#">'+d.vars.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+e+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+e+"direction-nav li a",d)),p.directionNav.update(),d.directionNav.bind(h,function(b){b.preventDefault();var c;(""===i||i===b.type)&&(c=a(this).hasClass(e+"next")?d.getTarget("next"):d.getTarget("prev"),d.flexAnimate(c,d.vars.pauseOnAction)),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(){var a=e+"disabled";1===d.pagingCount?d.directionNav.addClass(a).attr("tabindex","-1"):d.vars.animationLoop?d.directionNav.removeClass(a).removeAttr("tabindex"):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+e+"prev").addClass(a).attr("tabindex","-1"):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+e+"next").addClass(a).attr("tabindex","-1"):d.directionNav.removeClass(a).removeAttr("tabindex")}},pausePlay:{setup:function(){var b=a('<div class="'+e+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+e+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+e+"pauseplay a",d)),p.pausePlay.update(d.vars.slideshow?e+"pause":e+"play"),d.pausePlay.bind(h,function(b){b.preventDefault(),(""===i||i===b.type)&&(a(this).hasClass(e+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(a){"play"===a?d.pausePlay.removeClass(e+"pause").addClass(e+"play").html(d.vars.playText):d.pausePlay.removeClass(e+"play").addClass(e+"pause").html(d.vars.pauseText)}},touch:function(){function r(f){d.animating?f.preventDefault():(window.navigator.msPointerEnabled||1===f.touches.length)&&(d.pause(),g=k?d.h:d.w,i=Number(new Date),o=f.touches[0].pageX,p=f.touches[0].pageY,e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g,a=k?p:o,c=k?o:p,b.addEventListener("touchmove",s,!1),b.addEventListener("touchend",t,!1))}function s(b){o=b.touches[0].pageX,p=b.touches[0].pageY,h=k?a-p:a-o,j=k?Math.abs(h)<Math.abs(o-c):Math.abs(h)<Math.abs(p-c);var f=500;(!j||Number(new Date)-i>f)&&(b.preventDefault(),!n&&d.transitions&&(d.vars.animationLoop||(h/=0===d.currentSlide&&0>h||d.currentSlide===d.last&&h>0?Math.abs(h)/g+2:1),d.setProps(e+h,"setTouch")))}function t(){if(b.removeEventListener("touchmove",s,!1),d.animatingTo===d.currentSlide&&!j&&null!==h){var k=l?-h:h,m=k>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(m)&&(Number(new Date)-i<550&&Math.abs(k)>50||Math.abs(k)>g/2)?d.flexAnimate(m,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}b.removeEventListener("touchend",t,!1),a=null,c=null,h=null,e=null}function u(a){a.stopPropagation(),d.animating?a.preventDefault():(d.pause(),b._gesture.addPointer(a.pointerId),q=0,g=k?d.h:d.w,i=Number(new Date),e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g)}function v(a){a.stopPropagation();var c=a.target._slider;if(c){var d=-a.translationX,f=-a.translationY;return q+=k?f:d,h=q,j=k?Math.abs(q)<Math.abs(-d):Math.abs(q)<Math.abs(-f),a.detail===a.MSGESTURE_FLAG_INERTIA?(setImmediate(function(){b._gesture.stop()}),void 0):((!j||Number(new Date)-i>500)&&(a.preventDefault(),!n&&c.transitions&&(c.vars.animationLoop||(h=q/(0===c.currentSlide&&0>q||c.currentSlide===c.last&&q>0?Math.abs(q)/g+2:1)),c.setProps(e+h,"setTouch"))),void 0)}}function w(b){b.stopPropagation();var d=b.target._slider;if(d){if(d.animatingTo===d.currentSlide&&!j&&null!==h){var f=l?-h:h,k=f>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(k)&&(Number(new Date)-i<550&&Math.abs(f)>50||Math.abs(f)>g/2)?d.flexAnimate(k,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}a=null,c=null,h=null,e=null,q=0}}var a,c,e,g,h,i,j=!1,o=0,p=0,q=0;f?(b.style.msTouchAction="none",b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",u,!1),b._slider=d,b.addEventListener("MSGestureChange",v,!1),b.addEventListener("MSGestureEnd",w,!1)):b.addEventListener("touchstart",r,!1)},resize:function(){!d.animating&&d.is(":visible")&&(m||d.doMath(),n?p.smoothHeight():m?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):k?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(d.vars.smoothHeight&&p.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")))},smoothHeight:function(a){if(!k||n){var b=n?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height())}},sync:function(b){var c=a(d.vars.sync).data("flexslider"),e=d.animatingTo;switch(b){case"animate":c.flexAnimate(e,d.vars.pauseOnAction,!1,!0);break;case"play":c.playing||c.asNav||c.play();break;case"pause":c.pause()}},uniqueID:function(b){return b.find("[id]").each(function(){var b=a(this);b.attr("id",b.attr("id")+"_clone")}),b},pauseInvisible:{visProp:null,init:function(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var b=0;b<a.length;b++)a[b]+"Hidden"in document&&(p.pauseInvisible.visProp=a[b]+"Hidden");if(p.pauseInvisible.visProp){var c=p.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(c,function(){p.pauseInvisible.isHidden()?d.startTimeout?clearTimeout(d.startTimeout):d.pause():d.started?d.play():d.vars.initDelay>0?setTimeout(d.play,d.vars.initDelay):d.play()})}},isHidden:function(){return document[p.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(j),j=setTimeout(function(){i=""},3e3)}},d.flexAnimate=function(b,c,f,h,i){if(d.vars.animationLoop||b===d.currentSlide||(d.direction=b>d.currentSlide?"next":"prev"),o&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,i)||f)&&d.is(":visible")){if(o&&h){var j=a(d.vars.asNavFor).data("flexslider");if(d.atEnd=0===b||b===d.count-1,j.flexAnimate(b,!0,!1,!0,i),d.direction=d.currentItem<b?"next":"prev",j.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b)return d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),b=Math.floor(b/d.visible)}if(d.animating=!0,d.animatingTo=b,c&&d.pause(),d.vars.before(d),d.syncExists&&!i&&p.sync("animate"),d.vars.controlNav&&p.controlNav.active(),m||d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),d.atEnd=0===b||b===d.last,d.vars.directionNav&&p.directionNav.update(),b===d.last&&(d.vars.end(d),d.vars.animationLoop||d.pause()),n)g?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.wrapup(q)):(d.slides.eq(d.currentSlide).css({zIndex:1}).animate({opacity:0},d.vars.animationSpeed,d.vars.easing),d.slides.eq(b).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing,d.wrapup));else{var r,s,t,q=k?d.slides.filter(":first").height():d.computedW;m?(r=d.vars.itemMargin,t=(d.itemW+r)*d.move*d.animatingTo,s=t>d.limit&&1!==d.visible?d.limit:t):s=0===d.currentSlide&&b===d.count-1&&d.vars.animationLoop&&"next"!==d.direction?l?(d.count+d.cloneOffset)*q:0:d.currentSlide===d.last&&0===b&&d.vars.animationLoop&&"prev"!==d.direction?l?0:(d.count+1)*q:l?(d.count-1-b+d.cloneOffset)*q:(b+d.cloneOffset)*q,d.setProps(s,"",d.vars.animationSpeed),d.transitions?(d.vars.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd),d.wrapup(q)}),clearTimeout(d.ensureAnimationEnd),d.ensureAnimationEnd=setTimeout(function(){d.wrapup(q)},d.vars.animationSpeed+100)):d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(q)})}d.vars.smoothHeight&&p.smoothHeight(d.vars.animationSpeed)}},d.wrapup=function(a){n||m||(0===d.currentSlide&&d.animatingTo===d.last&&d.vars.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&d.vars.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,d.vars.after(d)},d.animateSlides=function(){!d.animating&&q&&d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.animatedSlides=null,d.playing=!1,d.vars.pausePlay&&p.pausePlay.update("play"),d.syncExists&&p.sync("pause")},d.play=function(){d.playing&&clearInterval(d.animatedSlides),d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed),d.started=d.playing=!0,d.vars.pausePlay&&p.pausePlay.update("pause"),d.syncExists&&p.sync("play")},d.stop=function(){d.pause(),d.stopped=!0},d.canAdvance=function(a,b){var c=o?d.pagingCount-1:d.last;return b?!0:o&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:o&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||o?d.vars.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1},d.setProps=function(a,b,c){var e=function(){var c=a?a:(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo,e=function(){if(m)return"setTouch"===b?a:l&&d.animatingTo===d.last?0:l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:c;switch(b){case"setTotal":return l?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return l?a:a;case"jumpEnd":return l?a:d.count*a;case"jumpStart":return l?d.count*a:a;default:return a}}();return-1*e+"px"}();d.transitions&&(e=k?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",c=void 0!==c?c/1e3+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c),d.container.css("transition-duration",c)),d.args[d.prop]=e,(d.transitions||void 0===c)&&d.container.css(d.args),d.container.css("transform",e)},d.setup=function(b){if(n)d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(g?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+d.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing)),d.vars.smoothHeight&&p.smoothHeight();else{var c,f;"init"===b&&(d.viewport=a('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,l&&(f=a.makeArray(d.slides).reverse(),d.slides=a(f),d.container.empty().append(d.slides))),d.vars.animationLoop&&!m&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(d.container),p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(d.container)),d.newSlides=a(d.vars.selector,d),c=l?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,k&&!m?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init")},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),d.vars.smoothHeight&&p.smoothHeight()},"init"===b?100:0))}m||d.slides.removeClass(e+"active-slide").eq(d.currentSlide).addClass(e+"active-slide"),d.vars.init(d)},d.doMath=function(){var a=d.slides.first(),b=d.vars.itemMargin,c=d.vars.minItems,e=d.vars.maxItems;d.w=void 0===d.viewport?d.width():d.viewport.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),m?(d.itemT=d.vars.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=e?e*d.itemT-b:d.w,d.itemW=d.minW>d.w?(d.w-b*(c-1))/c:d.maxW<d.w?(d.w-b*(e-1))/e:d.vars.itemWidth>d.w?d.w:d.vars.itemWidth,d.visible=Math.floor(d.w/d.itemW),d.move=d.vars.move>0&&d.vars.move<d.visible?d.vars.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:d.vars.itemWidth>d.w?d.itemW*(d.count-1)+b*(d.count-1):(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding},d.update=function(a,b){d.doMath(),m||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),d.vars.controlNav&&!d.manualControls&&("add"===b&&!m||d.pagingCount>d.controlNav.length?p.controlNav.update("add"):("remove"===b&&!m||d.pagingCount<d.controlNav.length)&&(m&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),p.controlNav.update("remove",d.last))),d.vars.directionNav&&p.directionNav.update()},d.addSlide=function(b,c){var e=a(b);d.count+=1,d.last=d.count-1,k&&l?void 0!==c?d.slides.eq(d.count-c).after(e):d.container.prepend(e):void 0!==c?d.slides.eq(c).before(e):d.container.append(e),d.update(c,"add"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.added(d)},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():k&&l?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.removed(d)},p.init()},a(window).blur(function(){focused=!1}).focus(function(){focused=!0}),a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b)return this.each(function(){var c=a(this),d=b.selector?b.selector:".slides > li",e=c.find(d);1===e.length&&b.allowOneSlide===!0||0===e.length?(e.fadeIn(400),b.start&&b.start(c)):void 0===c.data("flexslider")&&new a.flexslider(this,b)});var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"stop":c.stop();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0)}}}(jQuery);;
/**
 *
 * Date picker
 * Author: Stefan Petre www.eyecon.ro
 * 
 * Dual licensed under the MIT and GPL licenses
 * 
 */
(function ($) {

	$(document).ready(function(){

		var DatePicker = function () {
			/*funcionalidad personalizada para localizar las fechas dependiendo del idioma del formulario*/
			var lang = $('form.reservation-form').attr('data-lang');
			var ingreso = 'Check in';
			var disponibles = 'Available';
			var no_disponibles = 'Unavailable';
			var seleccionados = 'Selected';
			var trans_locale = {
						days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
						daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
						daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
						months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
						monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
						weekMin: 'wk'
					};

			if(lang == 'es'){
				ingreso = 'Ingreso';
				trans_locale = {
						days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"],
						daysShort: ["dom", "lun", "mar", "mie", "jue", "vie", "sáb", "dom"],
						daysMin: ["do", "lu", "ma", "mi", "ju", "vie", "sá", "do"],
						months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "setiembre", "octubre", "noviembre", "diciembre"],
						monthsShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "set", "oct", "nov", "dic"],
						weekMin: 'sem'
					};
				disponibles = 'Disponibles';
				no_disponibles = 'No Disponibles';
				seleccionados = 'Seleccionados';
			}

			var	ids = {},
				views = {
					years: 'datepickerViewYears',
					moths: 'datepickerViewMonths',
					days: 'datepickerViewDays'
				},
				tpl = {
					wrapper: '<div class="datepicker"><div class="datepickerBorderT" /><div class="datepickerBorderB" /><div class="datepickerBorderL" /><div class="datepickerBorderR" /><div class="datepickerBorderTL" /><div class="datepickerBorderTR" /><div class="datepickerBorderBL" /><div class="datepickerBorderBR" /><div class="datepickerContainer"><table cellspacing="0" cellpadding="0"><tbody><tr></tr></tbody></table></div></div>',
					head: [
						'<td>',
						'<table cellspacing="0" cellpadding="0">',
							'<thead>',
								'<tr class="encabezado-calendario">',
									'<th class="datepickerGoPrev"><a href="#"><span></span></a></th>',
									'<th colspan="5" class="datepickerMonth"><a href="#"><span></span></a></th>',
									'<th class="datepickerGoNext"><a href="#"><span></span></a></th>',
								'</tr>',
								'<tr class="checkin-row">',
									'<th colspan="7">',
										'' + ingreso + ': <span class="checkin"></span>',
									'</th>',
								'</tr>',
								'<tr class="datepickerDoW">',
									'<th><span><%=day1%></span></th>',
									'<th><span><%=day2%></span></th>',
									'<th><span><%=day3%></span></th>',
									'<th><span><%=day4%></span></th>',
									'<th><span><%=day5%></span></th>',
									'<th><span><%=day6%></span></th>',
									'<th><span><%=day7%></span></th>',
								'</tr>',
							'</thead>',
						'</table></td>'
					],
					space : '<td class="datepickerSpace"><div></div></td>',
					days: [
						'<tbody class="datepickerDays">',
							'<tr>',
								'<td class="<%=weeks[0].days[0].classname%>"><a href="#"><span><%=weeks[0].days[0].text%></span></a></td>',
								'<td class="<%=weeks[0].days[1].classname%>"><a href="#"><span><%=weeks[0].days[1].text%></span></a></td>',
								'<td class="<%=weeks[0].days[2].classname%>"><a href="#"><span><%=weeks[0].days[2].text%></span></a></td>',
								'<td class="<%=weeks[0].days[3].classname%>"><a href="#"><span><%=weeks[0].days[3].text%></span></a></td>',
								'<td class="<%=weeks[0].days[4].classname%>"><a href="#"><span><%=weeks[0].days[4].text%></span></a></td>',
								'<td class="<%=weeks[0].days[5].classname%>"><a href="#"><span><%=weeks[0].days[5].text%></span></a></td>',
								'<td class="<%=weeks[0].days[6].classname%>"><a href="#"><span><%=weeks[0].days[6].text%></span></a></td>',
							'</tr>',
							'<tr>',
								'<td class="<%=weeks[1].days[0].classname%>"><a href="#"><span><%=weeks[1].days[0].text%></span></a></td>',
								'<td class="<%=weeks[1].days[1].classname%>"><a href="#"><span><%=weeks[1].days[1].text%></span></a></td>',
								'<td class="<%=weeks[1].days[2].classname%>"><a href="#"><span><%=weeks[1].days[2].text%></span></a></td>',
								'<td class="<%=weeks[1].days[3].classname%>"><a href="#"><span><%=weeks[1].days[3].text%></span></a></td>',
								'<td class="<%=weeks[1].days[4].classname%>"><a href="#"><span><%=weeks[1].days[4].text%></span></a></td>',
								'<td class="<%=weeks[1].days[5].classname%>"><a href="#"><span><%=weeks[1].days[5].text%></span></a></td>',
								'<td class="<%=weeks[1].days[6].classname%>"><a href="#"><span><%=weeks[1].days[6].text%></span></a></td>',
							'</tr>',
							'<tr>',
								'<td class="<%=weeks[2].days[0].classname%>"><a href="#"><span><%=weeks[2].days[0].text%></span></a></td>',
								'<td class="<%=weeks[2].days[1].classname%>"><a href="#"><span><%=weeks[2].days[1].text%></span></a></td>',
								'<td class="<%=weeks[2].days[2].classname%>"><a href="#"><span><%=weeks[2].days[2].text%></span></a></td>',
								'<td class="<%=weeks[2].days[3].classname%>"><a href="#"><span><%=weeks[2].days[3].text%></span></a></td>',
								'<td class="<%=weeks[2].days[4].classname%>"><a href="#"><span><%=weeks[2].days[4].text%></span></a></td>',
								'<td class="<%=weeks[2].days[5].classname%>"><a href="#"><span><%=weeks[2].days[5].text%></span></a></td>',
								'<td class="<%=weeks[2].days[6].classname%>"><a href="#"><span><%=weeks[2].days[6].text%></span></a></td>',
							'</tr>',
							'<tr>',
								'<td class="<%=weeks[3].days[0].classname%>"><a href="#"><span><%=weeks[3].days[0].text%></span></a></td>',
								'<td class="<%=weeks[3].days[1].classname%>"><a href="#"><span><%=weeks[3].days[1].text%></span></a></td>',
								'<td class="<%=weeks[3].days[2].classname%>"><a href="#"><span><%=weeks[3].days[2].text%></span></a></td>',
								'<td class="<%=weeks[3].days[3].classname%>"><a href="#"><span><%=weeks[3].days[3].text%></span></a></td>',
								'<td class="<%=weeks[3].days[4].classname%>"><a href="#"><span><%=weeks[3].days[4].text%></span></a></td>',
								'<td class="<%=weeks[3].days[5].classname%>"><a href="#"><span><%=weeks[3].days[5].text%></span></a></td>',
								'<td class="<%=weeks[3].days[6].classname%>"><a href="#"><span><%=weeks[3].days[6].text%></span></a></td>',
							'</tr>',
							'<tr>',
								'<td class="<%=weeks[4].days[0].classname%>"><a href="#"><span><%=weeks[4].days[0].text%></span></a></td>',
								'<td class="<%=weeks[4].days[1].classname%>"><a href="#"><span><%=weeks[4].days[1].text%></span></a></td>',
								'<td class="<%=weeks[4].days[2].classname%>"><a href="#"><span><%=weeks[4].days[2].text%></span></a></td>',
								'<td class="<%=weeks[4].days[3].classname%>"><a href="#"><span><%=weeks[4].days[3].text%></span></a></td>',
								'<td class="<%=weeks[4].days[4].classname%>"><a href="#"><span><%=weeks[4].days[4].text%></span></a></td>',
								'<td class="<%=weeks[4].days[5].classname%>"><a href="#"><span><%=weeks[4].days[5].text%></span></a></td>',
								'<td class="<%=weeks[4].days[6].classname%>"><a href="#"><span><%=weeks[4].days[6].text%></span></a></td>',
							'</tr>',
							'<tr>',
								'<td class="<%=weeks[5].days[0].classname%>"><a href="#"><span><%=weeks[5].days[0].text%></span></a></td>',
								'<td class="<%=weeks[5].days[1].classname%>"><a href="#"><span><%=weeks[5].days[1].text%></span></a></td>',
								'<td class="<%=weeks[5].days[2].classname%>"><a href="#"><span><%=weeks[5].days[2].text%></span></a></td>',
								'<td class="<%=weeks[5].days[3].classname%>"><a href="#"><span><%=weeks[5].days[3].text%></span></a></td>',
								'<td class="<%=weeks[5].days[4].classname%>"><a href="#"><span><%=weeks[5].days[4].text%></span></a></td>',
								'<td class="<%=weeks[5].days[5].classname%>"><a href="#"><span><%=weeks[5].days[5].text%></span></a></td>',
								'<td class="<%=weeks[5].days[6].classname%>"><a href="#"><span><%=weeks[5].days[6].text%></span></a></td>',
							'</tr>',
							'<tr class="ayuda">',
								'<td colspan="7"><span class="disponibles"></span> ' + disponibles + ' <span class="no-disponibles"></span> ' + no_disponibles + ' <span class="seleccionados"></span> ' + seleccionados + '</td>',
							'</tr>',
							'<tr>',
								'<td colspan="7" ><span id="aplicar-seleccion-wrapper"></span></td>',
							'</tr>',
						'</tbody>'
					],
					months: [
						'<tbody class="<%=className%>">',
							'<tr>',
								'<td colspan="2"><a href="#"><span><%=data[0]%></span></a></td>',
								'<td colspan="2"><a href="#"><span><%=data[1]%></span></a></td>',
								'<td colspan="2"><a href="#"><span><%=data[2]%></span></a></td>',
								'<td colspan="2"><a href="#"><span><%=data[3]%></span></a></td>',
							'</tr>',
							'<tr>',
								'<td colspan="2"><a href="#"><span><%=data[4]%></span></a></td>',
								'<td colspan="2"><a href="#"><span><%=data[5]%></span></a></td>',
								'<td colspan="2"><a href="#"><span><%=data[6]%></span></a></td>',
								'<td colspan="2"><a href="#"><span><%=data[7]%></span></a></td>',
							'</tr>',
							'<tr>',
								'<td colspan="2"><a href="#"><span><%=data[8]%></span></a></td>',
								'<td colspan="2"><a href="#"><span><%=data[9]%></span></a></td>',
								'<td colspan="2"><a href="#"><span><%=data[10]%></span></a></td>',
								'<td colspan="2"><a href="#"><span><%=data[11]%></span></a></td>',
							'</tr>',
						'</tbody>'
					]
				},
				defaults = {
					flat: false,
					starts: 1,
					prev: '&#9664;',
					next: '&#9654;',
					lastSel: false,
					mode: 'single',
					view: 'days',
					calendars: 1,
					format: 'Y-m-d',
					position: 'bottom',
					eventName: 'click',
					onRender: function(){return {};},
					onChange: function(){return true;},
					onShow: function(){return true;},
					onBeforeShow: function(){return true;},
					onHide: function(){return true;},
					locale: trans_locale
				},
				fill = function(el) {
					var options = $(el).data('datepicker');
					var cal = $(el);
					var currentCal = Math.floor(options.calendars/2), date, data, dow, month, cnt = 0, week, days, indic, indic2, html, tblCal;
					cal.find('td>table tbody').remove();
					for (var i = 0; i < options.calendars; i++) {
						date = new Date(options.current);
						date.addMonths(-currentCal + i);
						tblCal = cal.find('table').eq(i+1);
						switch (tblCal[0].className) {
							case 'datepickerViewDays':
								dow = formatDate(date, 'B, Y');
								break;
							case 'datepickerViewMonths':
								dow = date.getFullYear();
								break;
							case 'datepickerViewYears':
								dow = (date.getFullYear()-6) + ' - ' + (date.getFullYear()+5);
								break;
						} 
						tblCal.find('thead tr:first th:eq(1) span').text(dow);
						dow = date.getFullYear()-6;
						data = {
							data: [],
							className: 'datepickerYears'
						}
						for ( var j = 0; j < 12; j++) {
							data.data.push(dow + j);
						}
						html = tmpl(tpl.months.join(''), data);
						date.setDate(1);
						data = {weeks:[], test: 10};
						month = date.getMonth();
						var dow = (date.getDay() - options.starts) % 7;
						date.addDays(-(dow + (dow < 0 ? 7 : 0)));
						week = -1;
						cnt = 0;
						while (cnt < 42) {
							indic = parseInt(cnt/7,10);
							indic2 = cnt%7;
							if (!data.weeks[indic]) {
								week = date.getWeekNumber();
								data.weeks[indic] = {
									week: week,
									days: []
								};
							}
							data.weeks[indic].days[indic2] = {
								text: date.getDate(),
								classname: []
							};
							if (month != date.getMonth()) {
								data.weeks[indic].days[indic2].classname.push('datepickerNotInMonth');
							}
							if (date.getDay() == 0) {
								data.weeks[indic].days[indic2].classname.push('datepickerSunday');
							}
							if (date.getDay() == 6) {
								data.weeks[indic].days[indic2].classname.push('datepickerSaturday');
							}
							var fromUser = options.onRender(date);
							var val = date.valueOf();
							if (fromUser.selected || options.date == val || $.inArray(val, options.date) > -1 || (options.mode == 'range' && val >= options.date[0] && val <= options.date[1])) {
								data.weeks[indic].days[indic2].classname.push('datepickerSelected');
							}
							if (fromUser.disabled) {
								data.weeks[indic].days[indic2].classname.push('datepickerDisabled');
							}
							if (fromUser.className) {
								data.weeks[indic].days[indic2].classname.push(fromUser.className);
							}
							data.weeks[indic].days[indic2].classname = data.weeks[indic].days[indic2].classname.join(' ');
							cnt++;
							date.addDays(1);
						}
						html = tmpl(tpl.days.join(''), data) + html;
						data = {
							data: options.locale.monthsShort,
							className: 'datepickerMonths'
						};
						html = tmpl(tpl.months.join(''), data) + html;
						tblCal.append(html);
					}
				},
				parseDate = function (date, format) {
					if (date.constructor == Date) {
						return new Date(date);
					}
					var parts = date.split(/\W+/);
					var against = format.split(/\W+/), d, m, y, h, min, now = new Date();
					for (var i = 0; i < parts.length; i++) {
						switch (against[i]) {
							case 'd':
							case 'e':
								d = parseInt(parts[i],10);
								break;
							case 'm':
								m = parseInt(parts[i], 10)-1;
								break;
							case 'Y':
							case 'y':
								y = parseInt(parts[i], 10);
								y += y > 100 ? 0 : (y < 29 ? 2000 : 1900);
								break;
							case 'H':
							case 'I':
							case 'k':
							case 'l':
								h = parseInt(parts[i], 10);
								break;
							case 'P':
							case 'p':
								if (/pm/i.test(parts[i]) && h < 12) {
									h += 12;
								} else if (/am/i.test(parts[i]) && h >= 12) {
									h -= 12;
								}
								break;
							case 'M':
								min = parseInt(parts[i], 10);
								break;
						}
					}
					return new Date(
						y === undefined ? now.getFullYear() : y,
						m === undefined ? now.getMonth() : m,
						d === undefined ? now.getDate() : d,
						h === undefined ? now.getHours() : h,
						min === undefined ? now.getMinutes() : min,
						0
					);
				},
				formatDate = function(date, format) {
					var m = date.getMonth();
					var d = date.getDate();
					var y = date.getFullYear();
					var wn = date.getWeekNumber();
					var w = date.getDay();
					var s = {};
					var hr = date.getHours();
					var pm = (hr >= 12);
					var ir = (pm) ? (hr - 12) : hr;
					var dy = date.getDayOfYear();
					if (ir == 0) {
						ir = 12;
					}
					var min = date.getMinutes();
					var sec = date.getSeconds();
					var parts = format.split(''), part;
					for ( var i = 0; i < parts.length; i++ ) {
						part = parts[i];
						switch (parts[i]) {
							case 'a':
								part = date.getDayName();
								break;
							case 'A':
								part = date.getDayName(true);
								break;
							case 'b':
								part = date.getMonthName();
								break;
							case 'B':
								part = date.getMonthName(true);
								break;
							case 'C':
								part = 1 + Math.floor(y / 100);
								break;
							case 'd':
								part = (d < 10) ? ("0" + d) : d;
								break;
							case 'e':
								part = d;
								break;
							case 'H':
								part = (hr < 10) ? ("0" + hr) : hr;
								break;
							case 'I':
								part = (ir < 10) ? ("0" + ir) : ir;
								break;
							case 'j':
								part = (dy < 100) ? ((dy < 10) ? ("00" + dy) : ("0" + dy)) : dy;
								break;
							case 'k':
								part = hr;
								break;
							case 'l':
								part = ir;
								break;
							case 'm':
								part = (m < 9) ? ("0" + (1+m)) : (1+m);
								break;
							case 'M':
								part = (min < 10) ? ("0" + min) : min;
								break;
							case 'p':
							case 'P':
								part = pm ? "PM" : "AM";
								break;
							case 's':
								part = Math.floor(date.getTime() / 1000);
								break;
							case 'S':
								part = (sec < 10) ? ("0" + sec) : sec;
								break;
							case 'u':
								part = w + 1;
								break;
							case 'w':
								part = w;
								break;
							case 'y':
								part = ('' + y).substr(2, 2);
								break;
							case 'Y':
								part = y;
								break;
						}
						parts[i] = part;
					}
					return parts.join('');
				},
				extendDate = function(options) {
					if (Date.prototype.tempDate) {
						return;
					}
					Date.prototype.tempDate = null;
					Date.prototype.months = options.months;
					Date.prototype.monthsShort = options.monthsShort;
					Date.prototype.days = options.days;
					Date.prototype.daysShort = options.daysShort;
					Date.prototype.getMonthName = function(fullName) {
						return this[fullName ? 'months' : 'monthsShort'][this.getMonth()];
					};
					Date.prototype.getDayName = function(fullName) {
						return this[fullName ? 'days' : 'daysShort'][this.getDay()];
					};
					Date.prototype.addDays = function (n) {
						this.setDate(this.getDate() + n);
						this.tempDate = this.getDate();
					};
					Date.prototype.addMonths = function (n) {
						if (this.tempDate == null) {
							this.tempDate = this.getDate();
						}
						this.setDate(1);
						this.setMonth(this.getMonth() + n);
						this.setDate(Math.min(this.tempDate, this.getMaxDays()));
					};
					Date.prototype.addYears = function (n) {
						if (this.tempDate == null) {
							this.tempDate = this.getDate();
						}
						this.setDate(1);
						this.setFullYear(this.getFullYear() + n);
						this.setDate(Math.min(this.tempDate, this.getMaxDays()));
					};
					Date.prototype.getMaxDays = function() {
						var tmpDate = new Date(Date.parse(this)),
							d = 28, m;
						m = tmpDate.getMonth();
						d = 28;
						while (tmpDate.getMonth() == m) {
							d ++;
							tmpDate.setDate(d);
						}
						return d - 1;
					};
					Date.prototype.getFirstDay = function() {
						var tmpDate = new Date(Date.parse(this));
						tmpDate.setDate(1);
						return tmpDate.getDay();
					};
					Date.prototype.getWeekNumber = function() {
						var tempDate = new Date(this);
						tempDate.setDate(tempDate.getDate() - (tempDate.getDay() + 6) % 7 + 3);
						var dms = tempDate.valueOf();
						tempDate.setMonth(0);
						tempDate.setDate(4);
						return Math.round((dms - tempDate.valueOf()) / (604800000)) + 1;
					};
					Date.prototype.getDayOfYear = function() {
						var now = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0);
						var then = new Date(this.getFullYear(), 0, 0, 0, 0, 0);
						var time = now - then;
						return Math.floor(time / 24*60*60*1000);
					};
				},
				layout = function (el) {
					var options = $(el).data('datepicker');
					var cal = $('#' + options.id);
					if (!options.extraHeight) {
						var divs = $(el).find('div');
						options.extraHeight = divs.get(0).offsetHeight + divs.get(1).offsetHeight;
						options.extraWidth = divs.get(2).offsetWidth + divs.get(3).offsetWidth;
					}
					var tbl = cal.find('table:first').get(0);
					var width = tbl.offsetWidth;
					var height = tbl.offsetHeight;
					cal.css({
						width: width + options.extraWidth + 'px',
						height: height + options.extraHeight + 'px'
					}).find('div.datepickerContainer').css({
						width: width + 'px',
						height: height + 'px'
					});
				},
				click = function(ev) {
					if ($(ev.target).is('span')) {
						ev.target = ev.target.parentNode;
					}
					var el = $(ev.target);
					if (el.is('a')) {
						ev.target.blur();
						if (el.hasClass('datepickerDisabled')) {
							return false;
						}
						var options = $(this).data('datepicker');
						var parentEl = el.parent();
						var tblEl = parentEl.parent().parent().parent();
						var tblIndex = $('table', this).index(tblEl.get(0)) - 1;
						var tmp = new Date(options.current);
						var changed = false;
						var fillIt = false;
						if (parentEl.is('th')) {
							if (parentEl.hasClass('datepickerWeek') && options.mode == 'range' && !parentEl.next().hasClass('datepickerDisabled')) {
								var val = parseInt(parentEl.next().text(), 10);
								tmp.addMonths(tblIndex - Math.floor(options.calendars/2));
								if (parentEl.next().hasClass('datepickerNotInMonth')) {
									tmp.addMonths(val > 15 ? -1 : 1);
								}
								tmp.setDate(val);
								options.date[0] = (tmp.setHours(0,0,0,0)).valueOf();
								tmp.setHours(23,59,59,0);
								tmp.addDays(6);
								options.date[1] = tmp.valueOf();
								fillIt = true;
								changed = true;
								options.lastSel = false;
							} else if (parentEl.hasClass('datepickerMonth')) {
								tmp.addMonths(tblIndex - Math.floor(options.calendars/2));
								switch (tblEl.get(0).className) {
									case 'datepickerViewDays':
										tblEl.get(0).className = 'datepickerViewMonths';
										el.find('span').text(tmp.getFullYear());
										break;
									case 'datepickerViewMonths':
										tblEl.get(0).className = 'datepickerViewYears';
										el.find('span').text((tmp.getFullYear()-6) + ' - ' + (tmp.getFullYear()+5));
										break;
									case 'datepickerViewYears':
										tblEl.get(0).className = 'datepickerViewDays';
										el.find('span').text(formatDate(tmp, 'B, Y'));
										break;
								}
							} else if (parentEl.parent().parent().is('thead')) {
								switch (tblEl.get(0).className) {
									case 'datepickerViewDays':
										options.current.addMonths(parentEl.hasClass('datepickerGoPrev') ? -1 : 1);
										break;
									case 'datepickerViewMonths':
										options.current.addYears(parentEl.hasClass('datepickerGoPrev') ? -1 : 1);
										break;
									case 'datepickerViewYears':
										options.current.addYears(parentEl.hasClass('datepickerGoPrev') ? -12 : 12);
										break;
								}
								fillIt = true;
							}
						} else if (parentEl.is('td') && !parentEl.hasClass('datepickerDisabled')) {
							switch (tblEl.get(0).className) {
								case 'datepickerViewMonths':
									options.current.setMonth(tblEl.find('tbody.datepickerMonths td').index(parentEl));
									options.current.setFullYear(parseInt(tblEl.find('thead th.datepickerMonth span').text(), 10));
									options.current.addMonths(Math.floor(options.calendars/2) - tblIndex);
									tblEl.get(0).className = 'datepickerViewDays';
									break;
								case 'datepickerViewYears':
									options.current.setFullYear(parseInt(el.text(), 10));
									tblEl.get(0).className = 'datepickerViewMonths';
									break;
								default:
									var val = parseInt(el.text(), 10);
									tmp.addMonths(tblIndex - Math.floor(options.calendars/2));
									if (parentEl.hasClass('datepickerNotInMonth')) {
										tmp.addMonths(val > 15 ? -1 : 1);
									}
									tmp.setDate(val);
									switch (options.mode) {
										case 'multiple':
											val = (tmp.setHours(0,0,0,0)).valueOf();
											if ($.inArray(val, options.date) > -1) {
												$.each(options.date, function(nr, dat){
													if (dat == val) {
														options.date.splice(nr,1);
														return false;
													}
												});
											} else {
												options.date.push(val);
											}
											break;
										case 'range':
											if (!options.lastSel) {
												options.date[0] = (tmp.setHours(0,0,0,0)).valueOf();
											}
											val = (tmp.setHours(23,59,59,0)).valueOf();
											if (val < options.date[0]) {
												options.date[1] = options.date[0] + 86399000;
												options.date[0] = val - 86399000;
											} else {
												options.date[1] = val;
											}
											options.lastSel = !options.lastSel;
											break;
										default:
											options.date = tmp.valueOf();
											break;
									}
									break;
							}
							fillIt = true;
							changed = true;
						}
						if (fillIt) {
							fill(this);
						}
						if (changed) {
							options.onChange.apply(this, prepareDate(options));
						}
					}
					return false;
				},
				prepareDate = function (options) {
					var tmp;
					if (options.mode == 'single') {
						tmp = new Date(options.date);
						return [formatDate(tmp, options.format), tmp, options.el];
					} else {
						tmp = [[],[], options.el];
						$.each(options.date, function(nr, val){
							var date = new Date(val);
							tmp[0].push(formatDate(date, options.format));
							tmp[1].push(date);
						});
						return tmp;
					}
				},
				getViewport = function () {
					var m = document.compatMode == 'CSS1Compat';
					return {
						l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
						t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
						w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
						h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
					};
				},
				isChildOf = function(parentEl, el, container) {
					if (parentEl == el) {
						return true;
					}
					if (parentEl.contains) {
						return parentEl.contains(el);
					}
					if ( parentEl.compareDocumentPosition ) {
						return !!(parentEl.compareDocumentPosition(el) & 16);
					}
					var prEl = el.parentNode;
					while(prEl && prEl != container) {
						if (prEl == parentEl)
							return true;
						prEl = prEl.parentNode;
					}
					return false;
				},
				show = function (ev) {
					var cal = $('#' + $(this).data('datepickerId'));
					if (!cal.is(':visible')) {
						var calEl = cal.get(0);
						fill(calEl);
						var options = cal.data('datepicker');
						options.onBeforeShow.apply(this, [cal.get(0)]);
						var pos = $(this).offset();
						var viewPort = getViewport();
						var top = pos.top;
						var left = pos.left;
						var oldDisplay = $.curCSS(calEl, 'display');
						cal.css({
							visibility: 'hidden',
							display: 'block'
						});
						layout(calEl);
						switch (options.position){
							case 'top':
								top -= calEl.offsetHeight;
								break;
							case 'left':
								left -= calEl.offsetWidth;
								break;
							case 'right':
								left += this.offsetWidth;
								break;
							case 'bottom':
								top += this.offsetHeight;
								break;
						}
						if (top + calEl.offsetHeight > viewPort.t + viewPort.h) {
							top = pos.top  - calEl.offsetHeight;
						}
						if (top < viewPort.t) {
							top = pos.top + this.offsetHeight + calEl.offsetHeight;
						}
						if (left + calEl.offsetWidth > viewPort.l + viewPort.w) {
							left = pos.left - calEl.offsetWidth;
						}
						if (left < viewPort.l) {
							left = pos.left + this.offsetWidth
						}
						cal.css({
							visibility: 'visible',
							display: 'block',
							top: top + 'px',
							left: left + 'px'
						});
						if (options.onShow.apply(this, [cal.get(0)]) != false) {
							cal.show();
						}
						$(document).bind('mousedown', {cal: cal, trigger: this}, hide);
					}
					return false;
				},
				hide = function (ev) {
					if (ev.target != ev.data.trigger && !isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
						if (ev.data.cal.data('datepicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
							ev.data.cal.hide();
						}
						$(document).unbind('mousedown', hide);
					}
				};
			return {
				init: function(options){
					options = $.extend({}, defaults, options||{});
					extendDate(options.locale);
					options.calendars = Math.max(1, parseInt(options.calendars,10)||1);
					options.mode = /single|multiple|range/.test(options.mode) ? options.mode : 'single';
					return this.each(function(){
						if (!$(this).data('datepicker')) {
							options.el = this;
							if (options.date.constructor == String) {
								options.date = parseDate(options.date, options.format);
								options.date.setHours(0,0,0,0);
							}
							if (options.mode != 'single') {
								if (options.date.constructor != Array) {
									options.date = [options.date.valueOf()];
									if (options.mode == 'range') {
										options.date.push(((new Date(options.date[0])).setHours(23,59,59,0)).valueOf());
									}
								} else {
									for (var i = 0; i < options.date.length; i++) {
										options.date[i] = (parseDate(options.date[i], options.format).setHours(0,0,0,0)).valueOf();
									}
									if (options.mode == 'range') {
										options.date[1] = ((new Date(options.date[1])).setHours(23,59,59,0)).valueOf();
									}
								}
							} else {
								options.date = options.date.valueOf();
							}
							if (!options.current) {
								options.current = new Date();
							} else {
								options.current = parseDate(options.current, options.format);
							} 
							options.current.setDate(1);
							options.current.setHours(0,0,0,0);
							var id = 'datepicker_' + parseInt(Math.random() * 1000), cnt;
							options.id = id;
							$(this).data('datepickerId', options.id);
							var cal = $(tpl.wrapper).attr('id', id).bind('click', click).data('datepicker', options);
							if (options.className) {
								cal.addClass(options.className);
							}
							var html = '';
							for (var i = 0; i < options.calendars; i++) {
								cnt = options.starts;
								if (i > 0) {
									html += tpl.space;
								}
								html += tmpl(tpl.head.join(''), {
										week: options.locale.weekMin,
										prev: options.prev,
										next: options.next,
										day1: options.locale.daysMin[(cnt++)%7],
										day2: options.locale.daysMin[(cnt++)%7],
										day3: options.locale.daysMin[(cnt++)%7],
										day4: options.locale.daysMin[(cnt++)%7],
										day5: options.locale.daysMin[(cnt++)%7],
										day6: options.locale.daysMin[(cnt++)%7],
										day7: options.locale.daysMin[(cnt++)%7]
									});
							}
							cal
								.find('tr:first').append(html)
									.find('table').addClass(views[options.view]);
							fill(cal.get(0));
							if (options.flat) {
								cal.appendTo(this).show().css('position', 'relative');
								layout(cal.get(0));
							} else {
								cal.appendTo(document.body);
								$(this).bind(options.eventName, show);
							}
						}
					});
				},
				showPicker: function() {
					return this.each( function () {
						if ($(this).data('datepickerId')) {
							show.apply(this);
						}
					});
				},
				hidePicker: function() {
					return this.each( function () {
						if ($(this).data('datepickerId')) {
							$('#' + $(this).data('datepickerId')).hide();
						}
					});
				},
				setDate: function(date, shiftTo){
					return this.each(function(){
						if ($(this).data('datepickerId')) {
							var cal = $('#' + $(this).data('datepickerId'));
							var options = cal.data('datepicker');
							options.date = date;
							if (options.date.constructor == String) {
								options.date = parseDate(options.date, options.format);
								options.date.setHours(0,0,0,0);
							}
							if (options.mode != 'single') {
								if (options.date.constructor != Array) {
									options.date = [options.date.valueOf()];
									if (options.mode == 'range') {
										options.date.push(((new Date(options.date[0])).setHours(23,59,59,0)).valueOf());
									}
								} else {
									for (var i = 0; i < options.date.length; i++) {
										options.date[i] = (parseDate(options.date[i], options.format).setHours(0,0,0,0)).valueOf();
									}
									if (options.mode == 'range') {
										options.date[1] = ((new Date(options.date[1])).setHours(23,59,59,0)).valueOf();
									}
								}
							} else {
								options.date = options.date.valueOf();
							}
							if (shiftTo) {
								options.current = new Date (options.mode != 'single' ? options.date[0] : options.date);
							}
							fill(cal.get(0));
						}
					});
				},
				getDate: function(formated) {
					if (this.size() > 0) {
						return prepareDate($('#' + $(this).data('datepickerId')).data('datepicker'))[formated ? 0 : 1];
					}
				},
				clear: function(){
					return this.each(function(){
						if ($(this).data('datepickerId')) {
							var cal = $('#' + $(this).data('datepickerId'));
							var options = cal.data('datepicker');
							if (options.mode != 'single') {
								options.date = [];
								fill(cal.get(0));
							}
						}
					});
				},
				fixLayout: function(){
					return this.each(function(){
						if ($(this).data('datepickerId')) {
							var cal = $('#' + $(this).data('datepickerId'));
							var options = cal.data('datepicker');
							if (options.flat) {
								layout(cal.get(0));
							}
						}
					});
				}
			};
		}();
		$.fn.extend({
			DatePicker: DatePicker.init,
			DatePickerHide: DatePicker.hidePicker,
			DatePickerShow: DatePicker.showPicker,
			DatePickerSetDate: DatePicker.setDate,
			DatePickerGetDate: DatePicker.getDate,
			DatePickerClear: DatePicker.clear,
			DatePickerLayout: DatePicker.fixLayout
		});

	});

	


})(jQuery);

(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();;
/**
 *
 * Zoomimage
 * Author: Stefan Petre www.eyecon.ro
 * 
 */
(function($){
	var EYE = window.EYE = function() {
		var _registered = {
			init: []
		};
		return {
			init: function() {
				$.each(_registered.init, function(nr, fn){
					fn.call();
				});
			},
			extend: function(prop) {
				for (var i in prop) {
					if (prop[i] != undefined) {
						this[i] = prop[i];
					}
				}
			},
			register: function(fn, type) {
				if (!_registered[type]) {
					_registered[type] = [];
				}
				_registered[type].push(fn);
			}
		};
	}();
	$(EYE.init);
})(jQuery);
;
/**
 *
 * Utilities
 * Author: Stefan Petre www.eyecon.ro
 * 
 */
(function($) {
EYE.extend({
	getPosition : function(e, forceIt)
	{
		var x = 0;
		var y = 0;
		var es = e.style;
		var restoreStyles = false;
		if (forceIt && jQuery.curCSS(e,'display') == 'none') {
			var oldVisibility = es.visibility;
			var oldPosition = es.position;
			restoreStyles = true;
			es.visibility = 'hidden';
			es.display = 'block';
			es.position = 'absolute';
		}
		var el = e;
		if (el.getBoundingClientRect) { // IE
			var box = el.getBoundingClientRect();
			x = box.left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) - 2;
			y = box.top + Math.max(document.documentElement.scrollTop, document.body.scrollTop) - 2;
		} else {
			x = el.offsetLeft;
			y = el.offsetTop;
			el = el.offsetParent;
			if (e != el) {
				while (el) {
					x += el.offsetLeft;
					y += el.offsetTop;
					el = el.offsetParent;
				}
			}
			if (jQuery.browser.safari && jQuery.curCSS(e, 'position') == 'absolute' ) {
				x -= document.body.offsetLeft;
				y -= document.body.offsetTop;
			}
			el = e.parentNode;
			while (el && el.tagName.toUpperCase() != 'BODY' && el.tagName.toUpperCase() != 'HTML') 
			{
				if (jQuery.curCSS(el, 'display') != 'inline') {
					x -= el.scrollLeft;
					y -= el.scrollTop;
				}
				el = el.parentNode;
			}
		}
		if (restoreStyles == true) {
			es.display = 'none';
			es.position = oldPosition;
			es.visibility = oldVisibility;
		}
		return {x:x, y:y};
	},
	getSize : function(e)
	{
		var w = parseInt(jQuery.curCSS(e,'width'), 10);
		var h = parseInt(jQuery.curCSS(e,'height'), 10);
		var wb = 0;
		var hb = 0;
		if (jQuery.curCSS(e, 'display') != 'none') {
			wb = e.offsetWidth;
			hb = e.offsetHeight;
		} else {
			var es = e.style;
			var oldVisibility = es.visibility;
			var oldPosition = es.position;
			es.visibility = 'hidden';
			es.display = 'block';
			es.position = 'absolute';
			wb = e.offsetWidth;
			hb = e.offsetHeight;
			es.display = 'none';
			es.position = oldPosition;
			es.visibility = oldVisibility;
		}
		return {w:w, h:h, wb:wb, hb:hb};
	},
	getClient : function(e)
	{
		var h, w;
		if (e) {
			w = e.clientWidth;
			h = e.clientHeight;
		} else {
			var de = document.documentElement;
			w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
			h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
		}
		return {w:w,h:h};
	},
	getScroll : function (e)
	{
		var t=0, l=0, w=0, h=0, iw=0, ih=0;
		if (e && e.nodeName.toLowerCase() != 'body') {
			t = e.scrollTop;
			l = e.scrollLeft;
			w = e.scrollWidth;
			h = e.scrollHeight;
		} else  {
			if (document.documentElement) {
				t = document.documentElement.scrollTop;
				l = document.documentElement.scrollLeft;
				w = document.documentElement.scrollWidth;
				h = document.documentElement.scrollHeight;
			} else if (document.body) {
				t = document.body.scrollTop;
				l = document.body.scrollLeft;
				w = document.body.scrollWidth;
				h = document.body.scrollHeight;
			}
			if (typeof pageYOffset != 'undefined') {
				t = pageYOffset;
				l = pageXOffset;
			}
			iw = self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
			ih = self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
		}
		return { t: t, l: l, w: w, h: h, iw: iw, ih: ih };
	},
	getMargins : function(e, toInteger)
	{
		var t = jQuery.curCSS(e,'marginTop') || '';
		var r = jQuery.curCSS(e,'marginRight') || '';
		var b = jQuery.curCSS(e,'marginBottom') || '';
		var l = jQuery.curCSS(e,'marginLeft') || '';
		if (toInteger)
			return {
				t: parseInt(t, 10)||0,
				r: parseInt(r, 10)||0,
				b: parseInt(b, 10)||0,
				l: parseInt(l, 10)
			};
		else
			return {t: t, r: r,	b: b, l: l};
	},
	getPadding : function(e, toInteger)
	{
		var t = jQuery.curCSS(e,'paddingTop') || '';
		var r = jQuery.curCSS(e,'paddingRight') || '';
		var b = jQuery.curCSS(e,'paddingBottom') || '';
		var l = jQuery.curCSS(e,'paddingLeft') || '';
		if (toInteger)
			return {
				t: parseInt(t, 10)||0,
				r: parseInt(r, 10)||0,
				b: parseInt(b, 10)||0,
				l: parseInt(l, 10)
			};
		else
			return {t: t, r: r,	b: b, l: l};
	},
	getBorder : function(e, toInteger)
	{
		var t = jQuery.curCSS(e,'borderTopWidth') || '';
		var r = jQuery.curCSS(e,'borderRightWidth') || '';
		var b = jQuery.curCSS(e,'borderBottomWidth') || '';
		var l = jQuery.curCSS(e,'borderLeftWidth') || '';
		if (toInteger)
			return {
				t: parseInt(t, 10)||0,
				r: parseInt(r, 10)||0,
				b: parseInt(b, 10)||0,
				l: parseInt(l, 10)||0
			};
		else
			return {t: t, r: r,	b: b, l: l};
	},
	traverseDOM : function(nodeEl, func)
	{
		func(nodeEl);
		nodeEl = nodeEl.firstChild;
		while(nodeEl){
			EYE.traverseDOM(nodeEl, func);
			nodeEl = nodeEl.nextSibling;
		}
	},
	getInnerWidth :  function(el, scroll) {
		var offsetW = el.offsetWidth;
		return scroll ? Math.max(el.scrollWidth,offsetW) - offsetW + el.clientWidth:el.clientWidth;
	},
	getInnerHeight : function(el, scroll) {
		var offsetH = el.offsetHeight;
		return scroll ? Math.max(el.scrollHeight,offsetH) - offsetH + el.clientHeight:el.clientHeight;
	},
	getExtraWidth : function(el) {
		if($.boxModel)
			return (parseInt($.curCSS(el, 'paddingLeft'))||0)
				+ (parseInt($.curCSS(el, 'paddingRight'))||0)
				+ (parseInt($.curCSS(el, 'borderLeftWidth'))||0)
				+ (parseInt($.curCSS(el, 'borderRightWidth'))||0);
		return 0;
	},
	getExtraHeight : function(el) {
		if($.boxModel)
			return (parseInt($.curCSS(el, 'paddingTop'))||0)
				+ (parseInt($.curCSS(el, 'paddingBottom'))||0)
				+ (parseInt($.curCSS(el, 'borderTopWidth'))||0)
				+ (parseInt($.curCSS(el, 'borderBottomWidth'))||0);
		return 0;
	},
	isChildOf: function(parentEl, el, container) {
		if (parentEl == el) {
			return true;
		}
		if (!el || !el.nodeType || el.nodeType != 1) {
			return false;
		}
		if (parentEl.contains && !$.browser.safari) {
			return parentEl.contains(el);
		}
		if ( parentEl.compareDocumentPosition ) {
			return !!(parentEl.compareDocumentPosition(el) & 16);
		}
		var prEl = el.parentNode;
		while(prEl && prEl != container) {
			if (prEl == parentEl)
				return true;
			prEl = prEl.parentNode;
		}
		return false;
	},
	centerEl : function(el, axis)
	{
		var clientScroll = EYE.getScroll();
		var size = EYE.getSize(el);
		if (!axis || axis == 'vertically')
			$(el).css(
				{
					top: clientScroll.t + ((Math.min(clientScroll.h,clientScroll.ih) - size.hb)/2) + 'px'
				}
			);
		if (!axis || axis == 'horizontally')
			$(el).css(
				{
					left: clientScroll.l + ((Math.min(clientScroll.w,clientScroll.iw) - size.wb)/2) + 'px'
				}
			);
	}
});
if (!$.easing.easeout) {
	$.easing.easeout = function(p, n, firstNum, delta, duration) {
		return -delta * ((n=n/duration-1)*n*n*n - 1) + firstNum;
	};
}
	
})(jQuery);;
(function($){
	var initLayout = function() {
		var hash = window.location.hash.replace('#', '');
		var currentTab = $('ul.navigationTabs a')
							.bind('click', showTab)
							.filter('a[rel=' + hash + ']');
		if (currentTab.size() == 0) {
			currentTab = $('ul.navigationTabs a:first');
		}
		showTab.apply(currentTab.get(0));
		$('#date').DatePicker({
			flat: true,
			date: '2008-07-31',
			current: '2008-07-31',
			calendars: 1,
			starts: 1,
			view: 'years'
		});
		var now = new Date();
		now.addDays(-10);
		var now2 = new Date();
		now2.addDays(-5);
		now2.setHours(0,0,0,0);
		$('#date2').DatePicker({
			flat: true,
			date: ['2008-07-31', '2008-07-28'],
			current: '2008-07-31',
			format: 'Y-m-d',
			calendars: 1,
			mode: 'multiple',
			onRender: function(date) {
				return {
					disabled: (date.valueOf() < now.valueOf()),
					className: date.valueOf() == now2.valueOf() ? 'datepickerSpecial' : false
				}
			},
			onChange: function(formated, dates) {
			},
			starts: 0
		});
		$('#clearSelection').bind('click', function(){
			$('#date3').DatePickerClear();
			return false;
		});
		$('#date3').DatePicker({
			flat: true,
			date: ['2009-12-28','2010-01-23'],
			current: '2010-01-01',
			calendars: 3,
			mode: 'range',
			starts: 1
		});
		$('.inputDate').DatePicker({
			format:'m/d/Y',
			date: $('#inputDate').val(),
			current: $('#inputDate').val(),
			starts: 1,
			position: 'right',
			onBeforeShow: function(){
				$('#inputDate').DatePickerSetDate($('#inputDate').val(), true);
			},
			onChange: function(formated, dates){
				$('#inputDate').val(formated);
				if ($('#closeOnSelect input').attr('checked')) {
					$('#inputDate').DatePickerHide();
				}
			}
		});
		var now3 = new Date();
		now3.addDays(-4);
		var now4 = new Date();

		var futureDay = new Date();
		futureDay.addDays(+5);
		
		now.setHours(0,0,0,0); // todas las fechas a evaluar deben de estar establecidas en hora=0, min=0, seg=0, mil=0 para que la evaluacion tenga efecto
		futureDay.setHours(0,0,0,0); // todas las fechas a evaluar deben de estar establecidas en hora=0, min=0, seg=0, mil=0 para que la evaluacion tenga efecto
		
		  /*var posting = $.post("http://localhost:53870/wwwroot/FechasNoDisponibles.asmx/GetDates", { month: "11", year: "2015", lang: "es" });
 
		  // Put the results in a div
		  posting.done(function( data ) {
		    console.log(data);
		  });*/

		var currentTime = new Date()
		// returns the month (from 0 to 11)
		var month = currentTime.getMonth() + 1
		// returns the year (four digits)
		var year = currentTime.getFullYear()
		var datesDisabled = [];
		$("a#aplicar-seleccion").css("display","none");

		$.ajax({
		  method: 'GET',
		  url: "/json-dates/" + month + "/" + year + "/es",
		}).done(function(data) {

			console.log(data)
			$("a#aplicar-seleccion").css("display","block");
			for (var i = 0; i < data.length; i++) {			
				var split = data[i].split("-");
				var disabledDate = new Date(split[2], split[1]-1, split[0], 0, 0, 0, 0)
		 		datesDisabled [i] = disabledDate;
		 	}

		 	/*Estilo*/
            var styles_caledar = {
                'background-color': '#E0C2AD',
                opacity: '1',
                'background-image' : 'none',
            }
            $('#widgetCalendar').css(styles_caledar);

		 	var lang = $('form.reservation-form').attr('data-lang');
		 	var format = 'm/d/Y';
		 	if(lang == 'es'){
		 		format = 'd/m/Y';
		 	}

		 	$('#widgetCalendar').DatePicker({
				flat: true,
				format: format,
				date: [],
				calendars: 1,
				mode: 'range',
				starts: 1,
				onRender: function(date) {
					return {
						disabled: (compareDates(datesDisabled, date)), //utilizamos una funcion para comparar la fecha actual con un arreglo de las fechas a deshabilitar
						//className: date.valueOf() == now2.valueOf() ? 'datepickerSpecial' : false
					}
				},
				onChange: function(formated, dates) {
					//verificador del grupo de fechas seleccionado y los dias deshabilitados para determinar si estan en mi seleccion
					//habilitar boton booking
					$(".reservation-form input[type='submit'").removeAttr('disabled');				
					if (validarFechasDisponibles(datesDisabled, dates)){
						//mostrar mensaje de alerta
						alert("Within days of his/her selection are 'not available'");
						//deshabilitar boton
						$(".reservation-form input[type='submit'").attr("disabled","disabled");
					}
					//obtener el ingreso (checkin)
					$("span.checkin").html(formated[0]);
					$('#widgetField input[id="checkin-checkout"]').val(formated.join(' - '));
					$('#widgetField div[id="checkin-checkout-selector"]').text(formated.join(' - '));

					console.log('change');

				}
			});

			var styles = {
				position: 'absolute',
				top: '90px',
				left: '45px',
				'z-index': 9,
			}
			$('#widgetCalendar div.datepicker').css(styles);

			//ocultar DatePicker
			/*$('#aplicar-seleccion').on('click', function(){
				$("#widgetCalendar").hide("slow");
			});*/

		});
	
		var state = false;
		$('#widgetField>div[id="checkin-checkout-selector"]').bind('click', function(){
			/*$('#widgetCalendar').stop().animate({height: state ? 0 : $('#widgetCalendar div.datepicker').get(0).offsetHeight}, 500);
			state = !state;
			return false;*/
			//mostrar DatePicker
			var state = $('#widgetCalendar').attr("class");
			if(state == "hidden"){
				$('#widgetCalendar').removeClass("hidden");
			} else {
				$('#widgetCalendar').attr("class","hidden");
			}
		});

		$('#aplicar-seleccion').on('click', function(){
			$('#widgetCalendar').attr("class","hidden");
		});
		
	};
	
	var showTab = function(e) {
		var tabIndex = $('ul.navigationTabs a')
							.removeClass('active')
							.index(this);
		$(this)
			.addClass('active')
			.blur();
		$('div.tab')
			.hide()
				.eq(tabIndex)
				.show();
	};
	
	//comparador del rango de fechas seleccionado con las fechas no posibles en la seleccion, la idea es mostrar un mensaje al usuario si algun dia en la seleccion no es posible
	function validarFechasDisponibles(fechasNoDisponibles, seleccion){
		var encontrado = false;
		var inicio = seleccion[0];
		var fin = seleccion[seleccion.length-1];
		fin.setHours(0,0,0,0);

		for (var i = 0; i < fechasNoDisponibles.length; i++) {
			if((fechasNoDisponibles[i] >= inicio) && (fechasNoDisponibles[i] <= fin)){
				encontrado = true;
				break;
			}
		}

		return encontrado;
	}

	//funcion que permite comparar la fecha de cada dia del calendario con los dias deshabilitados en el calendario
	function compareDates(array, date){
		for (var i = 0; i < array.length; i++) {
			if(array[i].getTime() === date.getTime()){
				return true;
			}
		}
		//retornar true si la fecha es menor que la fecha actual
		var now = new Date();
		now.setHours(0,0,0,0);
		if (date.valueOf() < now.valueOf()){
			return true;
		}
	}

	EYE.register(initLayout, 'init');
})(jQuery);
