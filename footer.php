<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package ric_bacon
 */
?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer full" role="contentinfo">
		<div class="site-info grid">
		<nav>
			<ul class="nav group">
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Clients</a></li>
				<li><a href="#">Contact Us</a></li>
			</ul>
		</nav>

		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>



 <!-- Modified FastActive https://github.com/jonathanstark/FastActive -->
<script type="text/javascript">

	(function (d, w, activeClass) {

	     if ($("html").hasClass('touch')) {
	        var activeElement = null,
	            clearActive = function() {
	                if (activeElement) {
	                    activeElement.classList.remove(activeClass);
	                    activeElement = null;
	                }
	            },
	            setActive = function(e) {
	                clearActive();
	                if (e.target.tagName == 'A') {
	                    activeElement = e.target;
	                    activeElement.classList.add(activeClass);
	                }
	                if (e.target.tagName == 'H3') {
	                    activeElement = e.target;
	                    activeElement.classList.add(activeClass);
	                }	                
	            };
	        d.documentElement.classList.add('touch');
	        d.body.addEventListener('touchstart', setActive, false);
	        d.body.addEventListener('touchmove', clearActive, false);
	    }
	})(document, window, 'active');

	
</script>

</body>
</html>
