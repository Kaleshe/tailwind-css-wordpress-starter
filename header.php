<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Your Theme Name
 */

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
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'your_theme_name' ); ?></a>

	<header id="masthead" class="site-header px-8">
		<div class="container mx-auto flex justify-between  items-center my-8">
			<a class="logo" href=<?= get_home_url(); ?>><?= get_bloginfo(); ?></a>

			<nav id="site-navigation" class="main-navigation">
				<?php

					wp_nav_menu(
						array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
						)
					);
				
				?>
			</nav><!-- #site-navigation -->
			
			<button id="hamburger" class="menu-toggle hamburger hamburger--collapse" type="button" aria-controls="primary-menu" aria-expanded="false">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>	
		</div>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
