define( [ "./menu_item", "marionette" ],
	function( SingleView ) {
	/**
	 * @brief Represents a view that contains a list of menu items.
	 */
	var MenuItemsView = Backbone.Marionette.CollectionView.extend( {
		tagName : "ul",
		itemView : SingleView,

		initialize : function() {
			this.listenTo( this, "itemview:clicked", this.signalNavigationSlug );
		},

		signalNavigationSlug : function( child, slug ) {
			App.vent.trigger( "pages:change", slug );
		}
	} );

	return MenuItemsView;
} );
