define( [ "js/include/classes/react_view", "js/templates/footer" ],
	function( ReactView, footer_compnent ) {
	/**
	 * @brief Represents HTML layout of the footer.
	 */
	var FooterView = ReactView.extend( {
		component : footer_compnent
	} );

	return FooterView;
} );
