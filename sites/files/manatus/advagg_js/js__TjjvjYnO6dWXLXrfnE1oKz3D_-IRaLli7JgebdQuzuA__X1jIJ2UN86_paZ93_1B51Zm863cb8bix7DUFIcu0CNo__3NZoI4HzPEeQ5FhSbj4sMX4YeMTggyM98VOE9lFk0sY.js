/* Source and licensing information for the line(s) below can be found at http://manatuscostarica.com/sites/all/modules/contrib/views_slideshow/contrib/views_slideshow_cycle/js/views_slideshow_cycle.js. */
(function($){Drupal.behaviors.viewsSlideshowCycle={attach:function(context){$('.views_slideshow_cycle_main:not(.viewsSlideshowCycle-processed)',context).addClass('viewsSlideshowCycle-processed').each(function(){var fullId='#'+$(this).attr('id'),settings=Drupal.settings.viewsSlideshowCycle[fullId];settings.targetId='#'+$(fullId+" :first").attr('id');settings.slideshowId=settings.targetId.replace('#views_slideshow_cycle_teaser_section_','');settings.loaded=false;settings.opts={speed:settings.speed,timeout:settings.timeout,delay:settings.delay,sync:settings.sync,random:settings.random,nowrap:settings.nowrap,after:function(curr,next,opts){var slideNum=opts.currSlide;if(typeof settings.processedAfter=='undefined'||!settings.processedAfter){settings.processedAfter=1;slideNum=(typeof settings.opts.startingSlide=='undefined')?0:settings.opts.startingSlide};Drupal.viewsSlideshow.action({action:'transitionEnd',slideshowID:settings.slideshowId,slideNum:slideNum})},before:function(curr,next,opts){if(settings.remember_slide)createCookie(settings.vss_id,opts.currSlide+1,settings.remember_slide_days);if(!settings.fixed_height){var $ht=$(this).height();$(this).parent().animate({height:$ht})};var slideNum=opts.nextSlide;if(typeof settings.processedBefore=='undefined'||!settings.processedBefore){settings.processedBefore=1;slideNum=(typeof settings.opts.startingSlide=='undefined')?0:settings.opts.startingSlide};Drupal.viewsSlideshow.action({action:'transitionBegin',slideshowID:settings.slideshowId,slideNum:slideNum})},cleartype:(settings.cleartype)?true:false,cleartypeNoBg:(settings.cleartypenobg)?true:false};if(settings.remember_slide){var startSlide=readCookie(settings.vss_id);if(startSlide==null)startSlide=0;settings.opts.startingSlide=startSlide};if(settings.effect=='none'){settings.opts.speed=1}else settings.opts.fx=settings.effect;var hash=location.hash;if(hash){var hash=hash.replace('#',''),aHash=hash.split(';'),aHashLen=aHash.length;for(var i=0;i<aHashLen;i++){var initialInfo=aHash[i].split(':');if(settings.slideshowId==initialInfo[0]&&settings.num_divs>initialInfo[1])settings.opts.startingSlide=parseInt(initialInfo[1])}};if(settings.pause){var mouseIn=function(){Drupal.viewsSlideshow.action({action:'pause',slideshowID:settings.slideshowId})},mouseOut=function(){Drupal.viewsSlideshow.action({action:'play',slideshowID:settings.slideshowId})};if(jQuery.fn.hoverIntent){$('#views_slideshow_cycle_teaser_section_'+settings.vss_id).hoverIntent(mouseIn,mouseOut)}else $('#views_slideshow_cycle_teaser_section_'+settings.vss_id).hover(mouseIn,mouseOut)};if(settings.pause_on_click)$('#views_slideshow_cycle_teaser_section_'+settings.vss_id).click(function(){Drupal.viewsSlideshow.action({action:'pause',slideshowID:settings.slideshowId,force:true})});if(typeof JSON!='undefined'){var advancedOptions=JSON.parse(settings.advanced_options);for(var option in advancedOptions)switch(option){case"activePagerClass":case"allowPagerClickBubble":case"autostop":case"autostopCount":case"backwards":case"bounce":case"cleartype":case"cleartypeNoBg":case"containerResize":case"continuous":case"delay":case"easeIn":case"easeOut":case"easing":case"fastOnEvent":case"fit":case"fx":case"height":case"manualTrump":case"metaAttr":case"next":case"nowrap":case"pager":case"pagerEvent":case"pause":case"pauseOnPagerHover":case"prev":case"prevNextEvent":case"random":case"randomizeEffects":case"requeueOnImageNotLoaded":case"requeueTimeout":case"rev":case"slideExpr":case"slideResize":case"speed":case"speedIn":case"speedOut":case"startingSlide":case"sync":case"timeout":case"width":var optionValue=advancedOptions[option];optionValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(optionValue);settings.opts[option]=optionValue;break;case"animIn":case"animOut":case"cssBefore":case"cssAfter":case"shuffle":var cssValue=advancedOptions[option];cssValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(cssValue);settings.opts[option]=eval('('+cssValue+')');break;case"after":var afterValue=advancedOptions[option];afterValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(afterValue);settings.opts[option]=function(currSlideElement,nextSlideElement,options,forwardFlag){eval(afterValue)};break;case"before":var beforeValue=advancedOptions[option];beforeValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(beforeValue);settings.opts[option]=function(currSlideElement,nextSlideElement,options,forwardFlag){eval(beforeValue)};break;case"end":var endValue=advancedOptions[option];endValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(endValue);settings.opts[option]=function(options){eval(endValue)};break;case"fxFn":var fxFnValue=advancedOptions[option];fxFnValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(fxFnValue);settings.opts[option]=function(currSlideElement,nextSlideElement,options,afterCalback,forwardFlag){eval(fxFnValue)};break;case"onPagerEvent":var onPagerEventValue=advancedOptions[option];onPagerEventValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(onPagerEventValue);settings.opts[option]=function(zeroBasedSlideIndex,slideElement){eval(onPagerEventValue)};break;case"onPrevNextEvent":var onPrevNextEventValue=advancedOptions[option];onPrevNextEventValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(onPrevNextEventValue);settings.opts[option]=function(isNext,zeroBasedSlideIndex,slideElement){eval(onPrevNextEventValue)};break;case"pagerAnchorBuilder":var pagerAnchorBuilderValue=advancedOptions[option];pagerAnchorBuilderValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(pagerAnchorBuilderValue);settings.opts[option]=function(index,DOMelement){var returnVal='';eval(pagerAnchorBuilderValue);return returnVal};break;case"pagerClick":var pagerClickValue=advancedOptions[option];pagerClickValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(pagerClickValue);settings.opts[option]=function(zeroBasedSlideIndex,slideElement){eval(pagerClickValue)};break;case"paused":var pausedValue=advancedOptions[option];pausedValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(pausedValue);settings.opts[option]=function(cont,opts,byHover){eval(pausedValue)};break;case"resumed":var resumedValue=advancedOptions[option];resumedValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(resumedValue);settings.opts[option]=function(cont,opts,byHover){eval(resumedValue)};break;case"timeoutFn":var timeoutFnValue=advancedOptions[option];timeoutFnValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(timeoutFnValue);settings.opts[option]=function(currSlideElement,nextSlideElement,options,forwardFlag){eval(timeoutFnValue)};break;case"updateActivePagerLink":var updateActivePagerLinkValue=advancedOptions[option];updateActivePagerLinkValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(updateActivePagerLinkValue);settings.opts[option]=function(pager,currSlideIndex){eval(updateActivePagerLinkValue)};break}};if(settings.wait_for_image_load){settings.totalImages=$(settings.targetId+' img').length;if(settings.totalImages){settings.loadedImages=0;$(settings.targetId+' img').each(function(){var $imageElement=$(this);$imageElement.bind('load',function(){Drupal.viewsSlideshowCycle.imageWait(fullId)});var imgSrc=$imageElement.attr('src');$imageElement.attr('src','');$imageElement.attr('src',imgSrc)});setTimeout("Drupal.viewsSlideshowCycle.load('"+fullId+"')",settings.wait_for_image_load_timeout)}else Drupal.viewsSlideshowCycle.load(fullId)}else Drupal.viewsSlideshowCycle.load(fullId)})}};Drupal.viewsSlideshowCycle=Drupal.viewsSlideshowCycle||{};Drupal.viewsSlideshowCycle.advancedOptionCleanup=function(value){value=$.trim(value);value=value.replace(/\n/g,'');if(!isNaN(parseInt(value))){value=parseInt(value)}else if(value.toLowerCase()=='true'){value=true}else if(value.toLowerCase()=='false')value=false;return value};Drupal.viewsSlideshowCycle.imageWait=function(fullId){if(++Drupal.settings.viewsSlideshowCycle[fullId].loadedImages==Drupal.settings.viewsSlideshowCycle[fullId].totalImages)Drupal.viewsSlideshowCycle.load(fullId)};Drupal.viewsSlideshowCycle.load=function(fullId){var settings=Drupal.settings.viewsSlideshowCycle[fullId];if(!settings.loaded){$(settings.targetId).cycle(settings.opts);settings.loaded=true;if(settings.start_paused)Drupal.viewsSlideshow.action({action:'pause',slideshowID:settings.slideshowId,force:true});if(settings.pause_when_hidden){var checkPause=function(settings){var visible=viewsSlideshowCycleIsVisible(settings.targetId,settings.pause_when_hidden_type,settings.amount_allowed_visible);if(visible){Drupal.viewsSlideshow.action({action:'play',slideshowID:settings.slideshowId})}else Drupal.viewsSlideshow.action({action:'pause',slideshowID:settings.slideshowId})};$(window).scroll(function(){checkPause(settings)});$(window).resize(function(){checkPause(settings)})}}};Drupal.viewsSlideshowCycle.pause=function(options){$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle('pause')};Drupal.viewsSlideshowCycle.play=function(options){Drupal.settings.viewsSlideshowCycle['#views_slideshow_cycle_main_'+options.slideshowID].paused=false;$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle('resume')};Drupal.viewsSlideshowCycle.previousSlide=function(options){$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle('prev')};Drupal.viewsSlideshowCycle.nextSlide=function(options){$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle('next')};Drupal.viewsSlideshowCycle.goToSlide=function(options){$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle(options.slideNum)}
function IsNumeric(sText){var ValidChars="0123456789",IsNumber=true,Char;for(var i=0;i<sText.length&&IsNumber==true;i++){Char=sText.charAt(i);if(ValidChars.indexOf(Char)==-1)IsNumber=false};return IsNumber}
function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1e3));var expires="; expires="+date.toGMTString()}else var expires="";document.cookie=name+"="+value+expires+"; path=/"}
function readCookie(name){var nameEQ=name+"=",ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)};return null}
function eraseCookie(name){createCookie(name,"",-1)}
function viewsSlideshowCycleIsVisible(elem,type,amountVisible){var docViewTop=$(window).scrollTop(),docViewBottom=docViewTop+$(window).height(),docViewLeft=$(window).scrollLeft(),docViewRight=docViewLeft+$(window).width(),elemTop=$(elem).offset().top,elemHeight=$(elem).height(),elemBottom=elemTop+elemHeight,elemLeft=$(elem).offset().left,elemWidth=$(elem).width(),elemRight=elemLeft+elemWidth,elemArea=elemHeight*elemWidth,missingLeft=0,missingRight=0,missingTop=0,missingBottom=0;if(elemLeft<docViewLeft)missingLeft=docViewLeft-elemLeft;if(elemRight>docViewRight)missingRight=elemRight-docViewRight;if(elemTop<docViewTop)missingTop=docViewTop-elemTop;if(elemBottom>docViewBottom)missingBottom=elemBottom-docViewBottom;if(type=='full'){return((elemBottom>=docViewTop)&&(elemTop<=docViewBottom)&&(elemBottom<=docViewBottom)&&(elemTop>=docViewTop)&&(elemLeft>=docViewLeft)&&(elemRight<=docViewRight)&&(elemLeft<=docViewRight)&&(elemRight>=docViewLeft))}else if(type=='vertical'){var verticalShowing=elemHeight-missingTop-missingBottom;if(amountVisible.indexOf('%')){return(((verticalShowing/elemHeight)*100)>=parseInt(amountVisible))}else return(verticalShowing>=parseInt(amountVisible))}else if(type=='horizontal'){var horizontalShowing=elemWidth-missingLeft-missingRight;if(amountVisible.indexOf('%')){return(((horizontalShowing/elemWidth)*100)>=parseInt(amountVisible))}else return(horizontalShowing>=parseInt(amountVisible))}else if(type=='area'){var areaShowing=(elemWidth-missingLeft-missingRight)*(elemHeight-missingTop-missingBottom);if(amountVisible.indexOf('%')){return(((areaShowing/elemArea)*100)>=parseInt(amountVisible))}else return(areaShowing>=parseInt(amountVisible))}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://manatuscostarica.com/sites/all/modules/contrib/views_slideshow/contrib/views_slideshow_cycle/js/views_slideshow_cycle.js. */