<div id="page" class="<?php print $classes; ?>"<?php print $attributes; ?>>

  <!-- ______________________ HEADER _______________________ -->

  <header id="header">

    <?php if ($page['header']): ?>
      <div id="header-region">

        <?php if ($logo): ?>
          <a href="<?php print $front_page; ?>" title="<?php /*print t('Home');*/ ?>BEST HOTEL IN TORTUGUERO, COSTA RICA " rel="home" id="logo">
            <img src="<?php print $logo; ?>" alt="BEST HOTEL IN TORTUGUERO, COSTA RICA "/>
          </a>
        <?php endif; ?>

        <?php if ($site_name || $site_slogan): ?>
          <div id="name-and-slogan">

            <?php if ($site_name): ?>
              <?php if ($title): ?>
                <div id="site-name">
                  <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><?php print $site_name; ?></a>
                </div>
              <?php else: /* Use h1 when the content title is empty */ ?>
                <h1 id="site-name">
                  <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><?php print $site_name; ?></a>
                </h1>
              <?php endif; ?>
            <?php endif; ?>

            <?php if ($site_slogan): ?>
              <div id="site-slogan"><?php print $site_slogan; ?></div>
            <?php endif; ?>

          </div>
        <?php endif; ?>

        <?php print render($page['header']); ?>

        <div class="title-container">
          <?php print $breadcrumb; ?>
          <?php print render($title_prefix); ?>
           

           <?php 
           if(taxonomy_vocabulary_machine_name_load("blog_category")){?>
              <?php if ($title): ?>
                  <?php if(!drupal_is_front_page()){ ?>
                    <h1 class="title" title="Blog">Blog</h1>
                  <?php } ?>          
                <?php endif; 
           } else { ?>
              <?php if ($title): ?>
                  <?php if(!drupal_is_front_page()){ ?>
                    <h1 class="title"><?php print $title; ?></h1>
                  <?php } ?>          
                <?php endif; 
           }
              

           ?>

          
          <?php print render($title_suffix); ?>
        </div>
      </div>
    <?php endif; ?>
    <div class="clearfix"></div>

  </header> <!-- /header -->

  <?php if ($main_menu || $secondary_menu): ?>
    <nav id="navigation" class="menu <?php if (!empty($main_menu)) {print "with-primary";}
      if (!empty($secondary_menu)) {print " with-secondary";} ?>">
      <?php print theme('links', array('links' => $main_menu, 'attributes' => array('id' => 'primary', 'class' => array('links', 'clearfix', 'main-menu')))); ?>
      <?php print theme('links', array('links' => $secondary_menu, 'attributes' => array('id' => 'secondary', 'class' => array('links', 'clearfix', 'sub-menu')))); ?>
    </nav> <!-- /navigation -->
  <?php endif; ?>

  <?php if ($page['highlighted']): ?>
    <div id="highlighted" class="clearfix"><?php print render($page['highlighted']) ?></div>
  <?php endif; ?>

  <!-- ______________________ MAIN _______________________ -->

  <div id="main" class="clearfix">

    <section id="content">

        <?php if ($breadcrumb || $title|| $messages || $tabs || $action_links): ?>
          <div id="content-header">

            <?php print $messages; ?>
            <?php print render($page['help']); ?>

            <?php if ($tabs): ?>
              <div class="tabs"><?php print render($tabs); ?></div>
            <?php endif; ?>

            <?php if ($action_links): ?>
              <ul class="action-links"><?php print render($action_links); ?></ul>
            <?php endif; ?>

          </div> <!-- /#content-header -->
        <?php endif; ?>

        <div id="content-area">
          <?php print render($page['content']) ?>
        </div>

        <?php print $feed_icons; ?>

    </section> <!-- /content-inner /content -->

    <?php if ($page['sidebar_first']): ?>
      <aside id="sidebar-first" class="column sidebar first">
        <?php print render($page['sidebar_first']); ?>
      </aside>
    <?php endif; ?> <!-- /sidebar-first -->
    
    <?php if ($page['sidebar_second']): ?>
      <aside id="sidebar-second" class="column sidebar second">
        <?php print render($page['sidebar_second']); ?>
      </aside>
    <?php endif; ?> <!-- /sidebar-second -->

  </div> <!-- /main -->

  <!-- ______________________ FOOTER _______________________ -->

  <?php if ($page['footer']): ?>
    <footer id="footer">
      <?php print render($page['footer']); ?>
      <div class="clearfix"></div>
    </footer> <!-- /footer -->
  <?php endif; ?>

</div> <!-- /page -->
