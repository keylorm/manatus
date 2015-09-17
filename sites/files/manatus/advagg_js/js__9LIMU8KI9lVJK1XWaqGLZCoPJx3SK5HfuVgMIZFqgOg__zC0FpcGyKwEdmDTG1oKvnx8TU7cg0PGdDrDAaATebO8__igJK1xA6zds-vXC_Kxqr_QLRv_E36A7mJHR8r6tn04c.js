jQuery(document).ready(function($) {



//	if ((window.location.href.split("/")[4] != 'regular-packages-rates') && (window.location.href.split("/")[5] != 'paquetes-regulares-tarifas')  && (window.location.href.split("/")[3] != 'tortuguero-area') && (window.location.href.split("/")[4] != 'gallery') && (window.location.href.split("/")[5] != 'gallery')&& (window.location.href.split("/")[5] != 'area-de-tortuguero')&& (window.location.href.split("/")[5] != 'contacto') && (window.location.href.split("/")[4] !='contact-us') && (window.location.href.split("/")[4] !='reservation-step1') && (window.location.href.split("/")[5] !='reservaci√≥n-paso1') && (window.location.href.split("/")[4] !='blog') && (window.location.href.split("/")[4] !='etiquetas') && (window.location.href.split("/")[5] !='etiquetas') && (window.location.href.split("/")[5] !='blog-category') && (window.location.href.split("/")[4] !='blog-category') && (window.location.href.split("/")[5] != 'paquetes-regulares-tarifas') && (window.location.href.split("/")[5] !='regular-packages-rates') && (window.location.href.split("/")[5] !='garden')&& (window.location.href.split("/")[6] !='jardines')&& (window.location.href.split("/")[6] !='piscina')&& (window.location.href.split("/")[5] !='pool')&& (window.location.href.split("/")[5] !='deck')&& (window.location.href.split("/")[6] !='deck')&& (window.location.href.split("/")[5] !='rooms')&& (window.location.href.split("/")[6] !='habitaciones')&& (window.location.href.split("/")[5] !='parque-nacional-tortuguero')&& (window.location.href.split("/")[4] !='tortuguero-national-park')) {
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

/* Cambiar titulo en men®≤ de sitemap */

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



;/**/
/*! http://tinynav.viljamis.com v1.1 by @viljamis */
(function(a,i,g){a.fn.tinyNav=function(j){var b=a.extend({active:"selected",header:"",label:""},j);return this.each(function(){g++;var h=a(this),d="tinynav"+g,f=".l_"+d,e=a("<select/>").attr("id",d).addClass("tinynav "+d);if(h.is("ul,ol")){""!==b.header&&e.append(a("<option/>").text(b.header));var c="";h.addClass("l_"+d).find("a").each(function(){c+='<option value="'+a(this).attr("href")+'">';var b;for(b=0;b<a(this).parents("ul, ol").length-1;b++)c+="- ";c+=a(this).text()+"</option>"});e.append(c);
b.header||e.find(":eq("+a(f+" li").index(a(f+" li."+b.active))+")").attr("selected",!0);e.change(function(){i.location.href=a(this).val()});a(f).after(e);b.label&&e.before(a("<label/>").attr("for",d).addClass("tinynav_label "+d+"_label").append(b.label))}})}})(jQuery,this,0);;/**/
/* Source and licensing information for the line(s) below can be found at http://manatuscostarica.com/es/sites/all/themes/mnts/js/carousel.js. */
var Mobify=window.Mobify=window.Mobify||{};Mobify.$=Mobify.$||window.Zepto||window.jQuery;Mobify.UI=Mobify.UI?Mobify.$.extend(Mobify.UI,{classPrefix:'m-'}):{classPrefix:'m-'};(function($,document){$.support=$.support||{};$.extend($.support,{touch:'ontouchend'in document})})(Mobify.$,document);Mobify.UI.Utils=(function($){var exports={},has=$.support,ua=navigator.userAgent;exports.events=(has.touch)?{down:'touchstart',move:'touchmove',up:'touchend'}:{down:'mousedown',move:'mousemove',up:'mouseup'};exports.getCursorPosition=(has.touch)?function(e){e=e.originalEvent||e;return{x:e.touches[0].clientX,y:e.touches[0].clientY}}:function(e){return{x:e.clientX,y:e.clientY}};exports.getProperty=function(name){var prefixes=['Webkit','Moz','O','ms',''],testStyle=document.createElement('div').style;for(var i=0;i<prefixes.length;++i)if(testStyle[prefixes[i]+name]!==undefined)return prefixes[i]+name;return};$.extend(has,{transform:!!(exports.getProperty('Transform')),transform3d:!!(window.WebKitCSSMatrix&&'m11'in new WebKitCSSMatrix()&&!/android\s+[1-2]/i.test(ua))});var transformProperty=exports.getProperty('Transform');if(has.transform3d){exports.translateX=function(element,delta){if(typeof delta=='number')delta=delta+'px';element.style[transformProperty]='translate3d('+delta+',0,0)'}}else if(has.transform){exports.translateX=function(element,delta){if(typeof delta=='number')delta=delta+'px';element.style[transformProperty]='translate('+delta+',0)'}}else exports.translateX=function(element,delta){if(typeof delta=='number')delta=delta+'px';element.style.left=delta};var transitionProperty=exports.getProperty('Transition'),durationProperty=exports.getProperty('TransitionDuration');exports.setTransitions=function(element,enable){if(enable){element.style[durationProperty]=''}else element.style[durationProperty]='0s'};exports.requestAnimationFrame=(function(){var prefixed=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1e3/60)}),requestAnimationFrame=function(){prefixed.apply(window,arguments)};return requestAnimationFrame})();return exports})(Mobify.$);Mobify.UI.Carousel=(function($,Utils){var defaults={dragRadius:10,moveRadius:20,classPrefix:undefined,classNames:{outer:'carousel',inner:'carousel-inner',item:'item',center:'center',touch:'has-touch',dragging:'dragging',active:'active',fluid:'fluid'}},has=$.support,Carousel=function(element,options){this.setOptions(options);this.initElements(element);this.initOffsets();this.initAnimation();this.bind()};Carousel.defaults=defaults;Carousel.prototype.setOptions=function(opts){var options=this.options||$.extend({},defaults,opts);options.classNames=$.extend({},options.classNames,opts.classNames||{});options.classPrefix=options.classPrefix||Mobify.UI.classPrefix;this.options=options};Carousel.prototype.initElements=function(element){this._index=1;this.element=element;this.$element=$(element);this.$inner=this.$element.find('.'+this._getClass('inner'));this.$items=this.$inner.children();this.$start=this.$items.eq(0);this.$sec=this.$items.eq(1);this.$current=this.$items.eq(this._index-1);this._length=this.$items.length;this._alignment=this.$element.hasClass(this._getClass('center'))?0.5:0;this._isFluid=this.$element.hasClass(this._getClass('fluid'))};Carousel.prototype.initOffsets=function(){this._offsetDrag=0};Carousel.prototype.initAnimation=function(){this.animating=false;this.dragging=false;this._needsUpdate=false;this._enableAnimation()};Carousel.prototype._getClass=function(id){return this.options.classPrefix+this.options.classNames[id]};Carousel.prototype._enableAnimation=function(){if(this.animating)return;Utils.setTransitions(this.$inner[0],true);this.$inner.removeClass(this._getClass('dragging'));this.animating=true};Carousel.prototype._disableAnimation=function(){if(!this.animating)return;Utils.setTransitions(this.$inner[0],false);this.$inner.addClass(this._getClass('dragging'));this.animating=false};Carousel.prototype.update=function(){if(this._needsUpdate)return;var self=this;this._needsUpdate=true;Utils.requestAnimationFrame(function(){self._update()})};Carousel.prototype._update=function(){if(!this._needsUpdate)return;var $current=this.$current,$start=this.$start,currentOffset=$current.prop('offsetLeft')+$current.prop('clientWidth')*this._alignment,startOffset=$start.prop('offsetLeft')+$start.prop('clientWidth')*this._alignment,x=Math.round(-(currentOffset-startOffset)+this._offsetDrag);Utils.translateX(this.$inner[0],x);this._needsUpdate=false};Carousel.prototype.bind=function(){var abs=Math.abs,dragging=false,canceled=false,dragRadius=this.options.dragRadius,xy,dx,dy,dragThresholdMet,self=this,$element=this.$element,$inner=this.$inner,opts=this.options,lockLeft=false,lockRight=false,windowWidth=$(window).width()
function start(e){if(!has.touch)e.preventDefault();dragging=true;canceled=false;xy=Utils.getCursorPosition(e);dx=0;dy=0;dragThresholdMet=false;self._disableAnimation();lockLeft=self._index==1;lockRight=self._index==self._length}
function drag(e){if(!dragging||canceled)return;var newXY=Utils.getCursorPosition(e),dragLimit=self.$element.width();dx=xy.x-newXY.x;dy=xy.y-newXY.y;if(dragThresholdMet||abs(dx)>abs(dy)&&(abs(dx)>dragRadius)){dragThresholdMet=true;e.preventDefault();if(lockLeft&&(dx<0)){dx=dx*(-dragLimit)/(dx-dragLimit)}else if(lockRight&&(dx>0))dx=dx*dragLimit/(dx+dragLimit);self._offsetDrag=-dx;self.update()}else if((abs(dy)>abs(dx))&&(abs(dy)>dragRadius))canceled=true}
function end(e){if(!dragging)return;dragging=false;self._enableAnimation();if(!canceled&&abs(dx)>opts.moveRadius){if(dx>0){self.next()}else self.prev()}else{self._offsetDrag=0;self.update()}}
function click(e){if(dragThresholdMet)e.preventDefault()};$inner.on(Utils.events.down+'.carousel',start).on(Utils.events.move+'.carousel',drag).on(Utils.events.up+'.carousel',end).on('click.carousel',click).on('mouseout.carousel',end);$element.on('click','[data-slide]',function(e){e.preventDefault();var action=$(this).attr('data-slide'),index=parseInt(action,10);if(isNaN(index)){self[action]()}else self.move(index)});$element.on('afterSlide',function(e,previousSlide,nextSlide){self.$items.eq(previousSlide-1).removeClass(self._getClass('active'));self.$items.eq(nextSlide-1).addClass(self._getClass('active'));self.$element.find('[data-slide=\''+previousSlide+'\']').removeClass(self._getClass('active'));self.$element.find('[data-slide=\''+nextSlide+'\']').addClass(self._getClass('active'))});$(window).on('resize orientationchange',function(e){if(windowWidth==$(window).width())return;self._disableAnimation();windowWidth=$(window).width();self.update()});$element.trigger('beforeSlide',[1,1]);$element.trigger('afterSlide',[1,1]);self.update()};Carousel.prototype.unbind=function(){this.$inner.off()};Carousel.prototype.destroy=function(){this.unbind();this.$element.trigger('destroy');this.$element.remove();this.$element=null;this.$inner=null;this.$start=null;this.$current=null};Carousel.prototype.move=function(newIndex,opts){var $element=this.$element,$inner=this.$inner,$items=this.$items,$start=this.$start,$current=this.$current,length=this._length,index=this._index;opts=opts||{};if(newIndex<1){newIndex=1}else if(newIndex>this._length)newIndex=length;if(newIndex==this._index);this._enableAnimation();$element.trigger('beforeSlide',[index,newIndex]);this.$current=$current=$items.eq(newIndex-1);this._offsetDrag=0;this._index=newIndex;this.update();$element.trigger('afterSlide',[index,newIndex])};Carousel.prototype.next=function(){this.move(this._index+1)};Carousel.prototype.prev=function(){this.move(this._index-1)};return Carousel})(Mobify.$,Mobify.UI.Utils);(function($){$.fn.carousel=function(action,options){var initOptions=$.extend({},$.fn.carousel.defaults);if(typeof action=='object'){initOptions=$(initOptions,action);options=null;action=null};this.each(function(){var $this=$(this),carousel=this._carousel;if(!carousel)carousel=new Mobify.UI.Carousel(this,initOptions);if(action){carousel[action](options);if(action==='destroy')carousel=null};this._carousel=carousel});return this};$.fn.carousel.defaults={}})(Mobify.$);;
/* Source and licensing information for the above line(s) can be found at http://manatuscostarica.com/es/sites/all/themes/mnts/js/carousel.js. */
