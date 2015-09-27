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
(function ($) {

/**
 * Attaches double-click behavior to toggle full path of Krumo elements.
 */
Drupal.behaviors.devel = {
  attach: function (context, settings) {

    // Add hint to footnote
    $('.krumo-footnote .krumo-call').once().before('<img style="vertical-align: middle;" title="Click to expand. Double-click to show path." src="' + settings.basePath + 'misc/help.png"/>');

    var krumo_name = [];
    var krumo_type = [];

    function krumo_traverse(el) {
      krumo_name.push($(el).html());
      krumo_type.push($(el).siblings('em').html().match(/\w*/)[0]);

      if ($(el).closest('.krumo-nest').length > 0) {
        krumo_traverse($(el).closest('.krumo-nest').prev().find('.krumo-name'));
      }
    }

    $('.krumo-child > div:first-child', context).dblclick(
      function(e) {
        if ($(this).find('> .krumo-php-path').length > 0) {
          // Remove path if shown.
          $(this).find('> .krumo-php-path').remove();
        }
        else {
          // Get elements.
          krumo_traverse($(this).find('> a.krumo-name'));

          // Create path.
          var krumo_path_string = '';
          for (var i = krumo_name.length - 1; i >= 0; --i) {
            // Start element.
            if ((krumo_name.length - 1) == i)
              krumo_path_string += '$' + krumo_name[i];

            if (typeof krumo_name[(i-1)] !== 'undefined') {
              if (krumo_type[i] == 'Array') {
                krumo_path_string += "[";
                if (!/^\d*$/.test(krumo_name[(i-1)]))
                  krumo_path_string += "'";
                krumo_path_string += krumo_name[(i-1)];
                if (!/^\d*$/.test(krumo_name[(i-1)]))
                  krumo_path_string += "'";
                krumo_path_string += "]";
              }
              if (krumo_type[i] == 'Object')
                krumo_path_string += '->' + krumo_name[(i-1)];
            }
          }
          $(this).append('<div class="krumo-php-path" style="font-family: Courier, monospace; font-weight: bold;">' + krumo_path_string + '</div>');

          // Reset arrays.
          krumo_name = [];
          krumo_type = [];
        }
      }
    );
  }
};

})(jQuery);
;

/**
 *  @file
 *  A simple jQuery Cycle Div Slideshow Rotator.
 */

/**
 * This will set our initial behavior, by starting up each individual slideshow.
 */
(function ($) {
  Drupal.behaviors.viewsSlideshowCycle = {
    attach: function (context) {
      $('.views_slideshow_cycle_main:not(.viewsSlideshowCycle-processed)', context).addClass('viewsSlideshowCycle-processed').each(function() {
        var fullId = '#' + $(this).attr('id');
        var settings = Drupal.settings.viewsSlideshowCycle[fullId];
        settings.targetId = '#' + $(fullId + " :first").attr('id');

        settings.slideshowId = settings.targetId.replace('#views_slideshow_cycle_teaser_section_', '');
        // Pager after function.
        var pager_after_fn = function(curr, next, opts) {
          // Need to do some special handling on first load.
          var slideNum = opts.currSlide;
          if (typeof settings.processedAfter == 'undefined' || !settings.processedAfter) {
            settings.processedAfter = 1;
            slideNum = (typeof settings.opts.startingSlide == 'undefined') ? 0 : settings.opts.startingSlide;
          }
          Drupal.viewsSlideshow.action({ "action": 'transitionEnd', "slideshowID": settings.slideshowId, "slideNum": slideNum });
        }
        // Pager before function.
        var pager_before_fn = function(curr, next, opts) {
          var slideNum = opts.nextSlide;

          // Remember last slide.
          if (settings.remember_slide) {
            createCookie(settings.vss_id, slideNum, settings.remember_slide_days);
          }

          // Make variable height.
          if (!settings.fixed_height) {
            //get the height of the current slide
            var $ht = $(next).height();
            //set the container's height to that of the current slide
            $(next).parent().animate({height: $ht});
          }

          // Need to do some special handling on first load.
          if (typeof settings.processedBefore == 'undefined' || !settings.processedBefore) {
            settings.processedBefore = 1;
            slideNum = (typeof opts.startingSlide == 'undefined') ? 0 : opts.startingSlide;
          }

          Drupal.viewsSlideshow.action({ "action": 'transitionBegin', "slideshowID": settings.slideshowId, "slideNum": slideNum });
        }
        settings.loaded = false;

        settings.opts = {
          speed:settings.speed,
          timeout:settings.timeout,
          delay:settings.delay,
          sync:settings.sync,
          random:settings.random,
          nowrap:settings.nowrap,
          after:pager_after_fn,
          before:pager_before_fn,
          cleartype:(settings.cleartype)? true : false,
          cleartypeNoBg:(settings.cleartypenobg)? true : false
        }

        // Set the starting slide if we are supposed to remember the slide
        if (settings.remember_slide) {
          var startSlide = readCookie(settings.vss_id);
          if (startSlide == null) {
            startSlide = 0;
          }
          settings.opts.startingSlide = parseInt(startSlide);
        }

        if (settings.effect == 'none') {
          settings.opts.speed = 1;
        }
        else {
          settings.opts.fx = settings.effect;
        }

        // Take starting item from fragment.
        var hash = location.hash;
        if (hash) {
          var hash = hash.replace('#', '');
          var aHash = hash.split(';');
          var aHashLen = aHash.length;

          // Loop through all the possible starting points.
          for (var i = 0; i < aHashLen; i++) {
            // Split the hash into two parts. One part is the slideshow id the
            // other is the slide number.
            var initialInfo = aHash[i].split(':');
            // The id in the hash should match our slideshow.
            // The slide number chosen shouldn't be larger than the number of
            // slides we have.
            if (settings.slideshowId == initialInfo[0] && settings.num_divs > initialInfo[1]) {
              settings.opts.startingSlide = parseInt(initialInfo[1]);
            }
          }
        }

        // Pause on hover.
        if (settings.pause) {
          var mouseIn = function() {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": settings.slideshowId });
          }

          var mouseOut = function() {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": settings.slideshowId });
          }

          if (jQuery.fn.hoverIntent) {
            $('#views_slideshow_cycle_teaser_section_' + settings.vss_id).hoverIntent(mouseIn, mouseOut);
          }
          else {
            $('#views_slideshow_cycle_teaser_section_' + settings.vss_id).hover(mouseIn, mouseOut);
          }
        }

        // Pause on clicking of the slide.
        if (settings.pause_on_click) {
          $('#views_slideshow_cycle_teaser_section_' + settings.vss_id).click(function() {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": settings.slideshowId, "force": true });
          });
        }

        if (typeof JSON != 'undefined') {
          var advancedOptions = JSON.parse(settings.advanced_options);
          for (var option in advancedOptions) {
            switch(option) {

              // Standard Options
              case "activePagerClass":
              case "allowPagerClickBubble":
              case "autostop":
              case "autostopCount":
              case "backwards":
              case "bounce":
              case "cleartype":
              case "cleartypeNoBg":
              case "containerResize":
              case "continuous":
              case "delay":
              case "easeIn":
              case "easeOut":
              case "easing":
              case "fastOnEvent":
              case "fit":
              case "fx":
              case "height":
              case "manualTrump":
              case "metaAttr":
              case "next":
              case "nowrap":
              case "pager":
              case "pagerEvent":
              case "pause":
              case "pauseOnPagerHover":
              case "prev":
              case "prevNextEvent":
              case "random":
              case "randomizeEffects":
              case "requeueOnImageNotLoaded":
              case "requeueTimeout":
              case "rev":
              case "slideExpr":
              case "slideResize":
              case "speed":
              case "speedIn":
              case "speedOut":
              case "startingSlide":
              case "sync":
              case "timeout":
              case "width":
                var optionValue = advancedOptions[option];
                optionValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(optionValue);
                settings.opts[option] = optionValue;
                break;

              // These process options that look like {top:50, bottom:20}
              case "animIn":
              case "animOut":
              case "cssBefore":
              case "cssAfter":
              case "shuffle":
                var cssValue = advancedOptions[option];
                cssValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(cssValue);
                settings.opts[option] = eval('(' + cssValue + ')');
                break;

              // These options have their own functions.
              case "after":
                var afterValue = advancedOptions[option];
                afterValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(afterValue);
                // transition callback (scope set to element that was shown): function(currSlideElement, nextSlideElement, options, forwardFlag)
                settings.opts[option] = function(currSlideElement, nextSlideElement, options, forwardFlag) {
                  pager_after_fn(currSlideElement, nextSlideElement, options);
                  eval(afterValue);
                }
                break;

              case "before":
                var beforeValue = advancedOptions[option];
                beforeValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(beforeValue);
                // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
                settings.opts[option] = function(currSlideElement, nextSlideElement, options, forwardFlag) {
                  pager_before_fn(currSlideElement, nextSlideElement, options);
                  eval(beforeValue);
                }
                break;

              case "end":
                var endValue = advancedOptions[option];
                endValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(endValue);
                // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
                settings.opts[option] = function(options) {
                  eval(endValue);
                }
                break;

              case "fxFn":
                var fxFnValue = advancedOptions[option];
                fxFnValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(fxFnValue);
                // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
                settings.opts[option] = function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag) {
                  eval(fxFnValue);
                }
                break;

              case "onPagerEvent":
                var onPagerEventValue = advancedOptions[option];
                onPagerEventValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(onPagerEventValue);
                settings.opts[option] = function(zeroBasedSlideIndex, slideElement) {
                  eval(onPagerEventValue);
                }
                break;

              case "onPrevNextEvent":
                var onPrevNextEventValue = advancedOptions[option];
                onPrevNextEventValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(onPrevNextEventValue);
                settings.opts[option] = function(isNext, zeroBasedSlideIndex, slideElement) {
                  eval(onPrevNextEventValue);
                }
                break;

              case "pagerAnchorBuilder":
                var pagerAnchorBuilderValue = advancedOptions[option];
                pagerAnchorBuilderValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(pagerAnchorBuilderValue);
                // callback fn for building anchor links:  function(index, DOMelement)
                settings.opts[option] = function(index, DOMelement) {
                  var returnVal = '';
                  eval(pagerAnchorBuilderValue);
                  return returnVal;
                }
                break;

              case "pagerClick":
                var pagerClickValue = advancedOptions[option];
                pagerClickValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(pagerClickValue);
                // callback fn for pager clicks:    function(zeroBasedSlideIndex, slideElement)
                settings.opts[option] = function(zeroBasedSlideIndex, slideElement) {
                  eval(pagerClickValue);
                }
                break;

              case "paused":
                var pausedValue = advancedOptions[option];
                pausedValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(pausedValue);
                // undocumented callback when slideshow is paused:    function(cont, opts, byHover)
                settings.opts[option] = function(cont, opts, byHover) {
                  eval(pausedValue);
                }
                break;

              case "resumed":
                var resumedValue = advancedOptions[option];
                resumedValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(resumedValue);
                // undocumented callback when slideshow is resumed:    function(cont, opts, byHover)
                settings.opts[option] = function(cont, opts, byHover) {
                  eval(resumedValue);
                }
                break;

              case "timeoutFn":
                var timeoutFnValue = advancedOptions[option];
                timeoutFnValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(timeoutFnValue);
                settings.opts[option] = function(currSlideElement, nextSlideElement, options, forwardFlag) {
                  eval(timeoutFnValue);
                }
                break;

              case "updateActivePagerLink":
                var updateActivePagerLinkValue = advancedOptions[option];
                updateActivePagerLinkValue = Drupal.viewsSlideshowCycle.advancedOptionCleanup(updateActivePagerLinkValue);
                // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
                settings.opts[option] = function(pager, currSlideIndex) {
                  eval(updateActivePagerLinkValue);
                }
                break;
            }
          }
        }

        // If selected wait for the images to be loaded.
        // otherwise just load the slideshow.
        if (settings.wait_for_image_load) {
          // For IE/Chrome/Opera we if there are images then we need to make
          // sure the images are loaded before starting the slideshow.
          settings.totalImages = $(settings.targetId + ' img').length;
          if (settings.totalImages) {
            settings.loadedImages = 0;

            // Add a load event for each image.
            $(settings.targetId + ' img').each(function() {
              var $imageElement = $(this);
              $imageElement.bind('load', function () {
                Drupal.viewsSlideshowCycle.imageWait(fullId);
              });

              // Removing the source and adding it again will fire the load event.
              var imgSrc = $imageElement.attr('src');
              $imageElement.attr('src', '');
              $imageElement.attr('src', imgSrc);
            });

            // We need to set a timeout so that the slideshow doesn't wait
            // indefinitely for all images to load.
            setTimeout("Drupal.viewsSlideshowCycle.load('" + fullId + "')", settings.wait_for_image_load_timeout);
          }
          else {
            Drupal.viewsSlideshowCycle.load(fullId);
          }
        }
        else {
          Drupal.viewsSlideshowCycle.load(fullId);
        }
      });
    }
  };

  Drupal.viewsSlideshowCycle = Drupal.viewsSlideshowCycle || {};

  // Cleanup the values of advanced options.
  Drupal.viewsSlideshowCycle.advancedOptionCleanup = function(value) {
    value = $.trim(value);
    value = value.replace(/\n/g, '');
    if (!isNaN(parseInt(value))) {
      value = parseInt(value);
    }
    else if (value.toLowerCase() == 'true') {
      value = true;
    }
    else if (value.toLowerCase() == 'false') {
      value = false;
    }

    return value;
  }

  // This checks to see if all the images have been loaded.
  // If they have then it starts the slideshow.
  Drupal.viewsSlideshowCycle.imageWait = function(fullId) {
    if (++Drupal.settings.viewsSlideshowCycle[fullId].loadedImages == Drupal.settings.viewsSlideshowCycle[fullId].totalImages) {
      Drupal.viewsSlideshowCycle.load(fullId);
    }
  };

  // Start the slideshow.
  Drupal.viewsSlideshowCycle.load = function (fullId) {
    var settings = Drupal.settings.viewsSlideshowCycle[fullId];

    // Make sure the slideshow isn't already loaded.
    if (!settings.loaded) {
      $(settings.targetId).cycle(settings.opts);
      settings.loaded = true;

      // Start Paused
      if (settings.start_paused) {
        Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": settings.slideshowId, "force": true });
      }

      // Pause if hidden.
      if (settings.pause_when_hidden) {
        var checkPause = function(settings) {
          // If the slideshow is visible and it is paused then resume.
          // otherwise if the slideshow is not visible and it is not paused then
          // pause it.
          var visible = viewsSlideshowCycleIsVisible(settings.targetId, settings.pause_when_hidden_type, settings.amount_allowed_visible);
          if (visible) {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": settings.slideshowId });
          }
          else {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": settings.slideshowId });
          }
        }

        // Check when scrolled.
        $(window).scroll(function() {
         checkPause(settings);
        });

        // Check when the window is resized.
        $(window).resize(function() {
          checkPause(settings);
        });
      }
    }
  };

  Drupal.viewsSlideshowCycle.pause = function (options) {
    //Eat TypeError, cycle doesn't handle pause well if options isn't defined.
    try{
      if (options.pause_in_middle && $.fn.pause) {
        $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).pause();
      }
      else {
        $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle('pause');
      }
    }
    catch(e){
      if(!e instanceof TypeError){
        throw e;
      }
    }
  };

  Drupal.viewsSlideshowCycle.play = function (options) {
    Drupal.settings.viewsSlideshowCycle['#views_slideshow_cycle_main_' + options.slideshowID].paused = false;
    if (options.pause_in_middle && $.fn.resume) {
      $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).resume();
    }
    else {
      $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle('resume');
    }
  };

  Drupal.viewsSlideshowCycle.previousSlide = function (options) {
    $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle('prev');
  };

  Drupal.viewsSlideshowCycle.nextSlide = function (options) {
    $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle('next');
  };

  Drupal.viewsSlideshowCycle.goToSlide = function (options) {
    $('#views_slideshow_cycle_teaser_section_' + options.slideshowID).cycle(options.slideNum);
  };

  // Verify that the value is a number.
  function IsNumeric(sText) {
    var ValidChars = "0123456789";
    var IsNumber=true;
    var Char;

    for (var i=0; i < sText.length && IsNumber == true; i++) {
      Char = sText.charAt(i);
      if (ValidChars.indexOf(Char) == -1) {
        IsNumber = false;
      }
    }
    return IsNumber;
  }

  /**
   * Cookie Handling Functions
   */
  function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else {
      var expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length,c.length);
      }
    }
    return null;
  }

  function eraseCookie(name) {
    createCookie(name,"",-1);
  }

  /**
   * Checks to see if the slide is visible enough.
   * elem = element to check.
   * type = The way to calculate how much is visible.
   * amountVisible = amount that should be visible. Either in percent or px. If
   *                it's not defined then all of the slide must be visible.
   *
   * Returns true or false
   */
  function viewsSlideshowCycleIsVisible(elem, type, amountVisible) {
    // Get the top and bottom of the window;
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var docViewLeft = $(window).scrollLeft();
    var docViewRight = docViewLeft + $(window).width();

    // Get the top, bottom, and height of the slide;
    var elemTop = $(elem).offset().top;
    var elemHeight = $(elem).height();
    var elemBottom = elemTop + elemHeight;
    var elemLeft = $(elem).offset().left;
    var elemWidth = $(elem).width();
    var elemRight = elemLeft + elemWidth;
    var elemArea = elemHeight * elemWidth;

    // Calculate what's hiding in the slide.
    var missingLeft = 0;
    var missingRight = 0;
    var missingTop = 0;
    var missingBottom = 0;

    // Find out how much of the slide is missing from the left.
    if (elemLeft < docViewLeft) {
      missingLeft = docViewLeft - elemLeft;
    }

    // Find out how much of the slide is missing from the right.
    if (elemRight > docViewRight) {
      missingRight = elemRight - docViewRight;
    }

    // Find out how much of the slide is missing from the top.
    if (elemTop < docViewTop) {
      missingTop = docViewTop - elemTop;
    }

    // Find out how much of the slide is missing from the bottom.
    if (elemBottom > docViewBottom) {
      missingBottom = elemBottom - docViewBottom;
    }

    // If there is no amountVisible defined then check to see if the whole slide
    // is visible.
    if (type == 'full') {
      return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
      && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop)
      && (elemLeft >= docViewLeft) && (elemRight <= docViewRight)
      && (elemLeft <= docViewRight) && (elemRight >= docViewLeft));
    }
    else if(type == 'vertical') {
      var verticalShowing = elemHeight - missingTop - missingBottom;

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (amountVisible.indexOf('%')) {
        return (((verticalShowing/elemHeight)*100) >= parseInt(amountVisible));
      }
      else {
        return (verticalShowing >= parseInt(amountVisible));
      }
    }
    else if(type == 'horizontal') {
      var horizontalShowing = elemWidth - missingLeft - missingRight;

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (amountVisible.indexOf('%')) {
        return (((horizontalShowing/elemWidth)*100) >= parseInt(amountVisible));
      }
      else {
        return (horizontalShowing >= parseInt(amountVisible));
      }
    }
    else if(type == 'area') {
      var areaShowing = (elemWidth - missingLeft - missingRight) * (elemHeight - missingTop - missingBottom);

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (amountVisible.indexOf('%')) {
        return (((areaShowing/elemArea)*100) >= parseInt(amountVisible));
      }
      else {
        return (areaShowing >= parseInt(amountVisible));
      }
    }
  }
})(jQuery);
;
/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.9999 (13-NOV-2011)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.2 or later
 */
;(function($, undefined) {

var ver = '2.9999';

// if $.support is not defined (pre jQuery 1.3) add what I need
if ($.support == undefined) {
	$.support = {
		opacity: !($.browser.msie)
	};
}

function debug(s) {
	$.fn.cycle.debug && log(s);
}		
function log() {
	window.console && console.log && console.log('[cycle] ' + Array.prototype.join.call(arguments,' '));
}
$.expr[':'].paused = function(el) {
	return el.cyclePause;
}


// the options arg can be...
//   a number  - indicates an immediate transition should occur to the given slide index
//   a string  - 'pause', 'resume', 'toggle', 'next', 'prev', 'stop', 'destroy' or the name of a transition effect (ie, 'fade', 'zoom', etc)
//   an object - properties to control the slideshow
//
// the arg2 arg can be...
//   the name of an fx (only used in conjunction with a numeric value for 'options')
//   the value true (only used in first arg == 'resume') and indicates
//	 that the resume should occur immediately (not wait for next timeout)

$.fn.cycle = function(options, arg2) {
	var o = { s: this.selector, c: this.context };

	// in 1.3+ we can fix mistakes with the ready state
	if (this.length === 0 && options != 'stop') {
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing slideshow');
			$(function() {
				$(o.s,o.c).cycle(options,arg2);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}

	// iterate the matched nodeset
	return this.each(function() {
		var opts = handleArguments(this, options, arg2);
		if (opts === false)
			return;

		opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
		
		// stop existing slideshow for this container (if there is one)
		if (this.cycleTimeout)
			clearTimeout(this.cycleTimeout);
		this.cycleTimeout = this.cyclePause = 0;

		var $cont = $(this);
		var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
		var els = $slides.get();

		var opts2 = buildOptions($cont, $slides, els, opts, o);
		if (opts2 === false)
			return;

		if (els.length < 2) {
			log('terminating; too few slides: ' + els.length);
			return;
		}

		var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);

		// if it's an auto slideshow, kick it off
		if (startTime) {
			startTime += (opts2.delay || 0);
			if (startTime < 10)
				startTime = 10;
			debug('first timeout: ' + startTime);
			this.cycleTimeout = setTimeout(function(){go(els,opts2,0,!opts.backwards)}, startTime);
		}
	});
};

function triggerPause(cont, byHover, onPager) {
	var opts = $(cont).data('cycle.opts');
	var paused = !!cont.cyclePause;
	if (paused && opts.paused)
		opts.paused(cont, opts, byHover, onPager);
	else if (!paused && opts.resumed)
		opts.resumed(cont, opts, byHover, onPager);
}

// process the args that were passed to the plugin fn
function handleArguments(cont, options, arg2) {
	if (cont.cycleStop == undefined)
		cont.cycleStop = 0;
	if (options === undefined || options === null)
		options = {};
	if (options.constructor == String) {
		switch(options) {
		case 'destroy':
		case 'stop':
			var opts = $(cont).data('cycle.opts');
			if (!opts)
				return false;
			cont.cycleStop++; // callbacks look for change
			if (cont.cycleTimeout)
				clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
			opts.elements && $(opts.elements).stop();
			$(cont).removeData('cycle.opts');
			if (options == 'destroy')
				destroy(opts);
			return false;
		case 'toggle':
			cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
			checkInstantResume(cont.cyclePause, arg2, cont);
			triggerPause(cont);
			return false;
		case 'pause':
			cont.cyclePause = 1;
			triggerPause(cont);
			return false;
		case 'resume':
			cont.cyclePause = 0;
			checkInstantResume(false, arg2, cont);
			triggerPause(cont);
			return false;
		case 'prev':
		case 'next':
			var opts = $(cont).data('cycle.opts');
			if (!opts) {
				log('options not found, "prev/next" ignored');
				return false;
			}
			$.fn.cycle[options](opts);
			return false;
		default:
			options = { fx: options };
		};
		return options;
	}
	else if (options.constructor == Number) {
		// go to the requested slide
		var num = options;
		options = $(cont).data('cycle.opts');
		if (!options) {
			log('options not found, can not advance slide');
			return false;
		}
		if (num < 0 || num >= options.elements.length) {
			log('invalid slide index: ' + num);
			return false;
		}
		options.nextSlide = num;
		if (cont.cycleTimeout) {
			clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
		}
		if (typeof arg2 == 'string')
			options.oneTimeFx = arg2;
		go(options.elements, options, 1, num >= options.currSlide);
		return false;
	}
	return options;
	
	function checkInstantResume(isPaused, arg2, cont) {
		if (!isPaused && arg2 === true) { // resume now!
			var options = $(cont).data('cycle.opts');
			if (!options) {
				log('options not found, can not resume');
				return false;
			}
			if (cont.cycleTimeout) {
				clearTimeout(cont.cycleTimeout);
				cont.cycleTimeout = 0;
			}
			go(options.elements, options, 1, !options.backwards);
		}
	}
};

function removeFilter(el, opts) {
	if (!$.support.opacity && opts.cleartype && el.style.filter) {
		try { el.style.removeAttribute('filter'); }
		catch(smother) {} // handle old opera versions
	}
};

// unbind event handlers
function destroy(opts) {
	if (opts.next)
		$(opts.next).unbind(opts.prevNextEvent);
	if (opts.prev)
		$(opts.prev).unbind(opts.prevNextEvent);
	
	if (opts.pager || opts.pagerAnchorBuilder)
		$.each(opts.pagerAnchors || [], function() {
			this.unbind().remove();
		});
	opts.pagerAnchors = null;
	if (opts.destroy) // callback
		opts.destroy(opts);
};

// one-time initialization
function buildOptions($cont, $slides, els, options, o) {
	var startingSlideSpecified;
	// support metadata plugin (v1.0 and v2.0)
	var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
	var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
	if (meta)
		opts = $.extend(opts, meta);
	if (opts.autostop)
		opts.countdown = opts.autostopCount || els.length;

	var cont = $cont[0];
	$cont.data('cycle.opts', opts);
	opts.$cont = $cont;
	opts.stopCount = cont.cycleStop;
	opts.elements = els;
	opts.before = opts.before ? [opts.before] : [];
	opts.after = opts.after ? [opts.after] : [];

	// push some after callbacks
	if (!$.support.opacity && opts.cleartype)
		opts.after.push(function() { removeFilter(this, opts); });
	if (opts.continuous)
		opts.after.push(function() { go(els,opts,0,!opts.backwards); });

	saveOriginalOpts(opts);

	// clearType corrections
	if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
		clearTypeFix($slides);

	// container requires non-static position so that slides can be position within
	if ($cont.css('position') == 'static')
		$cont.css('position', 'relative');
	if (opts.width)
		$cont.width(opts.width);
	if (opts.height && opts.height != 'auto')
		$cont.height(opts.height);

	if (opts.startingSlide != undefined) {
		opts.startingSlide = parseInt(opts.startingSlide,10);
		if (opts.startingSlide >= els.length || opts.startSlide < 0)
			opts.startingSlide = 0; // catch bogus input
		else 
			startingSlideSpecified = true;
	}
	else if (opts.backwards)
		opts.startingSlide = els.length - 1;
	else
		opts.startingSlide = 0;

	// if random, mix up the slide array
	if (opts.random) {
		opts.randomMap = [];
		for (var i = 0; i < els.length; i++)
			opts.randomMap.push(i);
		opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		if (startingSlideSpecified) {
			// try to find the specified starting slide and if found set start slide index in the map accordingly
			for ( var cnt = 0; cnt < els.length; cnt++ ) {
				if ( opts.startingSlide == opts.randomMap[cnt] ) {
					opts.randomIndex = cnt;
				}
			}
		}
		else {
			opts.randomIndex = 1;
			opts.startingSlide = opts.randomMap[1];
		}
	}
	else if (opts.startingSlide >= els.length)
		opts.startingSlide = 0; // catch bogus input
	opts.currSlide = opts.startingSlide || 0;
	var first = opts.startingSlide;

	// set position and zIndex on all the slides
	$slides.css({position: 'absolute', top:0, left:0}).hide().each(function(i) {
		var z;
		if (opts.backwards)
			z = first ? i <= first ? els.length + (i-first) : first-i : els.length-i;
		else
			z = first ? i >= first ? els.length - (i-first) : first-i : els.length-i;
		$(this).css('z-index', z)
	});

	// make sure first slide is visible
	$(els[first]).css('opacity',1).show(); // opacity bit needed to handle restart use case
	removeFilter(els[first], opts);

	// stretch slides
	if (opts.fit) {
		if (!opts.aspect) {
	        if (opts.width)
	            $slides.width(opts.width);
	        if (opts.height && opts.height != 'auto')
	            $slides.height(opts.height);
		} else {
			$slides.each(function(){
				var $slide = $(this);
				var ratio = (opts.aspect === true) ? $slide.width()/$slide.height() : opts.aspect;
				if( opts.width && $slide.width() != opts.width ) {
					$slide.width( opts.width );
					$slide.height( opts.width / ratio );
				}

				if( opts.height && $slide.height() < opts.height ) {
					$slide.height( opts.height );
					$slide.width( opts.height * ratio );
				}
			});
		}
	}

	if (opts.center && ((!opts.fit) || opts.aspect)) {
		$slides.each(function(){
			var $slide = $(this);
			$slide.css({
				"margin-left": opts.width ?
					((opts.width - $slide.width()) / 2) + "px" :
					0,
				"margin-top": opts.height ?
					((opts.height - $slide.height()) / 2) + "px" :
					0
			});
		});
	}

	if (opts.center && !opts.fit && !opts.slideResize) {
	  	$slides.each(function(){
	    	var $slide = $(this);
	    	$slide.css({
	      		"margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
	      		"margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
	    	});
	  	});
	}
		
	// stretch container
	var reshape = opts.containerResize && !$cont.innerHeight();
	if (reshape) { // do this only if container has no size http://tinyurl.com/da2oa9
		var maxw = 0, maxh = 0;
		for(var j=0; j < els.length; j++) {
			var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
			if (!w) w = e.offsetWidth || e.width || $e.attr('width');
			if (!h) h = e.offsetHeight || e.height || $e.attr('height');
			maxw = w > maxw ? w : maxw;
			maxh = h > maxh ? h : maxh;
		}
		if (maxw > 0 && maxh > 0)
			$cont.css({width:maxw+'px',height:maxh+'px'});
	}

	var pauseFlag = false;  // https://github.com/malsup/cycle/issues/44
	if (opts.pause)
		$cont.hover(
			function(){
				pauseFlag = true;
				this.cyclePause++;
				triggerPause(cont, true);
			},
			function(){
				pauseFlag && this.cyclePause--;
				triggerPause(cont, true);
			}
		);

	if (supportMultiTransitions(opts) === false)
		return false;

	// apparently a lot of people use image slideshows without height/width attributes on the images.
	// Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
	var requeue = false;
	options.requeueAttempts = options.requeueAttempts || 0;
	$slides.each(function() {
		// try to get height/width of each slide
		var $el = $(this);
		this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
		this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);

		if ( $el.is('img') ) {
			// sigh..  sniffing, hacking, shrugging...  this crappy hack tries to account for what browsers do when
			// an image is being downloaded and the markup did not include sizing info (height/width attributes);
			// there seems to be some "default" sizes used in this situation
			var loadingIE	= ($.browser.msie  && this.cycleW == 28 && this.cycleH == 30 && !this.complete);
			var loadingFF	= ($.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete);
			var loadingOp	= ($.browser.opera && ((this.cycleW == 42 && this.cycleH == 19) || (this.cycleW == 37 && this.cycleH == 17)) && !this.complete);
			var loadingOther = (this.cycleH == 0 && this.cycleW == 0 && !this.complete);
			// don't requeue for images that are still loading but have a valid size
			if (loadingIE || loadingFF || loadingOp || loadingOther) {
				if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) { // track retry count so we don't loop forever
					log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
					setTimeout(function() {$(o.s,o.c).cycle(options)}, opts.requeueTimeout);
					requeue = true;
					return false; // break each loop
				}
				else {
					log('could not determine size of image: '+this.src, this.cycleW, this.cycleH);
				}
			}
		}
		return true;
	});

	if (requeue)
		return false;

	opts.cssBefore = opts.cssBefore || {};
	opts.cssAfter = opts.cssAfter || {};
	opts.cssFirst = opts.cssFirst || {};
	opts.animIn = opts.animIn || {};
	opts.animOut = opts.animOut || {};

	$slides.not(':eq('+first+')').css(opts.cssBefore);
	$($slides[first]).css(opts.cssFirst);

	if (opts.timeout) {
		opts.timeout = parseInt(opts.timeout,10);
		// ensure that timeout and speed settings are sane
		if (opts.speed.constructor == String)
			opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed,10);
		if (!opts.sync)
			opts.speed = opts.speed / 2;
		
		var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
		while((opts.timeout - opts.speed) < buffer) // sanitize timeout
			opts.timeout += opts.speed;
	}
	if (opts.easing)
		opts.easeIn = opts.easeOut = opts.easing;
	if (!opts.speedIn)
		opts.speedIn = opts.speed;
	if (!opts.speedOut)
		opts.speedOut = opts.speed;

	opts.slideCount = els.length;
	opts.currSlide = opts.lastSlide = first;
	if (opts.random) {
		if (++opts.randomIndex == els.length)
			opts.randomIndex = 0;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.backwards)
		opts.nextSlide = opts.startingSlide == 0 ? (els.length-1) : opts.startingSlide-1;
	else
		opts.nextSlide = opts.startingSlide >= (els.length-1) ? 0 : opts.startingSlide+1;

	// run transition init fn
	if (!opts.multiFx) {
		var init = $.fn.cycle.transitions[opts.fx];
		if ($.isFunction(init))
			init($cont, $slides, opts);
		else if (opts.fx != 'custom' && !opts.multiFx) {
			log('unknown transition: ' + opts.fx,'; slideshow terminating');
			return false;
		}
	}

	// fire artificial events
	var e0 = $slides[first];
	if (!opts.skipInitializationCallbacks) {
		if (opts.before.length)
			opts.before[0].apply(e0, [e0, e0, opts, true]);
		if (opts.after.length)
			opts.after[0].apply(e0, [e0, e0, opts, true]);
	}
	if (opts.next)
		$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1)});
	if (opts.prev)
		$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0)});
	if (opts.pager || opts.pagerAnchorBuilder)
		buildPager(els,opts);

	exposeAddSlide(opts, els);

	return opts;
};

// save off original opts so we can restore after clearing state
function saveOriginalOpts(opts) {
	opts.original = { before: [], after: [] };
	opts.original.cssBefore = $.extend({}, opts.cssBefore);
	opts.original.cssAfter  = $.extend({}, opts.cssAfter);
	opts.original.animIn	= $.extend({}, opts.animIn);
	opts.original.animOut   = $.extend({}, opts.animOut);
	$.each(opts.before, function() { opts.original.before.push(this); });
	$.each(opts.after,  function() { opts.original.after.push(this); });
};

function supportMultiTransitions(opts) {
	var i, tx, txs = $.fn.cycle.transitions;
	// look for multiple effects
	if (opts.fx.indexOf(',') > 0) {
		opts.multiFx = true;
		opts.fxs = opts.fx.replace(/\s*/g,'').split(',');
		// discard any bogus effect names
		for (i=0; i < opts.fxs.length; i++) {
			var fx = opts.fxs[i];
			tx = txs[fx];
			if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
				log('discarding unknown transition: ',fx);
				opts.fxs.splice(i,1);
				i--;
			}
		}
		// if we have an empty list then we threw everything away!
		if (!opts.fxs.length) {
			log('No valid transitions named; slideshow terminating.');
			return false;
		}
	}
	else if (opts.fx == 'all') {  // auto-gen the list of transitions
		opts.multiFx = true;
		opts.fxs = [];
		for (p in txs) {
			tx = txs[p];
			if (txs.hasOwnProperty(p) && $.isFunction(tx))
				opts.fxs.push(p);
		}
	}
	if (opts.multiFx && opts.randomizeEffects) {
		// munge the fxs array to make effect selection random
		var r1 = Math.floor(Math.random() * 20) + 30;
		for (i = 0; i < r1; i++) {
			var r2 = Math.floor(Math.random() * opts.fxs.length);
			opts.fxs.push(opts.fxs.splice(r2,1)[0]);
		}
		debug('randomized fx sequence: ',opts.fxs);
	}
	return true;
};

// provide a mechanism for adding slides after the slideshow has started
function exposeAddSlide(opts, els) {
	opts.addSlide = function(newSlide, prepend) {
		var $s = $(newSlide), s = $s[0];
		if (!opts.autostopCount)
			opts.countdown++;
		els[prepend?'unshift':'push'](s);
		if (opts.els)
			opts.els[prepend?'unshift':'push'](s); // shuffle needs this
		opts.slideCount = els.length;

		// add the slide to the random map and resort
		if (opts.random) {
			opts.randomMap.push(opts.slideCount-1);
			opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		}

		$s.css('position','absolute');
		$s[prepend?'prependTo':'appendTo'](opts.$cont);

		if (prepend) {
			opts.currSlide++;
			opts.nextSlide++;
		}

		if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
			clearTypeFix($s);

		if (opts.fit && opts.width)
			$s.width(opts.width);
		if (opts.fit && opts.height && opts.height != 'auto')
			$s.height(opts.height);
		s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
		s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();

		$s.css(opts.cssBefore);

		if (opts.pager || opts.pagerAnchorBuilder)
			$.fn.cycle.createPagerAnchor(els.length-1, s, $(opts.pager), els, opts);

		if ($.isFunction(opts.onAddSlide))
			opts.onAddSlide($s);
		else
			$s.hide(); // default behavior
	};
}

// reset internal state; we do this on every pass in order to support multiple effects
$.fn.cycle.resetState = function(opts, fx) {
	fx = fx || opts.fx;
	opts.before = []; opts.after = [];
	opts.cssBefore = $.extend({}, opts.original.cssBefore);
	opts.cssAfter  = $.extend({}, opts.original.cssAfter);
	opts.animIn	= $.extend({}, opts.original.animIn);
	opts.animOut   = $.extend({}, opts.original.animOut);
	opts.fxFn = null;
	$.each(opts.original.before, function() { opts.before.push(this); });
	$.each(opts.original.after,  function() { opts.after.push(this); });

	// re-init
	var init = $.fn.cycle.transitions[fx];
	if ($.isFunction(init))
		init(opts.$cont, $(opts.elements), opts);
};

// this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
function go(els, opts, manual, fwd) {
	// opts.busy is true if we're in the middle of an animation
	if (manual && opts.busy && opts.manualTrump) {
		// let manual transitions requests trump active ones
		debug('manualTrump in go(), stopping active transition');
		$(els).stop(true,true);
		opts.busy = 0;
	}
	// don't begin another timeout-based transition if there is one active
	if (opts.busy) {
		debug('transition active, ignoring new tx request');
		return;
	}

	var p = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];

	// stop cycling if we have an outstanding stop request
	if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
		return;

	// check to see if we should stop cycling based on autostop options
	if (!manual && !p.cyclePause && !opts.bounce &&
		((opts.autostop && (--opts.countdown <= 0)) ||
		(opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
		if (opts.end)
			opts.end(opts);
		return;
	}

	// if slideshow is paused, only transition on a manual trigger
	var changed = false;
	if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
		changed = true;
		var fx = opts.fx;
		// keep trying to get the slide size if we don't have it yet
		curr.cycleH = curr.cycleH || $(curr).height();
		curr.cycleW = curr.cycleW || $(curr).width();
		next.cycleH = next.cycleH || $(next).height();
		next.cycleW = next.cycleW || $(next).width();

		// support multiple transition types
		if (opts.multiFx) {
			if (fwd && (opts.lastFx == undefined || ++opts.lastFx >= opts.fxs.length))
				opts.lastFx = 0;
			else if (!fwd && (opts.lastFx == undefined || --opts.lastFx < 0))
				opts.lastFx = opts.fxs.length - 1;
			fx = opts.fxs[opts.lastFx];
		}

		// one-time fx overrides apply to:  $('div').cycle(3,'zoom');
		if (opts.oneTimeFx) {
			fx = opts.oneTimeFx;
			opts.oneTimeFx = null;
		}

		$.fn.cycle.resetState(opts, fx);

		// run the before callbacks
		if (opts.before.length)
			$.each(opts.before, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});

		// stage the after callacks
		var after = function() {
			opts.busy = 0;
			$.each(opts.after, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});
			if (!p.cycleStop) {
				// queue next transition
				queueNext();
			}
		};

		debug('tx firing('+fx+'); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);
		
		// get ready to perform the transition
		opts.busy = 1;
		if (opts.fxFn) // fx function provided?
			opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
			$.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else
			$.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
	}
	else {
		queueNext();
	}

	if (changed || opts.nextSlide == opts.currSlide) {
		// calculate the next slide
		opts.lastSlide = opts.currSlide;
		if (opts.random) {
			opts.currSlide = opts.nextSlide;
			if (++opts.randomIndex == els.length) {
				opts.randomIndex = 0;
				opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
			}
			opts.nextSlide = opts.randomMap[opts.randomIndex];
			if (opts.nextSlide == opts.currSlide)
				opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
		}
		else if (opts.backwards) {
			var roll = (opts.nextSlide - 1) < 0;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = 1;
				opts.currSlide = 0;
			}
			else {
				opts.nextSlide = roll ? (els.length-1) : opts.nextSlide-1;
				opts.currSlide = roll ? 0 : opts.nextSlide+1;
			}
		}
		else { // sequence
			var roll = (opts.nextSlide + 1) == els.length;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = els.length-2;
				opts.currSlide = els.length-1;
			}
			else {
				opts.nextSlide = roll ? 0 : opts.nextSlide+1;
				opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
			}
		}
	}
	if (changed && opts.pager)
		opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
	
	function queueNext() {
		// stage the next transition
		var ms = 0, timeout = opts.timeout;
		if (opts.timeout && !opts.continuous) {
			ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
         if (opts.fx == 'shuffle')
            ms -= opts.speedOut;
      }
		else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
			ms = 10;
		if (ms > 0)
			p.cycleTimeout = setTimeout(function(){ go(els, opts, 0, !opts.backwards) }, ms);
	}
};

// invoked after transition
$.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
   $(pager).each(function() {
       $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
   });
};

// calculate timeout value for current transition
function getTimeout(curr, next, opts, fwd) {
	if (opts.timeoutFn) {
		// call user provided calc fn
		var t = opts.timeoutFn.call(curr,curr,next,opts,fwd);
		while (opts.fx != 'none' && (t - opts.speed) < 250) // sanitize timeout
			t += opts.speed;
		debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
		if (t !== false)
			return t;
	}
	return opts.timeout;
};

// expose next/prev function, caller must pass in state
$.fn.cycle.next = function(opts) { advance(opts,1); };
$.fn.cycle.prev = function(opts) { advance(opts,0);};

// advance slide forward or back
function advance(opts, moveForward) {
	var val = moveForward ? 1 : -1;
	var els = opts.elements;
	var p = opts.$cont[0], timeout = p.cycleTimeout;
	if (timeout) {
		clearTimeout(timeout);
		p.cycleTimeout = 0;
	}
	if (opts.random && val < 0) {
		// move back to the previously display slide
		opts.randomIndex--;
		if (--opts.randomIndex == -2)
			opts.randomIndex = els.length-2;
		else if (opts.randomIndex == -1)
			opts.randomIndex = els.length-1;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.random) {
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else {
		opts.nextSlide = opts.currSlide + val;
		if (opts.nextSlide < 0) {
			if (opts.nowrap) return false;
			opts.nextSlide = els.length - 1;
		}
		else if (opts.nextSlide >= els.length) {
			if (opts.nowrap) return false;
			opts.nextSlide = 0;
		}
	}

	var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
	if ($.isFunction(cb))
		cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
	go(els, opts, 1, moveForward);
	return false;
};

function buildPager(els, opts) {
	var $p = $(opts.pager);
	$.each(els, function(i,o) {
		$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);
	});
	opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
};

$.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
	var a;
	if ($.isFunction(opts.pagerAnchorBuilder)) {
		a = opts.pagerAnchorBuilder(i,el);
		debug('pagerAnchorBuilder('+i+', el) returned: ' + a);
	}
	else
		a = '<a href="#">'+(i+1)+'</a>';
		
	if (!a)
		return;
	var $a = $(a);
	// don't reparent if anchor is in the dom
	if ($a.parents('body').length === 0) {
		var arr = [];
		if ($p.length > 1) {
			$p.each(function() {
				var $clone = $a.clone(true);
				$(this).append($clone);
				arr.push($clone[0]);
			});
			$a = $(arr);
		}
		else {
			$a.appendTo($p);
		}
	}

	opts.pagerAnchors =  opts.pagerAnchors || [];
	opts.pagerAnchors.push($a);
	
	var pagerFn = function(e) {
		e.preventDefault();
		opts.nextSlide = i;
		var p = opts.$cont[0], timeout = p.cycleTimeout;
		if (timeout) {
			clearTimeout(timeout);
			p.cycleTimeout = 0;
		}
		var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
		if ($.isFunction(cb))
			cb(opts.nextSlide, els[opts.nextSlide]);
		go(els,opts,1,opts.currSlide < i); // trigger the trans
//		return false; // <== allow bubble
	}
	
	if ( /mouseenter|mouseover/i.test(opts.pagerEvent) ) {
		$a.hover(pagerFn, function(){/* no-op */} );
	}
	else {
		$a.bind(opts.pagerEvent, pagerFn);
	}
	
	if ( ! /^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
		$a.bind('click.cycle', function(){return false;}); // suppress click
	
	var cont = opts.$cont[0];
	var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
	if (opts.pauseOnPagerHover) {
		$a.hover(
			function() { 
				pauseFlag = true;
				cont.cyclePause++; 
				triggerPause(cont,true,true);
			}, function() { 
				pauseFlag && cont.cyclePause--; 
				triggerPause(cont,true,true);
			} 
		);
	}
};

// helper fn to calculate the number of slides between the current and the next
$.fn.cycle.hopsFromLast = function(opts, fwd) {
	var hops, l = opts.lastSlide, c = opts.currSlide;
	if (fwd)
		hops = c > l ? c - l : opts.slideCount - l;
	else
		hops = c < l ? l - c : l + opts.slideCount - c;
	return hops;
};

// fix clearType problems in ie6 by setting an explicit bg color
// (otherwise text slides look horrible during a fade transition)
function clearTypeFix($slides) {
	debug('applying clearType background-color hack');
	function hex(s) {
		s = parseInt(s,10).toString(16);
		return s.length < 2 ? '0'+s : s;
	};
	function getBg(e) {
		for ( ; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
			var v = $.css(e,'background-color');
			if (v && v.indexOf('rgb') >= 0 ) {
				var rgb = v.match(/\d+/g);
				return '#'+ hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
			}
			if (v && v != 'transparent')
				return v;
		}
		return '#ffffff';
	};
	$slides.each(function() { $(this).css('background-color', getBg(this)); });
};

// reset common props before the next transition
$.fn.cycle.commonReset = function(curr,next,opts,w,h,rev) {
	$(opts.elements).not(curr).hide();
	if (typeof opts.cssBefore.opacity == 'undefined')
		opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	if (opts.slideResize && w !== false && next.cycleW > 0)
		opts.cssBefore.width = next.cycleW;
	if (opts.slideResize && h !== false && next.cycleH > 0)
		opts.cssBefore.height = next.cycleH;
	opts.cssAfter = opts.cssAfter || {};
	opts.cssAfter.display = 'none';
	$(curr).css('zIndex',opts.slideCount + (rev === true ? 1 : 0));
	$(next).css('zIndex',opts.slideCount + (rev === true ? 0 : 1));
};

// the actual fn for effecting a transition
$.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
	var $l = $(curr), $n = $(next);
	var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut;
	$n.css(opts.cssBefore);
	if (speedOverride) {
		if (typeof speedOverride == 'number')
			speedIn = speedOut = speedOverride;
		else
			speedIn = speedOut = 1;
		easeIn = easeOut = null;
	}
	var fn = function() {
		$n.animate(opts.animIn, speedIn, easeIn, function() {
			cb();
		});
	};
	$l.animate(opts.animOut, speedOut, easeOut, function() {
		$l.css(opts.cssAfter);
		if (!opts.sync) 
			fn();
	});
	if (opts.sync) fn();
};

// transition definitions - only fade is defined here, transition pack defines the rest
$.fn.cycle.transitions = {
	fade: function($cont, $slides, opts) {
		$slides.not(':eq('+opts.currSlide+')').css('opacity',0);
		opts.before.push(function(curr,next,opts) {
			$.fn.cycle.commonReset(curr,next,opts);
			opts.cssBefore.opacity = 0;
		});
		opts.animIn	   = { opacity: 1 };
		opts.animOut   = { opacity: 0 };
		opts.cssBefore = { top: 0, left: 0 };
	}
};

$.fn.cycle.ver = function() { return ver; };

// override these globally if you like (they are all optional)
$.fn.cycle.defaults = {
	activePagerClass: 'activeSlide', // class name used for the active pager link
	after:		   null,  // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
	allowPagerClickBubble: false, // allows or prevents click event on pager anchors from bubbling
	animIn:		   null,  // properties that define how the slide animates in
	animOut:	   null,  // properties that define how the slide animates out
	aspect:		   false,  // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
	autostop:	   0,	  // true to end slideshow after X transitions (where X == slide count)
	autostopCount: 0,	  // number of transitions (optionally used with autostop to define X)
	backwards:     false, // true to start slideshow at last slide and move backwards through the stack
	before:		   null,  // transition callback (scope set to element to be shown):	 function(currSlideElement, nextSlideElement, options, forwardFlag)
	center: 	   null,  // set to true to have cycle add top/left margin to each slide (use with width and height options)
	cleartype:	   !$.support.opacity,  // true if clearType corrections should be applied (for IE)
	cleartypeNoBg: false, // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
	containerResize: 1,	  // resize container to fit largest slide
	continuous:	   0,	  // true to start next transition immediately after current one completes
	cssAfter:	   null,  // properties that defined the state of the slide after transitioning out
	cssBefore:	   null,  // properties that define the initial state of the slide before transitioning in
	delay:		   0,	  // additional delay (in ms) for first transition (hint: can be negative)
	easeIn:		   null,  // easing for "in" transition
	easeOut:	   null,  // easing for "out" transition
	easing:		   null,  // easing method for both in and out transitions
	end:		   null,  // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
	fastOnEvent:   0,	  // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
	fit:		   0,	  // force slides to fit container
	fx:			  'fade', // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
	fxFn:		   null,  // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
	height:		  'auto', // container height (if the 'fit' option is true, the slides will be set to this height as well)
	manualTrump:   true,  // causes manual transition to stop an active transition instead of being ignored
	metaAttr:     'cycle',// data- attribute that holds the option data for the slideshow
	next:		   null,  // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
	nowrap:		   0,	  // true to prevent slideshow from wrapping
	onPagerEvent:  null,  // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
	onPrevNextEvent: null,// callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
	pager:		   null,  // element, jQuery object, or jQuery selector string for the element to use as pager container
	pagerAnchorBuilder: null, // callback fn for building anchor links:  function(index, DOMelement)
	pagerEvent:	  'click.cycle', // name of event which drives the pager navigation
	pause:		   0,	  // true to enable "pause on hover"
	pauseOnPagerHover: 0, // true to pause when hovering over pager link
	prev:		   null,  // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
	prevNextEvent:'click.cycle',// event which drives the manual transition to the previous or next slide
	random:		   0,	  // true for random, false for sequence (not applicable to shuffle fx)
	randomizeEffects: 1,  // valid when multiple effects are used; true to make the effect sequence random
	requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
	requeueTimeout: 250,  // ms delay for requeue
	rev:		   0,	  // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
	shuffle:	   null,  // coords for shuffle animation, ex: { top:15, left: 200 }
	skipInitializationCallbacks: false, // set to true to disable the first before/after callback that occurs prior to any transition
	slideExpr:	   null,  // expression for selecting slides (if something other than all children is required)
	slideResize:   1,     // force slide width/height to fixed size before every transition
	speed:		   1000,  // speed of the transition (any valid fx speed value)
	speedIn:	   null,  // speed of the 'in' transition
	speedOut:	   null,  // speed of the 'out' transition
	startingSlide: undefined,	  // zero-based index of the first slide to be displayed
	sync:		   1,	  // true if in/out transitions should occur simultaneously
	timeout:	   4000,  // milliseconds between slide transitions (0 to disable auto advance)
	timeoutFn:     null,  // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
	updateActivePagerLink: null, // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
	width:         null   // container width (if the 'fit' option is true, the slides will be set to this width as well)
};

})(jQuery);


/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {

//
// These functions define slide initialization and properties for the named
// transitions. To save file size feel free to remove any of these that you
// don't need.
//
$.fn.cycle.transitions.none = function($cont, $slides, opts) {
	opts.fxFn = function(curr,next,opts,after){
		$(next).show();
		$(curr).hide();
		after();
	};
};

// not a cross-fade, fadeout only fades out the top slide
$.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
	$slides.not(':eq('+opts.currSlide+')').css({ display: 'block', 'opacity': 1 });
	opts.before.push(function(curr,next,opts,w,h,rev) {
		$(curr).css('zIndex',opts.slideCount + (!rev === true ? 1 : 0));
		$(next).css('zIndex',opts.slideCount + (!rev === true ? 0 : 1));
	});
	opts.animIn.opacity = 1;
	opts.animOut.opacity = 0;
	opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	opts.cssAfter.zIndex = 0;
};

// scrollUp/Down/Left/Right
$.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.cssFirst.top = 0;
	opts.animIn.top = 0;
	opts.animOut.top = -h;
};
$.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssFirst.top = 0;
	opts.cssBefore.top = -h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
$.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = 0-w;
};
$.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = -w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
$.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
	$cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
		opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
	});
	opts.cssFirst.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = 0;
};
$.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.top = fwd ? (1-next.cycleH) : (next.cycleH-1);
		opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.left = 0;
};

// slideX/slideY
$.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.width = 'show';
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animIn.height = 'show';
	opts.animOut.height = 0;
};

// shuffle
$.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
	var i, w = $cont.css('overflow', 'visible').width();
	$slides.css({left: 0, top: 0});
	opts.before.push(function(curr,next,opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
	});
	// only adjust speed once!
	if (!opts.speedAdjusted) {
		opts.speed = opts.speed / 2; // shuffle has 2 transitions
		opts.speedAdjusted = true;
	}
	opts.random = 0;
	opts.shuffle = opts.shuffle || {left:-w, top:15};
	opts.els = [];
	for (i=0; i < $slides.length; i++)
		opts.els.push($slides[i]);

	for (i=0; i < opts.currSlide; i++)
		opts.els.push(opts.els.shift());

	// custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
	opts.fxFn = function(curr, next, opts, cb, fwd) {
		if (opts.rev)
			fwd = !fwd;
		var $el = fwd ? $(curr) : $(next);
		$(next).css(opts.cssBefore);
		var count = opts.slideCount;
		$el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
			var hops = $.fn.cycle.hopsFromLast(opts, fwd);
			for (var k=0; k < hops; k++)
				fwd ? opts.els.push(opts.els.shift()) : opts.els.unshift(opts.els.pop());
			if (fwd) {
				for (var i=0, len=opts.els.length; i < len; i++)
					$(opts.els[i]).css('z-index', len-i+count);
			}
			else {
				var z = $(curr).css('z-index');
				$el.css('z-index', parseInt(z,10)+1+count);
			}
			$el.animate({left:0, top:0}, opts.speedOut, opts.easeOut, function() {
				$(fwd ? this : curr).hide();
				if (cb) cb();
			});
		});
	};
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
};

// turnUp/Down/Left/Right
$.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = next.cycleH;
		opts.animIn.height = next.cycleH;
		opts.animOut.width = next.cycleW;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.height = 0;
	opts.animIn.top = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = next.cycleW;
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
		opts.animOut.left = curr.cycleW;
	});
	$.extend(opts.cssBefore, { top: 0, left: 0, width: 0 });
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};

// zoom
$.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.cssBefore.left = next.cycleW/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
		$.extend(opts.animOut, { width: 0, height: 0, top: curr.cycleH/2, left: curr.cycleW/2 });
	});
	opts.cssFirst.top = 0;
	opts.cssFirst.left = 0;
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
};

// fadeZoom
$.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false);
		opts.cssBefore.left = next.cycleW/2;
		opts.cssBefore.top = next.cycleH/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
	});
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
	opts.animOut.opacity = 0;
};

// blindX
$.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.width = next.cycleW;
		opts.animOut.left   = curr.cycleW;
	});
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
// blindY
$.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
// blindZ
$.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	var w = $cont.width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = w;
	opts.animIn.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = h;
	opts.animOut.left = w;
};

// growX - grow horizontally from centered 0 width
$.fn.cycle.transitions.growX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = this.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// growY - grow vertically from centered 0 height
$.fn.cycle.transitions.growY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = this.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = this.cycleH;
		opts.animOut.top = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// curtainX - squeeze in both edges horizontally
$.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true,true);
		opts.cssBefore.left = next.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = curr.cycleW/2;
		opts.animOut.width = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// curtainY - squeeze in both edges vertically
$.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = next.cycleH;
		opts.animOut.top = curr.cycleH/2;
		opts.animOut.height = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// cover - curr slide covered by next slide
$.fn.cycle.transitions.cover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		if (d == 'right')
			opts.cssBefore.left = -w;
		else if (d == 'up')
			opts.cssBefore.top = h;
		else if (d == 'down')
			opts.cssBefore.top = -h;
		else
			opts.cssBefore.left = w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// uncover - curr slide moves off next slide
$.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		if (d == 'right')
			opts.animOut.left = w;
		else if (d == 'up')
			opts.animOut.top = -h;
		else if (d == 'down')
			opts.animOut.top = h;
		else
			opts.animOut.left = -w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// toss - move top slide and fade away
$.fn.cycle.transitions.toss = function($cont, $slides, opts) {
	var w = $cont.css('overflow','visible').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		// provide default toss settings if animOut not provided
		if (!opts.animOut.left && !opts.animOut.top)
			$.extend(opts.animOut, { left: w*2, top: -h/2, opacity: 0 });
		else
			opts.animOut.opacity = 0;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
};

// wipe - clip animation
$.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.cssBefore = opts.cssBefore || {};
	var clip;
	if (opts.clip) {
		if (/l2r/.test(opts.clip))
			clip = 'rect(0px 0px '+h+'px 0px)';
		else if (/r2l/.test(opts.clip))
			clip = 'rect(0px '+w+'px '+h+'px '+w+'px)';
		else if (/t2b/.test(opts.clip))
			clip = 'rect(0px '+w+'px 0px 0px)';
		else if (/b2t/.test(opts.clip))
			clip = 'rect('+h+'px '+w+'px '+h+'px 0px)';
		else if (/zoom/.test(opts.clip)) {
			var top = parseInt(h/2,10);
			var left = parseInt(w/2,10);
			clip = 'rect('+top+'px '+left+'px '+top+'px '+left+'px)';
		}
	}

	opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';

	var d = opts.cssBefore.clip.match(/(\d+)/g);
	var t = parseInt(d[0],10), r = parseInt(d[1],10), b = parseInt(d[2],10), l = parseInt(d[3],10);

	opts.before.push(function(curr, next, opts) {
		if (curr == next) return;
		var $curr = $(curr), $next = $(next);
		$.fn.cycle.commonReset(curr,next,opts,true,true,false);
		opts.cssAfter.display = 'block';

		var step = 1, count = parseInt((opts.speedIn / 13),10) - 1;
		(function f() {
			var tt = t ? t - parseInt(step * (t/count),10) : 0;
			var ll = l ? l - parseInt(step * (l/count),10) : 0;
			var bb = b < h ? b + parseInt(step * ((h-b)/count || 1),10) : h;
			var rr = r < w ? r + parseInt(step * ((w-r)/count || 1),10) : w;
			$next.css({ clip: 'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)' });
			(step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
		})();
	});
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
	opts.animIn	   = { left: 0 };
	opts.animOut   = { left: 0 };
};

})(jQuery);;
/*!
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){

var 
	// Will speed up references to window, and allows munging its name.
	window = this,
	// Will speed up references to undefined, and allows munging its name.
	undefined,
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,
	// Map over the $ in case of overwrite
	_$ = window.$,

	jQuery = window.jQuery = window.$ = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context );
	},

	// A simple way to check for HTML strings or ID strings
	// (both of which we optimize for)
	quickExpr = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,
	// Is it a simple selector
	isSimple = /^.[^:#\[\.,]*$/;

jQuery.fn = jQuery.prototype = {
	init: function( selector, context ) {
		// Make sure that a selection was provided
		selector = selector || document;

		// Handle $(DOMElement)
		if ( selector.nodeType ) {
			this[0] = selector;
			this.length = 1;
			this.context = selector;
			return this;
		}
		// Handle HTML strings
		if ( typeof selector === "string" ) {
			// Are we dealing with HTML string or an ID?
			var match = quickExpr.exec( selector );

			// Verify a match, and that no context was specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] )
					selector = jQuery.clean( [ match[1] ], context );

				// HANDLE: $("#id")
				else {
					var elem = document.getElementById( match[3] );

					// Handle the case where IE and Opera return items
					// by name instead of ID
					if ( elem && elem.id != match[3] )
						return jQuery().find( selector );

					// Otherwise, we inject the element directly into the jQuery object
					var ret = jQuery( elem || [] );
					ret.context = document;
					ret.selector = selector;
					return ret;
				}

			// HANDLE: $(expr, [context])
			// (which is just equivalent to: $(content).find(expr)
			} else
				return jQuery( context ).find( selector );

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) )
			return jQuery( document ).ready( selector );

		// Make sure that old selector state is passed along
		if ( selector.selector && selector.context ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return this.setArray(jQuery.isArray( selector ) ?
			selector :
			jQuery.makeArray(selector));
	},

	// Start with an empty selector
	selector: "",

	// The current version of jQuery being used
	jquery: "1.3.2",

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num === undefined ?

			// Return a 'clean' array
			Array.prototype.slice.call( this ) :

			// Return just the object
			this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems, name, selector ) {
		// Build a new jQuery matched element set
		var ret = jQuery( elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		ret.context = this.context;

		if ( name === "find" )
			ret.selector = this.selector + (this.selector ? " " : "") + selector;
		else if ( name )
			ret.selector = this.selector + "." + name + "(" + selector + ")";

		// Return the newly-formed element set
		return ret;
	},

	// Force the current matched set of elements to become
	// the specified array of elements (destroying the stack in the process)
	// You should use pushStack() in order to do this, but maintain the stack
	setArray: function( elems ) {
		// Resetting the length to 0, then using the native Array push
		// is a super-fast way to populate an object with array-like properties
		this.length = 0;
		Array.prototype.push.apply( this, elems );

		return this;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {
		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem && elem.jquery ? elem[0] : elem
		, this );
	},

	attr: function( name, value, type ) {
		var options = name;

		// Look for the case where we're accessing a style value
		if ( typeof name === "string" )
			if ( value === undefined )
				return this[0] && jQuery[ type || "attr" ]( this[0], name );

			else {
				options = {};
				options[ name ] = value;
			}

		// Check to see if we're setting style values
		return this.each(function(i){
			// Set all the styles
			for ( name in options )
				jQuery.attr(
					type ?
						this.style :
						this,
					name, jQuery.prop( this, options[ name ], type, i, name )
				);
		});
	},

	css: function( key, value ) {
		// ignore negative width and height values
		if ( (key == 'width' || key == 'height') && parseFloat(value) < 0 )
			value = undefined;
		return this.attr( key, value, "curCSS" );
	},

	text: function( text ) {
		if ( typeof text !== "object" && text != null )
			return this.empty().append( (this[0] && this[0].ownerDocument || document).createTextNode( text ) );

		var ret = "";

		jQuery.each( text || this, function(){
			jQuery.each( this.childNodes, function(){
				if ( this.nodeType != 8 )
					ret += this.nodeType != 1 ?
						this.nodeValue :
						jQuery.fn.text( [ this ] );
			});
		});

		return ret;
	},

	wrapAll: function( html ) {
		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).clone();

			if ( this[0].parentNode )
				wrap.insertBefore( this[0] );

			wrap.map(function(){
				var elem = this;

				while ( elem.firstChild )
					elem = elem.firstChild;

				return elem;
			}).append(this);
		}

		return this;
	},

	wrapInner: function( html ) {
		return this.each(function(){
			jQuery( this ).contents().wrapAll( html );
		});
	},

	wrap: function( html ) {
		return this.each(function(){
			jQuery( this ).wrapAll( html );
		});
	},

	append: function() {
		return this.domManip(arguments, true, function(elem){
			if (this.nodeType == 1)
				this.appendChild( elem );
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function(elem){
			if (this.nodeType == 1)
				this.insertBefore( elem, this.firstChild );
		});
	},

	before: function() {
		return this.domManip(arguments, false, function(elem){
			this.parentNode.insertBefore( elem, this );
		});
	},

	after: function() {
		return this.domManip(arguments, false, function(elem){
			this.parentNode.insertBefore( elem, this.nextSibling );
		});
	},

	end: function() {
		return this.prevObject || jQuery( [] );
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: [].push,
	sort: [].sort,
	splice: [].splice,

	find: function( selector ) {
		if ( this.length === 1 ) {
			var ret = this.pushStack( [], "find", selector );
			ret.length = 0;
			jQuery.find( selector, this[0], ret );
			return ret;
		} else {
			return this.pushStack( jQuery.unique(jQuery.map(this, function(elem){
				return jQuery.find( selector, elem );
			})), "find", selector );
		}
	},

	clone: function( events ) {
		// Do the clone
		var ret = this.map(function(){
			if ( !jQuery.support.noCloneEvent && !jQuery.isXMLDoc(this) ) {
				// IE copies events bound via attachEvent when
				// using cloneNode. Calling detachEvent on the
				// clone will also remove the events from the orignal
				// In order to get around this, we use innerHTML.
				// Unfortunately, this means some modifications to
				// attributes in IE that are actually only stored
				// as properties will not be copied (such as the
				// the name attribute on an input).
				var html = this.outerHTML;
				if ( !html ) {
					var div = this.ownerDocument.createElement("div");
					div.appendChild( this.cloneNode(true) );
					html = div.innerHTML;
				}

				return jQuery.clean([html.replace(/ jQuery\d+="(?:\d+|null)"/g, "").replace(/^\s*/, "")])[0];
			} else
				return this.cloneNode(true);
		});

		// Copy the events from the original to the clone
		if ( events === true ) {
			var orig = this.find("*").andSelf(), i = 0;

			ret.find("*").andSelf().each(function(){
				if ( this.nodeName !== orig[i].nodeName )
					return;

				var events = jQuery.data( orig[i], "events" );

				for ( var type in events ) {
					for ( var handler in events[ type ] ) {
						jQuery.event.add( this, type, events[ type ][ handler ], events[ type ][ handler ].data );
					}
				}

				i++;
			});
		}

		// Return the cloned set
		return ret;
	},

	filter: function( selector ) {
		return this.pushStack(
			jQuery.isFunction( selector ) &&
			jQuery.grep(this, function(elem, i){
				return selector.call( elem, i );
			}) ||

			jQuery.multiFilter( selector, jQuery.grep(this, function(elem){
				return elem.nodeType === 1;
			}) ), "filter", selector );
	},

	closest: function( selector ) {
		var pos = jQuery.expr.match.POS.test( selector ) ? jQuery(selector) : null,
			closer = 0;

		return this.map(function(){
			var cur = this;
			while ( cur && cur.ownerDocument ) {
				if ( pos ? pos.index(cur) > -1 : jQuery(cur).is(selector) ) {
					jQuery.data(cur, "closest", closer);
					return cur;
				}
				cur = cur.parentNode;
				closer++;
			}
		});
	},

	not: function( selector ) {
		if ( typeof selector === "string" )
			// test special case where just one selector is passed in
			if ( isSimple.test( selector ) )
				return this.pushStack( jQuery.multiFilter( selector, this, true ), "not", selector );
			else
				selector = jQuery.multiFilter( selector, this );

		var isArrayLike = selector.length && selector[selector.length - 1] !== undefined && !selector.nodeType;
		return this.filter(function() {
			return isArrayLike ? jQuery.inArray( this, selector ) < 0 : this != selector;
		});
	},

	add: function( selector ) {
		return this.pushStack( jQuery.unique( jQuery.merge(
			this.get(),
			typeof selector === "string" ?
				jQuery( selector ) :
				jQuery.makeArray( selector )
		)));
	},

	is: function( selector ) {
		return !!selector && jQuery.multiFilter( selector, this ).length > 0;
	},

	hasClass: function( selector ) {
		return !!selector && this.is( "." + selector );
	},

	val: function( value ) {
		if ( value === undefined ) {			
			var elem = this[0];

			if ( elem ) {
				if( jQuery.nodeName( elem, 'option' ) )
					return (elem.attributes.value || {}).specified ? elem.value : elem.text;
				
				// We need to handle select boxes special
				if ( jQuery.nodeName( elem, "select" ) ) {
					var index = elem.selectedIndex,
						values = [],
						options = elem.options,
						one = elem.type == "select-one";

					// Nothing was selected
					if ( index < 0 )
						return null;

					// Loop through all the selected options
					for ( var i = one ? index : 0, max = one ? index + 1 : options.length; i < max; i++ ) {
						var option = options[ i ];

						if ( option.selected ) {
							// Get the specifc value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if ( one )
								return value;

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;				
				}

				// Everything else, we just grab the value
				return (elem.value || "").replace(/\r/g, "");

			}

			return undefined;
		}

		if ( typeof value === "number" )
			value += '';

		return this.each(function(){
			if ( this.nodeType != 1 )
				return;

			if ( jQuery.isArray(value) && /radio|checkbox/.test( this.type ) )
				this.checked = (jQuery.inArray(this.value, value) >= 0 ||
					jQuery.inArray(this.name, value) >= 0);

			else if ( jQuery.nodeName( this, "select" ) ) {
				var values = jQuery.makeArray(value);

				jQuery( "option", this ).each(function(){
					this.selected = (jQuery.inArray( this.value, values ) >= 0 ||
						jQuery.inArray( this.text, values ) >= 0);
				});

				if ( !values.length )
					this.selectedIndex = -1;

			} else
				this.value = value;
		});
	},

	html: function( value ) {
		return value === undefined ?
			(this[0] ?
				this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g, "") :
				null) :
			this.empty().append( value );
	},

	replaceWith: function( value ) {
		return this.after( value ).remove();
	},

	eq: function( i ) {
		return this.slice( i, +i + 1 );
	},

	slice: function() {
		return this.pushStack( Array.prototype.slice.apply( this, arguments ),
			"slice", Array.prototype.slice.call(arguments).join(",") );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function(elem, i){
			return callback.call( elem, i, elem );
		}));
	},

	andSelf: function() {
		return this.add( this.prevObject );
	},

	domManip: function( args, table, callback ) {
		if ( this[0] ) {
			var fragment = (this[0].ownerDocument || this[0]).createDocumentFragment(),
				scripts = jQuery.clean( args, (this[0].ownerDocument || this[0]), fragment ),
				first = fragment.firstChild;

			if ( first )
				for ( var i = 0, l = this.length; i < l; i++ )
					callback.call( root(this[i], first), this.length > 1 || i > 0 ?
							fragment.cloneNode(true) : fragment );
		
			if ( scripts )
				jQuery.each( scripts, evalScript );
		}

		return this;
		
		function root( elem, cur ) {
			return table && jQuery.nodeName(elem, "table") && jQuery.nodeName(cur, "tr") ?
				(elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
				elem;
		}
	}
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

function evalScript( i, elem ) {
	if ( elem.src )
		jQuery.ajax({
			url: elem.src,
			async: false,
			dataType: "script"
		});

	else
		jQuery.globalEval( elem.text || elem.textContent || elem.innerHTML || "" );

	if ( elem.parentNode )
		elem.parentNode.removeChild( elem );
}

function now(){
	return +new Date;
}

jQuery.extend = jQuery.fn.extend = function() {
	// copy reference to target object
	var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) )
		target = {};

	// extend jQuery itself if only one argument is passed
	if ( length == i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ )
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null )
			// Extend the base object
			for ( var name in options ) {
				var src = target[ name ], copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy )
					continue;

				// Recurse if we're merging object values
				if ( deep && copy && typeof copy === "object" && !copy.nodeType )
					target[ name ] = jQuery.extend( deep, 
						// Never move original objects, clone them
						src || ( copy.length != null ? [ ] : { } )
					, copy );

				// Don't bring in undefined values
				else if ( copy !== undefined )
					target[ name ] = copy;

			}

	// Return the modified object
	return target;
};

// exclude the following css properties to add px
var	exclude = /z-?index|font-?weight|opacity|zoom|line-?height/i,
	// cache defaultView
	defaultView = document.defaultView || {},
	toString = Object.prototype.toString;

jQuery.extend({
	noConflict: function( deep ) {
		window.$ = _$;

		if ( deep )
			window.jQuery = _jQuery;

		return jQuery;
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return toString.call(obj) === "[object Function]";
	},

	isArray: function( obj ) {
		return toString.call(obj) === "[object Array]";
	},

	// check if an element is in a (or is an) XML document
	isXMLDoc: function( elem ) {
		return elem.nodeType === 9 && elem.documentElement.nodeName !== "HTML" ||
			!!elem.ownerDocument && jQuery.isXMLDoc( elem.ownerDocument );
	},

	// Evalulates a script in a global context
	globalEval: function( data ) {
		if ( data && /\S/.test(data) ) {
			// Inspired by code by Andrea Giammarchi
			// http://webreflection.blogspot.com/2007/08/global-scope-evaluation-and-dom.html
			var head = document.getElementsByTagName("head")[0] || document.documentElement,
				script = document.createElement("script");

			script.type = "text/javascript";
			if ( jQuery.support.scriptEval )
				script.appendChild( document.createTextNode( data ) );
			else
				script.text = data;

			// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
			// This arises when a base node is used (#2709).
			head.insertBefore( script, head.firstChild );
			head.removeChild( script );
		}
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toUpperCase() == name.toUpperCase();
	},

	// args is for internal usage only
	each: function( object, callback, args ) {
		var name, i = 0, length = object.length;

		if ( args ) {
			if ( length === undefined ) {
				for ( name in object )
					if ( callback.apply( object[ name ], args ) === false )
						break;
			} else
				for ( ; i < length; )
					if ( callback.apply( object[ i++ ], args ) === false )
						break;

		// A special, fast, case for the most common use of each
		} else {
			if ( length === undefined ) {
				for ( name in object )
					if ( callback.call( object[ name ], name, object[ name ] ) === false )
						break;
			} else
				for ( var value = object[0];
					i < length && callback.call( value, i, value ) !== false; value = object[++i] ){}
		}

		return object;
	},

	prop: function( elem, value, type, i, name ) {
		// Handle executable functions
		if ( jQuery.isFunction( value ) )
			value = value.call( elem, i );

		// Handle passing in a number to a CSS property
		return typeof value === "number" && type == "curCSS" && !exclude.test( name ) ?
			value + "px" :
			value;
	},

	className: {
		// internal only, use addClass("class")
		add: function( elem, classNames ) {
			jQuery.each((classNames || "").split(/\s+/), function(i, className){
				if ( elem.nodeType == 1 && !jQuery.className.has( elem.className, className ) )
					elem.className += (elem.className ? " " : "") + className;
			});
		},

		// internal only, use removeClass("class")
		remove: function( elem, classNames ) {
			if (elem.nodeType == 1)
				elem.className = classNames !== undefined ?
					jQuery.grep(elem.className.split(/\s+/), function(className){
						return !jQuery.className.has( classNames, className );
					}).join(" ") :
					"";
		},

		// internal only, use hasClass("class")
		has: function( elem, className ) {
			return elem && jQuery.inArray( className, (elem.className || elem).toString().split(/\s+/) ) > -1;
		}
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback ) {
		var old = {};
		// Remember the old values, and insert the new ones
		for ( var name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		callback.call( elem );

		// Revert the old values
		for ( var name in options )
			elem.style[ name ] = old[ name ];
	},

	css: function( elem, name, force, extra ) {
		if ( name == "width" || name == "height" ) {
			var val, props = { position: "absolute", visibility: "hidden", display:"block" }, which = name == "width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ];

			function getWH() {
				val = name == "width" ? elem.offsetWidth : elem.offsetHeight;

				if ( extra === "border" )
					return;

				jQuery.each( which, function() {
					if ( !extra )
						val -= parseFloat(jQuery.curCSS( elem, "padding" + this, true)) || 0;
					if ( extra === "margin" )
						val += parseFloat(jQuery.curCSS( elem, "margin" + this, true)) || 0;
					else
						val -= parseFloat(jQuery.curCSS( elem, "border" + this + "Width", true)) || 0;
				});
			}

			if ( elem.offsetWidth !== 0 )
				getWH();
			else
				jQuery.swap( elem, props, getWH );

			return Math.max(0, Math.round(val));
		}

		return jQuery.curCSS( elem, name, force );
	},

	curCSS: function( elem, name, force ) {
		var ret, style = elem.style;

		// We need to handle opacity special in IE
		if ( name == "opacity" && !jQuery.support.opacity ) {
			ret = jQuery.attr( style, "opacity" );

			return ret == "" ?
				"1" :
				ret;
		}

		// Make sure we're using the right name for getting the float value
		if ( name.match( /float/i ) )
			name = styleFloat;

		if ( !force && style && style[ name ] )
			ret = style[ name ];

		else if ( defaultView.getComputedStyle ) {

			// Only "float" is needed here
			if ( name.match( /float/i ) )
				name = "float";

			name = name.replace( /([A-Z])/g, "-$1" ).toLowerCase();

			var computedStyle = defaultView.getComputedStyle( elem, null );

			if ( computedStyle )
				ret = computedStyle.getPropertyValue( name );

			// We should always get a number back from opacity
			if ( name == "opacity" && ret == "" )
				ret = "1";

		} else if ( elem.currentStyle ) {
			var camelCase = name.replace(/\-(\w)/g, function(all, letter){
				return letter.toUpperCase();
			});

			ret = elem.currentStyle[ name ] || elem.currentStyle[ camelCase ];

			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			if ( !/^\d+(px)?$/i.test( ret ) && /^\d/.test( ret ) ) {
				// Remember the original values
				var left = style.left, rsLeft = elem.runtimeStyle.left;

				// Put in the new values to get a computed value out
				elem.runtimeStyle.left = elem.currentStyle.left;
				style.left = ret || 0;
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				elem.runtimeStyle.left = rsLeft;
			}
		}

		return ret;
	},

	clean: function( elems, context, fragment ) {
		context = context || document;

		// !context.createElement fails in IE with an error but returns typeof 'object'
		if ( typeof context.createElement === "undefined" )
			context = context.ownerDocument || context[0] && context[0].ownerDocument || document;

		// If a single string is passed in and it's a single tag
		// just do a createElement and skip the rest
		if ( !fragment && elems.length === 1 && typeof elems[0] === "string" ) {
			var match = /^<(\w+)\s*\/?>$/.exec(elems[0]);
			if ( match )
				return [ context.createElement( match[1] ) ];
		}

		var ret = [], scripts = [], div = context.createElement("div");

		jQuery.each(elems, function(i, elem){
			if ( typeof elem === "number" )
				elem += '';

			if ( !elem )
				return;

			// Convert html string into DOM nodes
			if ( typeof elem === "string" ) {
				// Fix "XHTML"-style tags in all browsers
				elem = elem.replace(/(<(\w+)[^>]*?)\/>/g, function(all, front, tag){
					return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ?
						all :
						front + "></" + tag + ">";
				});

				// Trim whitespace, otherwise indexOf won't work as expected
				var tags = elem.replace(/^\s+/, "").substring(0, 10).toLowerCase();

				var wrap =
					// option or optgroup
					!tags.indexOf("<opt") &&
					[ 1, "<select multiple='multiple'>", "</select>" ] ||

					!tags.indexOf("<leg") &&
					[ 1, "<fieldset>", "</fieldset>" ] ||

					tags.match(/^<(thead|tbody|tfoot|colg|cap)/) &&
					[ 1, "<table>", "</table>" ] ||

					!tags.indexOf("<tr") &&
					[ 2, "<table><tbody>", "</tbody></table>" ] ||

				 	// <thead> matched above
					(!tags.indexOf("<td") || !tags.indexOf("<th")) &&
					[ 3, "<table><tbody><tr>", "</tr></tbody></table>" ] ||

					!tags.indexOf("<col") &&
					[ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ] ||

					// IE can't serialize <link> and <script> tags normally
					!jQuery.support.htmlSerialize &&
					[ 1, "div<div>", "</div>" ] ||

					[ 0, "", "" ];

				// Go to html and back, then peel off extra wrappers
				div.innerHTML = wrap[1] + elem + wrap[2];

				// Move to the right depth
				while ( wrap[0]-- )
					div = div.lastChild;

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !jQuery.support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					var hasBody = /<tbody/i.test(elem),
						tbody = !tags.indexOf("<table") && !hasBody ?
							div.firstChild && div.firstChild.childNodes :

						// String was a bare <thead> or <tfoot>
						wrap[1] == "<table>" && !hasBody ?
							div.childNodes :
							[];

					for ( var j = tbody.length - 1; j >= 0 ; --j )
						if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length )
							tbody[ j ].parentNode.removeChild( tbody[ j ] );

					}

				// IE completely kills leading whitespace when innerHTML is used
				if ( !jQuery.support.leadingWhitespace && /^\s/.test( elem ) )
					div.insertBefore( context.createTextNode( elem.match(/^\s*/)[0] ), div.firstChild );
				
				elem = jQuery.makeArray( div.childNodes );
			}

			if ( elem.nodeType )
				ret.push( elem );
			else
				ret = jQuery.merge( ret, elem );

		});

		if ( fragment ) {
			for ( var i = 0; ret[i]; i++ ) {
				if ( jQuery.nodeName( ret[i], "script" ) && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {
					scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );
				} else {
					if ( ret[i].nodeType === 1 )
						ret.splice.apply( ret, [i + 1, 0].concat(jQuery.makeArray(ret[i].getElementsByTagName("script"))) );
					fragment.appendChild( ret[i] );
				}
			}
			
			return scripts;
		}

		return ret;
	},

	attr: function( elem, name, value ) {
		// don't set attributes on text and comment nodes
		if (!elem || elem.nodeType == 3 || elem.nodeType == 8)
			return undefined;

		var notxml = !jQuery.isXMLDoc( elem ),
			// Whether we are setting (or getting)
			set = value !== undefined;

		// Try to normalize/fix the name
		name = notxml && jQuery.props[ name ] || name;

		// Only do all the following if this is a node (faster for style)
		// IE elem.getAttribute passes even for style
		if ( elem.tagName ) {

			// These attributes require special treatment
			var special = /href|src|style/.test( name );

			// Safari mis-reports the default selected property of a hidden option
			// Accessing the parent's selectedIndex property fixes it
			if ( name == "selected" && elem.parentNode )
				elem.parentNode.selectedIndex;

			// If applicable, access the attribute via the DOM 0 way
			if ( name in elem && notxml && !special ) {
				if ( set ){
					// We can't allow the type property to be changed (since it causes problems in IE)
					if ( name == "type" && jQuery.nodeName( elem, "input" ) && elem.parentNode )
						throw "type property can't be changed";

					elem[ name ] = value;
				}

				// browsers index elements by id/name on forms, give priority to attributes.
				if( jQuery.nodeName( elem, "form" ) && elem.getAttributeNode(name) )
					return elem.getAttributeNode( name ).nodeValue;

				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				if ( name == "tabIndex" ) {
					var attributeNode = elem.getAttributeNode( "tabIndex" );
					return attributeNode && attributeNode.specified
						? attributeNode.value
						: elem.nodeName.match(/(button|input|object|select|textarea)/i)
							? 0
							: elem.nodeName.match(/^(a|area)$/i) && elem.href
								? 0
								: undefined;
				}

				return elem[ name ];
			}

			if ( !jQuery.support.style && notxml &&  name == "style" )
				return jQuery.attr( elem.style, "cssText", value );

			if ( set )
				// convert the value to a string (all browsers do this but IE) see #1070
				elem.setAttribute( name, "" + value );

			var attr = !jQuery.support.hrefNormalized && notxml && special
					// Some attributes require a special call on IE
					? elem.getAttribute( name, 2 )
					: elem.getAttribute( name );

			// Non-existent attributes return null, we normalize to undefined
			return attr === null ? undefined : attr;
		}

		// elem is actually elem.style ... set the style

		// IE uses filters for opacity
		if ( !jQuery.support.opacity && name == "opacity" ) {
			if ( set ) {
				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				elem.zoom = 1;

				// Set the alpha filter to set the opacity
				elem.filter = (elem.filter || "").replace( /alpha\([^)]*\)/, "" ) +
					(parseInt( value ) + '' == "NaN" ? "" : "alpha(opacity=" + value * 100 + ")");
			}

			return elem.filter && elem.filter.indexOf("opacity=") >= 0 ?
				(parseFloat( elem.filter.match(/opacity=([^)]*)/)[1] ) / 100) + '':
				"";
		}

		name = name.replace(/-([a-z])/ig, function(all, letter){
			return letter.toUpperCase();
		});

		if ( set )
			elem[ name ] = value;

		return elem[ name ];
	},

	trim: function( text ) {
		return (text || "").replace( /^\s+|\s+$/g, "" );
	},

	makeArray: function( array ) {
		var ret = [];

		if( array != null ){
			var i = array.length;
			// The window, strings (and functions) also have 'length'
			if( i == null || typeof array === "string" || jQuery.isFunction(array) || array.setInterval )
				ret[0] = array;
			else
				while( i )
					ret[--i] = array[i];
		}

		return ret;
	},

	inArray: function( elem, array ) {
		for ( var i = 0, length = array.length; i < length; i++ )
		// Use === because on IE, window == document
			if ( array[ i ] === elem )
				return i;

		return -1;
	},

	merge: function( first, second ) {
		// We have to loop this way because IE & Opera overwrite the length
		// expando of getElementsByTagName
		var i = 0, elem, pos = first.length;
		// Also, we need to make sure that the correct elements are being returned
		// (IE returns comment nodes in a '*' query)
		if ( !jQuery.support.getAll ) {
			while ( (elem = second[ i++ ]) != null )
				if ( elem.nodeType != 8 )
					first[ pos++ ] = elem;

		} else
			while ( (elem = second[ i++ ]) != null )
				first[ pos++ ] = elem;

		return first;
	},

	unique: function( array ) {
		var ret = [], done = {};

		try {

			for ( var i = 0, length = array.length; i < length; i++ ) {
				var id = jQuery.data( array[ i ] );

				if ( !done[ id ] ) {
					done[ id ] = true;
					ret.push( array[ i ] );
				}
			}

		} catch( e ) {
			ret = array;
		}

		return ret;
	},

	grep: function( elems, callback, inv ) {
		var ret = [];

		// Go through the array, only saving the items
		// that pass the validator function
		for ( var i = 0, length = elems.length; i < length; i++ )
			if ( !inv != !callback( elems[ i ], i ) )
				ret.push( elems[ i ] );

		return ret;
	},

	map: function( elems, callback ) {
		var ret = [];

		// Go through the array, translating each of the items to their
		// new value (or values).
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			var value = callback( elems[ i ], i );

			if ( value != null )
				ret[ ret.length ] = value;
		}

		return ret.concat.apply( [], ret );
	}
});

// Use of jQuery.browser is deprecated.
// It's included for backwards compatibility and plugins,
// although they should work to migrate away.

var userAgent = navigator.userAgent.toLowerCase();

// Figure out what browser is being used
jQuery.browser = {
	version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
	safari: /webkit/.test( userAgent ),
	opera: /opera/.test( userAgent ),
	msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
	mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
};

jQuery.each({
	parent: function(elem){return elem.parentNode;},
	parents: function(elem){return jQuery.dir(elem,"parentNode");},
	next: function(elem){return jQuery.nth(elem,2,"nextSibling");},
	prev: function(elem){return jQuery.nth(elem,2,"previousSibling");},
	nextAll: function(elem){return jQuery.dir(elem,"nextSibling");},
	prevAll: function(elem){return jQuery.dir(elem,"previousSibling");},
	siblings: function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},
	children: function(elem){return jQuery.sibling(elem.firstChild);},
	contents: function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}
}, function(name, fn){
	jQuery.fn[ name ] = function( selector ) {
		var ret = jQuery.map( this, fn );

		if ( selector && typeof selector == "string" )
			ret = jQuery.multiFilter( selector, ret );

		return this.pushStack( jQuery.unique( ret ), name, selector );
	};
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function(name, original){
	jQuery.fn[ name ] = function( selector ) {
		var ret = [], insert = jQuery( selector );

		for ( var i = 0, l = insert.length; i < l; i++ ) {
			var elems = (i > 0 ? this.clone(true) : this).get();
			jQuery.fn[ original ].apply( jQuery(insert[i]), elems );
			ret = ret.concat( elems );
		}

		return this.pushStack( ret, name, selector );
	};
});

jQuery.each({
	removeAttr: function( name ) {
		jQuery.attr( this, name, "" );
		if (this.nodeType == 1)
			this.removeAttribute( name );
	},

	addClass: function( classNames ) {
		jQuery.className.add( this, classNames );
	},

	removeClass: function( classNames ) {
		jQuery.className.remove( this, classNames );
	},

	toggleClass: function( classNames, state ) {
		if( typeof state !== "boolean" )
			state = !jQuery.className.has( this, classNames );
		jQuery.className[ state ? "add" : "remove" ]( this, classNames );
	},

	remove: function( selector ) {
		if ( !selector || jQuery.filter( selector, [ this ] ).length ) {
			// Prevent memory leaks
			jQuery( "*", this ).add([this]).each(function(){
				jQuery.event.remove(this);
				jQuery.removeData(this);
			});
			if (this.parentNode)
				this.parentNode.removeChild( this );
		}
	},

	empty: function() {
		// Remove element nodes and prevent memory leaks
		jQuery(this).children().remove();

		// Remove any remaining nodes
		while ( this.firstChild )
			this.removeChild( this.firstChild );
	}
}, function(name, fn){
	jQuery.fn[ name ] = function(){
		return this.each( fn, arguments );
	};
});

// Helper function used by the dimensions and offset modules
function num(elem, prop) {
	return elem[0] && parseInt( jQuery.curCSS(elem[0], prop, true), 10 ) || 0;
}
var expando = "jQuery" + now(), uuid = 0, windowData = {};

jQuery.extend({
	cache: {},

	data: function( elem, name, data ) {
		elem = elem == window ?
			windowData :
			elem;

		var id = elem[ expando ];

		// Compute a unique ID for the element
		if ( !id )
			id = elem[ expando ] = ++uuid;

		// Only generate the data cache if we're
		// trying to access or manipulate it
		if ( name && !jQuery.cache[ id ] )
			jQuery.cache[ id ] = {};

		// Prevent overriding the named cache with undefined values
		if ( data !== undefined )
			jQuery.cache[ id ][ name ] = data;

		// Return the named cache data, or the ID for the element
		return name ?
			jQuery.cache[ id ][ name ] :
			id;
	},

	removeData: function( elem, name ) {
		elem = elem == window ?
			windowData :
			elem;

		var id = elem[ expando ];

		// If we want to remove a specific section of the element's data
		if ( name ) {
			if ( jQuery.cache[ id ] ) {
				// Remove the section of cache data
				delete jQuery.cache[ id ][ name ];

				// If we've removed all the data, remove the element's cache
				name = "";

				for ( name in jQuery.cache[ id ] )
					break;

				if ( !name )
					jQuery.removeData( elem );
			}

		// Otherwise, we want to remove all of the element's data
		} else {
			// Clean up the element expando
			try {
				delete elem[ expando ];
			} catch(e){
				// IE has trouble directly removing the expando
				// but it's ok with using removeAttribute
				if ( elem.removeAttribute )
					elem.removeAttribute( expando );
			}

			// Completely remove the data cache
			delete jQuery.cache[ id ];
		}
	},
	queue: function( elem, type, data ) {
		if ( elem ){
	
			type = (type || "fx") + "queue";
	
			var q = jQuery.data( elem, type );
	
			if ( !q || jQuery.isArray(data) )
				q = jQuery.data( elem, type, jQuery.makeArray(data) );
			else if( data )
				q.push( data );
	
		}
		return q;
	},

	dequeue: function( elem, type ){
		var queue = jQuery.queue( elem, type ),
			fn = queue.shift();
		
		if( !type || type === "fx" )
			fn = queue[0];
			
		if( fn !== undefined )
			fn.call(elem);
	}
});

jQuery.fn.extend({
	data: function( key, value ){
		var parts = key.split(".");
		parts[1] = parts[1] ? "." + parts[1] : "";

		if ( value === undefined ) {
			var data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);

			if ( data === undefined && this.length )
				data = jQuery.data( this[0], key );

			return data === undefined && parts[1] ?
				this.data( parts[0] ) :
				data;
		} else
			return this.trigger("setData" + parts[1] + "!", [parts[0], value]).each(function(){
				jQuery.data( this, key, value );
			});
	},

	removeData: function( key ){
		return this.each(function(){
			jQuery.removeData( this, key );
		});
	},
	queue: function(type, data){
		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
		}

		if ( data === undefined )
			return jQuery.queue( this[0], type );

		return this.each(function(){
			var queue = jQuery.queue( this, type, data );
			
			 if( type == "fx" && queue.length == 1 )
				queue[0].call(this);
		});
	},
	dequeue: function(type){
		return this.each(function(){
			jQuery.dequeue( this, type );
		});
	}
});/*!
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,
	done = 0,
	toString = Object.prototype.toString;

var Sizzle = function(selector, context, results, seed) {
	results = results || [];
	context = context || document;

	if ( context.nodeType !== 1 && context.nodeType !== 9 )
		return [];
	
	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var parts = [], m, set, checkSet, check, mode, extra, prune = true;
	
	// Reset the position of the chunker regexp (start from head)
	chunker.lastIndex = 0;
	
	while ( (m = chunker.exec(selector)) !== null ) {
		parts.push( m[1] );
		
		if ( m[2] ) {
			extra = RegExp.rightContext;
			break;
		}
	}

	if ( parts.length > 1 && origPOS.exec( selector ) ) {
		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context );
		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] )
					selector += parts.shift();

				set = posProcess( selector, set );
			}
		}
	} else {
		var ret = seed ?
			{ expr: parts.pop(), set: makeArray(seed) } :
			Sizzle.find( parts.pop(), parts.length === 1 && context.parentNode ? context.parentNode : context, isXML(context) );
		set = Sizzle.filter( ret.expr, ret.set );

		if ( parts.length > 0 ) {
			checkSet = makeArray(set);
		} else {
			prune = false;
		}

		while ( parts.length ) {
			var cur = parts.pop(), pop = cur;

			if ( !Expr.relative[ cur ] ) {
				cur = "";
			} else {
				pop = parts.pop();
			}

			if ( pop == null ) {
				pop = context;
			}

			Expr.relative[ cur ]( checkSet, pop, isXML(context) );
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		throw "Syntax error, unrecognized expression: " + (cur || selector);
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );
		} else if ( context.nodeType === 1 ) {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}
		} else {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}
	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, context, results, seed );

		if ( sortOrder ) {
			hasDuplicate = false;
			results.sort(sortOrder);

			if ( hasDuplicate ) {
				for ( var i = 1; i < results.length; i++ ) {
					if ( results[i] === results[i-1] ) {
						results.splice(i--, 1);
					}
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function(expr, set){
	return Sizzle(expr, null, null, set);
};

Sizzle.find = function(expr, context, isXML){
	var set, match;

	if ( !expr ) {
		return [];
	}

	for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
		var type = Expr.order[i], match;
		
		if ( (match = Expr.match[ type ].exec( expr )) ) {
			var left = RegExp.leftContext;

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace(/\\/g, "");
				set = Expr.find[ type ]( match, context, isXML );
				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = context.getElementsByTagName("*");
	}

	return {set: set, expr: expr};
};

Sizzle.filter = function(expr, set, inplace, not){
	var old = expr, result = [], curLoop = set, match, anyFound,
		isXMLFilter = set && set[0] && isXML(set[0]);

	while ( expr && set.length ) {
		for ( var type in Expr.filter ) {
			if ( (match = Expr.match[ type ].exec( expr )) != null ) {
				var filter = Expr.filter[ type ], found, item;
				anyFound = false;

				if ( curLoop == result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;
					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							var pass = not ^ !!found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;
								} else {
									curLoop[i] = false;
								}
							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr == old ) {
			if ( anyFound == null ) {
				throw "Syntax error, unrecognized expression: " + expr;
			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],
	match: {
		ID: /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
	},
	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},
	attrHandle: {
		href: function(elem){
			return elem.getAttribute("href");
		}
	},
	relative: {
		"+": function(checkSet, part, isXML){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !/\W/.test(part),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag && !isXML ) {
				part = part.toUpperCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},
		">": function(checkSet, part, isXML){
			var isPartStr = typeof part === "string";

			if ( isPartStr && !/\W/.test(part) ) {
				part = isXML ? part : part.toUpperCase();

				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName === part ? parent : false;
					}
				}
			} else {
				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},
		"": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;

			if ( !part.match(/\W/) ) {
				var nodeCheck = part = isXML ? part : part.toUpperCase();
				checkFn = dirNodeCheck;
			}

			checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
		},
		"~": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;

			if ( typeof part === "string" && !part.match(/\W/) ) {
				var nodeCheck = part = isXML ? part : part.toUpperCase();
				checkFn = dirNodeCheck;
			}

			checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);
		}
	},
	find: {
		ID: function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? [m] : [];
			}
		},
		NAME: function(match, context, isXML){
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [], results = context.getElementsByName(match[1]);

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},
		TAG: function(match, context){
			return context.getElementsByTagName(match[1]);
		}
	},
	preFilter: {
		CLASS: function(match, curLoop, inplace, result, not, isXML){
			match = " " + match[1].replace(/\\/g, "") + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").indexOf(match) >= 0) ) {
						if ( !inplace )
							result.push( elem );
					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},
		ID: function(match){
			return match[1].replace(/\\/g, "");
		},
		TAG: function(match, curLoop){
			for ( var i = 0; curLoop[i] === false; i++ ){}
			return curLoop[i] && isXML(curLoop[i]) ? match[1] : match[1].toUpperCase();
		},
		CHILD: function(match){
			if ( match[1] == "nth" ) {
				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
					match[2] == "even" && "2n" || match[2] == "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},
		ATTR: function(match, curLoop, inplace, result, not, isXML){
			var name = match[1].replace(/\\/g, "");
			
			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},
		PSEUDO: function(match, curLoop, inplace, result, not){
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( match[3].match(chunker).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);
				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
					if ( !inplace ) {
						result.push.apply( result, ret );
					}
					return false;
				}
			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}
			
			return match;
		},
		POS: function(match){
			match.unshift( true );
			return match;
		}
	},
	filters: {
		enabled: function(elem){
			return elem.disabled === false && elem.type !== "hidden";
		},
		disabled: function(elem){
			return elem.disabled === true;
		},
		checked: function(elem){
			return elem.checked === true;
		},
		selected: function(elem){
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			elem.parentNode.selectedIndex;
			return elem.selected === true;
		},
		parent: function(elem){
			return !!elem.firstChild;
		},
		empty: function(elem){
			return !elem.firstChild;
		},
		has: function(elem, i, match){
			return !!Sizzle( match[3], elem ).length;
		},
		header: function(elem){
			return /h\d/i.test( elem.nodeName );
		},
		text: function(elem){
			return "text" === elem.type;
		},
		radio: function(elem){
			return "radio" === elem.type;
		},
		checkbox: function(elem){
			return "checkbox" === elem.type;
		},
		file: function(elem){
			return "file" === elem.type;
		},
		password: function(elem){
			return "password" === elem.type;
		},
		submit: function(elem){
			return "submit" === elem.type;
		},
		image: function(elem){
			return "image" === elem.type;
		},
		reset: function(elem){
			return "reset" === elem.type;
		},
		button: function(elem){
			return "button" === elem.type || elem.nodeName.toUpperCase() === "BUTTON";
		},
		input: function(elem){
			return /input|select|textarea|button/i.test(elem.nodeName);
		}
	},
	setFilters: {
		first: function(elem, i){
			return i === 0;
		},
		last: function(elem, i, match, array){
			return i === array.length - 1;
		},
		even: function(elem, i){
			return i % 2 === 0;
		},
		odd: function(elem, i){
			return i % 2 === 1;
		},
		lt: function(elem, i, match){
			return i < match[3] - 0;
		},
		gt: function(elem, i, match){
			return i > match[3] - 0;
		},
		nth: function(elem, i, match){
			return match[3] - 0 == i;
		},
		eq: function(elem, i, match){
			return match[3] - 0 == i;
		}
	},
	filter: {
		PSEUDO: function(elem, match, i, array){
			var name = match[1], filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || "").indexOf(match[3]) >= 0;
			} else if ( name === "not" ) {
				var not = match[3];

				for ( var i = 0, l = not.length; i < l; i++ ) {
					if ( not[i] === elem ) {
						return false;
					}
				}

				return true;
			}
		},
		CHILD: function(elem, match){
			var type = match[1], node = elem;
			switch (type) {
				case 'only':
				case 'first':
					while (node = node.previousSibling)  {
						if ( node.nodeType === 1 ) return false;
					}
					if ( type == 'first') return true;
					node = elem;
				case 'last':
					while (node = node.nextSibling)  {
						if ( node.nodeType === 1 ) return false;
					}
					return true;
				case 'nth':
					var first = match[2], last = match[3];

					if ( first == 1 && last == 0 ) {
						return true;
					}
					
					var doneName = match[0],
						parent = elem.parentNode;
	
					if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
						var count = 0;
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						} 
						parent.sizcache = doneName;
					}
					
					var diff = elem.nodeIndex - last;
					if ( first == 0 ) {
						return diff == 0;
					} else {
						return ( diff % first == 0 && diff / first >= 0 );
					}
			}
		},
		ID: function(elem, match){
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},
		TAG: function(elem, match){
			return (match === "*" && elem.nodeType === 1) || elem.nodeName === match;
		},
		CLASS: function(elem, match){
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},
		ATTR: function(elem, match){
			var name = match[1],
				result = Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value != check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},
		POS: function(elem, match, i, array){
			var name = match[2], filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS;

for ( var type in Expr.match ) {
	Expr.match[ type ] = RegExp( Expr.match[ type ].source + /(?![^\[]*\])(?![^\(]*\))/.source );
}

var makeArray = function(array, results) {
	array = Array.prototype.slice.call( array );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}
	
	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
try {
	Array.prototype.slice.call( document.documentElement.childNodes );

// Provide a fallback method if it does not work
} catch(e){
	makeArray = function(array, results) {
		var ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );
		} else {
			if ( typeof array.length === "number" ) {
				for ( var i = 0, l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}
			} else {
				for ( var i = 0; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		var ret = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( "sourceIndex" in document.documentElement ) {
	sortOrder = function( a, b ) {
		var ret = a.sourceIndex - b.sourceIndex;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( document.createRange ) {
	sortOrder = function( a, b ) {
		var aRange = a.ownerDocument.createRange(), bRange = b.ownerDocument.createRange();
		aRange.selectNode(a);
		aRange.collapse(true);
		bRange.selectNode(b);
		bRange.collapse(true);
		var ret = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
}

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("form"),
		id = "script" + (new Date).getTime();
	form.innerHTML = "<input name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	var root = document.documentElement;
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( !!document.getElementById( id ) ) {
		Expr.find.ID = function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ? [m] : undefined : [];
			}
		};

		Expr.filter.ID = function(elem, match){
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function(match, context){
			var results = context.getElementsByTagName(match[1]);

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";
	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {
		Expr.attrHandle.href = function(elem){
			return elem.getAttribute("href", 2);
		};
	}
})();

if ( document.querySelectorAll ) (function(){
	var oldSizzle = Sizzle, div = document.createElement("div");
	div.innerHTML = "<p class='TEST'></p>";

	// Safari can't handle uppercase or unicode characters when
	// in quirks mode.
	if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
		return;
	}
	
	Sizzle = function(query, context, extra, seed){
		context = context || document;

		// Only use querySelectorAll on non-XML documents
		// (ID selectors don't work in non-HTML documents)
		if ( !seed && context.nodeType === 9 && !isXML(context) ) {
			try {
				return makeArray( context.querySelectorAll(query), extra );
			} catch(e){}
		}
		
		return oldSizzle(query, context, extra, seed);
	};

	Sizzle.find = oldSizzle.find;
	Sizzle.filter = oldSizzle.filter;
	Sizzle.selectors = oldSizzle.selectors;
	Sizzle.matches = oldSizzle.matches;
})();

if ( document.getElementsByClassName && document.documentElement.getElementsByClassName ) (function(){
	var div = document.createElement("div");
	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	if ( div.getElementsByClassName("e").length === 0 )
		return;

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 )
		return;

	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function(match, context, isXML) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	var sibDir = dir == "previousSibling" && !isXML;
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			if ( sibDir && elem.nodeType === 1 ){
				elem.sizcache = doneName;
				elem.sizset = i;
			}
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem.sizcache = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	var sibDir = dir == "previousSibling" && !isXML;
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			if ( sibDir && elem.nodeType === 1 ) {
				elem.sizcache = doneName;
				elem.sizset = i;
			}
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem.sizcache = doneName;
						elem.sizset = i;
					}
					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

var contains = document.compareDocumentPosition ?  function(a, b){
	return a.compareDocumentPosition(b) & 16;
} : function(a, b){
	return a !== b && (a.contains ? a.contains(b) : true);
};

var isXML = function(elem){
	return elem.nodeType === 9 && elem.documentElement.nodeName !== "HTML" ||
		!!elem.ownerDocument && isXML( elem.ownerDocument );
};

var posProcess = function(selector, context){
	var tmpSet = [], later = "", match,
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE
jQuery.find = Sizzle;
jQuery.filter = Sizzle.filter;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.filters;

Sizzle.selectors.filters.hidden = function(elem){
	return elem.offsetWidth === 0 || elem.offsetHeight === 0;
};

Sizzle.selectors.filters.visible = function(elem){
	return elem.offsetWidth > 0 || elem.offsetHeight > 0;
};

Sizzle.selectors.filters.animated = function(elem){
	return jQuery.grep(jQuery.timers, function(fn){
		return elem === fn.elem;
	}).length;
};

jQuery.multiFilter = function( expr, elems, not ) {
	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return Sizzle.matches(expr, elems);
};

jQuery.dir = function( elem, dir ){
	var matched = [], cur = elem[dir];
	while ( cur && cur != document ) {
		if ( cur.nodeType == 1 )
			matched.push( cur );
		cur = cur[dir];
	}
	return matched;
};

jQuery.nth = function(cur, result, dir, elem){
	result = result || 1;
	var num = 0;

	for ( ; cur; cur = cur[dir] )
		if ( cur.nodeType == 1 && ++num == result )
			break;

	return cur;
};

jQuery.sibling = function(n, elem){
	var r = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType == 1 && n != elem )
			r.push( n );
	}

	return r;
};

return;

window.Sizzle = Sizzle;

})();
/*
 * A number of helper functions used for managing events.
 * Many of the ideas behind this code originated from
 * Dean Edwards' addEvent library.
 */
jQuery.event = {

	// Bind an event to an element
	// Original by Dean Edwards
	add: function(elem, types, handler, data) {
		if ( elem.nodeType == 3 || elem.nodeType == 8 )
			return;

		// For whatever reason, IE has trouble passing the window object
		// around, causing it to be cloned in the process
		if ( elem.setInterval && elem != window )
			elem = window;

		// Make sure that the function being executed has a unique ID
		if ( !handler.guid )
			handler.guid = this.guid++;

		// if data is passed, bind to handler
		if ( data !== undefined ) {
			// Create temporary function pointer to original handler
			var fn = handler;

			// Create unique handler function, wrapped around original handler
			handler = this.proxy( fn );

			// Store data in unique handler
			handler.data = data;
		}

		// Init the element's event structure
		var events = jQuery.data(elem, "events") || jQuery.data(elem, "events", {}),
			handle = jQuery.data(elem, "handle") || jQuery.data(elem, "handle", function(){
				// Handle the second event of a trigger and when
				// an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && !jQuery.event.triggered ?
					jQuery.event.handle.apply(arguments.callee.elem, arguments) :
					undefined;
			});
		// Add elem as a property of the handle function
		// This is to prevent a memory leak with non-native
		// event in IE.
		handle.elem = elem;

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		jQuery.each(types.split(/\s+/), function(index, type) {
			// Namespaced event handlers
			var namespaces = type.split(".");
			type = namespaces.shift();
			handler.type = namespaces.slice().sort().join(".");

			// Get the current list of functions bound to this event
			var handlers = events[type];
			
			if ( jQuery.event.specialAll[type] )
				jQuery.event.specialAll[type].setup.call(elem, data, namespaces);

			// Init the event handler queue
			if (!handlers) {
				handlers = events[type] = {};

				// Check for a special event handler
				// Only use addEventListener/attachEvent if the special
				// events handler returns false
				if ( !jQuery.event.special[type] || jQuery.event.special[type].setup.call(elem, data, namespaces) === false ) {
					// Bind the global event handler to the element
					if (elem.addEventListener)
						elem.addEventListener(type, handle, false);
					else if (elem.attachEvent)
						elem.attachEvent("on" + type, handle);
				}
			}

			// Add the function to the element's handler list
			handlers[handler.guid] = handler;

			// Keep track of which events have been used, for global triggering
			jQuery.event.global[type] = true;
		});

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	guid: 1,
	global: {},

	// Detach an event or set of events from an element
	remove: function(elem, types, handler) {
		// don't do events on text and comment nodes
		if ( elem.nodeType == 3 || elem.nodeType == 8 )
			return;

		var events = jQuery.data(elem, "events"), ret, index;

		if ( events ) {
			// Unbind all events for the element
			if ( types === undefined || (typeof types === "string" && types.charAt(0) == ".") )
				for ( var type in events )
					this.remove( elem, type + (types || "") );
			else {
				// types is actually an event object here
				if ( types.type ) {
					handler = types.handler;
					types = types.type;
				}

				// Handle multiple events seperated by a space
				// jQuery(...).unbind("mouseover mouseout", fn);
				jQuery.each(types.split(/\s+/), function(index, type){
					// Namespaced event handlers
					var namespaces = type.split(".");
					type = namespaces.shift();
					var namespace = RegExp("(^|\\.)" + namespaces.slice().sort().join(".*\\.") + "(\\.|$)");

					if ( events[type] ) {
						// remove the given handler for the given type
						if ( handler )
							delete events[type][handler.guid];

						// remove all handlers for the given type
						else
							for ( var handle in events[type] )
								// Handle the removal of namespaced events
								if ( namespace.test(events[type][handle].type) )
									delete events[type][handle];
									
						if ( jQuery.event.specialAll[type] )
							jQuery.event.specialAll[type].teardown.call(elem, namespaces);

						// remove generic event handler if no more handlers exist
						for ( ret in events[type] ) break;
						if ( !ret ) {
							if ( !jQuery.event.special[type] || jQuery.event.special[type].teardown.call(elem, namespaces) === false ) {
								if (elem.removeEventListener)
									elem.removeEventListener(type, jQuery.data(elem, "handle"), false);
								else if (elem.detachEvent)
									elem.detachEvent("on" + type, jQuery.data(elem, "handle"));
							}
							ret = null;
							delete events[type];
						}
					}
				});
			}

			// Remove the expando if it's no longer used
			for ( ret in events ) break;
			if ( !ret ) {
				var handle = jQuery.data( elem, "handle" );
				if ( handle ) handle.elem = null;
				jQuery.removeData( elem, "events" );
				jQuery.removeData( elem, "handle" );
			}
		}
	},

	// bubbling is internal
	trigger: function( event, data, elem, bubbling ) {
		// Event object or event type
		var type = event.type || event;

		if( !bubbling ){
			event = typeof event === "object" ?
				// jQuery.Event object
				event[expando] ? event :
				// Object literal
				jQuery.extend( jQuery.Event(type), event ) :
				// Just the event type (string)
				jQuery.Event(type);

			if ( type.indexOf("!") >= 0 ) {
				event.type = type = type.slice(0, -1);
				event.exclusive = true;
			}

			// Handle a global trigger
			if ( !elem ) {
				// Don't bubble custom events when global (to avoid too much overhead)
				event.stopPropagation();
				// Only trigger if we've ever bound an event for it
				if ( this.global[type] )
					jQuery.each( jQuery.cache, function(){
						if ( this.events && this.events[type] )
							jQuery.event.trigger( event, data, this.handle.elem );
					});
			}

			// Handle triggering a single element

			// don't do events on text and comment nodes
			if ( !elem || elem.nodeType == 3 || elem.nodeType == 8 )
				return undefined;
			
			// Clean up in case it is reused
			event.result = undefined;
			event.target = elem;
			
			// Clone the incoming data, if any
			data = jQuery.makeArray(data);
			data.unshift( event );
		}

		event.currentTarget = elem;

		// Trigger the event, it is assumed that "handle" is a function
		var handle = jQuery.data(elem, "handle");
		if ( handle )
			handle.apply( elem, data );

		// Handle triggering native .onfoo handlers (and on links since we don't call .click() for links)
		if ( (!elem[type] || (jQuery.nodeName(elem, 'a') && type == "click")) && elem["on"+type] && elem["on"+type].apply( elem, data ) === false )
			event.result = false;

		// Trigger the native events (except for clicks on links)
		if ( !bubbling && elem[type] && !event.isDefaultPrevented() && !(jQuery.nodeName(elem, 'a') && type == "click") ) {
			this.triggered = true;
			try {
				elem[ type ]();
			// prevent IE from throwing an error for some hidden elements
			} catch (e) {}
		}

		this.triggered = false;

		if ( !event.isPropagationStopped() ) {
			var parent = elem.parentNode || elem.ownerDocument;
			if ( parent )
				jQuery.event.trigger(event, data, parent, true);
		}
	},

	handle: function(event) {
		// returned undefined or false
		var all, handlers;

		event = arguments[0] = jQuery.event.fix( event || window.event );
		event.currentTarget = this;
		
		// Namespaced event handlers
		var namespaces = event.type.split(".");
		event.type = namespaces.shift();

		// Cache this now, all = true means, any handler
		all = !namespaces.length && !event.exclusive;
		
		var namespace = RegExp("(^|\\.)" + namespaces.slice().sort().join(".*\\.") + "(\\.|$)");

		handlers = ( jQuery.data(this, "events") || {} )[event.type];

		for ( var j in handlers ) {
			var handler = handlers[j];

			// Filter the functions by class
			if ( all || namespace.test(handler.type) ) {
				// Pass in a reference to the handler function itself
				// So that we can later remove it
				event.handler = handler;
				event.data = handler.data;

				var ret = handler.apply(this, arguments);

				if( ret !== undefined ){
					event.result = ret;
					if ( ret === false ) {
						event.preventDefault();
						event.stopPropagation();
					}
				}

				if( event.isImmediatePropagationStopped() )
					break;

			}
		}
	},

	props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),

	fix: function(event) {
		if ( event[expando] )
			return event;

		// store a copy of the original event object
		// and "clone" to set read-only properties
		var originalEvent = event;
		event = jQuery.Event( originalEvent );

		for ( var i = this.props.length, prop; i; ){
			prop = this.props[ --i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Fix target property, if necessary
		if ( !event.target )
			event.target = event.srcElement || document; // Fixes #1925 where srcElement might not be defined either

		// check if target is a textnode (safari)
		if ( event.target.nodeType == 3 )
			event.target = event.target.parentNode;

		// Add relatedTarget, if necessary
		if ( !event.relatedTarget && event.fromElement )
			event.relatedTarget = event.fromElement == event.target ? event.toElement : event.fromElement;

		// Calculate pageX/Y if missing and clientX/Y available
		if ( event.pageX == null && event.clientX != null ) {
			var doc = document.documentElement, body = document.body;
			event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc.clientLeft || 0);
			event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc.clientTop || 0);
		}

		// Add which for key events
		if ( !event.which && ((event.charCode || event.charCode === 0) ? event.charCode : event.keyCode) )
			event.which = event.charCode || event.keyCode;

		// Add metaKey to non-Mac browsers (use ctrl for PC's and Meta for Macs)
		if ( !event.metaKey && event.ctrlKey )
			event.metaKey = event.ctrlKey;

		// Add which for click: 1 == left; 2 == middle; 3 == right
		// Note: button is not normalized, so don't use it
		if ( !event.which && event.button )
			event.which = (event.button & 1 ? 1 : ( event.button & 2 ? 3 : ( event.button & 4 ? 2 : 0 ) ));

		return event;
	},

	proxy: function( fn, proxy ){
		proxy = proxy || function(){ return fn.apply(this, arguments); };
		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || proxy.guid || this.guid++;
		// So proxy can be declared as an argument
		return proxy;
	},

	special: {
		ready: {
			// Make sure the ready event is setup
			setup: bindReady,
			teardown: function() {}
		}
	},
	
	specialAll: {
		live: {
			setup: function( selector, namespaces ){
				jQuery.event.add( this, namespaces[0], liveHandler );
			},
			teardown:  function( namespaces ){
				if ( namespaces.length ) {
					var remove = 0, name = RegExp("(^|\\.)" + namespaces[0] + "(\\.|$)");
					
					jQuery.each( (jQuery.data(this, "events").live || {}), function(){
						if ( name.test(this.type) )
							remove++;
					});
					
					if ( remove < 1 )
						jQuery.event.remove( this, namespaces[0], liveHandler );
				}
			}
		}
	}
};

jQuery.Event = function( src ){
	// Allow instantiation without the 'new' keyword
	if( !this.preventDefault )
		return new jQuery.Event(src);
	
	// Event object
	if( src && src.type ){
		this.originalEvent = src;
		this.type = src.type;
	// Event type
	}else
		this.type = src;

	// timeStamp is buggy for some events on Firefox(#3843)
	// So we won't rely on the native value
	this.timeStamp = now();
	
	// Mark it as fixed
	this[expando] = true;
};

function returnFalse(){
	return false;
}
function returnTrue(){
	return true;
}

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;

		var e = this.originalEvent;
		if( !e )
			return;
		// if preventDefault exists run it on the original event
		if (e.preventDefault)
			e.preventDefault();
		// otherwise set the returnValue property of the original event to false (IE)
		e.returnValue = false;
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;

		var e = this.originalEvent;
		if( !e )
			return;
		// if stopPropagation exists run it on the original event
		if (e.stopPropagation)
			e.stopPropagation();
		// otherwise set the cancelBubble property of the original event to true (IE)
		e.cancelBubble = true;
	},
	stopImmediatePropagation:function(){
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	},
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse
};
// Checks if an event happened on an element within another element
// Used in jQuery.event.special.mouseenter and mouseleave handlers
var withinElement = function(event) {
	// Check if mouse(over|out) are still within the same parent element
	var parent = event.relatedTarget;
	// Traverse up the tree
	while ( parent && parent != this )
		try { parent = parent.parentNode; }
		catch(e) { parent = this; }
	
	if( parent != this ){
		// set the correct event type
		event.type = event.data;
		// handle event if we actually just moused on to a non sub-element
		jQuery.event.handle.apply( this, arguments );
	}
};
	
jQuery.each({ 
	mouseover: 'mouseenter', 
	mouseout: 'mouseleave'
}, function( orig, fix ){
	jQuery.event.special[ fix ] = {
		setup: function(){
			jQuery.event.add( this, orig, withinElement, fix );
		},
		teardown: function(){
			jQuery.event.remove( this, orig, withinElement );
		}
	};			   
});

jQuery.fn.extend({
	bind: function( type, data, fn ) {
		return type == "unload" ? this.one(type, data, fn) : this.each(function(){
			jQuery.event.add( this, type, fn || data, fn && data );
		});
	},

	one: function( type, data, fn ) {
		var one = jQuery.event.proxy( fn || data, function(event) {
			jQuery(this).unbind(event, one);
			return (fn || data).apply( this, arguments );
		});
		return this.each(function(){
			jQuery.event.add( this, type, one, fn && data);
		});
	},

	unbind: function( type, fn ) {
		return this.each(function(){
			jQuery.event.remove( this, type, fn );
		});
	},

	trigger: function( type, data ) {
		return this.each(function(){
			jQuery.event.trigger( type, data, this );
		});
	},

	triggerHandler: function( type, data ) {
		if( this[0] ){
			var event = jQuery.Event(type);
			event.preventDefault();
			event.stopPropagation();
			jQuery.event.trigger( event, data, this[0] );
			return event.result;
		}		
	},

	toggle: function( fn ) {
		// Save reference to arguments for access in closure
		var args = arguments, i = 1;

		// link all the functions, so any of them can unbind this click handler
		while( i < args.length )
			jQuery.event.proxy( fn, args[i++] );

		return this.click( jQuery.event.proxy( fn, function(event) {
			// Figure out which function to execute
			this.lastToggle = ( this.lastToggle || 0 ) % i;

			// Make sure that clicks stop
			event.preventDefault();

			// and execute the function
			return args[ this.lastToggle++ ].apply( this, arguments ) || false;
		}));
	},

	hover: function(fnOver, fnOut) {
		return this.mouseenter(fnOver).mouseleave(fnOut);
	},

	ready: function(fn) {
		// Attach the listeners
		bindReady();

		// If the DOM is already ready
		if ( jQuery.isReady )
			// Execute the function immediately
			fn.call( document, jQuery );

		// Otherwise, remember the function for later
		else
			// Add the function to the wait list
			jQuery.readyList.push( fn );

		return this;
	},
	
	live: function( type, fn ){
		var proxy = jQuery.event.proxy( fn );
		proxy.guid += this.selector + type;

		jQuery(document).bind( liveConvert(type, this.selector), this.selector, proxy );

		return this;
	},
	
	die: function( type, fn ){
		jQuery(document).unbind( liveConvert(type, this.selector), fn ? { guid: fn.guid + this.selector + type } : null );
		return this;
	}
});

function liveHandler( event ){
	var check = RegExp("(^|\\.)" + event.type + "(\\.|$)"),
		stop = true,
		elems = [];

	jQuery.each(jQuery.data(this, "events").live || [], function(i, fn){
		if ( check.test(fn.type) ) {
			var elem = jQuery(event.target).closest(fn.data)[0];
			if ( elem )
				elems.push({ elem: elem, fn: fn });
		}
	});

	elems.sort(function(a,b) {
		return jQuery.data(a.elem, "closest") - jQuery.data(b.elem, "closest");
	});
	
	jQuery.each(elems, function(){
		if ( this.fn.call(this.elem, event, this.fn.data) === false )
			return (stop = false);
	});

	return stop;
}

function liveConvert(type, selector){
	return ["live", type, selector.replace(/\./g, "`").replace(/ /g, "|")].join(".");
}

jQuery.extend({
	isReady: false,
	readyList: [],
	// Handle when the DOM is ready
	ready: function() {
		// Make sure that the DOM is not already loaded
		if ( !jQuery.isReady ) {
			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If there are functions bound, to execute
			if ( jQuery.readyList ) {
				// Execute all of them
				jQuery.each( jQuery.readyList, function(){
					this.call( document, jQuery );
				});

				// Reset the list of functions
				jQuery.readyList = null;
			}

			// Trigger any bound ready events
			jQuery(document).triggerHandler("ready");
		}
	}
});

var readyBound = false;

function bindReady(){
	if ( readyBound ) return;
	readyBound = true;

	// Mozilla, Opera and webkit nightlies currently support this event
	if ( document.addEventListener ) {
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", function(){
			document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
			jQuery.ready();
		}, false );

	// If IE event model is used
	} else if ( document.attachEvent ) {
		// ensure firing before onload,
		// maybe late but safe also for iframes
		document.attachEvent("onreadystatechange", function(){
			if ( document.readyState === "complete" ) {
				document.detachEvent( "onreadystatechange", arguments.callee );
				jQuery.ready();
			}
		});

		// If IE and not an iframe
		// continually check to see if the document is ready
		if ( document.documentElement.doScroll && window == window.top ) (function(){
			if ( jQuery.isReady ) return;

			try {
				// If IE is used, use the trick by Diego Perini
				// http://javascript.nwbox.com/IEContentLoaded/
				document.documentElement.doScroll("left");
			} catch( error ) {
				setTimeout( arguments.callee, 0 );
				return;
			}

			// and execute any waiting functions
			jQuery.ready();
		})();
	}

	// A fallback to window.onload, that will always work
	jQuery.event.add( window, "load", jQuery.ready );
}

jQuery.each( ("blur,focus,load,resize,scroll,unload,click,dblclick," +
	"mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave," +
	"change,select,submit,keydown,keypress,keyup,error").split(","), function(i, name){

	// Handle event binding
	jQuery.fn[name] = function(fn){
		return fn ? this.bind(name, fn) : this.trigger(name);
	};
});

// Prevent memory leaks in IE
// And prevent errors on refresh with events like mouseover in other browsers
// Window isn't included so as not to unbind existing unload events
jQuery( window ).bind( 'unload', function(){ 
	for ( var id in jQuery.cache )
		// Skip the window
		if ( id != 1 && jQuery.cache[ id ].handle )
			jQuery.event.remove( jQuery.cache[ id ].handle.elem );
}); 
(function(){

	jQuery.support = {};

	var root = document.documentElement,
		script = document.createElement("script"),
		div = document.createElement("div"),
		id = "script" + (new Date).getTime();

	div.style.display = "none";
	div.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';

	var all = div.getElementsByTagName("*"),
		a = div.getElementsByTagName("a")[0];

	// Can't get basic test support
	if ( !all || !all.length || !a ) {
		return;
	}

	jQuery.support = {
		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: div.firstChild.nodeType == 3,
		
		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,
		
		// Make sure that you can get all elements in an <object> element
		// IE 7 always returns no results
		objectAll: !!div.getElementsByTagName("object")[0]
			.getElementsByTagName("*").length,
		
		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,
		
		// Get the style information from getAttribute
		// (IE uses .cssText insted)
		style: /red/.test( a.getAttribute("style") ),
		
		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: a.getAttribute("href") === "/a",
		
		// Make sure that element opacity exists
		// (IE uses filter instead)
		opacity: a.style.opacity === "0.5",
		
		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Will be defined later
		scriptEval: false,
		noCloneEvent: true,
		boxModel: null
	};
	
	script.type = "text/javascript";
	try {
		script.appendChild( document.createTextNode( "window." + id + "=1;" ) );
	} catch(e){}

	root.insertBefore( script, root.firstChild );
	
	// Make sure that the execution of code works by injecting a script
	// tag with appendChild/createTextNode
	// (IE doesn't support this, fails, and uses .text instead)
	if ( window[ id ] ) {
		jQuery.support.scriptEval = true;
		delete window[ id ];
	}

	root.removeChild( script );

	if ( div.attachEvent && div.fireEvent ) {
		div.attachEvent("onclick", function(){
			// Cloning a node shouldn't copy over any
			// bound event handlers (IE does this)
			jQuery.support.noCloneEvent = false;
			div.detachEvent("onclick", arguments.callee);
		});
		div.cloneNode(true).fireEvent("onclick");
	}

	// Figure out if the W3C box model works as expected
	// document.body must exist before we can do this
	jQuery(function(){
		var div = document.createElement("div");
		div.style.width = div.style.paddingLeft = "1px";

		document.body.appendChild( div );
		jQuery.boxModel = jQuery.support.boxModel = div.offsetWidth === 2;
		document.body.removeChild( div ).style.display = 'none';
	});
})();

var styleFloat = jQuery.support.cssFloat ? "cssFloat" : "styleFloat";

jQuery.props = {
	"for": "htmlFor",
	"class": "className",
	"float": styleFloat,
	cssFloat: styleFloat,
	styleFloat: styleFloat,
	readonly: "readOnly",
	maxlength: "maxLength",
	cellspacing: "cellSpacing",
	rowspan: "rowSpan",
	tabindex: "tabIndex"
};
jQuery.fn.extend({
	// Keep a copy of the old load
	_load: jQuery.fn.load,

	load: function( url, params, callback ) {
		if ( typeof url !== "string" )
			return this._load( url );

		var off = url.indexOf(" ");
		if ( off >= 0 ) {
			var selector = url.slice(off, url.length);
			url = url.slice(0, off);
		}

		// Default to a GET request
		var type = "GET";

		// If the second parameter was provided
		if ( params )
			// If it's a function
			if ( jQuery.isFunction( params ) ) {
				// We assume that it's the callback
				callback = params;
				params = null;

			// Otherwise, build a param string
			} else if( typeof params === "object" ) {
				params = jQuery.param( params );
				type = "POST";
			}

		var self = this;

		// Request the remote document
		jQuery.ajax({
			url: url,
			type: type,
			dataType: "html",
			data: params,
			complete: function(res, status){
				// If successful, inject the HTML into all the matched elements
				if ( status == "success" || status == "notmodified" )
					// See if a selector was specified
					self.html( selector ?
						// Create a dummy div to hold the results
						jQuery("<div/>")
							// inject the contents of the document in, removing the scripts
							// to avoid any 'Permission Denied' errors in IE
							.append(res.responseText.replace(/<script(.|\s)*?\/script>/g, ""))

							// Locate the specified elements
							.find(selector) :

						// If not, just inject the full result
						res.responseText );

				if( callback )
					self.each( callback, [res.responseText, status, res] );
			}
		});
		return this;
	},

	serialize: function() {
		return jQuery.param(this.serializeArray());
	},
	serializeArray: function() {
		return this.map(function(){
			return this.elements ? jQuery.makeArray(this.elements) : this;
		})
		.filter(function(){
			return this.name && !this.disabled &&
				(this.checked || /select|textarea/i.test(this.nodeName) ||
					/text|hidden|password|search/i.test(this.type));
		})
		.map(function(i, elem){
			var val = jQuery(this).val();
			return val == null ? null :
				jQuery.isArray(val) ?
					jQuery.map( val, function(val, i){
						return {name: elem.name, value: val};
					}) :
					{name: elem.name, value: val};
		}).get();
	}
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( "ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function(i,o){
	jQuery.fn[o] = function(f){
		return this.bind(o, f);
	};
});

var jsc = now();

jQuery.extend({
  
	get: function( url, data, callback, type ) {
		// shift arguments if data argument was ommited
		if ( jQuery.isFunction( data ) ) {
			callback = data;
			data = null;
		}

		return jQuery.ajax({
			type: "GET",
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	},

	getScript: function( url, callback ) {
		return jQuery.get(url, null, callback, "script");
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get(url, data, callback, "json");
	},

	post: function( url, data, callback, type ) {
		if ( jQuery.isFunction( data ) ) {
			callback = data;
			data = {};
		}

		return jQuery.ajax({
			type: "POST",
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	},

	ajaxSetup: function( settings ) {
		jQuery.extend( jQuery.ajaxSettings, settings );
	},

	ajaxSettings: {
		url: location.href,
		global: true,
		type: "GET",
		contentType: "application/x-www-form-urlencoded",
		processData: true,
		async: true,
		/*
		timeout: 0,
		data: null,
		username: null,
		password: null,
		*/
		// Create the request object; Microsoft failed to properly
		// implement the XMLHttpRequest in IE7, so we use the ActiveXObject when it is available
		// This function can be overriden by calling jQuery.ajaxSetup
		xhr:function(){
			return window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
		},
		accepts: {
			xml: "application/xml, text/xml",
			html: "text/html",
			script: "text/javascript, application/javascript",
			json: "application/json, text/javascript",
			text: "text/plain",
			_default: "*/*"
		}
	},

	// Last-Modified header cache for next request
	lastModified: {},

	ajax: function( s ) {
		// Extend the settings, but re-extend 's' so that it can be
		// checked again later (in the test suite, specifically)
		s = jQuery.extend(true, s, jQuery.extend(true, {}, jQuery.ajaxSettings, s));

		var jsonp, jsre = /=\?(&|$)/g, status, data,
			type = s.type.toUpperCase();

		// convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" )
			s.data = jQuery.param(s.data);

		// Handle JSONP Parameter Callbacks
		if ( s.dataType == "jsonp" ) {
			if ( type == "GET" ) {
				if ( !s.url.match(jsre) )
					s.url += (s.url.match(/\?/) ? "&" : "?") + (s.jsonp || "callback") + "=?";
			} else if ( !s.data || !s.data.match(jsre) )
				s.data = (s.data ? s.data + "&" : "") + (s.jsonp || "callback") + "=?";
			s.dataType = "json";
		}

		// Build temporary JSONP function
		if ( s.dataType == "json" && (s.data && s.data.match(jsre) || s.url.match(jsre)) ) {
			jsonp = "jsonp" + jsc++;

			// Replace the =? sequence both in the query string and the data
			if ( s.data )
				s.data = (s.data + "").replace(jsre, "=" + jsonp + "$1");
			s.url = s.url.replace(jsre, "=" + jsonp + "$1");

			// We need to make sure
			// that a JSONP style response is executed properly
			s.dataType = "script";

			// Handle JSONP-style loading
			window[ jsonp ] = function(tmp){
				data = tmp;
				success();
				complete();
				// Garbage collect
				window[ jsonp ] = undefined;
				try{ delete window[ jsonp ]; } catch(e){}
				if ( head )
					head.removeChild( script );
			};
		}

		if ( s.dataType == "script" && s.cache == null )
			s.cache = false;

		if ( s.cache === false && type == "GET" ) {
			var ts = now();
			// try replacing _= if it is there
			var ret = s.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + ts + "$2");
			// if nothing was replaced, add timestamp to the end
			s.url = ret + ((ret == s.url) ? (s.url.match(/\?/) ? "&" : "?") + "_=" + ts : "");
		}

		// If data is available, append data to url for get requests
		if ( s.data && type == "GET" ) {
			s.url += (s.url.match(/\?/) ? "&" : "?") + s.data;

			// IE likes to send both get and post data, prevent this
			s.data = null;
		}

		// Watch for a new set of requests
		if ( s.global && ! jQuery.active++ )
			jQuery.event.trigger( "ajaxStart" );

		// Matches an absolute URL, and saves the domain
		var parts = /^(\w+:)?\/\/([^\/?#]+)/.exec( s.url );

		// If we're requesting a remote document
		// and trying to load JSON or Script with a GET
		if ( s.dataType == "script" && type == "GET" && parts
			&& ( parts[1] && parts[1] != location.protocol || parts[2] != location.host )){

			var head = document.getElementsByTagName("head")[0];
			var script = document.createElement("script");
			script.src = s.url;
			if (s.scriptCharset)
				script.charset = s.scriptCharset;

			// Handle Script loading
			if ( !jsonp ) {
				var done = false;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function(){
					if ( !done && (!this.readyState ||
							this.readyState == "loaded" || this.readyState == "complete") ) {
						done = true;
						success();
						complete();

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;
						head.removeChild( script );
					}
				};
			}

			head.appendChild(script);

			// We handle everything using the script element injection
			return undefined;
		}

		var requestDone = false;

		// Create the request object
		var xhr = s.xhr();

		// Open the socket
		// Passing null username, generates a login popup on Opera (#2865)
		if( s.username )
			xhr.open(type, s.url, s.async, s.username, s.password);
		else
			xhr.open(type, s.url, s.async);

		// Need an extra try/catch for cross domain requests in Firefox 3
		try {
			// Set the correct header, if data is being sent
			if ( s.data )
				xhr.setRequestHeader("Content-Type", s.contentType);

			// Set the If-Modified-Since header, if ifModified mode.
			if ( s.ifModified )
				xhr.setRequestHeader("If-Modified-Since",
					jQuery.lastModified[s.url] || "Thu, 01 Jan 1970 00:00:00 GMT" );

			// Set header so the called script knows that it's an XMLHttpRequest
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

			// Set the Accepts header for the server, depending on the dataType
			xhr.setRequestHeader("Accept", s.dataType && s.accepts[ s.dataType ] ?
				s.accepts[ s.dataType ] + ", */*" :
				s.accepts._default );
		} catch(e){}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && s.beforeSend(xhr, s) === false ) {
			// Handle the global AJAX counter
			if ( s.global && ! --jQuery.active )
				jQuery.event.trigger( "ajaxStop" );
			// close opended socket
			xhr.abort();
			return false;
		}

		if ( s.global )
			jQuery.event.trigger("ajaxSend", [xhr, s]);

		// Wait for a response to come back
		var onreadystatechange = function(isTimeout){
			// The request was aborted, clear the interval and decrement jQuery.active
			if (xhr.readyState == 0) {
				if (ival) {
					// clear poll interval
					clearInterval(ival);
					ival = null;
					// Handle the global AJAX counter
					if ( s.global && ! --jQuery.active )
						jQuery.event.trigger( "ajaxStop" );
				}
			// The transfer is complete and the data is available, or the request timed out
			} else if ( !requestDone && xhr && (xhr.readyState == 4 || isTimeout == "timeout") ) {
				requestDone = true;

				// clear poll interval
				if (ival) {
					clearInterval(ival);
					ival = null;
				}

				status = isTimeout == "timeout" ? "timeout" :
					!jQuery.httpSuccess( xhr ) ? "error" :
					s.ifModified && jQuery.httpNotModified( xhr, s.url ) ? "notmodified" :
					"success";

				if ( status == "success" ) {
					// Watch for, and catch, XML document parse errors
					try {
						// process the data (runs the xml through httpData regardless of callback)
						data = jQuery.httpData( xhr, s.dataType, s );
					} catch(e) {
						status = "parsererror";
					}
				}

				// Make sure that the request was successful or notmodified
				if ( status == "success" ) {
					// Cache Last-Modified header, if ifModified mode.
					var modRes;
					try {
						modRes = xhr.getResponseHeader("Last-Modified");
					} catch(e) {} // swallow exception thrown by FF if header is not available

					if ( s.ifModified && modRes )
						jQuery.lastModified[s.url] = modRes;

					// JSONP handles its own success callback
					if ( !jsonp )
						success();
				} else
					jQuery.handleError(s, xhr, status);

				// Fire the complete handlers
				complete();

				if ( isTimeout )
					xhr.abort();

				// Stop memory leaks
				if ( s.async )
					xhr = null;
			}
		};

		if ( s.async ) {
			// don't attach the handler to the request, just poll it instead
			var ival = setInterval(onreadystatechange, 13);

			// Timeout checker
			if ( s.timeout > 0 )
				setTimeout(function(){
					// Check to see if the request is still happening
					if ( xhr && !requestDone )
						onreadystatechange( "timeout" );
				}, s.timeout);
		}

		// Send the data
		try {
			xhr.send(s.data);
		} catch(e) {
			jQuery.handleError(s, xhr, null, e);
		}

		// firefox 1.5 doesn't fire statechange for sync requests
		if ( !s.async )
			onreadystatechange();

		function success(){
			// If a local callback was specified, fire it and pass it the data
			if ( s.success )
				s.success( data, status );

			// Fire the global callback
			if ( s.global )
				jQuery.event.trigger( "ajaxSuccess", [xhr, s] );
		}

		function complete(){
			// Process result
			if ( s.complete )
				s.complete(xhr, status);

			// The request was completed
			if ( s.global )
				jQuery.event.trigger( "ajaxComplete", [xhr, s] );

			// Handle the global AJAX counter
			if ( s.global && ! --jQuery.active )
				jQuery.event.trigger( "ajaxStop" );
		}

		// return XMLHttpRequest to allow aborting the request etc.
		return xhr;
	},

	handleError: function( s, xhr, status, e ) {
		// If a local callback was specified, fire it
		if ( s.error ) s.error( xhr, status, e );

		// Fire the global callback
		if ( s.global )
			jQuery.event.trigger( "ajaxError", [xhr, s, e] );
	},

	// Counter for holding the number of active queries
	active: 0,

	// Determines if an XMLHttpRequest was successful or not
	httpSuccess: function( xhr ) {
		try {
			// IE error sometimes returns 1223 when it should be 204 so treat it as success, see #1450
			return !xhr.status && location.protocol == "file:" ||
				( xhr.status >= 200 && xhr.status < 300 ) || xhr.status == 304 || xhr.status == 1223;
		} catch(e){}
		return false;
	},

	// Determines if an XMLHttpRequest returns NotModified
	httpNotModified: function( xhr, url ) {
		try {
			var xhrRes = xhr.getResponseHeader("Last-Modified");

			// Firefox always returns 200. check Last-Modified date
			return xhr.status == 304 || xhrRes == jQuery.lastModified[url];
		} catch(e){}
		return false;
	},

	httpData: function( xhr, type, s ) {
		var ct = xhr.getResponseHeader("content-type"),
			xml = type == "xml" || !type && ct && ct.indexOf("xml") >= 0,
			data = xml ? xhr.responseXML : xhr.responseText;

		if ( xml && data.documentElement.tagName == "parsererror" )
			throw "parsererror";
			
		// Allow a pre-filtering function to sanitize the response
		// s != null is checked to keep backwards compatibility
		if( s && s.dataFilter )
			data = s.dataFilter( data, type );

		// The filter can actually parse the response
		if( typeof data === "string" ){

			// If the type is "script", eval it in global context
			if ( type == "script" )
				jQuery.globalEval( data );

			// Get the JavaScript object, if JSON is used.
			if ( type == "json" )
				data = window["eval"]("(" + data + ")");
		}
		
		return data;
	},

	// Serialize an array of form elements or a set of
	// key/values into a query string
	param: function( a ) {
		var s = [ ];

		function add( key, value ){
			s[ s.length ] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
		};

		// If an array was passed in, assume that it is an array
		// of form elements
		if ( jQuery.isArray(a) || a.jquery )
			// Serialize the form elements
			jQuery.each( a, function(){
				add( this.name, this.value );
			});

		// Otherwise, assume that it's an object of key/value pairs
		else
			// Serialize the key/values
			for ( var j in a )
				// If the value is an array then the key names need to be repeated
				if ( jQuery.isArray(a[j]) )
					jQuery.each( a[j], function(){
						add( j, this );
					});
				else
					add( j, jQuery.isFunction(a[j]) ? a[j]() : a[j] );

		// Return the resulting serialization
		return s.join("&").replace(/%20/g, "+");
	}

});
var elemdisplay = {},
	timerId,
	fxAttrs = [
		// height animations
		[ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ],
		// width animations
		[ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ],
		// opacity animations
		[ "opacity" ]
	];

function genFx( type, num ){
	var obj = {};
	jQuery.each( fxAttrs.concat.apply([], fxAttrs.slice(0,num)), function(){
		obj[ this ] = type;
	});
	return obj;
}

jQuery.fn.extend({
	show: function(speed,callback){
		if ( speed ) {
			return this.animate( genFx("show", 3), speed, callback);
		} else {
			for ( var i = 0, l = this.length; i < l; i++ ){
				var old = jQuery.data(this[i], "olddisplay");
				
				this[i].style.display = old || "";
				
				if ( jQuery.css(this[i], "display") === "none" ) {
					var tagName = this[i].tagName, display;
					
					if ( elemdisplay[ tagName ] ) {
						display = elemdisplay[ tagName ];
					} else {
						var elem = jQuery("<" + tagName + " />").appendTo("body");
						
						display = elem.css("display");
						if ( display === "none" )
							display = "block";
						
						elem.remove();
						
						elemdisplay[ tagName ] = display;
					}
					
					jQuery.data(this[i], "olddisplay", display);
				}
			}

			// Set the display of the elements in a second loop
			// to avoid the constant reflow
			for ( var i = 0, l = this.length; i < l; i++ ){
				this[i].style.display = jQuery.data(this[i], "olddisplay") || "";
			}
			
			return this;
		}
	},

	hide: function(speed,callback){
		if ( speed ) {
			return this.animate( genFx("hide", 3), speed, callback);
		} else {
			for ( var i = 0, l = this.length; i < l; i++ ){
				var old = jQuery.data(this[i], "olddisplay");
				if ( !old && old !== "none" )
					jQuery.data(this[i], "olddisplay", jQuery.css(this[i], "display"));
			}

			// Set the display of the elements in a second loop
			// to avoid the constant reflow
			for ( var i = 0, l = this.length; i < l; i++ ){
				this[i].style.display = "none";
			}

			return this;
		}
	},

	// Save the old toggle function
	_toggle: jQuery.fn.toggle,

	toggle: function( fn, fn2 ){
		var bool = typeof fn === "boolean";

		return jQuery.isFunction(fn) && jQuery.isFunction(fn2) ?
			this._toggle.apply( this, arguments ) :
			fn == null || bool ?
				this.each(function(){
					var state = bool ? fn : jQuery(this).is(":hidden");
					jQuery(this)[ state ? "show" : "hide" ]();
				}) :
				this.animate(genFx("toggle", 3), fn, fn2);
	},

	fadeTo: function(speed,to,callback){
		return this.animate({opacity: to}, speed, callback);
	},

	animate: function( prop, speed, easing, callback ) {
		var optall = jQuery.speed(speed, easing, callback);

		return this[ optall.queue === false ? "each" : "queue" ](function(){
		
			var opt = jQuery.extend({}, optall), p,
				hidden = this.nodeType == 1 && jQuery(this).is(":hidden"),
				self = this;
	
			for ( p in prop ) {
				if ( prop[p] == "hide" && hidden || prop[p] == "show" && !hidden )
					return opt.complete.call(this);

				if ( ( p == "height" || p == "width" ) && this.style ) {
					// Store display property
					opt.display = jQuery.css(this, "display");

					// Make sure that nothing sneaks out
					opt.overflow = this.style.overflow;
				}
			}

			if ( opt.overflow != null )
				this.style.overflow = "hidden";

			opt.curAnim = jQuery.extend({}, prop);

			jQuery.each( prop, function(name, val){
				var e = new jQuery.fx( self, opt, name );

				if ( /toggle|show|hide/.test(val) )
					e[ val == "toggle" ? hidden ? "show" : "hide" : val ]( prop );
				else {
					var parts = val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),
						start = e.cur(true) || 0;

					if ( parts ) {
						var end = parseFloat(parts[2]),
							unit = parts[3] || "px";

						// We need to compute starting value
						if ( unit != "px" ) {
							self.style[ name ] = (end || 1) + unit;
							start = ((end || 1) / e.cur(true)) * start;
							self.style[ name ] = start + unit;
						}

						// If a +=/-= token was provided, we're doing a relative animation
						if ( parts[1] )
							end = ((parts[1] == "-=" ? -1 : 1) * end) + start;

						e.custom( start, end, unit );
					} else
						e.custom( start, val, "" );
				}
			});

			// For JS strict compliance
			return true;
		});
	},

	stop: function(clearQueue, gotoEnd){
		var timers = jQuery.timers;

		if (clearQueue)
			this.queue([]);

		this.each(function(){
			// go in reverse order so anything added to the queue during the loop is ignored
			for ( var i = timers.length - 1; i >= 0; i-- )
				if ( timers[i].elem == this ) {
					if (gotoEnd)
						// force the next step to be the last
						timers[i](true);
					timers.splice(i, 1);
				}
		});

		// start the next in the queue if the last step wasn't forced
		if (!gotoEnd)
			this.dequeue();

		return this;
	}

});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show", 1),
	slideUp: genFx("hide", 1),
	slideToggle: genFx("toggle", 1),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" }
}, function( name, props ){
	jQuery.fn[ name ] = function( speed, callback ){
		return this.animate( props, speed, callback );
	};
});

jQuery.extend({

	speed: function(speed, easing, fn) {
		var opt = typeof speed === "object" ? speed : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			jQuery.fx.speeds[opt.duration] || jQuery.fx.speeds._default;

		// Queueing
		opt.old = opt.complete;
		opt.complete = function(){
			if ( opt.queue !== false )
				jQuery(this).dequeue();
			if ( jQuery.isFunction( opt.old ) )
				opt.old.call( this );
		};

		return opt;
	},

	easing: {
		linear: function( p, n, firstNum, diff ) {
			return firstNum + diff * p;
		},
		swing: function( p, n, firstNum, diff ) {
			return ((-Math.cos(p*Math.PI)/2) + 0.5) * diff + firstNum;
		}
	},

	timers: [],

	fx: function( elem, options, prop ){
		this.options = options;
		this.elem = elem;
		this.prop = prop;

		if ( !options.orig )
			options.orig = {};
	}

});

jQuery.fx.prototype = {

	// Simple function for setting a style value
	update: function(){
		if ( this.options.step )
			this.options.step.call( this.elem, this.now, this );

		(jQuery.fx.step[this.prop] || jQuery.fx.step._default)( this );

		// Set display property to block for height/width animations
		if ( ( this.prop == "height" || this.prop == "width" ) && this.elem.style )
			this.elem.style.display = "block";
	},

	// Get the current size
	cur: function(force){
		if ( this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null) )
			return this.elem[ this.prop ];

		var r = parseFloat(jQuery.css(this.elem, this.prop, force));
		return r && r > -10000 ? r : parseFloat(jQuery.curCSS(this.elem, this.prop)) || 0;
	},

	// Start an animation from one number to another
	custom: function(from, to, unit){
		this.startTime = now();
		this.start = from;
		this.end = to;
		this.unit = unit || this.unit || "px";
		this.now = this.start;
		this.pos = this.state = 0;

		var self = this;
		function t(gotoEnd){
			return self.step(gotoEnd);
		}

		t.elem = this.elem;

		if ( t() && jQuery.timers.push(t) && !timerId ) {
			timerId = setInterval(function(){
				var timers = jQuery.timers;

				for ( var i = 0; i < timers.length; i++ )
					if ( !timers[i]() )
						timers.splice(i--, 1);

				if ( !timers.length ) {
					clearInterval( timerId );
					timerId = undefined;
				}
			}, 13);
		}
	},

	// Simple 'show' function
	show: function(){
		// Remember where we started, so that we can go back to it later
		this.options.orig[this.prop] = jQuery.attr( this.elem.style, this.prop );
		this.options.show = true;

		// Begin the animation
		// Make sure that we start at a small width/height to avoid any
		// flash of content
		this.custom(this.prop == "width" || this.prop == "height" ? 1 : 0, this.cur());

		// Start by showing the element
		jQuery(this.elem).show();
	},

	// Simple 'hide' function
	hide: function(){
		// Remember where we started, so that we can go back to it later
		this.options.orig[this.prop] = jQuery.attr( this.elem.style, this.prop );
		this.options.hide = true;

		// Begin the animation
		this.custom(this.cur(), 0);
	},

	// Each step of an animation
	step: function(gotoEnd){
		var t = now();

		if ( gotoEnd || t >= this.options.duration + this.startTime ) {
			this.now = this.end;
			this.pos = this.state = 1;
			this.update();

			this.options.curAnim[ this.prop ] = true;

			var done = true;
			for ( var i in this.options.curAnim )
				if ( this.options.curAnim[i] !== true )
					done = false;

			if ( done ) {
				if ( this.options.display != null ) {
					// Reset the overflow
					this.elem.style.overflow = this.options.overflow;

					// Reset the display
					this.elem.style.display = this.options.display;
					if ( jQuery.css(this.elem, "display") == "none" )
						this.elem.style.display = "block";
				}

				// Hide the element if the "hide" operation was done
				if ( this.options.hide )
					jQuery(this.elem).hide();

				// Reset the properties, if the item has been hidden or shown
				if ( this.options.hide || this.options.show )
					for ( var p in this.options.curAnim )
						jQuery.attr(this.elem.style, p, this.options.orig[p]);
					
				// Execute the complete function
				this.options.complete.call( this.elem );
			}

			return false;
		} else {
			var n = t - this.startTime;
			this.state = n / this.options.duration;

			// Perform the easing function, defaults to swing
			this.pos = jQuery.easing[this.options.easing || (jQuery.easing.swing ? "swing" : "linear")](this.state, n, 0, 1, this.options.duration);
			this.now = this.start + ((this.end - this.start) * this.pos);

			// Perform the next step of the animation
			this.update();
		}

		return true;
	}

};

jQuery.extend( jQuery.fx, {
	speeds:{
		slow: 600,
 		fast: 200,
 		// Default speed
 		_default: 400
	},
	step: {

		opacity: function(fx){
			jQuery.attr(fx.elem.style, "opacity", fx.now);
		},

		_default: function(fx){
			if ( fx.elem.style && fx.elem.style[ fx.prop ] != null )
				fx.elem.style[ fx.prop ] = fx.now + fx.unit;
			else
				fx.elem[ fx.prop ] = fx.now;
		}
	}
});
if ( document.documentElement["getBoundingClientRect"] )
	jQuery.fn.offset = function() {
		if ( !this[0] ) return { top: 0, left: 0 };
		if ( this[0] === this[0].ownerDocument.body ) return jQuery.offset.bodyOffset( this[0] );
		var box  = this[0].getBoundingClientRect(), doc = this[0].ownerDocument, body = doc.body, docElem = doc.documentElement,
			clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
			top  = box.top  + (self.pageYOffset || jQuery.boxModel && docElem.scrollTop  || body.scrollTop ) - clientTop,
			left = box.left + (self.pageXOffset || jQuery.boxModel && docElem.scrollLeft || body.scrollLeft) - clientLeft;
		return { top: top, left: left };
	};
else 
	jQuery.fn.offset = function() {
		if ( !this[0] ) return { top: 0, left: 0 };
		if ( this[0] === this[0].ownerDocument.body ) return jQuery.offset.bodyOffset( this[0] );
		jQuery.offset.initialized || jQuery.offset.initialize();

		var elem = this[0], offsetParent = elem.offsetParent, prevOffsetParent = elem,
			doc = elem.ownerDocument, computedStyle, docElem = doc.documentElement,
			body = doc.body, defaultView = doc.defaultView,
			prevComputedStyle = defaultView.getComputedStyle(elem, null),
			top = elem.offsetTop, left = elem.offsetLeft;

		while ( (elem = elem.parentNode) && elem !== body && elem !== docElem ) {
			computedStyle = defaultView.getComputedStyle(elem, null);
			top -= elem.scrollTop, left -= elem.scrollLeft;
			if ( elem === offsetParent ) {
				top += elem.offsetTop, left += elem.offsetLeft;
				if ( jQuery.offset.doesNotAddBorder && !(jQuery.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(elem.tagName)) )
					top  += parseInt( computedStyle.borderTopWidth,  10) || 0,
					left += parseInt( computedStyle.borderLeftWidth, 10) || 0;
				prevOffsetParent = offsetParent, offsetParent = elem.offsetParent;
			}
			if ( jQuery.offset.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" )
				top  += parseInt( computedStyle.borderTopWidth,  10) || 0,
				left += parseInt( computedStyle.borderLeftWidth, 10) || 0;
			prevComputedStyle = computedStyle;
		}

		if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" )
			top  += body.offsetTop,
			left += body.offsetLeft;

		if ( prevComputedStyle.position === "fixed" )
			top  += Math.max(docElem.scrollTop, body.scrollTop),
			left += Math.max(docElem.scrollLeft, body.scrollLeft);

		return { top: top, left: left };
	};

jQuery.offset = {
	initialize: function() {
		if ( this.initialized ) return;
		var body = document.body, container = document.createElement('div'), innerDiv, checkDiv, table, td, rules, prop, bodyMarginTop = body.style.marginTop,
			html = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';

		rules = { position: 'absolute', top: 0, left: 0, margin: 0, border: 0, width: '1px', height: '1px', visibility: 'hidden' };
		for ( prop in rules ) container.style[prop] = rules[prop];

		container.innerHTML = html;
		body.insertBefore(container, body.firstChild);
		innerDiv = container.firstChild, checkDiv = innerDiv.firstChild, td = innerDiv.nextSibling.firstChild.firstChild;

		this.doesNotAddBorder = (checkDiv.offsetTop !== 5);
		this.doesAddBorderForTableAndCells = (td.offsetTop === 5);

		innerDiv.style.overflow = 'hidden', innerDiv.style.position = 'relative';
		this.subtractsBorderForOverflowNotVisible = (checkDiv.offsetTop === -5);

		body.style.marginTop = '1px';
		this.doesNotIncludeMarginInBodyOffset = (body.offsetTop === 0);
		body.style.marginTop = bodyMarginTop;

		body.removeChild(container);
		this.initialized = true;
	},

	bodyOffset: function(body) {
		jQuery.offset.initialized || jQuery.offset.initialize();
		var top = body.offsetTop, left = body.offsetLeft;
		if ( jQuery.offset.doesNotIncludeMarginInBodyOffset )
			top  += parseInt( jQuery.curCSS(body, 'marginTop',  true), 10 ) || 0,
			left += parseInt( jQuery.curCSS(body, 'marginLeft', true), 10 ) || 0;
		return { top: top, left: left };
	}
};


jQuery.fn.extend({
	position: function() {
		var left = 0, top = 0, results;

		if ( this[0] ) {
			// Get *real* offsetParent
			var offsetParent = this.offsetParent(),

			// Get correct offsets
			offset       = this.offset(),
			parentOffset = /^body|html$/i.test(offsetParent[0].tagName) ? { top: 0, left: 0 } : offsetParent.offset();

			// Subtract element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft 
			// are the same in Safari causing offset.left to incorrectly be 0
			offset.top  -= num( this, 'marginTop'  );
			offset.left -= num( this, 'marginLeft' );

			// Add offsetParent borders
			parentOffset.top  += num( offsetParent, 'borderTopWidth'  );
			parentOffset.left += num( offsetParent, 'borderLeftWidth' );

			// Subtract the two offsets
			results = {
				top:  offset.top  - parentOffset.top,
				left: offset.left - parentOffset.left
			};
		}

		return results;
	},

	offsetParent: function() {
		var offsetParent = this[0].offsetParent || document.body;
		while ( offsetParent && (!/^body|html$/i.test(offsetParent.tagName) && jQuery.css(offsetParent, 'position') == 'static') )
			offsetParent = offsetParent.offsetParent;
		return jQuery(offsetParent);
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( ['Left', 'Top'], function(i, name) {
	var method = 'scroll' + name;
	
	jQuery.fn[ method ] = function(val) {
		if (!this[0]) return null;

		return val !== undefined ?

			// Set the scroll offset
			this.each(function() {
				this == window || this == document ?
					window.scrollTo(
						!i ? val : jQuery(window).scrollLeft(),
						 i ? val : jQuery(window).scrollTop()
					) :
					this[ method ] = val;
			}) :

			// Return the scroll offset
			this[0] == window || this[0] == document ?
				self[ i ? 'pageYOffset' : 'pageXOffset' ] ||
					jQuery.boxModel && document.documentElement[ method ] ||
					document.body[ method ] :
				this[0][ method ];
	};
});
// Create innerHeight, innerWidth, outerHeight and outerWidth methods
jQuery.each([ "Height", "Width" ], function(i, name){

	var tl = i ? "Left"  : "Top",  // top or left
		br = i ? "Right" : "Bottom", // bottom or right
		lower = name.toLowerCase();

	// innerHeight and innerWidth
	jQuery.fn["inner" + name] = function(){
		return this[0] ?
			jQuery.css( this[0], lower, false, "padding" ) :
			null;
	};

	// outerHeight and outerWidth
	jQuery.fn["outer" + name] = function(margin) {
		return this[0] ?
			jQuery.css( this[0], lower, false, margin ? "margin" : "border" ) :
			null;
	};
	
	var type = name.toLowerCase();

	jQuery.fn[ type ] = function( size ) {
		// Get window width or height
		return this[0] == window ?
			// Everyone else use document.documentElement or document.body depending on Quirks vs Standards mode
			document.compatMode == "CSS1Compat" && document.documentElement[ "client" + name ] ||
			document.body[ "client" + name ] :

			// Get document width or height
			this[0] == document ?
				// Either scroll[Width/Height] or offset[Width/Height], whichever is greater
				Math.max(
					document.documentElement["client" + name],
					document.body["scroll" + name], document.documentElement["scroll" + name],
					document.body["offset" + name], document.documentElement["offset" + name]
				) :

				// Get or set width or height on the element
				size === undefined ?
					// Get width or height on the element
					(this.length ? jQuery.css( this[0], type ) : null) :

					// Set the width or height on the element (default to pixels if value is unitless)
					this.css( type, typeof size === "string" ? size : size + "px" );
	};

});
})();
;
/**
 *
 * Date picker
 * Author: Stefan Petre www.eyecon.ro
 * 
 * Dual licensed under the MIT and GPL licenses
 * 
 */
(function ($) {
	var DatePicker = function () {
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
							'<tr>',
								'<th class="datepickerGoPrev"><a href="#"><span><%=prev%></span></a></th>',
								'<th colspan="6" class="datepickerMonth"><a href="#"><span></span></a></th>',
								'<th class="datepickerGoNext"><a href="#"><span><%=next%></span></a></th>',
							'</tr>',
							'<tr class="datepickerDoW">',
								'<th><span><%=week%></span></th>',
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
							'<th class="datepickerWeek"><a href="#"><span><%=weeks[0].week%></span></a></th>',
							'<td class="<%=weeks[0].days[0].classname%>"><a href="#"><span><%=weeks[0].days[0].text%></span></a></td>',
							'<td class="<%=weeks[0].days[1].classname%>"><a href="#"><span><%=weeks[0].days[1].text%></span></a></td>',
							'<td class="<%=weeks[0].days[2].classname%>"><a href="#"><span><%=weeks[0].days[2].text%></span></a></td>',
							'<td class="<%=weeks[0].days[3].classname%>"><a href="#"><span><%=weeks[0].days[3].text%></span></a></td>',
							'<td class="<%=weeks[0].days[4].classname%>"><a href="#"><span><%=weeks[0].days[4].text%></span></a></td>',
							'<td class="<%=weeks[0].days[5].classname%>"><a href="#"><span><%=weeks[0].days[5].text%></span></a></td>',
							'<td class="<%=weeks[0].days[6].classname%>"><a href="#"><span><%=weeks[0].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<th class="datepickerWeek"><a href="#"><span><%=weeks[1].week%></span></a></th>',
							'<td class="<%=weeks[1].days[0].classname%>"><a href="#"><span><%=weeks[1].days[0].text%></span></a></td>',
							'<td class="<%=weeks[1].days[1].classname%>"><a href="#"><span><%=weeks[1].days[1].text%></span></a></td>',
							'<td class="<%=weeks[1].days[2].classname%>"><a href="#"><span><%=weeks[1].days[2].text%></span></a></td>',
							'<td class="<%=weeks[1].days[3].classname%>"><a href="#"><span><%=weeks[1].days[3].text%></span></a></td>',
							'<td class="<%=weeks[1].days[4].classname%>"><a href="#"><span><%=weeks[1].days[4].text%></span></a></td>',
							'<td class="<%=weeks[1].days[5].classname%>"><a href="#"><span><%=weeks[1].days[5].text%></span></a></td>',
							'<td class="<%=weeks[1].days[6].classname%>"><a href="#"><span><%=weeks[1].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<th class="datepickerWeek"><a href="#"><span><%=weeks[2].week%></span></a></th>',
							'<td class="<%=weeks[2].days[0].classname%>"><a href="#"><span><%=weeks[2].days[0].text%></span></a></td>',
							'<td class="<%=weeks[2].days[1].classname%>"><a href="#"><span><%=weeks[2].days[1].text%></span></a></td>',
							'<td class="<%=weeks[2].days[2].classname%>"><a href="#"><span><%=weeks[2].days[2].text%></span></a></td>',
							'<td class="<%=weeks[2].days[3].classname%>"><a href="#"><span><%=weeks[2].days[3].text%></span></a></td>',
							'<td class="<%=weeks[2].days[4].classname%>"><a href="#"><span><%=weeks[2].days[4].text%></span></a></td>',
							'<td class="<%=weeks[2].days[5].classname%>"><a href="#"><span><%=weeks[2].days[5].text%></span></a></td>',
							'<td class="<%=weeks[2].days[6].classname%>"><a href="#"><span><%=weeks[2].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<th class="datepickerWeek"><a href="#"><span><%=weeks[3].week%></span></a></th>',
							'<td class="<%=weeks[3].days[0].classname%>"><a href="#"><span><%=weeks[3].days[0].text%></span></a></td>',
							'<td class="<%=weeks[3].days[1].classname%>"><a href="#"><span><%=weeks[3].days[1].text%></span></a></td>',
							'<td class="<%=weeks[3].days[2].classname%>"><a href="#"><span><%=weeks[3].days[2].text%></span></a></td>',
							'<td class="<%=weeks[3].days[3].classname%>"><a href="#"><span><%=weeks[3].days[3].text%></span></a></td>',
							'<td class="<%=weeks[3].days[4].classname%>"><a href="#"><span><%=weeks[3].days[4].text%></span></a></td>',
							'<td class="<%=weeks[3].days[5].classname%>"><a href="#"><span><%=weeks[3].days[5].text%></span></a></td>',
							'<td class="<%=weeks[3].days[6].classname%>"><a href="#"><span><%=weeks[3].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<th class="datepickerWeek"><a href="#"><span><%=weeks[4].week%></span></a></th>',
							'<td class="<%=weeks[4].days[0].classname%>"><a href="#"><span><%=weeks[4].days[0].text%></span></a></td>',
							'<td class="<%=weeks[4].days[1].classname%>"><a href="#"><span><%=weeks[4].days[1].text%></span></a></td>',
							'<td class="<%=weeks[4].days[2].classname%>"><a href="#"><span><%=weeks[4].days[2].text%></span></a></td>',
							'<td class="<%=weeks[4].days[3].classname%>"><a href="#"><span><%=weeks[4].days[3].text%></span></a></td>',
							'<td class="<%=weeks[4].days[4].classname%>"><a href="#"><span><%=weeks[4].days[4].text%></span></a></td>',
							'<td class="<%=weeks[4].days[5].classname%>"><a href="#"><span><%=weeks[4].days[5].text%></span></a></td>',
							'<td class="<%=weeks[4].days[6].classname%>"><a href="#"><span><%=weeks[4].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<th class="datepickerWeek"><a href="#"><span><%=weeks[5].week%></span></a></th>',
							'<td class="<%=weeks[5].days[0].classname%>"><a href="#"><span><%=weeks[5].days[0].text%></span></a></td>',
							'<td class="<%=weeks[5].days[1].classname%>"><a href="#"><span><%=weeks[5].days[1].text%></span></a></td>',
							'<td class="<%=weeks[5].days[2].classname%>"><a href="#"><span><%=weeks[5].days[2].text%></span></a></td>',
							'<td class="<%=weeks[5].days[3].classname%>"><a href="#"><span><%=weeks[5].days[3].text%></span></a></td>',
							'<td class="<%=weeks[5].days[4].classname%>"><a href="#"><span><%=weeks[5].days[4].text%></span></a></td>',
							'<td class="<%=weeks[5].days[5].classname%>"><a href="#"><span><%=weeks[5].days[5].text%></span></a></td>',
							'<td class="<%=weeks[5].days[6].classname%>"><a href="#"><span><%=weeks[5].days[6].text%></span></a></td>',
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
				locale: {
					days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
					daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
					months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					weekMin: 'wk'
				}
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
;
