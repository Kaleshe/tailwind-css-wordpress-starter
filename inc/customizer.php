<?php
/**
 * your_theme_name Theme Customizer
 *
 * @package Your Theme Name
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function your_theme_name_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	$wp_customize->add_panel( 'social_media', 
    array(
        'priority'       => 10,
        'title'            => __( 'Social Links', 'your_theme_name' ),
        'description'      => __( 'Theme Modifications like color scheme, theme texts and layout preferences can be done here', 'your_theme_name' ),
    ) 
	);

	//adding social links section in wordpress customizer  
	$wp_customize->add_setting('twitter_url', array(
			'default'        => '',
			'panel'					 => 'social_media'
	));

	$wp_customize->add_control('twitter_url', array(
			'label'   => 'Twitter URL',
			'section' => 'title_tagline',
			'type'    => 'text',
	));

	$wp_customize->add_setting('facebook_url', array(
		'default'        => '',
		'panel'					 => 'social_media'
	));

	$wp_customize->add_control('facebook_url', array(
			'label'   => 'Facebook URL',
			'section' => 'title_tagline',
			'type'    => 'text',
	));

	// Remove sections
	$wp_customize->remove_section( 'colors' ); 
	$wp_customize->remove_section( 'header_image' ); 
	$wp_customize->remove_section( 'background_image' ); 

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-title a',
				'render_callback' => 'your_theme_name_customize_partial_blogname',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector'        => '.site-description',
				'render_callback' => 'your_theme_name_customize_partial_blogdescription',
			)
		);
	}
}
add_action( 'customize_register', 'your_theme_name_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function your_theme_name_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function your_theme_name_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function your_theme_name_customize_preview_js() {
	wp_enqueue_script( 'your_theme_name-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), _S_VERSION, true );
}
add_action( 'customize_preview_init', 'your_theme_name_customize_preview_js' );
