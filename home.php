<?php
/*
    Template Name: home page
*/
    
get_header(); ?>

	<div id="primary" class="content-area grid">
<!-- 
				<div class="corner tl"></div>
				<div class="corner tr"></div>
				<div class="corner bl"></div>
				<div class="corner br"></div> -->


<!-- 			<div id="sidebar">
				
				<ul>
					
					<li class="page_item page-item-55 current_page_item"><a href="#"><span class="myArrow"></span> Film Stills</a></li>
					<li class="page_item page-item-60"><a href="#">Headshots</a></li>
					
					<li class="page_item page-item-58 "><a href="#">miscellaneous</a></li>
				</ul>			
		

			</div> -->
			
			
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
<?php get_footer(); ?>
