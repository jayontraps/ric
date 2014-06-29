<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package ric_bacon
 */
?>


<div class="grid">

	<div class="gallery col-2-3">

		<div class="frame">
			<?php if ( has_post_thumbnail() ) { the_post_thumbnail();} ?>
		</div>

	</div>



	<div class="col-1-3 gallery_intro">

		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			
			<header class="entry-header">
				<h1 class="entry-title"><?php the_title(); ?></h1>
			</header><!-- .entry-header -->

			<div class="entry-content">				
				
				<?php the_content(); ?>
			
			</div><!-- .entry-content -->

		</article><!-- #post-## -->


	</div><!-- .gallery_intro  -->


</div> <!-- .grid -->

