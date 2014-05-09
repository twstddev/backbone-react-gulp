define( [
	"js/include/header/views/header_layout",
	"js/modules/navigation/main",
	"marionette"
	],
	function( HeaderLayout, NavigationModule ) {
	// contains private data of the object
	var PrivateScope = function() {
		this.fragment = null;
		this.header_element = null;
	};

	/**
	 * @brief Sets layout as the current one and makes it visible.
	 */
	PrivateScope.prototype.addLayout = function( layout ) {
		this.header_element = document.createElement( "header" );
		this.fragment.append( layout.render( this.header_element ) );

		this.addNavigation();
	};

	/**
	 * @brief Creates and appends navigation menu.
	 */
	PrivateScope.prototype.addNavigation = function() {
		var navigation_element = document.createElement( "nav" );
		var navigation = new NavigationModule( {
			element : navigation_element
		} );

		navigation.render( navigation_element );

		this.header_element.appendChild( navigation_element );
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
