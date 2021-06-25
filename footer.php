<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Your Theme Name
 */

?>
	</div>

	<footer id="colophon" class="site-footer px-8">
		<div class="container mx-auto flex justify-between">

			<div class="copyright">
					<?php
					printf( esc_html__( '&copy; ' .	 Date('Y') . ' %1$s', 'your_theme_name' ), 'Your Theme Name' );
					?>
			</div>

		</div>
	</footer>
</div>

<?php wp_footer(); ?>

</body>
</html>
