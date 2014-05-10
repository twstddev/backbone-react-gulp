define( [ "js/include/classes/react_view", "js/templates/header" ],
	function( ReactView, header_component ) {
	/**
	 * @brief Represents HTML layout of the header.
	 */
	var HeaderView = ReactView.extend( {
		component : header_component
	} );

	return HeaderView;
} );
