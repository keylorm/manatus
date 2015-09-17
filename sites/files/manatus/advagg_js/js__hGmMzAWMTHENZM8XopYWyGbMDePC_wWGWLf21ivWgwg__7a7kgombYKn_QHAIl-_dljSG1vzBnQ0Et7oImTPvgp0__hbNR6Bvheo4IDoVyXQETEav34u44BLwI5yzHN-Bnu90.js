/* Source and licensing information for the line(s) below can be found at http://www.manatuscostarica.com/sites/all/modules/contrib/views_slideshow/contrib/views_slideshow_cycle/js/views_slideshow_cycle.js. */
(function($){Drupal.behaviors.viewsSlideshowCycle={attach:function(context){$('.views_slideshow_cycle_main:not(.viewsSlideshowCycle-processed)',context).addClass('viewsSlideshowCycle-processed').each(function(){var fullId='#'+$(this).attr('id'),settings=Drupal.settings.viewsSlideshowCycle[fullId];settings.targetId='#'+$(fullId+" :first").attr('id');settings.slideshowId=settings.targetId.replace('#views_slideshow_cycle_teaser_section_','');settings.loaded=false;settings.opts={speed:settings.speed,timeout:settings.timeout,delay:settings.delay,sync:settings.sync,random:settings.random,nowrap:settings.nowrap,after:function(curr,next,opts){var slideNum=opts.currSlide;if(typeof settings.processedAfter=='undefined'||!settings.processedAfter){settings.processedAfter=1;slideNum=(typeof settings.opts.startingSlide=='undefined')?0:settings.opts.startingSlide};Drupal.viewsSlideshow.action({action:'transitionEnd',slideshowID:settings.slideshowId,slideNum:slideNum})},before:function(curr,next,opts){if(settings.remember_slide)createCookie(settings.vss_id,opts.currSlide+1,settings.remember_slide_days);if(!settings.fixed_height){var $ht=$(this).height();$(this).parent().animate({height:$ht})};var slideNum=opts.nextSlide;if(typeof settings.processedBefore=='undefined'||!settings.processedBefore){settings.processedBefore=1;slideNum=(typeof settings.opts.startingSlide=='undefined')?0:settings.opts.startingSlide};Drupal.viewsSlideshow.action({action:'transitionBegin',slideshowID:settings.slideshowId,slideNum:slideNum})},cleartype:(settings.cleartype)?true:false,cleartypeNoBg:(settings.cleartypenobg)?true:false};if(settings.remember_slide){var startSlide=readCookie(settings.vss_id);if(startSlide==null)startSlide=0;settings.opts.startingSlide=startSlide};if(settings.effect=='none'){settings.opts.speed=1}else settings.opts.fx=settings.effect;var hash=location.hash;if(hash){var hash=hash.replace('#',''),aHash=hash.split(';'),aHashLen=aHash.length;for(var i=0;i<aHashLen;i++){var initialInfo=aHash[i].split(':');if(settings.slideshowId==initialInfo[0]&&settings.num_divs>initialInfo[1])settings.opts.startingSlide=parseInt(initialInfo[1])}};if(settings.pause){var mouseIn=function(){Drupal.viewsSlideshow.action({action:'pause',slideshowID:settings.slideshowId})},mouseOut=function(){Drupal.viewsSlideshow.action({action:'play',slideshowID:settings.slideshowId})};if(jQuery.fn.hoverIntent){$('#views_slideshow_cycle_teaser_section_'+settings.vss_id).hoverIntent(mouseIn,mouseOut)}else $('#views_slideshow_cycle_teaser_section_'+settings.vss_id).hover(mouseIn,mouseOut)};if(settings.pause_on_click)$('#views_slideshow_cycle_teaser_section_'+settings.vss_id).click(function(){Drupal.viewsSlideshow.action({action:'pause',slideshowID:settings.slideshowId,force:true})});if(typeof JSON!='undefined'){var advancedOptions=JSON.parse(settings.advanced_options);for(var option in advancedOptions)switch(option){case"activePagerClass":case"allowPagerClickBubble":case"autostop":case"autostopCount":case"backwards":case"bounce":case"cleartype":case"cleartypeNoBg":case"containerResize":case"continuous":case"delay":case"easeIn":case"easeOut":case"easing":case"fastOnEvent":case"fit":case"fx":case"height":case"manualTrump":case"metaAttr":case"next":case"nowrap":case"pager":case"pagerEvent":case"pause":case"pauseOnPagerHover":case"prev":case"prevNextEvent":case"random":case"randomizeEffects":case"requeueOnImageNotLoaded":case"requeueTimeout":case"rev":case"slideExpr":case"slideResize":case"speed":case"speedIn":case"speedOut":case"startingSlide":case"sync":case"timeout":case"width":var optionValue=advancedOptions[option];optionValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(optionValue);settings.opts[option]=optionValue;break;case"animIn":case"animOut":case"cssBefore":case"cssAfter":case"shuffle":var cssValue=advancedOptions[option];cssValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(cssValue);settings.opts[option]=eval('('+cssValue+')');break;case"after":var afterValue=advancedOptions[option];afterValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(afterValue);settings.opts[option]=function(currSlideElement,nextSlideElement,options,forwardFlag){eval(afterValue)};break;case"before":var beforeValue=advancedOptions[option];beforeValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(beforeValue);settings.opts[option]=function(currSlideElement,nextSlideElement,options,forwardFlag){eval(beforeValue)};break;case"end":var endValue=advancedOptions[option];endValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(endValue);settings.opts[option]=function(options){eval(endValue)};break;case"fxFn":var fxFnValue=advancedOptions[option];fxFnValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(fxFnValue);settings.opts[option]=function(currSlideElement,nextSlideElement,options,afterCalback,forwardFlag){eval(fxFnValue)};break;case"onPagerEvent":var onPagerEventValue=advancedOptions[option];onPagerEventValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(onPagerEventValue);settings.opts[option]=function(zeroBasedSlideIndex,slideElement){eval(onPagerEventValue)};break;case"onPrevNextEvent":var onPrevNextEventValue=advancedOptions[option];onPrevNextEventValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(onPrevNextEventValue);settings.opts[option]=function(isNext,zeroBasedSlideIndex,slideElement){eval(onPrevNextEventValue)};break;case"pagerAnchorBuilder":var pagerAnchorBuilderValue=advancedOptions[option];pagerAnchorBuilderValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(pagerAnchorBuilderValue);settings.opts[option]=function(index,DOMelement){var returnVal='';eval(pagerAnchorBuilderValue);return returnVal};break;case"pagerClick":var pagerClickValue=advancedOptions[option];pagerClickValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(pagerClickValue);settings.opts[option]=function(zeroBasedSlideIndex,slideElement){eval(pagerClickValue)};break;case"paused":var pausedValue=advancedOptions[option];pausedValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(pausedValue);settings.opts[option]=function(cont,opts,byHover){eval(pausedValue)};break;case"resumed":var resumedValue=advancedOptions[option];resumedValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(resumedValue);settings.opts[option]=function(cont,opts,byHover){eval(resumedValue)};break;case"timeoutFn":var timeoutFnValue=advancedOptions[option];timeoutFnValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(timeoutFnValue);settings.opts[option]=function(currSlideElement,nextSlideElement,options,forwardFlag){eval(timeoutFnValue)};break;case"updateActivePagerLink":var updateActivePagerLinkValue=advancedOptions[option];updateActivePagerLinkValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(updateActivePagerLinkValue);settings.opts[option]=function(pager,currSlideIndex){eval(updateActivePagerLinkValue)};break}};if(settings.wait_for_image_load){settings.totalImages=$(settings.targetId+' img').length;if(settings.totalImages){settings.loadedImages=0;$(settings.targetId+' img').each(function(){var $imageElement=$(this);$imageElement.bind('load',function(){Drupal.viewsSlideshowCycle.imageWait(fullId)});var imgSrc=$imageElement.attr('src');$imageElement.attr('src','');$imageElement.attr('src',imgSrc)});setTimeout("Drupal.viewsSlideshowCycle.load('"+fullId+"')",settings.wait_for_image_load_timeout)}else Drupal.viewsSlideshowCycle.load(fullId)}else Drupal.viewsSlideshowCycle.load(fullId)})}};Drupal.viewsSlideshowCycle=Drupal.viewsSlideshowCycle||{};Drupal.viewsSlideshowCycle.advancedOptionCleanup=function(value){value=$.trim(value);value=value.replace(/\n/g,'');if(!isNaN(parseInt(value))){value=parseInt(value)}else if(value.toLowerCase()=='true'){value=true}else if(value.toLowerCase()=='false')value=false;return value};Drupal.viewsSlideshowCycle.imageWait=function(fullId){if(++Drupal.settings.viewsSlideshowCycle[fullId].loadedImages==Drupal.settings.viewsSlideshowCycle[fullId].totalImages)Drupal.viewsSlideshowCycle.load(fullId)};Drupal.viewsSlideshowCycle.load=function(fullId){var settings=Drupal.settings.viewsSlideshowCycle[fullId];if(!settings.loaded){$(settings.targetId).cycle(settings.opts);settings.loaded=true;if(settings.start_paused)Drupal.viewsSlideshow.action({action:'pause',slideshowID:settings.slideshowId,force:true});if(settings.pause_when_hidden){var checkPause=function(settings){var visible=viewsSlideshowCycleIsVisible(settings.targetId,settings.pause_when_hidden_type,settings.amount_allowed_visible);if(visible){Drupal.viewsSlideshow.action({action:'play',slideshowID:settings.slideshowId})}else Drupal.viewsSlideshow.action({action:'pause',slideshowID:settings.slideshowId})};$(window).scroll(function(){checkPause(settings)});$(window).resize(function(){checkPause(settings)})}}};Drupal.viewsSlideshowCycle.pause=function(options){$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle('pause')};Drupal.viewsSlideshowCycle.play=function(options){Drupal.settings.viewsSlideshowCycle['#views_slideshow_cycle_main_'+options.slideshowID].paused=false;$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle('resume')};Drupal.viewsSlideshowCycle.previousSlide=function(options){$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle('prev')};Drupal.viewsSlideshowCycle.nextSlide=function(options){$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle('next')};Drupal.viewsSlideshowCycle.goToSlide=function(options){$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle(options.slideNum)}
function IsNumeric(sText){var ValidChars="0123456789",IsNumber=true,Char;for(var i=0;i<sText.length&&IsNumber==true;i++){Char=sText.charAt(i);if(ValidChars.indexOf(Char)==-1)IsNumber=false};return IsNumber}
function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1e3));var expires="; expires="+date.toGMTString()}else var expires="";document.cookie=name+"="+value+expires+"; path=/"}
function readCookie(name){var nameEQ=name+"=",ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)};return null}
function eraseCookie(name){createCookie(name,"",-1)}
function viewsSlideshowCycleIsVisible(elem,type,amountVisible){var docViewTop=$(window).scrollTop(),docViewBottom=docViewTop+$(window).height(),docViewLeft=$(window).scrollLeft(),docViewRight=docViewLeft+$(window).width(),elemTop=$(elem).offset().top,elemHeight=$(elem).height(),elemBottom=elemTop+elemHeight,elemLeft=$(elem).offset().left,elemWidth=$(elem).width(),elemRight=elemLeft+elemWidth,elemArea=elemHeight*elemWidth,missingLeft=0,missingRight=0,missingTop=0,missingBottom=0;if(elemLeft<docViewLeft)missingLeft=docViewLeft-elemLeft;if(elemRight>docViewRight)missingRight=elemRight-docViewRight;if(elemTop<docViewTop)missingTop=docViewTop-elemTop;if(elemBottom>docViewBottom)missingBottom=elemBottom-docViewBottom;if(type=='full'){return((elemBottom>=docViewTop)&&(elemTop<=docViewBottom)&&(elemBottom<=docViewBottom)&&(elemTop>=docViewTop)&&(elemLeft>=docViewLeft)&&(elemRight<=docViewRight)&&(elemLeft<=docViewRight)&&(elemRight>=docViewLeft))}else if(type=='vertical'){var verticalShowing=elemHeight-missingTop-missingBottom;if(amountVisible.indexOf('%')){return(((verticalShowing/elemHeight)*100)>=parseInt(amountVisible))}else return(verticalShowing>=parseInt(amountVisible))}else if(type=='horizontal'){var horizontalShowing=elemWidth-missingLeft-missingRight;if(amountVisible.indexOf('%')){return(((horizontalShowing/elemWidth)*100)>=parseInt(amountVisible))}else return(horizontalShowing>=parseInt(amountVisible))}else if(type=='area'){var areaShowing=(elemWidth-missingLeft-missingRight)*(elemHeight-missingTop-missingBottom);if(amountVisible.indexOf('%')){return(((areaShowing/elemArea)*100)>=parseInt(amountVisible))}else return(areaShowing>=parseInt(amountVisible))}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://www.manatuscostarica.com/sites/all/modules/contrib/views_slideshow/contrib/views_slideshow_cycle/js/views_slideshow_cycle.js. */
/* Source and licensing information for the line(s) below can be found at http://www.manatuscostarica.com/sites/all/libraries/jquery.cycle/jquery.cycle.all.min.js. */
(function($,undefined){var ver='2.9999';if($.support==undefined)$.support={opacity:!($.browser.msie)}
function debug(s){$.fn.cycle.debug&&log(s)}
function log(){window.console&&console.log&&console.log('[cycle] '+Array.prototype.join.call(arguments,' '))};$.expr[':'].paused=function(el){return el.cyclePause};$.fn.cycle=function(options,arg2){var o={s:this.selector,c:this.context};if(this.length===0&&options!='stop'){if(!$.isReady&&o.s){log('DOM not ready, queuing slideshow');$(function(){$(o.s,o.c).cycle(options,arg2)});return this};log('terminating; zero elements found by selector'+($.isReady?'':' (DOM not ready)'));return this};return this.each(function(){var opts=handleArguments(this,options,arg2);if(opts===false)return;opts.updateActivePagerLink=opts.updateActivePagerLink||$.fn.cycle.updateActivePagerLink;if(this.cycleTimeout)clearTimeout(this.cycleTimeout);this.cycleTimeout=this.cyclePause=0;var $cont=$(this),$slides=opts.slideExpr?$(opts.slideExpr,this):$cont.children(),els=$slides.get(),opts2=buildOptions($cont,$slides,els,opts,o);if(opts2===false)return;if(els.length<2){log('terminating; too few slides: '+els.length);return};var startTime=opts2.continuous?10:getTimeout(els[opts2.currSlide],els[opts2.nextSlide],opts2,!opts2.backwards);if(startTime){startTime+=(opts2.delay||0);if(startTime<10)startTime=10;debug('first timeout: '+startTime);this.cycleTimeout=setTimeout(function(){go(els,opts2,0,!opts.backwards)},startTime)}})}
function triggerPause(cont,byHover,onPager){var opts=$(cont).data('cycle.opts'),paused=!!cont.cyclePause;if(paused&&opts.paused){opts.paused(cont,opts,byHover,onPager)}else if(!paused&&opts.resumed)opts.resumed(cont,opts,byHover,onPager)}
function handleArguments(cont,options,arg2){if(cont.cycleStop==undefined)cont.cycleStop=0;if(options===undefined||options===null)options={};if(options.constructor==String){switch(options){case'destroy':case'stop':var opts=$(cont).data('cycle.opts');if(!opts)return false;cont.cycleStop++;if(cont.cycleTimeout)clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;opts.elements&&$(opts.elements).stop();$(cont).removeData('cycle.opts');if(options=='destroy')destroy(opts);return false;case'toggle':cont.cyclePause=(cont.cyclePause===1)?0:1;checkInstantResume(cont.cyclePause,arg2,cont);triggerPause(cont);return false;case'pause':cont.cyclePause=1;triggerPause(cont);return false;case'resume':cont.cyclePause=0;checkInstantResume(false,arg2,cont);triggerPause(cont);return false;case'prev':case'next':var opts=$(cont).data('cycle.opts');if(!opts){log('options not found, "prev/next" ignored');return false};$.fn.cycle[options](opts);return false;default:options={fx:options}};return options}else if(options.constructor==Number){var num=options;options=$(cont).data('cycle.opts');if(!options){log('options not found, can not advance slide');return false};if(num<0||num>=options.elements.length){log('invalid slide index: '+num);return false};options.nextSlide=num;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0};if(typeof arg2=='string')options.oneTimeFx=arg2;go(options.elements,options,1,num>=options.currSlide);return false};return options
function checkInstantResume(isPaused,arg2,cont){if(!isPaused&&arg2===true){var options=$(cont).data('cycle.opts');if(!options){log('options not found, can not resume');return false};if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0};go(options.elements,options,1,!options.backwards)}}}
function removeFilter(el,opts){if(!$.support.opacity&&opts.cleartype&&el.style.filter)try{el.style.removeAttribute('filter')}catch(smother){}}
function destroy(opts){if(opts.next)$(opts.next).unbind(opts.prevNextEvent);if(opts.prev)$(opts.prev).unbind(opts.prevNextEvent);if(opts.pager||opts.pagerAnchorBuilder)$.each(opts.pagerAnchors||[],function(){this.unbind().remove()});opts.pagerAnchors=null;if(opts.destroy)opts.destroy(opts)}
function buildOptions($cont,$slides,els,options,o){var startingSlideSpecified,opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{}),meta=$.isFunction($cont.data)?$cont.data(opts.metaAttr):null;if(meta)opts=$.extend(opts,meta);if(opts.autostop)opts.countdown=opts.autostopCount||els.length;var cont=$cont[0];$cont.data('cycle.opts',opts);opts.$cont=$cont;opts.stopCount=cont.cycleStop;opts.elements=els;opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];if(!$.support.opacity&&opts.cleartype)opts.after.push(function(){removeFilter(this,opts)});if(opts.continuous)opts.after.push(function(){go(els,opts,0,!opts.backwards)});saveOriginalOpts(opts);if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg)clearTypeFix($slides);if($cont.css('position')=='static')$cont.css('position','relative');if(opts.width)$cont.width(opts.width);if(opts.height&&opts.height!='auto')$cont.height(opts.height);if(opts.startingSlide!=undefined){opts.startingSlide=parseInt(opts.startingSlide,10);if(opts.startingSlide>=els.length||opts.startSlide<0){opts.startingSlide=0}else startingSlideSpecified=true}else if(opts.backwards){opts.startingSlide=els.length-1}else opts.startingSlide=0;if(opts.random){opts.randomMap=[];for(var i=0;i<els.length;i++)opts.randomMap.push(i);opts.randomMap.sort(function(a,b){return Math.random()-0.5});if(startingSlideSpecified){for(var cnt=0;cnt<els.length;cnt++)if(opts.startingSlide==opts.randomMap[cnt])opts.randomIndex=cnt}else{opts.randomIndex=1;opts.startingSlide=opts.randomMap[1]}}else if(opts.startingSlide>=els.length)opts.startingSlide=0;opts.currSlide=opts.startingSlide||0;var first=opts.startingSlide;$slides.css({position:'absolute',top:0,left:0}).hide().each(function(i){var z;if(opts.backwards){z=first?i<=first?els.length+(i-first):first-i:els.length-i}else z=first?i>=first?els.length-(i-first):first-i:els.length-i;$(this).css('z-index',z)});$(els[first]).css('opacity',1).show();removeFilter(els[first],opts);if(opts.fit)if(!opts.aspect){if(opts.width)$slides.width(opts.width);if(opts.height&&opts.height!='auto')$slides.height(opts.height)}else $slides.each(function(){var $slide=$(this),ratio=(opts.aspect===true)?$slide.width()/$slide.height():opts.aspect;if(opts.width&&$slide.width()!=opts.width){$slide.width(opts.width);$slide.height(opts.width/ratio)};if(opts.height&&$slide.height()<opts.height){$slide.height(opts.height);$slide.width(opts.height*ratio)}});if(opts.center&&((!opts.fit)||opts.aspect))$slides.each(function(){var $slide=$(this);$slide.css({"margin-left":opts.width?((opts.width-$slide.width())/2)+"px":0,"margin-top":opts.height?((opts.height-$slide.height())/2)+"px":0})});if(opts.center&&!opts.fit&&!opts.slideResize)$slides.each(function(){var $slide=$(this);$slide.css({"margin-left":opts.width?((opts.width-$slide.width())/2)+"px":0,"margin-top":opts.height?((opts.height-$slide.height())/2)+"px":0})});var reshape=opts.containerResize&&!$cont.innerHeight();if(reshape){var maxw=0,maxh=0;for(var j=0;j<els.length;j++){var $e=$(els[j]),e=$e[0],w=$e.outerWidth(),h=$e.outerHeight();if(!w)w=e.offsetWidth||e.width||$e.attr('width');if(!h)h=e.offsetHeight||e.height||$e.attr('height');maxw=w>maxw?w:maxw;maxh=h>maxh?h:maxh};if(maxw>0&&maxh>0)$cont.css({width:maxw+'px',height:maxh+'px'})};var pauseFlag=false;if(opts.pause)$cont.hover(function(){pauseFlag=true;this.cyclePause++;triggerPause(cont,true)},function(){pauseFlag&&this.cyclePause--;triggerPause(cont,true)});if(supportMultiTransitions(opts)===false)return false;var requeue=false;options.requeueAttempts=options.requeueAttempts||0;$slides.each(function(){var $el=$(this);this.cycleH=(opts.fit&&opts.height)?opts.height:($el.height()||this.offsetHeight||this.height||$el.attr('height')||0);this.cycleW=(opts.fit&&opts.width)?opts.width:($el.width()||this.offsetWidth||this.width||$el.attr('width')||0);if($el.is('img')){var loadingIE=($.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete),loadingFF=($.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete),loadingOp=($.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete),loadingOther=(this.cycleH==0&&this.cycleW==0&&!this.complete);if(loadingIE||loadingFF||loadingOp||loadingOther)if(o.s&&opts.requeueOnImageNotLoaded&&++options.requeueAttempts<100){log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ',this.src,this.cycleW,this.cycleH);setTimeout(function(){$(o.s,o.c).cycle(options)},opts.requeueTimeout);requeue=true;return false}else log('could not determine size of image: '+this.src,this.cycleW,this.cycleH)};return true});if(requeue)return false;opts.cssBefore=opts.cssBefore||{};opts.cssAfter=opts.cssAfter||{};opts.cssFirst=opts.cssFirst||{};opts.animIn=opts.animIn||{};opts.animOut=opts.animOut||{};$slides.not(':eq('+first+')').css(opts.cssBefore);$($slides[first]).css(opts.cssFirst);if(opts.timeout){opts.timeout=parseInt(opts.timeout,10);if(opts.speed.constructor==String)opts.speed=$.fx.speeds[opts.speed]||parseInt(opts.speed,10);if(!opts.sync)opts.speed=opts.speed/2;var buffer=opts.fx=='none'?0:opts.fx=='shuffle'?500:250;while((opts.timeout-opts.speed)<buffer)opts.timeout+=opts.speed};if(opts.easing)opts.easeIn=opts.easeOut=opts.easing;if(!opts.speedIn)opts.speedIn=opts.speed;if(!opts.speedOut)opts.speedOut=opts.speed;opts.slideCount=els.length;opts.currSlide=opts.lastSlide=first;if(opts.random){if(++opts.randomIndex==els.length)opts.randomIndex=0;opts.nextSlide=opts.randomMap[opts.randomIndex]}else if(opts.backwards){opts.nextSlide=opts.startingSlide==0?(els.length-1):opts.startingSlide-1}else opts.nextSlide=opts.startingSlide>=(els.length-1)?0:opts.startingSlide+1;if(!opts.multiFx){var init=$.fn.cycle.transitions[opts.fx];if($.isFunction(init)){init($cont,$slides,opts)}else if(opts.fx!='custom'&&!opts.multiFx){log('unknown transition: '+opts.fx,'; slideshow terminating');return false}};var e0=$slides[first];if(!opts.skipInitializationCallbacks){if(opts.before.length)opts.before[0].apply(e0,[e0,e0,opts,true]);if(opts.after.length)opts.after[0].apply(e0,[e0,e0,opts,true])};if(opts.next)$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1)});if(opts.prev)$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0)});if(opts.pager||opts.pagerAnchorBuilder)buildPager(els,opts);exposeAddSlide(opts,els);return opts}
function saveOriginalOpts(opts){opts.original={before:[],after:[]};opts.original.cssBefore=$.extend({},opts.cssBefore);opts.original.cssAfter=$.extend({},opts.cssAfter);opts.original.animIn=$.extend({},opts.animIn);opts.original.animOut=$.extend({},opts.animOut);$.each(opts.before,function(){opts.original.before.push(this)});$.each(opts.after,function(){opts.original.after.push(this)})}
function supportMultiTransitions(opts){var i,tx,txs=$.fn.cycle.transitions;if(opts.fx.indexOf(',')>0){opts.multiFx=true;opts.fxs=opts.fx.replace(/\s*/g,'').split(',');for(i=0;i<opts.fxs.length;i++){var fx=opts.fxs[i];tx=txs[fx];if(!tx||!txs.hasOwnProperty(fx)||!$.isFunction(tx)){log('discarding unknown transition: ',fx);opts.fxs.splice(i,1);i--}};if(!opts.fxs.length){log('No valid transitions named; slideshow terminating.');return false}}else if(opts.fx=='all'){opts.multiFx=true;opts.fxs=[];for(p in txs){tx=txs[p];if(txs.hasOwnProperty(p)&&$.isFunction(tx))opts.fxs.push(p)}};if(opts.multiFx&&opts.randomizeEffects){var r1=Math.floor(Math.random()*20)+30;for(i=0;i<r1;i++){var r2=Math.floor(Math.random()*opts.fxs.length);opts.fxs.push(opts.fxs.splice(r2,1)[0])};debug('randomized fx sequence: ',opts.fxs)};return true}
function exposeAddSlide(opts,els){opts.addSlide=function(newSlide,prepend){var $s=$(newSlide),s=$s[0];if(!opts.autostopCount)opts.countdown++;els[prepend?'unshift':'push'](s);if(opts.els)opts.els[prepend?'unshift':'push'](s);opts.slideCount=els.length;if(opts.random){opts.randomMap.push(opts.slideCount-1);opts.randomMap.sort(function(a,b){return Math.random()-0.5})};$s.css('position','absolute');$s[prepend?'prependTo':'appendTo'](opts.$cont);if(prepend){opts.currSlide++;opts.nextSlide++};if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg)clearTypeFix($s);if(opts.fit&&opts.width)$s.width(opts.width);if(opts.fit&&opts.height&&opts.height!='auto')$s.height(opts.height);s.cycleH=(opts.fit&&opts.height)?opts.height:$s.height();s.cycleW=(opts.fit&&opts.width)?opts.width:$s.width();$s.css(opts.cssBefore);if(opts.pager||opts.pagerAnchorBuilder)$.fn.cycle.createPagerAnchor(els.length-1,s,$(opts.pager),els,opts);if($.isFunction(opts.onAddSlide)){opts.onAddSlide($s)}else $s.hide()}};$.fn.cycle.resetState=function(opts,fx){fx=fx||opts.fx;opts.before=[];opts.after=[];opts.cssBefore=$.extend({},opts.original.cssBefore);opts.cssAfter=$.extend({},opts.original.cssAfter);opts.animIn=$.extend({},opts.original.animIn);opts.animOut=$.extend({},opts.original.animOut);opts.fxFn=null;$.each(opts.original.before,function(){opts.before.push(this)});$.each(opts.original.after,function(){opts.after.push(this)});var init=$.fn.cycle.transitions[fx];if($.isFunction(init))init(opts.$cont,$(opts.elements),opts)}
function go(els,opts,manual,fwd){if(manual&&opts.busy&&opts.manualTrump){debug('manualTrump in go(), stopping active transition');$(els).stop(true,true);opts.busy=0};if(opts.busy){debug('transition active, ignoring new tx request');return};var p=opts.$cont[0],curr=els[opts.currSlide],next=els[opts.nextSlide];if(p.cycleStop!=opts.stopCount||p.cycleTimeout===0&&!manual)return;if(!manual&&!p.cyclePause&&!opts.bounce&&((opts.autostop&&(--opts.countdown<=0))||(opts.nowrap&&!opts.random&&opts.nextSlide<opts.currSlide))){if(opts.end)opts.end(opts);return};var changed=false;if((manual||!p.cyclePause)&&(opts.nextSlide!=opts.currSlide)){changed=true;var fx=opts.fx;curr.cycleH=curr.cycleH||$(curr).height();curr.cycleW=curr.cycleW||$(curr).width();next.cycleH=next.cycleH||$(next).height();next.cycleW=next.cycleW||$(next).width();if(opts.multiFx){if(fwd&&(opts.lastFx==undefined||++opts.lastFx>=opts.fxs.length)){opts.lastFx=0}else if(!fwd&&(opts.lastFx==undefined||--opts.lastFx<0))opts.lastFx=opts.fxs.length-1;fx=opts.fxs[opts.lastFx]};if(opts.oneTimeFx){fx=opts.oneTimeFx;opts.oneTimeFx=null};$.fn.cycle.resetState(opts,fx);if(opts.before.length)$.each(opts.before,function(i,o){if(p.cycleStop!=opts.stopCount)return;o.apply(next,[curr,next,opts,fwd])});var after=function(){opts.busy=0;$.each(opts.after,function(i,o){if(p.cycleStop!=opts.stopCount)return;o.apply(next,[curr,next,opts,fwd])});if(!p.cycleStop)queueNext()};debug('tx firing('+fx+'); currSlide: '+opts.currSlide+'; nextSlide: '+opts.nextSlide);opts.busy=1;if(opts.fxFn){opts.fxFn(curr,next,opts,after,fwd,manual&&opts.fastOnEvent)}else if($.isFunction($.fn.cycle[opts.fx])){$.fn.cycle[opts.fx](curr,next,opts,after,fwd,manual&&opts.fastOnEvent)}else $.fn.cycle.custom(curr,next,opts,after,fwd,manual&&opts.fastOnEvent)}else queueNext();if(changed||opts.nextSlide==opts.currSlide){opts.lastSlide=opts.currSlide;if(opts.random){opts.currSlide=opts.nextSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;opts.randomMap.sort(function(a,b){return Math.random()-0.5})};opts.nextSlide=opts.randomMap[opts.randomIndex];if(opts.nextSlide==opts.currSlide)opts.nextSlide=(opts.currSlide==opts.slideCount-1)?0:opts.currSlide+1}else if(opts.backwards){var roll=(opts.nextSlide-1)<0;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=1;opts.currSlide=0}else{opts.nextSlide=roll?(els.length-1):opts.nextSlide-1;opts.currSlide=roll?0:opts.nextSlide+1}}else{var roll=(opts.nextSlide+1)==els.length;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=els.length-2;opts.currSlide=els.length-1}else{opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1}}};if(changed&&opts.pager)opts.updateActivePagerLink(opts.pager,opts.currSlide,opts.activePagerClass)
function queueNext(){var ms=0,timeout=opts.timeout;if(opts.timeout&&!opts.continuous){ms=getTimeout(els[opts.currSlide],els[opts.nextSlide],opts,fwd);if(opts.fx=='shuffle')ms-=opts.speedOut}else if(opts.continuous&&p.cyclePause)ms=10;if(ms>0)p.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.backwards)},ms)}};$.fn.cycle.updateActivePagerLink=function(pager,currSlide,clsName){$(pager).each(function(){$(this).children().removeClass(clsName).eq(currSlide).addClass(clsName)})}
function getTimeout(curr,next,opts,fwd){if(opts.timeoutFn){var t=opts.timeoutFn.call(curr,curr,next,opts,fwd);while(opts.fx!='none'&&(t-opts.speed)<250)t+=opts.speed;debug('calculated timeout: '+t+'; speed: '+opts.speed);if(t!==false)return t};return opts.timeout};$.fn.cycle.next=function(opts){advance(opts,1)};$.fn.cycle.prev=function(opts){advance(opts,0)}
function advance(opts,moveForward){var val=moveForward?1:-1,els=opts.elements,p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0};if(opts.random&&val<0){opts.randomIndex--;if(--opts.randomIndex==-2){opts.randomIndex=els.length-2}else if(opts.randomIndex==-1)opts.randomIndex=els.length-1;opts.nextSlide=opts.randomMap[opts.randomIndex]}else if(opts.random){opts.nextSlide=opts.randomMap[opts.randomIndex]}else{opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){if(opts.nowrap)return false;opts.nextSlide=els.length-1}else if(opts.nextSlide>=els.length){if(opts.nowrap)return false;opts.nextSlide=0}};var cb=opts.onPrevNextEvent||opts.prevNextClick;if($.isFunction(cb))cb(val>0,opts.nextSlide,els[opts.nextSlide]);go(els,opts,1,moveForward);return false}
function buildPager(els,opts){var $p=$(opts.pager);$.each(els,function(i,o){$.fn.cycle.createPagerAnchor(i,o,$p,els,opts)});opts.updateActivePagerLink(opts.pager,opts.startingSlide,opts.activePagerClass)};$.fn.cycle.createPagerAnchor=function(i,el,$p,els,opts){var a;if($.isFunction(opts.pagerAnchorBuilder)){a=opts.pagerAnchorBuilder(i,el);debug('pagerAnchorBuilder('+i+', el) returned: '+a)}else a='<a href="#">'+(i+1)+'</a>';if(!a)return;var $a=$(a);if($a.parents('body').length===0){var arr=[];if($p.length>1){$p.each(function(){var $clone=$a.clone(true);$(this).append($clone);arr.push($clone[0])});$a=$(arr)}else $a.appendTo($p)};opts.pagerAnchors=opts.pagerAnchors||[];opts.pagerAnchors.push($a);var pagerFn=function(e){e.preventDefault();opts.nextSlide=i;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0};var cb=opts.onPagerEvent||opts.pagerClick;if($.isFunction(cb))cb(opts.nextSlide,els[opts.nextSlide]);go(els,opts,1,opts.currSlide<i)};if(/mouseenter|mouseover/i.test(opts.pagerEvent)){$a.hover(pagerFn,function(){})}else $a.bind(opts.pagerEvent,pagerFn);if(!/^click/.test(opts.pagerEvent)&&!opts.allowPagerClickBubble)$a.bind('click.cycle',function(){return false});var cont=opts.$cont[0],pauseFlag=false;if(opts.pauseOnPagerHover)$a.hover(function(){pauseFlag=true;cont.cyclePause++;triggerPause(cont,true,true)},function(){pauseFlag&&cont.cyclePause--;triggerPause(cont,true,true)})};$.fn.cycle.hopsFromLast=function(opts,fwd){var hops,l=opts.lastSlide,c=opts.currSlide;if(fwd){hops=c>l?c-l:opts.slideCount-l}else hops=c<l?l-c:l+opts.slideCount-c;return hops}
function clearTypeFix($slides){debug('applying clearType background-color hack')
function hex(s){s=parseInt(s,10).toString(16);return s.length<2?'0'+s:s}
function getBg(e){for(;e&&e.nodeName.toLowerCase()!='html';e=e.parentNode){var v=$.css(e,'background-color');if(v&&v.indexOf('rgb')>=0){var rgb=v.match(/\d+/g);return'#'+hex(rgb[0])+hex(rgb[1])+hex(rgb[2])};if(v&&v!='transparent')return v};return'#ffffff'};$slides.each(function(){$(this).css('background-color',getBg(this))})};$.fn.cycle.commonReset=function(curr,next,opts,w,h,rev){$(opts.elements).not(curr).hide();if(typeof opts.cssBefore.opacity=='undefined')opts.cssBefore.opacity=1;opts.cssBefore.display='block';if(opts.slideResize&&w!==false&&next.cycleW>0)opts.cssBefore.width=next.cycleW;if(opts.slideResize&&h!==false&&next.cycleH>0)opts.cssBefore.height=next.cycleH;opts.cssAfter=opts.cssAfter||{};opts.cssAfter.display='none';$(curr).css('zIndex',opts.slideCount+(rev===true?1:0));$(next).css('zIndex',opts.slideCount+(rev===true?0:1))};$.fn.cycle.custom=function(curr,next,opts,cb,fwd,speedOverride){var $l=$(curr),$n=$(next),speedIn=opts.speedIn,speedOut=opts.speedOut,easeIn=opts.easeIn,easeOut=opts.easeOut;$n.css(opts.cssBefore);if(speedOverride){if(typeof speedOverride=='number'){speedIn=speedOut=speedOverride}else speedIn=speedOut=1;easeIn=easeOut=null};var fn=function(){$n.animate(opts.animIn,speedIn,easeIn,function(){cb()})};$l.animate(opts.animOut,speedOut,easeOut,function(){$l.css(opts.cssAfter);if(!opts.sync)fn()});if(opts.sync)fn()};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(':eq('+opts.currSlide+')').css('opacity',0);opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.opacity=0});opts.animIn={opacity:1};opts.animOut={opacity:0};opts.cssBefore={top:0,left:0}}};$.fn.cycle.ver=function(){return ver};$.fn.cycle.defaults={activePagerClass:'activeSlide',after:null,allowPagerClickBubble:false,animIn:null,animOut:null,aspect:false,autostop:0,autostopCount:0,backwards:false,before:null,center:null,cleartype:!$.support.opacity,cleartypeNoBg:false,containerResize:1,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:'fade',fxFn:null,height:'auto',manualTrump:true,metaAttr:'cycle',next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:'click.cycle',pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:'click.cycle',random:0,randomizeEffects:1,requeueOnImageNotLoaded:true,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:false,slideExpr:null,slideResize:1,speed:1e3,speedIn:null,speedOut:null,startingSlide:undefined,sync:1,timeout:4e3,timeoutFn:null,updateActivePagerLink:null,width:null}})(jQuery);(function($){$.fn.cycle.transitions.none=function($cont,$slides,opts){opts.fxFn=function(curr,next,opts,after){$(next).show();$(curr).hide();after()}};$.fn.cycle.transitions.fadeout=function($cont,$slides,opts){$slides.not(':eq('+opts.currSlide+')').css({display:'block',opacity:1});opts.before.push(function(curr,next,opts,w,h,rev){$(curr).css('zIndex',opts.slideCount+(!rev===true?1:0));$(next).css('zIndex',opts.slideCount+(!rev===true?0:1))});opts.animIn.opacity=1;opts.animOut.opacity=0;opts.cssBefore.opacity=1;opts.cssBefore.display='block';opts.cssAfter.zIndex=0};$.fn.cycle.transitions.scrollUp=function($cont,$slides,opts){$cont.css('overflow','hidden');opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssBefore.top=h;opts.cssBefore.left=0;opts.cssFirst.top=0;opts.animIn.top=0;opts.animOut.top=-h};$.fn.cycle.transitions.scrollDown=function($cont,$slides,opts){$cont.css('overflow','hidden');opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssFirst.top=0;opts.cssBefore.top=-h;opts.cssBefore.left=0;opts.animIn.top=0;opts.animOut.top=h};$.fn.cycle.transitions.scrollLeft=function($cont,$slides,opts){$cont.css('overflow','hidden');opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst.left=0;opts.cssBefore.left=w;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.left=0-w};$.fn.cycle.transitions.scrollRight=function($cont,$slides,opts){$cont.css('overflow','hidden');opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst.left=0;opts.cssBefore.left=-w;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.left=w};$.fn.cycle.transitions.scrollHorz=function($cont,$slides,opts){$cont.css('overflow','hidden').width();opts.before.push(function(curr,next,opts,fwd){if(opts.rev)fwd=!fwd;$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.left=fwd?(next.cycleW-1):(1-next.cycleW);opts.animOut.left=fwd?-curr.cycleW:curr.cycleW});opts.cssFirst.left=0;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.top=0};$.fn.cycle.transitions.scrollVert=function($cont,$slides,opts){$cont.css('overflow','hidden');opts.before.push(function(curr,next,opts,fwd){if(opts.rev)fwd=!fwd;$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.top=fwd?(1-next.cycleH):(next.cycleH-1);opts.animOut.top=fwd?curr.cycleH:-curr.cycleH});opts.cssFirst.top=0;opts.cssBefore.left=0;opts.animIn.top=0;opts.animOut.left=0};$.fn.cycle.transitions.slideX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW});opts.cssBefore.left=0;opts.cssBefore.top=0;opts.cssBefore.width=0;opts.animIn.width='show';opts.animOut.width=0};$.fn.cycle.transitions.slideY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH});opts.cssBefore.left=0;opts.cssBefore.top=0;opts.cssBefore.height=0;opts.animIn.height='show';opts.animOut.height=0};$.fn.cycle.transitions.shuffle=function($cont,$slides,opts){var i,w=$cont.css('overflow','visible').width();$slides.css({left:0,top:0});opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true)});if(!opts.speedAdjusted){opts.speed=opts.speed/2;opts.speedAdjusted=true};opts.random=0;opts.shuffle=opts.shuffle||{left:-w,top:15};opts.els=[];for(i=0;i<$slides.length;i++)opts.els.push($slides[i]);for(i=0;i<opts.currSlide;i++)opts.els.push(opts.els.shift());opts.fxFn=function(curr,next,opts,cb,fwd){if(opts.rev)fwd=!fwd;var $el=fwd?$(curr):$(next);$(next).css(opts.cssBefore);var count=opts.slideCount;$el.animate(opts.shuffle,opts.speedIn,opts.easeIn,function(){var hops=$.fn.cycle.hopsFromLast(opts,fwd);for(var k=0;k<hops;k++)fwd?opts.els.push(opts.els.shift()):opts.els.unshift(opts.els.pop());if(fwd){for(var i=0,len=opts.els.length;i<len;i++)$(opts.els[i]).css('z-index',len-i+count)}else{var z=$(curr).css('z-index');$el.css('z-index',parseInt(z,10)+1+count)};$el.animate({left:0,top:0},opts.speedOut,opts.easeOut,function(){$(fwd?this:curr).hide();if(cb)cb()})})};$.extend(opts.cssBefore,{display:'block',opacity:1,top:0,left:0})};$.fn.cycle.transitions.turnUp=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=next.cycleH;opts.animIn.height=next.cycleH;opts.animOut.width=next.cycleW});opts.cssFirst.top=0;opts.cssBefore.left=0;opts.cssBefore.height=0;opts.animIn.top=0;opts.animOut.height=0};$.fn.cycle.transitions.turnDown=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH});opts.cssFirst.top=0;opts.cssBefore.left=0;opts.cssBefore.top=0;opts.cssBefore.height=0;opts.animOut.height=0};$.fn.cycle.transitions.turnLeft=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=next.cycleW;opts.animIn.width=next.cycleW});opts.cssBefore.top=0;opts.cssBefore.width=0;opts.animIn.left=0;opts.animOut.width=0};$.fn.cycle.transitions.turnRight=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW});$.extend(opts.cssBefore,{top:0,left:0,width:0});opts.animIn.left=0;opts.animOut.width=0};$.fn.cycle.transitions.zoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false,true);opts.cssBefore.top=next.cycleH/2;opts.cssBefore.left=next.cycleW/2;$.extend(opts.animIn,{top:0,left:0,width:next.cycleW,height:next.cycleH});$.extend(opts.animOut,{width:0,height:0,top:curr.cycleH/2,left:curr.cycleW/2})});opts.cssFirst.top=0;opts.cssFirst.left=0;opts.cssBefore.width=0;opts.cssBefore.height=0};$.fn.cycle.transitions.fadeZoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false);opts.cssBefore.left=next.cycleW/2;opts.cssBefore.top=next.cycleH/2;$.extend(opts.animIn,{top:0,left:0,width:next.cycleW,height:next.cycleH})});opts.cssBefore.width=0;opts.cssBefore.height=0;opts.animOut.opacity=0};$.fn.cycle.transitions.blindX=function($cont,$slides,opts){var w=$cont.css('overflow','hidden').width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW});opts.cssBefore.left=w;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.left=w};$.fn.cycle.transitions.blindY=function($cont,$slides,opts){var h=$cont.css('overflow','hidden').height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH});opts.cssBefore.top=h;opts.cssBefore.left=0;opts.animIn.top=0;opts.animOut.top=h};$.fn.cycle.transitions.blindZ=function($cont,$slides,opts){var h=$cont.css('overflow','hidden').height(),w=$cont.width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH});opts.cssBefore.top=h;opts.cssBefore.left=w;opts.animIn.top=0;opts.animIn.left=0;opts.animOut.top=h;opts.animOut.left=w};$.fn.cycle.transitions.growX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=this.cycleW/2;opts.animIn.left=0;opts.animIn.width=this.cycleW;opts.animOut.left=0});opts.cssBefore.top=0;opts.cssBefore.width=0};$.fn.cycle.transitions.growY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=this.cycleH/2;opts.animIn.top=0;opts.animIn.height=this.cycleH;opts.animOut.top=0});opts.cssBefore.height=0;opts.cssBefore.left=0};$.fn.cycle.transitions.curtainX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true,true);opts.cssBefore.left=next.cycleW/2;opts.animIn.left=0;opts.animIn.width=this.cycleW;opts.animOut.left=curr.cycleW/2;opts.animOut.width=0});opts.cssBefore.top=0;opts.cssBefore.width=0};$.fn.cycle.transitions.curtainY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false,true);opts.cssBefore.top=next.cycleH/2;opts.animIn.top=0;opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH/2;opts.animOut.height=0});opts.cssBefore.height=0;opts.cssBefore.left=0};$.fn.cycle.transitions.cover=function($cont,$slides,opts){var d=opts.direction||'left',w=$cont.css('overflow','hidden').width(),h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);if(d=='right'){opts.cssBefore.left=-w}else if(d=='up'){opts.cssBefore.top=h}else if(d=='down'){opts.cssBefore.top=-h}else opts.cssBefore.left=w});opts.animIn.left=0;opts.animIn.top=0;opts.cssBefore.top=0;opts.cssBefore.left=0};$.fn.cycle.transitions.uncover=function($cont,$slides,opts){var d=opts.direction||'left',w=$cont.css('overflow','hidden').width(),h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(d=='right'){opts.animOut.left=w}else if(d=='up'){opts.animOut.top=-h}else if(d=='down'){opts.animOut.top=h}else opts.animOut.left=-w});opts.animIn.left=0;opts.animIn.top=0;opts.cssBefore.top=0;opts.cssBefore.left=0};$.fn.cycle.transitions.toss=function($cont,$slides,opts){var w=$cont.css('overflow','visible').width(),h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(!opts.animOut.left&&!opts.animOut.top){$.extend(opts.animOut,{left:w*2,top:-h/2,opacity:0})}else opts.animOut.opacity=0});opts.cssBefore.left=0;opts.cssBefore.top=0;opts.animIn.left=0};$.fn.cycle.transitions.wipe=function($cont,$slides,opts){var w=$cont.css('overflow','hidden').width(),h=$cont.height();opts.cssBefore=opts.cssBefore||{};var clip;if(opts.clip)if(/l2r/.test(opts.clip)){clip='rect(0px 0px '+h+'px 0px)'}else if(/r2l/.test(opts.clip)){clip='rect(0px '+w+'px '+h+'px '+w+'px)'}else if(/t2b/.test(opts.clip)){clip='rect(0px '+w+'px 0px 0px)'}else if(/b2t/.test(opts.clip)){clip='rect('+h+'px '+w+'px '+h+'px 0px)'}else if(/zoom/.test(opts.clip)){var top=parseInt(h/2,10),left=parseInt(w/2,10);clip='rect('+top+'px '+left+'px '+top+'px '+left+'px)'};opts.cssBefore.clip=opts.cssBefore.clip||clip||'rect(0px 0px 0px 0px)';var d=opts.cssBefore.clip.match(/(\d+)/g),t=parseInt(d[0],10),r=parseInt(d[1],10),b=parseInt(d[2],10),l=parseInt(d[3],10);opts.before.push(function(curr,next,opts){if(curr==next)return;var $curr=$(curr),$next=$(next);$.fn.cycle.commonReset(curr,next,opts,true,true,false);opts.cssAfter.display='block';var step=1,count=parseInt((opts.speedIn/13),10)-1;(function f(){var tt=t?t-parseInt(step*(t/count),10):0,ll=l?l-parseInt(step*(l/count),10):0,bb=b<h?b+parseInt(step*((h-b)/count||1),10):h,rr=r<w?r+parseInt(step*((w-r)/count||1),10):w;$next.css({clip:'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)'});(step++<=count)?setTimeout(f,13):$curr.css('display','none')})()});$.extend(opts.cssBefore,{display:'block',opacity:1,top:0,left:0});opts.animIn={left:0};opts.animOut={left:0}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://www.manatuscostarica.com/sites/all/libraries/jquery.cycle/jquery.cycle.all.min.js. */
jQuery(document).ready(function($) {



//	if ((window.location.href.split("/")[4] != 'regular-packages-rates') && (window.location.href.split("/")[5] != 'paquetes-regulares-tarifas')  && (window.location.href.split("/")[3] != 'tortuguero-area') && (window.location.href.split("/")[4] != 'gallery') && (window.location.href.split("/")[5] != 'gallery')&& (window.location.href.split("/")[5] != 'area-de-tortuguero')&& (window.location.href.split("/")[5] != 'contacto') && (window.location.href.split("/")[4] !='contact-us') && (window.location.href.split("/")[4] !='reservation-step1') && (window.location.href.split("/")[5] !='reservación-paso1') && (window.location.href.split("/")[4] !='blog') && (window.location.href.split("/")[4] !='etiquetas') && (window.location.href.split("/")[5] !='etiquetas') && (window.location.href.split("/")[5] !='blog-category') && (window.location.href.split("/")[4] !='blog-category') && (window.location.href.split("/")[5] != 'paquetes-regulares-tarifas') && (window.location.href.split("/")[5] !='regular-packages-rates') && (window.location.href.split("/")[5] !='garden')&& (window.location.href.split("/")[6] !='jardines')&& (window.location.href.split("/")[6] !='piscina')&& (window.location.href.split("/")[5] !='pool')&& (window.location.href.split("/")[5] !='deck')&& (window.location.href.split("/")[6] !='deck')&& (window.location.href.split("/")[5] !='rooms')&& (window.location.href.split("/")[6] !='habitaciones')&& (window.location.href.split("/")[5] !='parque-nacional-tortuguero')&& (window.location.href.split("/")[4] !='tortuguero-national-park')) {
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

    $(".page-node-30 .title-container h1.title").text("Manatus Experience");

    $(".page-node-49 .title-container h1.title").text("Manatus Experience");

    $(".page-node-52 .title-container h1.title").text("Manatus Experience");

    $(".page-node-55 .title-container h1.title").text("Manatus Experience");

    $(".page-node-58 .title-container h1.title").text("Manatus Experience");

    $(".page-node-61 .title-container h1.title").text("Experiencia Manatus");

    $(".page-node-67 .title-container h1.title").text("Experiencia Manatus");

    $(".page-node-70 .title-container h1.title").text("Experiencia Manatus");

    $(".page-node-73 .title-container h1.title").text("Experiencia Manatus");

	$(".page-tours-and-activities .title-container h1.title").text("What to do?");

	$(".page-tours-actividades .title-container h1.title").text("What to do?");

    $(".node-type-blog #header #header-region h1.title").text("Blog");

    $(".section-etiquetas #header #header-region h1.title").text("Blog");

    $(".section-blog-category #header #header-region h1.title").text("Blog");

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

};/**/
/*! http://tinynav.viljamis.com v1.1 by @viljamis */
(function(a,i,g){a.fn.tinyNav=function(j){var b=a.extend({active:"selected",header:"",label:""},j);return this.each(function(){g++;var h=a(this),d="tinynav"+g,f=".l_"+d,e=a("<select/>").attr("id",d).addClass("tinynav "+d);if(h.is("ul,ol")){""!==b.header&&e.append(a("<option/>").text(b.header));var c="";h.addClass("l_"+d).find("a").each(function(){c+='<option value="'+a(this).attr("href")+'">';var b;for(b=0;b<a(this).parents("ul, ol").length-1;b++)c+="- ";c+=a(this).text()+"</option>"});e.append(c);
b.header||e.find(":eq("+a(f+" li").index(a(f+" li."+b.active))+")").attr("selected",!0);e.change(function(){i.location.href=a(this).val()});a(f).after(e);b.label&&e.before(a("<label/>").attr("for",d).addClass("tinynav_label "+d+"_label").append(b.label))}})}})(jQuery,this,0);;/**/
/* Source and licensing information for the line(s) below can be found at http://www.manatuscostarica.com/sites/all/themes/mnts/js/carousel.js. */
var Mobify=window.Mobify=window.Mobify||{};Mobify.$=Mobify.$||window.Zepto||window.jQuery;Mobify.UI=Mobify.UI?Mobify.$.extend(Mobify.UI,{classPrefix:'m-'}):{classPrefix:'m-'};(function($,document){$.support=$.support||{};$.extend($.support,{touch:'ontouchend'in document})})(Mobify.$,document);Mobify.UI.Utils=(function($){var exports={},has=$.support,ua=navigator.userAgent;exports.events=(has.touch)?{down:'touchstart',move:'touchmove',up:'touchend'}:{down:'mousedown',move:'mousemove',up:'mouseup'};exports.getCursorPosition=(has.touch)?function(e){e=e.originalEvent||e;return{x:e.touches[0].clientX,y:e.touches[0].clientY}}:function(e){return{x:e.clientX,y:e.clientY}};exports.getProperty=function(name){var prefixes=['Webkit','Moz','O','ms',''],testStyle=document.createElement('div').style;for(var i=0;i<prefixes.length;++i)if(testStyle[prefixes[i]+name]!==undefined)return prefixes[i]+name;return};$.extend(has,{transform:!!(exports.getProperty('Transform')),transform3d:!!(window.WebKitCSSMatrix&&'m11'in new WebKitCSSMatrix()&&!/android\s+[1-2]/i.test(ua))});var transformProperty=exports.getProperty('Transform');if(has.transform3d){exports.translateX=function(element,delta){if(typeof delta=='number')delta=delta+'px';element.style[transformProperty]='translate3d('+delta+',0,0)'}}else if(has.transform){exports.translateX=function(element,delta){if(typeof delta=='number')delta=delta+'px';element.style[transformProperty]='translate('+delta+',0)'}}else exports.translateX=function(element,delta){if(typeof delta=='number')delta=delta+'px';element.style.left=delta};var transitionProperty=exports.getProperty('Transition'),durationProperty=exports.getProperty('TransitionDuration');exports.setTransitions=function(element,enable){if(enable){element.style[durationProperty]=''}else element.style[durationProperty]='0s'};exports.requestAnimationFrame=(function(){var prefixed=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1e3/60)}),requestAnimationFrame=function(){prefixed.apply(window,arguments)};return requestAnimationFrame})();return exports})(Mobify.$);Mobify.UI.Carousel=(function($,Utils){var defaults={dragRadius:10,moveRadius:20,classPrefix:undefined,classNames:{outer:'carousel',inner:'carousel-inner',item:'item',center:'center',touch:'has-touch',dragging:'dragging',active:'active',fluid:'fluid'}},has=$.support,Carousel=function(element,options){this.setOptions(options);this.initElements(element);this.initOffsets();this.initAnimation();this.bind()};Carousel.defaults=defaults;Carousel.prototype.setOptions=function(opts){var options=this.options||$.extend({},defaults,opts);options.classNames=$.extend({},options.classNames,opts.classNames||{});options.classPrefix=options.classPrefix||Mobify.UI.classPrefix;this.options=options};Carousel.prototype.initElements=function(element){this._index=1;this.element=element;this.$element=$(element);this.$inner=this.$element.find('.'+this._getClass('inner'));this.$items=this.$inner.children();this.$start=this.$items.eq(0);this.$sec=this.$items.eq(1);this.$current=this.$items.eq(this._index-1);this._length=this.$items.length;this._alignment=this.$element.hasClass(this._getClass('center'))?0.5:0;this._isFluid=this.$element.hasClass(this._getClass('fluid'))};Carousel.prototype.initOffsets=function(){this._offsetDrag=0};Carousel.prototype.initAnimation=function(){this.animating=false;this.dragging=false;this._needsUpdate=false;this._enableAnimation()};Carousel.prototype._getClass=function(id){return this.options.classPrefix+this.options.classNames[id]};Carousel.prototype._enableAnimation=function(){if(this.animating)return;Utils.setTransitions(this.$inner[0],true);this.$inner.removeClass(this._getClass('dragging'));this.animating=true};Carousel.prototype._disableAnimation=function(){if(!this.animating)return;Utils.setTransitions(this.$inner[0],false);this.$inner.addClass(this._getClass('dragging'));this.animating=false};Carousel.prototype.update=function(){if(this._needsUpdate)return;var self=this;this._needsUpdate=true;Utils.requestAnimationFrame(function(){self._update()})};Carousel.prototype._update=function(){if(!this._needsUpdate)return;var $current=this.$current,$start=this.$start,currentOffset=$current.prop('offsetLeft')+$current.prop('clientWidth')*this._alignment,startOffset=$start.prop('offsetLeft')+$start.prop('clientWidth')*this._alignment,x=Math.round(-(currentOffset-startOffset)+this._offsetDrag);Utils.translateX(this.$inner[0],x);this._needsUpdate=false};Carousel.prototype.bind=function(){var abs=Math.abs,dragging=false,canceled=false,dragRadius=this.options.dragRadius,xy,dx,dy,dragThresholdMet,self=this,$element=this.$element,$inner=this.$inner,opts=this.options,lockLeft=false,lockRight=false,windowWidth=$(window).width()
function start(e){if(!has.touch)e.preventDefault();dragging=true;canceled=false;xy=Utils.getCursorPosition(e);dx=0;dy=0;dragThresholdMet=false;self._disableAnimation();lockLeft=self._index==1;lockRight=self._index==self._length}
function drag(e){if(!dragging||canceled)return;var newXY=Utils.getCursorPosition(e),dragLimit=self.$element.width();dx=xy.x-newXY.x;dy=xy.y-newXY.y;if(dragThresholdMet||abs(dx)>abs(dy)&&(abs(dx)>dragRadius)){dragThresholdMet=true;e.preventDefault();if(lockLeft&&(dx<0)){dx=dx*(-dragLimit)/(dx-dragLimit)}else if(lockRight&&(dx>0))dx=dx*dragLimit/(dx+dragLimit);self._offsetDrag=-dx;self.update()}else if((abs(dy)>abs(dx))&&(abs(dy)>dragRadius))canceled=true}
function end(e){if(!dragging)return;dragging=false;self._enableAnimation();if(!canceled&&abs(dx)>opts.moveRadius){if(dx>0){self.next()}else self.prev()}else{self._offsetDrag=0;self.update()}}
function click(e){if(dragThresholdMet)e.preventDefault()};$inner.on(Utils.events.down+'.carousel',start).on(Utils.events.move+'.carousel',drag).on(Utils.events.up+'.carousel',end).on('click.carousel',click).on('mouseout.carousel',end);$element.on('click','[data-slide]',function(e){e.preventDefault();var action=$(this).attr('data-slide'),index=parseInt(action,10);if(isNaN(index)){self[action]()}else self.move(index)});$element.on('afterSlide',function(e,previousSlide,nextSlide){self.$items.eq(previousSlide-1).removeClass(self._getClass('active'));self.$items.eq(nextSlide-1).addClass(self._getClass('active'));self.$element.find('[data-slide=\''+previousSlide+'\']').removeClass(self._getClass('active'));self.$element.find('[data-slide=\''+nextSlide+'\']').addClass(self._getClass('active'))});$(window).on('resize orientationchange',function(e){if(windowWidth==$(window).width())return;self._disableAnimation();windowWidth=$(window).width();self.update()});$element.trigger('beforeSlide',[1,1]);$element.trigger('afterSlide',[1,1]);self.update()};Carousel.prototype.unbind=function(){this.$inner.off()};Carousel.prototype.destroy=function(){this.unbind();this.$element.trigger('destroy');this.$element.remove();this.$element=null;this.$inner=null;this.$start=null;this.$current=null};Carousel.prototype.move=function(newIndex,opts){var $element=this.$element,$inner=this.$inner,$items=this.$items,$start=this.$start,$current=this.$current,length=this._length,index=this._index;opts=opts||{};if(newIndex<1){newIndex=1}else if(newIndex>this._length)newIndex=length;if(newIndex==this._index);this._enableAnimation();$element.trigger('beforeSlide',[index,newIndex]);this.$current=$current=$items.eq(newIndex-1);this._offsetDrag=0;this._index=newIndex;this.update();$element.trigger('afterSlide',[index,newIndex])};Carousel.prototype.next=function(){this.move(this._index+1)};Carousel.prototype.prev=function(){this.move(this._index-1)};return Carousel})(Mobify.$,Mobify.UI.Utils);(function($){$.fn.carousel=function(action,options){var initOptions=$.extend({},$.fn.carousel.defaults);if(typeof action=='object'){initOptions=$(initOptions,action);options=null;action=null};this.each(function(){var $this=$(this),carousel=this._carousel;if(!carousel)carousel=new Mobify.UI.Carousel(this,initOptions);if(action){carousel[action](options);if(action==='destroy')carousel=null};this._carousel=carousel});return this};$.fn.carousel.defaults={}})(Mobify.$);;
/* Source and licensing information for the above line(s) can be found at http://www.manatuscostarica.com/sites/all/themes/mnts/js/carousel.js. */
