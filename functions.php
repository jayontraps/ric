<?php
/**
 * ric_bacon functions and definitions
 *
 * @package ric_bacon
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */


// override default jQuery version (1.8.2) 
if (!is_admin()) add_action("wp_enqueue_scripts", "my_jquery_enqueue", 11);
function my_jquery_enqueue() {
   wp_deregister_script('jquery');
   wp_register_script('jquery', "http" . ($_SERVER['SERVER_PORT'] == 443 ? "s" : "") . "://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js", false, null);
   wp_enqueue_script('jquery');
}




if ( ! isset( $content_width ) ) {
	$content_width = 640; /* pixels */
}

if ( ! function_exists( 'ric_bacon_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function ric_bacon_setup() {

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on ric_bacon, use a find and replace
	 * to change 'ric_bacon' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'ric_bacon', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );


	/*
	Remove Width and Height Attributes From Inserted Images
	*/
	add_filter( 'post_thumbnail_html', 'remove_width_attribute', 10 );
	add_filter( 'image_send_to_editor', 'remove_width_attribute', 10 );

	function remove_width_attribute( $html ) {
	$html = preg_replace( '/(width|height)="\d*"\s/', "", $html );
	return $html;
	}

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'ric_bacon' ),
	) );

	// Enable support for Post Formats.
	add_theme_support( 'post-formats', array( 'aside', 'image', 'video', 'quote', 'link' ) );

	// Setup the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'ric_bacon_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	// Enable support for HTML5 markup.
	add_theme_support( 'html5', array(
		'comment-list',
		'search-form',
		'comment-form',
		'gallery',
	) );
}
endif; // ric_bacon_setup
add_action( 'after_setup_theme', 'ric_bacon_setup' );

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function ric_bacon_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'ric_bacon' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
}
add_action( 'widgets_init', 'ric_bacon_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function ric_bacon_scripts() {


	wp_enqueue_style( 'ric_bacon-style-definition', get_stylesheet_uri());

	wp_enqueue_style( 'ric_bacon-style', get_template_directory_uri() . '/css/screen.css', array(), '676875' );

	wp_enqueue_style( 'ric_bacon-maximage', get_template_directory_uri() . '/css/jquery.maximage.min.css', array(), '20140910' );

	// wp_enqueue_script( 'ric_bacon-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20120206', true );

	// wp_enqueue_script( 'ric_bacon-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', true );

	// // wp_enqueue_script( 'ric_bacon-matchHeight', get_template_directory_uri() . '/js/jquery.matchHeight-min.js', array('jquery'), '20130115', true );

	// // wp_enqueue_script( 'ric_bacon-lockfixed', get_template_directory_uri() . '/js/jquery.lockfixed.min.js', array('jquery'), '20130115', true );


	// if (is_page('home')) {
	// 	wp_enqueue_script( 'ric_bacon-cycle', get_template_directory_uri() . '/js/jquery.cycle.all.min.js', array('jquery'), '20130115', true );	
	// 	wp_enqueue_script( 'ric_bacon-max-image', get_template_directory_uri() . '/js/jquery.maximage.min.js', array('jquery'), '20130115', true );	
	// }

	// wp_enqueue_script( 'ric_bacon-ric', get_template_directory_uri() . '/js/ric.js', array('jquery'), '20140910', true );

	wp_enqueue_script( 'ric_bacon-ric', get_template_directory_uri() . '/build_scripts/built.min.js', array('jquery'), '20140911', true );	


	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'ric_bacon_scripts' );

/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';
