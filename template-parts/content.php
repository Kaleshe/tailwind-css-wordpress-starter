<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package your_theme_name
 */

?>

<?php
if ( is_singular() ): ?>
	<article id="post-<?php the_ID(); ?>" <?php post_class( 'max-w-prose mx-auto mb-16' ); ?>>
		<header class="entry-header">
			<?php the_title( '<h1 class="entry-title mb-2 md:text-center text-2xl md:text-4xl">', '</h1>' ); ?>
		</header><!-- .entry-header -->

		<?php if ( 'post' === get_post_type() ) :
			?>
			<div class="entry-meta md-12 md:md-16 text-sm md:text-center">
				<?php
				your_theme_name_posted_on();
				?>
			</div><!-- .entry-meta -->
		<?php endif; ?>

		<div class="entry-content leading-loose text-sm">
			<?php
			the_content(
				sprintf(
					wp_kses(
						/* translators: %s: Name of current post. Only visible to screen readers */
						__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'your_theme_name' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					wp_kses_post( get_the_title() )
				)
			);

			echo '<div class="pagination">';
			echo paginate_links( array(
				'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
				'format' => '?paged=%#%',
				'current' => max( 1, get_query_var('paged') ),
				'total' => $the_query->max_num_pages
			) );
			echo '</div>';
			?>
		</div><!-- .entry-content -->
	</article><!-- #post-<?php the_ID(); ?> -->

<?php else: ?>
	<article id="post-<?php the_ID(); ?>" class="flex flex-col-reverse justify-between sm:flex-row items-center mb-12 max-w-screen-md mx-auto" data-aos="fade-up" data-aos-delay="400" data-aos-duration="500">
		<div class="text-sm max-w-lg">
			<?php the_title( '<h2 class="entry-title font-extrabold text-xl mb-1 leading-tight"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?>

			<?php the_excerpt(); ?>
		</div>

		<?php
		if ( your_theme_name_post_thumbnail() ): ?>
			
			<?php your_theme_name_post_thumbnail(); ?>
			
		<?php else: ?>
			
			<img class="shadow-2xl mb-8 sm:mb-0 sm:ml-12 w-full sm:w-52 h-44 sm:h-52" src="https://picsum.photos/300" alt="Placeholder image">
			
		<?php endif;  ?>
	</article>	
<?php endif; ?>