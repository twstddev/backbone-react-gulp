define( [ "js/templates/header", "marionette" ], function( header_template ) {
	/**
	 * @brief Represents HTML layout of the header.
	 */
	var HeaderLayout = Backbone.Marionette.Layout.extend( {
		tagName : "header",
		className : "main",
		template : header_template,

		regions : {
			navigation : "nav"
		}
	} );

	return HeaderLayout;
} );
