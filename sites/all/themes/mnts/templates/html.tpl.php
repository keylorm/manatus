<!DOCTYPE html>
<html<?php print $html_attributes . $rdf_namespaces; ?>>
<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
  
  
  
  
  
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <!--<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700|Open+Sans+Condensed:300,700|Raleway:400,300,600,700' rel='stylesheet' type='text/css' />
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
  <link href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>-->
 
<!-- Deben estar aquí por cuestiones de que los @media no funcionan en IE si estan llamados por Import 
  <link href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/mnts/css/responsive-normal.css" type="text/css" rel="stylesheet" />
  <link href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/mnts/css/responsive-movil.css" type="text/css" rel="stylesheet" />
  <link href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/mnts/css/responsive-tablet.css" type="text/css" rel="stylesheet" />-->
  
 

  <!--[if lte IE 8]>
        <link type="text/css" rel="stylesheet" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/mnts/css/style_ie.css" />
        
  <![endif]-->
  
  <!--[if lte IE 7]>
        <link type="text/css" rel="stylesheet" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/mnts/css/style_ie7.css" />
        
  <![endif]-->
  
  <!--[if IE]>
    <link type="text/css" rel="stylesheet" href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/mnts/css/style_ie_general.css" />
  
  <![endif]-->
  
   <!--[if lte IE 9]>
            <script src="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/mnts/js/myJs_ie.js" type="text/javascript"></script>
<script src="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/mnts/js/jquery.placeholder.js" type="text/javascript"></script>
<script type="text/javascript">$('input, textarea').placeholder();</script>


     <![endif]-->

   <!--Start of Zopim Live Chat Script-->
<script type="text/javascript">
        window.$zopim || (function (d, s) {
            var z = $zopim = function (c) { z._.push(c) }, $ = z.s =
d.createElement(s), e = d.getElementsByTagName(s)[0]; z.set = function (o) {
    z.set.
_.push(o)
}; z._ = []; z.set._ = []; $.async = !0; $.setAttribute('charset', 'utf-8');
            $.src = '//cdn.zopim.com/?1FZ3HqPURg49wsdlOVwgJorSzjrXqLEZ'; z.t = +new Date; $.
type = 'text/javascript'; e.parentNode.insertBefore($, e)
        })(document, 'script');
    </script>
    <!--End of Zopim Live Chat Script-->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-7635413-1']);
  _gaq.push(['_setDomainName', 'manatuscostarica.com']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

<!--Google Analytics Evento Scroll-->
var times = 0;
//location.hash = '';
$(window).scroll(function(){
	var bottom = $(window).height() + $(window).scrollTop();
	var height = $(document).height();
	var percentage = Math.round(100*bottom/height);
	if(percentage > 50 && times==0){
		times=times + 1;
		ga('send', 'event', 'Scroll', '50%', urlactual);
	}
});

<!--Google Analytics Evento Segundos-->
setTimeout(function(){ga('send', 'event', 'T>30s', 'Tiempo mayor a 30 segundos', urlactual);},30000);
</script>




<!-- Facebook Pixel Code -->
<script>(function() {
var _fbq = window._fbq || (window._fbq = []);
if (!_fbq.loaded) {
var fbds = document.createElement('script');
fbds.async = true;
fbds.src = '//connect.facebook.net/en_US/fbds.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(fbds, s);
_fbq.loaded = true;
}
_fbq.push(['addPixelId', '425971290931264']);
})();
window._fbq = window._fbq || [];
window._fbq.push(['track', 'PixelInitialized', {}]);
</script>
<noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?id=425971290931264&amp;ev=PixelInitialized" /></noscript>

<!-- Fin Facebook Pixel Code -->


</head>
<body class="<?php print $classes; ?>" <?php print $attributes; ?>>
  <div id="skip">
    <a href="#main-menu"><?php print t('Jump to Navigation'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
<!-- Google Code para etiquetas de remarketing -->
<!--
Es posible que las etiquetas de remarketing todavía no estén asociadas a la información de identificación personal o que estén en páginas relacionadas con las categorías delicadas. Para obtener más información e instrucciones sobre cómo configurar la etiqueta, consulte http://google.com/ads/remarketingsetup.
-->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1029133785;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1029133785/?value=0&amp;guid=ON&amp;script=0"/>
</div>
</noscript>

 <!--[if lt IE 9]>
    <script src="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/mnts/js/html5.js" type="text/javascript"></script>
<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js" type="text/javascript"></script>
<![endif]-->

<!-- css3-mediaqueries.js for IE less than 9 -->
<!--[if lte IE 9]>
    <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js" type="text/javascript"></script>
    <script>
		document.CreateElement('nav');
		document.CreateElement('header');
		document.CreateElement('footer');
		document.CreateElement('article');
		document.CreateElement('section');
  </script>
<![endif]-->

</body>
</html>
