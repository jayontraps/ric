<?php
/*
    Template Name: test page
*/

get_header(); ?>

	<div id="primary" class="content-area">

		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>
			
			<div class="parent">

				<ul class="test">
					<li>
						<a href="#">hello</a>
						<ul>
							<li><a href="#">sub</a></li>
							<li><a href="#">sub</a></li>
							<li><a href="#">sub</a></li>
							<li><a href="#">sub</a></li>
						</ul>

					</li>
					<li><a href="#">hello</a></li>
					<li><a href="#">hello</a></li>
					<li><a href="#">hello</a></li>
				</ul>

				</div>


			<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->

	</div><!-- #primary -->

<?php // get_sidebar(); ?>

<?php get_footer(); ?>
