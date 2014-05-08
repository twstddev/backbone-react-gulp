define( [
	"js/include/navigation/collections/menu_items",
	"js/include/navigation/views/menu_items",
	"config/fixtures",
	"marionette"
	],
	function( MenuItems, MenuItemsView, fixtures ) {
	// contains private data of the object
	var PrivateScope = function() {
		this.region = null;
	};

	/**
	 * @brief Prepares a collection of menu items.
	 *
	 * @return Backbone.Collection final collection of menu items
	 */
	PrivateScope.prototype.createMenuItems = function() {
		return new MenuItems( fixtures.menu_items );
	};

	/**
	 * @brief Prepares a view that represents menu items collection.
	 *
	 * @param Backbone.Collection collection is the list of items to
	 * represent
	 */
	PrivateScope.prototype.createMenuItemsView = function( collection ) {
		return new MenuItemsView( {
			collection : collection
		} );
	};

	/**
	 * @brief Renders menu layout in the provided region.
	 */
	PrivateScope.prototype.createLayout = function() {
		var menu_items = this.createMenuItems();
		var menu_items_view = this.createMenuItemsView( menu_items );

		this.region.show( menu_items_view );
	};

	/**
	 * @brief Adds main navigation to the application.
	 */
	var NavigationModule = Backbone.Marionette.Controller.extend( {
		initialize : function( options ) {
			// create cheshire cat
			this.d = new PrivateScope();

			this.d.region = options.region;
			this.d.createLayout();
		}
	} );

	return NavigationModule;
} );
