<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package ric_bacon
 */
?>


	<?php if ( has_post_thumbnail() ) { the_post_thumbnail();} ?>

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		
		<div class="entry-content">				
			
			<?php the_content(); ?>
		
		</div><!-- .entry-content -->

	</article><!-- #post-## -->




