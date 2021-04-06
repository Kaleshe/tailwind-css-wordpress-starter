<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package your_theme_name
 */

$custom_logo = get_theme_mod( 'custom_logo' );
$image = wp_get_attachment_image_src( $custom_logo , 'medium' );

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'subteach' ); ?></a>

	<header id="masthead" class="site-header mb-12 p-8">
		<div class="container mx-auto">
			<a class="logo" href=<?= get_home_url(); ?>><img src="<?= $image[0]; ?>" alt="your_theme_name Logo"></a>

			<nav id="site-navigation" class="main-navigation font-semibold">
				<?php

					wp_nav_menu(
						array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
						)
					);
				
				?>
			<button id="hamburger" class="menu-toggle hamburger hamburger--collapse bg-white shadow-2xl border border-opacity-20 border-solid border-black-light right-4 bottom-4 fixed z-50" type="button" aria-controls="primary-menu" aria-expanded="false">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>	
			</nav><!-- #site-navigation -->
		</div>
	</header><!-- #masthead -->

