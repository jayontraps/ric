<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package ric_bacon
 */
?>




			<?php if ( has_post_thumbnail() ) { the_post_thumbnail();} ?>




			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				
<!-- 				<header class="entry-header">
					<h2 class="entry-title"><?php the_title(); ?></h2>
				</header>
 -->
				<div class="entry-content">				
					
					<?php the_content(); ?>
				
				</div><!-- .entry-content -->

			</article><!-- #post-## -->




