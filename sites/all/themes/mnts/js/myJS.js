jQuery(document).ready(function($) {


    /*Infinite scroll*/
    var divs = jQuery(".maravillas-tortuguero-home .views-row");
    divs.css({'display':'none'});
    
    var ordenid = 1;
    var cantv = 3;
    var total = divs.length;


    jQuery(".boton-cargar-mas-maravillas a").click(function(){
        var c = ordenid + cantv;

        if(total >= ordenid){ 

            for(i=ordenid;i<=c;i++){

                var div = jQuery(".views-row-"+i);
                div.css({'display':'block'});

                jQuery('.maravillas-tortuguero-home .view-content.masonry-processed').masonry('layout'); 
                jQuery(".maravillas-tortuguero-home .views-row-"+i).css({'display':'block'}); 

                ordenid = ordenid + 1;

                if(total <= ordenid){ $(this).css({'display':'none'}); }
            }

        }

    });

    setTimeout(function(){ jQuery(".boton-cargar-mas-maravillas a").click(); }, 200);

   /* var contadorRowPaquetesHome = 0;
    jQuery(".view-maravillas-tortuguero.view-id-maravillas_tortuguero .views-row").each(function(){
        contadorRowPaquetesHome++;
        if (contadorRowPaquetesHome>2){
            jQuery(this).addClass('displayNone');
        }


    });


    jQuery('.boton-cargar-mas-maravillas a').click(function(){

        jQuery(".maravillas-tortuguero-home .views-row").each(function(){
            if (jQuery(this).hasClass('displayNone')){

                jQuery(this).removeClass('displayNone');
                jQuery(this).addClass('displayBlock');
            }
        });

        jQuery('.maravillas-tortuguero-home .view-content.masonry-processed').masonry('layout');
        
        jQuery('.boton-cargar-mas-maravillas').addClass('displayNone');

    });*/


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



