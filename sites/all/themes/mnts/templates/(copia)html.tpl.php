<!DOCTYPE html>
<html<?php print $html_attributes . $rdf_namespaces; ?>>
<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
  <!--[if lt IE 9]>
    <script src="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/mnts/js/html5.js"></script>
<![endif]-->

<!-- css3-mediaqueries.js for IE less than 9 -->
<!--[if lte IE 9]>
    <script src="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/mnts/js/css3-mediaqueries.js"></script>
    <script>
		document.CreateElement('nav');
		document.CreateElement('header');
		document.CreateElement('footer');
		document.CreateElement('article');
		document.CreateElement('section');
  </script>

<![endif]-->
  
  
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700|Open+Sans+Condensed:300,700|Raleway:400,300,600,700' rel='stylesheet' type='text/css'>
  
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <!--<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>-->
  <link href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
 
  
  <link href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/mnts/css/responsive-normal.css" type="text/css" rel="stylesheet" />
  <link href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/mnts/css/responsive-movil.css" type="text/css" rel="stylesheet" />
  <link href="<?php echo $GLOBALS['base_url']; ?>/sites/all/themes/mnts/css/responsive-tablet.css" type="text/css" rel="stylesheet" />
  
  
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


</head>
<body class="<?php print $classes; ?>" <?php print $attributes; ?>>
  <div id="skip">
    <a href="#main-menu"><?php print t('Jump to Navigation'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>
