/* Source and licensing information for the line(s) below can be found at http://www.manatuscostarica.com/sites/all/modules/panels/js/panels.js. */
(function($){Drupal.Panels=Drupal.Panels||{};Drupal.Panels.autoAttach=function(){if($.browser.msie){$("div.panel-pane").hover(function(){$('div.panel-hide',this).addClass("panel-hide-hover");return true},function(){$('div.panel-hide',this).removeClass("panel-hide-hover");return true});$("div.admin-links").hover(function(){$(this).addClass("admin-links-hover");return true},function(){$(this).removeClass("admin-links-hover");return true})}};$(Drupal.Panels.autoAttach)})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://www.manatuscostarica.com/sites/all/modules/panels/js/panels.js. */
/* Source and licensing information for the line(s) below can be found at http://www.manatuscostarica.com/sites/all/modules/contrib/views_slideshow/js/views_slideshow.js. */
(function($){Drupal.viewsSlideshow=Drupal.viewsSlideshow||{};Drupal.viewsSlideshowControls=Drupal.viewsSlideshowControls||{};Drupal.viewsSlideshowControls.play=function(options){try{if(typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type!="undefined"&&typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play=='function')Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play(options)}catch(err){};try{if(typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type!="undefined"&&typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play=='function')Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play(options)}catch(err){}};Drupal.viewsSlideshowControls.pause=function(options){try{if(typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type!="undefined"&&typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause=='function')Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause(options)}catch(err){};try{if(typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type!="undefined"&&typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause=='function')Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause(options)}catch(err){}};Drupal.behaviors.viewsSlideshowControlsText={attach:function(context){$('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)',context).addClass('views-slideshow-controls-text-previous-processed').each(function(){var uniqueID=$(this).attr('id').replace('views_slideshow_controls_text_previous_','');$(this).click(function(){Drupal.viewsSlideshow.action({action:'previousSlide',slideshowID:uniqueID});return false})});$('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)',context).addClass('views-slideshow-controls-text-next-processed').each(function(){var uniqueID=$(this).attr('id').replace('views_slideshow_controls_text_next_','');$(this).click(function(){Drupal.viewsSlideshow.action({action:'nextSlide',slideshowID:uniqueID});return false})});$('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)',context).addClass('views-slideshow-controls-text-pause-processed').each(function(){var uniqueID=$(this).attr('id').replace('views_slideshow_controls_text_pause_','');$(this).click(function(){if(Drupal.settings.viewsSlideshow[uniqueID].paused){Drupal.viewsSlideshow.action({action:'play',slideshowID:uniqueID,force:true})}else Drupal.viewsSlideshow.action({action:'pause',slideshowID:uniqueID,force:true});return false})})}};Drupal.viewsSlideshowControlsText=Drupal.viewsSlideshowControlsText||{};Drupal.viewsSlideshowControlsText.pause=function(options){var pauseText=Drupal.theme.prototype['viewsSlideshowControlsPause']?Drupal.theme('viewsSlideshowControlsPause'):'';$('#views_slideshow_controls_text_pause_'+options.slideshowID+' a').text(pauseText)};Drupal.viewsSlideshowControlsText.play=function(options){var playText=Drupal.theme.prototype['viewsSlideshowControlsPlay']?Drupal.theme('viewsSlideshowControlsPlay'):'';$('#views_slideshow_controls_text_pause_'+options.slideshowID+' a').text(playText)};Drupal.theme.prototype.viewsSlideshowControlsPause=function(){return Drupal.t('Resume')};Drupal.theme.prototype.viewsSlideshowControlsPlay=function(){return Drupal.t('Pause')};Drupal.viewsSlideshowPager=Drupal.viewsSlideshowPager||{};Drupal.viewsSlideshowPager.transitionBegin=function(options){try{if(typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type!="undefined"&&typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin=='function')Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin(options)}catch(err){};try{if(typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type!="undefined"&&typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin=='function')Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin(options)}catch(err){}};Drupal.viewsSlideshowPager.goToSlide=function(options){try{if(typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type!="undefined"&&typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide=='function')Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide(options)}catch(err){};try{if(typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type!="undefined"&&typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide=='function')Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide(options)}catch(err){}};Drupal.viewsSlideshowPager.previousSlide=function(options){try{if(typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type!="undefined"&&typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide=='function')Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide(options)}catch(err){};try{if(typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type!="undefined"&&typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide=='function')Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide(options)}catch(err){}};Drupal.viewsSlideshowPager.nextSlide=function(options){try{if(typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type!="undefined"&&typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide=='function')Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide(options)}catch(err){};try{if(typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type!="undefined"&&typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide=='function')Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide(options)}catch(err){}};Drupal.behaviors.viewsSlideshowPagerFields={attach:function(context){$('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)',context).addClass('views-slideshow-pager-field-processed').each(function(){var pagerInfo=$(this).attr('id').split('_'),location=pagerInfo[2];pagerInfo.splice(0,3);var uniqueID=pagerInfo.join('_');if(Drupal.settings.viewsSlideshowPagerFields[uniqueID][location].activatePauseOnHover){$(this).children().each(function(index,pagerItem){var mouseIn=function(){Drupal.viewsSlideshow.action({action:'goToSlide',slideshowID:uniqueID,slideNum:index});Drupal.viewsSlideshow.action({action:'pause',slideshowID:uniqueID})},mouseOut=function(){Drupal.viewsSlideshow.action({action:'play',slideshowID:uniqueID})};if(jQuery.fn.hoverIntent){$(pagerItem).hoverIntent(mouseIn,mouseOut)}else $(pagerItem).hover(mouseIn,mouseOut)})}else $(this).children().each(function(index,pagerItem){$(pagerItem).click(function(){Drupal.viewsSlideshow.action({action:'goToSlide',slideshowID:uniqueID,slideNum:index})})})})}};Drupal.viewsSlideshowPagerFields=Drupal.viewsSlideshowPagerFields||{};Drupal.viewsSlideshowPagerFields.transitionBegin=function(options){for(pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]){$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"]').removeClass('active');$('#views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'_'+options.slideNum).addClass('active')}};Drupal.viewsSlideshowPagerFields.goToSlide=function(options){for(pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]){$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"]').removeClass('active');$('#views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'_'+options.slideNum).addClass('active')}};Drupal.viewsSlideshowPagerFields.previousSlide=function(options){for(pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]){var pagerNum=$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"].active').attr('id').replace('views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'_','');if(pagerNum==0){pagerNum=$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"]').length()-1}else pagerNum--;$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"]').removeClass('active');$('#views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'_'+pagerNum).addClass('active')}};Drupal.viewsSlideshowPagerFields.nextSlide=function(options){for(pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]){var pagerNum=$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"].active').attr('id').replace('views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'_',''),totalPagers=$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"]').length();pagerNum++;if(pagerNum==totalPagers)pagerNum=0;$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"]').removeClass('active');$('#views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'_'+slideNum).addClass('active')}};Drupal.viewsSlideshowSlideCounter=Drupal.viewsSlideshowSlideCounter||{};Drupal.viewsSlideshowSlideCounter.transitionBegin=function(options){$('#views_slideshow_slide_counter_'+options.slideshowID+' .num').text(options.slideNum+1)};Drupal.viewsSlideshow.action=function(options){var status={value:true,text:''};if(typeof options.action=='undefined'||options.action==''){status.value=false;status.text=Drupal.t('There was no action specified.');return error};if(options.action=='pause'){Drupal.settings.viewsSlideshow[options.slideshowID].paused=1;if(options.force)Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce=1}else if(options.action=='play')if(!Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce||options.force){Drupal.settings.viewsSlideshow[options.slideshowID].paused=0;Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce=0}else{status.value=false;status.text+=' '+Drupal.t('This slideshow is forced paused.');return status};switch(options.action){case"goToSlide":case"transitionBegin":case"transitionEnd":if(typeof options.slideNum=='undefined'||typeof options.slideNum!=='number'||parseInt(options.slideNum)!=(options.slideNum-0)){status.value=false;status.text=Drupal.t('An invalid integer was specified for slideNum.')};case"pause":case"play":case"nextSlide":case"previousSlide":var methods=Drupal.settings.viewsSlideshow[options.slideshowID]['methods'],excludeMethodsObj={};if(typeof options.excludeMethods!=='undefined')for(var i=0;i<excludeMethods.length;i++)excludeMethodsObj[excludeMethods[i]]='';for(i=0;i<methods[options.action].length;i++)if(Drupal[methods[options.action][i]]!=undefined&&typeof Drupal[methods[options.action][i]][options.action]=='function'&&!(methods[options.action][i]in excludeMethodsObj))Drupal[methods[options.action][i]][options.action](options);break;default:status.value=false;status.text=Drupal.t('An invalid action "!action" was specified.',{"!action":options.action})};return status}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at http://www.manatuscostarica.com/sites/all/modules/contrib/views_slideshow/js/views_slideshow.js. */