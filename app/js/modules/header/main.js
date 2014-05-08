define( [
	"js/include/header/views/header_layout",
	"js/modules/navigation/main",
	"marionette"
	],
	function( HeaderLayout, NavigationModule ) {
	// contains private data of the object
	var PrivateScope = function() {
		this.fragment = null;
		this.navigation_module = null;
	};

	/**
	 * @brief Sets layout as the current one and makes it visible.
	 */
	PrivateScope.prototype.addLayout = function( layout ) {
		layout.render();
		this.fragment.append( layout.$el );
		this.addNavigation( layout );
	};

	/**
	 * @brief Creates and appends navigation menu.
	 */
	PrivateScope.prototype.addNavigation = function( header_layout ) {
		this.navigation_module = new NavigationModule( {
			region : header_layout.navigation
		} );
	}

	/**
	 * @brief Represents main header of the application.
	 * Manages layout and initializing of the navigation module.
	 */
	var HeaderModule = Backbone.Marionette.Controller.extend( {
		/**
		 * @brief Constructor.
		 */
		initialize : function( options ) {
			// create cheshire cat
			this.d = new PrivateScope();

			this.d.fragment = options.fragment;
			this.d.addLayout( new HeaderLayout );
		}
	} );

	return HeaderModule;
} );
