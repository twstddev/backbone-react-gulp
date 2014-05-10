define( [
	"js/include/classes/react_region",
	"js/include/modules/navigation/collections/menu_items",
	"js/include/modules/navigation/views/navigation",
	"config/fixtures",
	"marionette"
	],
	function( ReactRegion, MenuItems, NavigationView, fixtures ) {
	// contains private data of the object
	var PrivateScope = function() {
		this.fragment = null;
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
	 * @brief Renders menu layout in the provided region.
	 */
	PrivateScope.prototype.createLayout = function() {
		var menu_items = this.createMenuItems();

		this.createRegion();
		this.showView( new NavigationView( {
			data : {
				items : menu_items.toJSON()
			}
		} ) );
	};

	/**
	 * @brief Creates a new element for the navigation
	 * and saves it to a region.
	 */
	PrivateScope.prototype.createRegion = function() {
		this.region = new ReactRegion( {
			el : this.fragment
		} );
	}

	/**
	 * @brief Sets given view as the main one
	 * in the current region.
	 *
	 * param[in] ReactView view is a view that contains 
	 * header React component.
	 */
	PrivateScope.prototype.showView = function( view ) {
		this.region.show( view );
	}

	/**
	 * @brief Adds main navigation to the application.
	 */
	var NavigationModule = Backbone.Marionette.Controller.extend( {
		initialize : function( options ) {
			// create cheshire cat
			this.d = new PrivateScope();

			this.d.fragment = options.element;
			this.d.createLayout();
		}
	} );

	return NavigationModule;
} );
