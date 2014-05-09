define( [ "react", "js/templates/header", "marionette" ], function( React, header_template ) {
	/**
	 * @brief Represents HTML layout of the header.
	 */
	var HeaderLayout = function() {
	};

	HeaderLayout.prototype.render = function( element, data ) {
		React.renderComponent(
			header_template( data ),
			element
		);

		return element;
	};

	return HeaderLayout;
} );
