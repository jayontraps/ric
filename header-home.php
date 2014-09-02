<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package ric_bacon
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="homepage">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<link href='http://fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css'>
<?php wp_head(); ?>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/modernizr.custom.08020.js"></script>
</head>

<body <?php body_class(); ?>>



<div id="maximage" style="display: none">
	<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/Army_boys_car.jpg" />
	<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/Katie_Brayben_compressor.jpg" />
	<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/India_Tailor_figure.jpg" />
	<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/Nel_Dinner_Party_rude4.jpg" />
	<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/IMG_8153.jpg" />
	<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/Daran_Theron_Table_Mountain.jpg" />

</div>

<div class="home-slide-nav">

<a href="" id="arrow_left"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/arrow_left.png" alt="Slide Left"></a>

<a href="" id="arrow_right"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/arrow_right.png" alt="Slide Right"></a>



</div>








	<div class="grid wrapper">

		<header id="masthead" class="site-header col-1-4" role="banner">
			
			<div class="site-title">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>#" rel="home">
					<h1><?php bloginfo( 'name' ); ?></h1>
				</a>
			</div>


			<div class="enter">
				<a href="<?php bloginfo('url'); ?>/portfolio/actors-headshots/">Click to enter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&raquo;</a>
			</div>
			


		</header><!-- #masthead -->



	<div id="content" class="site-content col-3-4">
