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
<link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/794f35db-1827-4153-93e2-2b81664ba14c.css"/>
<link href='http://fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css'>
<?php wp_head(); ?>

<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/modernizr.custom.08020.js"></script>

<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/jquery.maximage.min.css" type="text/css" media="screen" title="CSS" charset="utf-8" />

<style type="text/css">
	body {
		background-color: #000;
	}
</style>

</head>

<body <?php body_class(); ?>>

	<!-- <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/Nel Dinner Party_rude 4.jpg">
 -->
<script type="text/javascript">

	$(function(){		

		$(document).ready(function() {

			$('#maximage').fadeIn('slow');


		    var imgs = $('#maximage img');
		    imgs.sort(function() { return 0.5 - Math.random() });
		    $('#maximage').html( imgs );


			// Trigger maximage
			jQuery('#maximage').maximage({
				cycleOptions: {
					fx: 'fade',
					// // Speed has to match the speed for CSS transitions
					// speed: 1000, 
					// timeout: 0,
					prev: '#arrow_left',
					next: '#arrow_right'
				},

				onFirstImageLoaded: function(){
					jQuery('#cycle-loader').hide();
					jQuery('#maximage').fadeIn('fast');
				},


			});


		});



	// $('#maximage').maximage({
	// 	cycleOptions: {
	// 		fx: 'fade',
	// 		// Speed has to match the speed for CSS transitions
	// 		speed: 1000, 
	// 		timeout: 0,
	// 		prev: '#arrow_left',
	// 		next: '#arrow_right',
	// 		pause: 1
	// 	},
	// 	onFirstImageLoaded: function(){
	// 		jQuery('#cycle-loader').hide();
	// 		jQuery('#maximage').fadeIn('fast');
	// 	},
	// 	// cssBackgroundSize might be causing choppiness in retina display safari
	// 	cssBackgroundSize: false 
	// });	





	});


</script>







<div id="maximage" style="display: none">
	<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/India_Tailor_figure in doorway_0503.jpg" />
	<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/Nel Dinner Party_rude 4.jpg" />
	<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/IMG_8153.jpg" />
	<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/Daran Theron _ Table Mountain 1copy.jpg" />

</div>

<div class="home-slide-nav">

<a href="" id="arrow_left"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/arrow_left.png" alt="Slide Left"></a>

<a href="" id="arrow_right"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/arrow_right.png" alt="Slide Right"></a>

<!-- 
	<a href="" id="arrow_left">PREV</a>
	<a href="" id="arrow_right">NEXT</a>	 -->

</div>








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


			<div class="enter">
				<a href="<?php bloginfo('url'); ?>/portfolio/actors-headshots/">Click to enter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&raquo;</a>
			</div>
			

<!-- 			

			<nav id="site-navigation" class="main-navigation" role="navigation">

				<h1 class="menu-toggle"><span class="navicon"></span></h1>
				
				<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'ric_bacon' ); ?></a>
				
				<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
				
			</nav>


 -->

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
