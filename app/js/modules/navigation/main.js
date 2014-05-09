define( [
	"js/include/navigation/collections/menu_items",
	"js/include/navigation/views/navigation",
	"config/fixtures",
	"marionette"
	],
	function( MenuItems, NavigationView, fixtures ) {
	// contains private data of the object
	var PrivateScope = function() {
		this.fragment = null;
		this.navigation_layout = null;
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
	 * @brief Renders menu layout in the provided region.
	 */
	PrivateScope.prototype.createLayout = function() {
		var menu_items = this.createMenuItems();

		this.navigation_layout = new NavigationView( App.vent );
		this.navigation_layout.render( this.fragment, {
			items : menu_items.toJSON()
		} );
	};

	/**
	 * @brief Adds main navigation to the application.
	 */
	var NavigationModule = Backbone.Marionette.Controller.extend( {
		initialize : function( options ) {
			// create cheshire cat
			this.d = new PrivateScope();

			this.d.fragment = options.element;
		},

		render : function() {
			return this.d.createLayout();
		}
	} );

	return NavigationModule;
} );
