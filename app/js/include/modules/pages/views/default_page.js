define( [ "js/include/classes/react_view", "js/templates/default_page" ],
	function( ReactView, default_template ) {
	/**
	 * @brief Implements default view for a page.
	 */
	var DefaultPageView = ReactView.extend( {
		component : default_template
	} );

	return DefaultPageView;
} );
