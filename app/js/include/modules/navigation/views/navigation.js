define( [ "react", "js/templates/menu" ], function( React, menu_template ) {
	/**
	 * @brief Represents HTML layout of the navigation.
	 */
	var NavigationLayout = function( event_dispatcher ) {
		this.event_dispatcher = event_dispatcher;
	};

	NavigationLayout.prototype.render = function( element, data ) {
		var extended_data = _.extend( {
			vent : this.event_dispatcher
		}, data );

		React.renderComponent(
			menu_template( extended_data ),
			element
		);

		return element;
	};

	return NavigationLayout;
} );
