<?php
/*
    Template Name: home page
*/
    
get_header("home"); ?>

	<div id="primary" class="content-area">
						
			<main id="main" class="site-main" role="main">

				<?php while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<div class="gallery">
						<?php the_content(); ?>
					</div><!-- .entry-content -->
					
				</article><!-- #post-## -->


				<?php endwhile; // end of the loop. ?>

			</main><!-- #main -->


	</div><!-- #primary -->

<?php // get_sidebar(); ?>
<?php get_footer("home"); ?>
