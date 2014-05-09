define( [ "js/templates/menu_item", "marionette" ],
	function( layout ) {

	/**
	 * @brief Represents a view for a single menu item.
	 */
	var MenuItemView = Backbone.Marionette.ItemView.extend( {
		tagName : "li",
		template : layout,

		events : {
			"click a" : "signalClick"
		},

		signalClick : function( event ) {
			event.preventDefault();
			this.trigger( "clicked", this.model.get( "slug" ) );
		}
	} );

	return MenuItemView;
} );
