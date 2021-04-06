<?php
/**
 * your_theme_name functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package your_theme_name
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'your_theme_name_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function your_theme_name_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on your_theme_name, use a find and replace
		 * to change 'your_theme_name' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'your_theme_name', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'your_theme_name' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'your_theme_name_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'your_theme_name_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function your_theme_name_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'your_theme_name_content_width', 640 );
}
add_action( 'after_setup_theme', 'your_theme_name_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function your_theme_name_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'your_theme_name' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'your_theme_name' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'your_theme_name_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function your_theme_name_scripts() {
	wp_enqueue_style( 'your_theme_name-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_enqueue_style( 'your_theme_name-frontend', get_template_directory_uri() . '/public/frontend.css', array(), _S_VERSION );
	wp_enqueue_style( 'aos-style', 'https://unpkg.com/aos@2.3.1/dist/aos.css' );

	wp_enqueue_script( 'your_theme_name-script', get_template_directory_uri() . '/public/frontend-bundle.js', array(), _S_VERSION );
	wp_enqueue_script( 'aos-script', 'https://unpkg.com/aos@2.3.1/dist/aos.js' );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'your_theme_name_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Adjust excerpt length
 */
function your_theme_name_custom_excerpt_length( $length ) {
	return 30;
}
add_filter( 'excerpt_length', 'your_theme_name_custom_excerpt_length', 999 );

/**
 * Remove dots after excerpt
 */
function new_excerpt_more( $more ) {
	return ' ...';
}
add_filter('excerpt_more', 'new_excerpt_more');

/**
 * Modify comments code  
 */            
function your_theme_name_slug_comments($comment, $args, $depth) {
	$GLOBALS['comment'] = $comment; ?>
	<li <?php comment_class(); ?> id="comment-<?php comment_ID() ?>">
	    
		<div class="comment-wrap flex mb-8">
			<div class="comment-img mr-4">
				<?php echo get_avatar($comment,$args['avatar_size'],null,null,array('class' => array('img-responsive', 'img-circle', 'rounded-full') )); ?>
			</div>
			<div class="comment-body">
				<h4 class="comment-author font-semibold"><?php echo get_comment_author_link(); ?></h4>
				<span class="comment-date text-xs opacity-90"><?php printf(__('%1$s at %2$s', 'your_theme_name'), get_comment_date(),  get_comment_time()) ?></span>
				<?php if ($comment->comment_approved == '0') { ?><em><i class="fa fa-spinner fa-spin" aria-hidden="true"></i> <?php _e('Comment awaiting approval', 'your_theme_name'); ?></em><br /><?php } ?>
				<?php comment_text(); ?>
				<span class="comment-reply font-bold text-xs"> <?php comment_reply_link(array_merge( $args, array('reply_text' => __('Reply', 'your_theme_name'), 'depth' => $depth, 'max_depth' => $args['max_depth'])), $comment->comment_ID); ?></span>
			</div>
		</div>
<?php }

// Enqueue comment-reply

add_action('wp_enqueue_scripts', 'your_theme_name_slug_public_scripts');

function your_theme_name_slug_public_scripts() {
    if (!is_admin()) {
        if (is_singular() && get_option('thread_comments')) { wp_enqueue_script('comment-reply'); }
    }
}

// Enqueue fontawesome

add_action('wp_enqueue_scripts', 'your_theme_name_slug_public_styles');

function your_theme_name_slug_public_styles() {
        wp_enqueue_style( 'font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', array(), '4.7.0', 'all');
}