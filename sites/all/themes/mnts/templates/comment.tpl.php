<article<?php print $attributes; ?>>
  <header>
      <?php
      print t('!datetime',
      array('!datetime' => '<time datetime="">' . $created . '</time>'));
    ?>
    <?php print render($title_prefix); ?>
    <?php if ($title): ?>
      <h4<?php print $title_attributes; ?>><?php print $title ?></h4>
    <?php endif; ?>
    <?php print render($title_suffix); ?>
    
  </header>

  <div<?php print $content_attributes; ?>>
    <?php
      hide($content['links']);
      print render($content);
    ?>
  </div>


  <footer class="comment-submitted">
   <?php
      print t('!username',
      array('!username' => $author));
    ?>
  </footer>

  
  

</article>
