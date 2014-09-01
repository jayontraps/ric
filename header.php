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
<link href='http://fonts.googleapis.com/css?family=News+Cycle|PT+Sans' rel='stylesheet' type='text/css'>
<?php wp_head(); ?>



<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/modernizr.custom.08020.js"></script>



</head>

<body <?php body_class(); ?>>

	<?php // include_once("inc/svg-defs.svg"); ?>

	<div class="grid wrapper">

		<header id="masthead" class="site-header col col-1-5" role="banner">

		<div class="head-wrap">

			<div class="site-title">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>#" rel="home">
					<h1><?php bloginfo( 'name' ); ?></h1>
				</a>
			</div>

			
			<nav id="site-navigation" class="main-navigation" role="navigation">
				<h1 class="menu-toggle"><span class="navicon"></span></h1>
				<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'ric_bacon' ); ?></a>
				<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>					
			</nav><!-- #site-navigation -->
		
			<?php if(get_field('gallery_intro')): ?>
				<a id="moreInfo" href="#">Info&nbsp;&nbsp;&raquo;</a>					 
			<?php endif; ?>		

			</div>	

		</header><!-- #masthead -->



	<div id="content" class="site-content col-4-5">
