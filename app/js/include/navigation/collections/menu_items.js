define( [ "../models/menu_item", "backbone" ],
	function( MenuItem ) {
	/**
	 * @brief Represents a list of menu items.
	 */
	var MenuItems = Backbone.Collection.extend( {
		model : MenuItem
	} );

	return MenuItems;
} );
