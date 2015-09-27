<?php

/**
 * Here we override the default HTML output of drupal.
 * refer to http://drupal.org/node/550722
 */

// Auto-rebuild the theme registry during theme development.
if (theme_get_setting('clear_registry')) {
  // Rebuild .info data.
  system_rebuild_theme_data();
  // Rebuild theme registry.
  drupal_theme_rebuild();
}

// Add Zen Tabs styles
if (theme_get_setting('mnts_tabs')) {
  drupal_add_css( drupal_get_path('theme', 'mnts') .'/css/tabs.css');
}


function taxonomy_node_get_terms($node, $key = 'tid') {
    if(arg(0)=='node' && is_numeric(arg(1))) {
        static $terms;
        if (!isset($terms[$node->vid][$key])) {
            $query = db_select('taxonomy_index', 'r');
            $t_alias = $query->join('taxonomy_term_data', 't', 'r.tid = t.tid');
            $v_alias = $query->join('taxonomy_vocabulary', 'v', 't.vid = v.vid');
            $query->fields( $t_alias );
            $query->condition("r.nid", $node->nid);
            $query->condition("v.vid",'1','<>');
            $result = $query->execute();
            $terms[$node->vid][$key] = array();
            foreach ($result as $term) {
                $terms[$node->vid][$key][$term->$key] = $term;
            }
        }
        return $terms[$node->vid][$key];
    }
}


function replace_specials_characters($s) {
    //$s = mb_convert_encoding($s, 'UTF-8','');
    $s = preg_replace("/á|à|â|ã|ª/","a",$s);
    $s = preg_replace("/Á|À|Â|Ã/","A",$s);
    $s = preg_replace("/é|è|ê/","e",$s);
    $s = preg_replace("/É|È|Ê/","E",$s);
    $s = preg_replace("/í|ì|î/","i",$s);
    $s = preg_replace("/Í|Ì|Î/","I",$s);
    $s = preg_replace("/ó|ò|ô|õ|º/","o",$s);
    $s = preg_replace("/Ó|Ò|Ô|Õ/","O",$s);
    $s = preg_replace("/ú|ù|û/","u",$s);
    $s = preg_replace("/Ú|Ù|Û/","U",$s);
    $s = str_replace(" ","_",$s);
    $s = str_replace("ñ","n",$s);
    $s = str_replace("Ñ","N",$s);

    $s = preg_replace('/[^a-zA-Z0-9_\.-]/', '', $s);
    return $s;
  }


function mnts_preprocess_html(&$vars) {
  global $user;

 drupal_add_css('http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700|Open+Sans+Condensed:300,700|Raleway:400,300,600,700', array('type' => 'external'));
drupal_add_css('http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.min.css', array('type' => 'external'));
drupal_add_js('http://code.jquery.com/ui/1.10.3/jquery-ui.min.js', 'external');


  //agregar jquery
 // drupal_add_js('http://code.jquery.com/jquery-1.11.0.js');

  // Add role name classes (to allow css based show for admin/hidden from user)
  foreach ($user->roles as $role){
    $vars['classes_array'][] = 'role-' . mnts_id_safe($role);
  }

  // HTML Attributes
  // Use a proper attributes array for the html attributes.
  $vars['html_attributes'] = array();
  //$vars['html_attributes']['lang'][] = $language->language;
  //$vars['html_attributes']['dir'][] = $language->dir;

  // Convert RDF Namespaces into structured data using drupal_attributes.
  $vars['rdf_namespaces'] = array();
  if (function_exists('rdf_get_namespaces')) {
    foreach (rdf_get_namespaces() as $prefix => $uri) {
      $prefixes[] = $prefix . ': ' . $uri;
    }
    $vars['rdf_namespaces']['prefix'] = implode(' ', $prefixes);
  }

  // Flatten the HTML attributes and RDF namespaces arrays.
  $vars['html_attributes'] = drupal_attributes($vars['html_attributes']);
  $vars['rdf_namespaces'] = drupal_attributes($vars['rdf_namespaces']);

  if (!$vars['is_front']) {
    // Add unique classes for each page and website section
    $path = drupal_get_path_alias($_GET['q']);
    list($section, ) = explode('/', $path, 2);
    $vars['classes_array'][] = 'with-subnav';
    $vars['classes_array'][] = mnts_id_safe('page-'. $path);
    $vars['classes_array'][] = mnts_id_safe('section-'. $section);

    if (arg(0) == 'node') {
      if (arg(1) == 'add') {
        if ($section == 'node') {
          // Remove 'section-node'
          array_pop( $vars['classes_array'] );
        }
        // Add 'section-node-add'
        $vars['classes_array'][] = 'section-node-add';
      }
      elseif (is_numeric(arg(1)) && (arg(2) == 'edit' || arg(2) == 'delete')) {
        if ($section == 'node') {
          // Remove 'section-node'
          array_pop( $vars['classes_array']);
        }
        // Add 'section-node-edit' or 'section-node-delete'
        $vars['classes_array'][] = 'section-node-'. arg(2);
      }
    }
  }
  //for normal un-themed edit pages
  if ((arg(0) == 'node') && (arg(2) == 'edit')) {
    $vars['template_files'][] =  'page';
  }

  // Add IE classes.
  if (theme_get_setting('mnts_ie_enabled')) {
    $mnts_ie_enabled_versions = theme_get_setting('mnts_ie_enabled_versions');
    if (in_array('ie8', $mnts_ie_enabled_versions, TRUE)) {
      drupal_add_css(path_to_theme() . '/css/ie8.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'IE 8', '!IE' => FALSE), 'preprocess' => FALSE));
      drupal_add_js(path_to_theme() . '/js/selectivizr-min.js');
    }
    if (in_array('ie9', $mnts_ie_enabled_versions, TRUE)) {
      drupal_add_css(path_to_theme() . '/css/ie9.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'IE 9', '!IE' => FALSE), 'preprocess' => FALSE));
    }
    if (in_array('ie10', $mnts_ie_enabled_versions, TRUE)) {
      drupal_add_css(path_to_theme() . '/css/ie10.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'IE 10', '!IE' => FALSE), 'preprocess' => FALSE));
    }
  }

  $node = node_load(arg(1));
    $results = taxonomy_node_get_terms($node);
    if(is_array($results)) {
        foreach ($results as $item) {
           $vars['classes_array'][] = "taxonomy-".replace_specials_characters(strtolower(drupal_clean_css_identifier($item->name)));
        }
    }

    if (arg(0) == 'taxonomy' && arg(1) == 'term') {
    $term = taxonomy_term_load(arg(2));
    $vars['classes_array'][] = 'vocabulary-' . strtolower($term->vocabulary_machine_name);
  }

  

}

function mnts_preprocess_comment(&$variables){
  $variables['created'] = date('d/m/Y', $variables['elements']['#node']->created);
  $variables['changed'] = date('d/m/Y', $variables['elements']['#node']->created);
}



function mnts_preprocess_page(&$vars, $hook) {
 	 
	
  if (isset($vars['node_title'])) {
    $vars['title'] = $vars['node_title'];
  }
  // Adding classes whether #navigation is here or not
  if (!empty($vars['main_menu']) or !empty($vars['sub_menu'])) {
    $vars['classes_array'][] = 'with-navigation';
  }
  if (!empty($vars['secondary_menu'])) {
    $vars['classes_array'][] = 'with-subnav';
  }

  // Add first/last classes to node listings about to be rendered.
  if (isset($vars['page']['content']['system_main']['nodes'])) {
    // All nids about to be loaded (without the #sorted attribute).
    $nids = element_children($vars['page']['content']['system_main']['nodes']);
    // Only add first/last classes if there is more than 1 node being rendered.
    if (count($nids) > 1) {
      $first_nid = reset($nids);
      $last_nid = end($nids);
      $first_node = $vars['page']['content']['system_main']['nodes'][$first_nid]['#node'];
      $first_node->classes_array = array('first');
      $last_node = $vars['page']['content']['system_main']['nodes'][$last_nid]['#node'];
      $last_node->classes_array = array('last');
    }
  }

  // Allow page override template suggestions based on node content type.
  if (isset($vars['node']->type) && isset($vars['node']->nid)) {
    $vars['theme_hook_suggestions'][] = 'page__' . $vars['node']->type;
    $vars['theme_hook_suggestions'][] = "page__node__" . $vars['node']->nid;
  }

  /*if (isset($vars['node']->title)) {
    if($vars['node']->title == "Luxury Rooms");
    drupal_set_title("Manatus Experience");
  }*/


  if (arg(0) == 'taxonomy' && arg(1) == 'term' && is_numeric(arg(2))) {
    $term = taxonomy_term_load(arg(2));
    $vars['theme_hook_suggestions'][] = 'page__vocabulary__' . $term->vocabulary_machine_name;
  }
  
}

function mnts_preprocess_node(&$vars) {
  // Add a striping class.
  $vars['classes_array'][] = 'node-' . $vars['zebra'];

  // Add $unpublished variable.
  $vars['unpublished'] = (!$vars['status']) ? TRUE : FALSE;

  // Merge first/last class (from mnts_preprocess_page) into classes array of current node object.
  $node = $vars['node'];
  if (!empty($node->classes_array)) {
    $vars['classes_array'] = array_merge($vars['classes_array'], $node->classes_array);
  }
}

function mnts_preprocess_block(&$vars, $hook) {
  // Add a striping class.
  $vars['classes_array'][] = 'block-' . $vars['block_zebra'];

  // Add first/last block classes
  $first_last = "";
  // If block id (count) is 1, it's first in region.
  if ($vars['block_id'] == '1') {
    $first_last = "first";
    $vars['classes_array'][] = $first_last;
  }
  // Count amount of blocks about to be rendered in that region.
  $block_count = count(block_list($vars['elements']['#block']->region));
  if ($vars['block_id'] == $block_count) {
    $first_last = "last";
    $vars['classes_array'][] = $first_last;
  }
}

/**
 * Return a themed breadcrumb trail.
 *
 * @param $breadcrumb
 *   An array containing the breadcrumb links.
 * @return
 *   A string containing the breadcrumb output.
 */
function mnts_breadcrumb($variables) {
  $breadcrumb = $variables['breadcrumb'];
  // Determine if we are to display the breadcrumb.
  $show_breadcrumb = theme_get_setting('mnts_breadcrumb');
  if ($show_breadcrumb == 'yes' || $show_breadcrumb == 'admin' && arg(0) == 'admin') {

    // Optionally get rid of the homepage link.
    $show_breadcrumb_home = theme_get_setting('mnts_breadcrumb_home');
    if (!$show_breadcrumb_home) {
      array_shift($breadcrumb);
    }

    // Return the breadcrumb with separators.
    if (!empty($breadcrumb)) {
      $breadcrumb_separator = theme_get_setting('mnts_breadcrumb_separator');
      $trailing_separator = $title = '';
      if (theme_get_setting('mnts_breadcrumb_title')) {
        $item = menu_get_item();
        if (!empty($item['tab_parent'])) {
          // If we are on a non-default tab, use the tab's title.
          $title = check_plain($item['title']);
        }
        else {
          $title = drupal_get_title();
        }
        if ($title) {
          $trailing_separator = $breadcrumb_separator;
        }
      }
      elseif (theme_get_setting('mnts_breadcrumb_trailing')) {
        $trailing_separator = $breadcrumb_separator;
      }

      // Provide a navigational heading to give context for breadcrumb links to
      // screen-reader users. Make the heading invisible with .element-invisible.
      $heading = '<h2 class="element-invisible">' . t('You are here') . '</h2>';

      return $heading . '<div class="breadcrumb">' . implode($breadcrumb_separator, $breadcrumb) . $trailing_separator . $title . '</div>';
    }
  }
  // Otherwise, return an empty string.
  return '';
}

/**
 * Converts a string to a suitable html ID attribute.
 *
 * http://www.w3.org/TR/html4/struct/global.html#h-7.5.2 specifies what makes a
 * valid ID attribute in HTML. This function:
 *
 * - Ensure an ID starts with an alpha character by optionally adding an 'n'.
 * - Replaces any character except A-Z, numbers, and underscores with dashes.
 * - Converts entire string to lowercase.
 *
 * @param $string
 *  The string
 * @return
 *  The converted string
 */
function mnts_id_safe($string) {
  // Replace with dashes anything that isn't A-Z, numbers, dashes, or underscores.
  $string = strtolower(preg_replace('/[^a-zA-Z0-9_-]+/', '-', $string));
  // If the first character is not a-z, add 'n' in front.
  if (!ctype_lower($string{0})) { // Don't use ctype_alpha since its locale aware.
    $string = 'id'. $string;
  }
  return $string;
}

/**
 * Generate the HTML output for a menu link and submenu.
 *
 * @param $variables
 *  An associative array containing:
 *   - element: Structured array data for a menu link.
 *
 * @return
 *  A themed HTML string.
 *
 * @ingroup themeable
 *
 */
function mnts_menu_link(array $variables) {
  $element = $variables['element'];
  $sub_menu = '';

  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
  }
  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  // Adding a class depending on the TITLE of the link (not constant)
  $element['#attributes']['class'][] = mnts_id_safe($element['#title']);
  // Adding a class depending on the ID of the link (constant)
  if (isset($element['#original_link']['mlid']) && !empty($element['#original_link']['mlid'])) {
    $element['#attributes']['class'][] = 'mid-' . $element['#original_link']['mlid'];
  }
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}

/**
 * Override or insert variables into theme_menu_local_task().
 */
function mnts_preprocess_menu_local_task(&$variables) {
  $link =& $variables['element']['#link'];

  // If the link does not contain HTML already, check_plain() it now.
  // After we set 'html'=TRUE the link will not be sanitized by l().
  if (empty($link['localized_options']['html'])) {
    $link['title'] = check_plain($link['title']);
  }
  $link['localized_options']['html'] = TRUE;
  $link['title'] = '<span class="tab">' . $link['title'] . '</span>';
}

/**
 * Duplicate of theme_menu_local_tasks() but adds clearfix to tabs.
 */
function mnts_menu_local_tasks(&$variables) {
  $output = '';

  if (!empty($variables['primary'])) {
    $variables['primary']['#prefix'] = '<h2 class="element-invisible">' . t('Primary tabs') . '</h2>';
    $variables['primary']['#prefix'] .= '<ul class="tabs primary clearfix">';
    $variables['primary']['#suffix'] = '</ul>';
    $output .= drupal_render($variables['primary']);
  }
  if (!empty($variables['secondary'])) {
    $variables['secondary']['#prefix'] = '<h2 class="element-invisible">' . t('Secondary tabs') . '</h2>';
    $variables['secondary']['#prefix'] .= '<ul class="tabs secondary clearfix">';
    $variables['secondary']['#suffix'] = '</ul>';
    $output .= drupal_render($variables['secondary']);
  }
  return $output;
}
