<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package ric_bacon
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/794f35db-1827-4153-93e2-2b81664ba14c.css"/>
<link href='http://fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css'>
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<div class="grid wrapper">

		<header id="masthead" class="site-header col-1-4" role="banner">
			

			<div class="site-title">
<!-- 				<div class="corner tl"></div>
				<div class="corner tr"></div>
				<div class="corner bl"></div>
				<div class="corner br"></div> -->

				<a href="<?php echo esc_url( home_url( '/' ) ); ?>#" rel="home">
					<h1><?php bloginfo( 'name' ); ?></h1>

				<!-- 	<h2>Photography</h2> -->
				</a>
			</div>

			

			

			<nav id="site-navigation" class="main-navigation" role="navigation">

				<h1 class="menu-toggle"><?php _e( 'Menu', 'ric_bacon' ); ?></h1>
				<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'ric_bacon' ); ?></a>
				
				<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
				
			</nav><!-- #site-navigation -->




	<!-- 			<ul class="nav portfolio_subnav">
					<li class="page_item page-item-58 current_page_item"><a href="#">miscellaneous</a></li>
					<li class="page_item page-item-60"><a href="#">performers</a></li>
					<li class="page_item page-item-55"><a href="#">Headshots</a></li>
				</ul> -->






<!-- 				<?php
				if($post->post_parent)
				$children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0");
				else
				$children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0");
				if ($children) { ?>
				<ul class="nav portfolio_subnav">
				<?php echo $children; ?>
				</ul>
				<?php } ?>
 -->
		</header><!-- #masthead -->



	<div id="content" class="site-content col-3-4">
