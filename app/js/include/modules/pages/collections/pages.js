define( [ "../models/page", "backbone" ],
	function( Page ) {
	/**
	 * @brief Represents a loaded list of pages.
	 */
	var Pages = Backbone.Collection.extend( {
		model : Page,

		findWhere : function( attributes ) {
			if ( _.has( attributes, "slug" ) && 
				( !attributes.slug ||
					attributes.slug == "" ||
					attributes.slug == "/" ) ) {
				attributes.slug = "home";
			}
			return Backbone.Collection.prototype.findWhere.call( this, attributes );
		}
	} );

	return Pages;
} );
