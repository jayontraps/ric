<?php
/*
    Template Name: portfolio page
*/

get_header(); ?>

	<div id="primary" class="content-area">

		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>


<!-- 			<?php
			if($post->post_parent)
			$children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0");
			else
			$children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0");
			if ($children) { ?>
			<ul class="nav portfolio_subnav">
			<?php echo $children; ?>
			</ul>
			<?php } ?> -->

	


				
			<?php get_template_part( 'content', 'portfolio' ); ?>


			<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->

	</div><!-- #primary -->

<?php // get_sidebar(); ?>

<?php get_footer(); ?>
