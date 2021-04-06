            
<?php if ( post_password_required() ) { return; } ?>
<div id="comments" class="comments-area text-sm">
	<?php if ( have_comments() ) { ?>
		<h4 class="comments-title mb-4 font-bold"><?php comments_number(__('No Comments', 'your_theme_name'), __('1 Comment', 'your_theme_name'), '% ' . __('Comments', 'your_theme_name') ); ?></h4>
		<span class="title-line"></span>
		<ol class="comment-list">
			<?php wp_list_comments( array( 'avatar_size' => 70, 'style' => 'ul', 'callback' => 'your_theme_name_slug_comments', 'type' => 'all' ) ); ?>
		</ol>
		<?php the_comments_pagination( array( 'prev_text' => '<i class="fa fa-angle-left" aria-hidden="true"></i> <span class="screen-reader-text">' . __( 'Previous', 'your_theme_name') . '</span>', 'next_text' => '<span class="screen-reader-text">' . __( 'Next', 'your_theme_name') . '</span> <i class="fa fa-angle-right" aria-hidden="true"></i>', ) ); ?>
	<?php } ?>
	<?php if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) { ?>
		<p class="no-comments"><?php _e( 'Comments are closed.', 'your_theme_name'); ?></p>
	<?php } ?>
	<?php comment_form(); ?>
</div>

    