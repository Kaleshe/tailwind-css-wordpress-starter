<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package your_theme_name
 */

?>

	<?php if ( !is_page('contact') ): ?>
		<div class="call-to-action px-8">
			<div class="max-w-sm mx-auto py-12 text-center" data-aos="fade-in" data-aos-easing="ease-in-sine">
				<p><?php the_field('call_to_action', 40); ?></p>
				<a class="text-lg text-white px-6 font-bold inline-block mt-1 underline" href="<?php the_permalink(40); ?>">Contact Us</a>
			</div>
		</div>
	<?php endif; ?>

	<footer id="colophon" class="site-footer text-sm p-8">
		<div class="container mx-auto flex justify-between">

			<div class="copyright">
					<?php
					printf( esc_html__( '&copy; ' .	 Date('Y') . ' %1$s', 'your_theme_name' ), 'your_theme_name' );
					?>
			</div><!-- .site-info -->

			<div class="socials text-sm">
				<img src="<?= get_template_directory_uri() . '/src/assets/facebook_logo.svg'; ?>" class="inline-block" alt="Facebook Logo">
				<img src="<?= get_template_directory_uri() . '/src/assets/twitter_logo.svg'; ?>"class="inline-block"  alt="Twitter Logo">
			</div>

		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

<script>
		AOS.init({ 
			duration: 700,
		once: true,
	}); 
</script>

</body>
</html>
