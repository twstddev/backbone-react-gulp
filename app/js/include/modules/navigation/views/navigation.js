define( [ "js/include/classes/react_view", "js/templates/menu" ], function( ReactView, menu_component ) {
	/**
	 * @brief Represents HTML layout of the navigation.
	 */
	var NavigationView = ReactView.extend( {
		component : menu_component,

		callbacks : {
			clicked : "signalNavigationSlug"
		},

		signalNavigationSlug : function( slug ) {
			App.vent.trigger( "pages:change", slug );
		}
	} );

	return NavigationView;
} );
