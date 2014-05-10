define( [
	"js/include/classes/react_region",
	"js/include/modules/header/views/header",
	"js/modules/navigation/main",
	"marionette"
	],
	function( ReactRegion, HeaderView, NavigationModule ) {
	// contains private data of the object
	var PrivateScope = function() {
		this.fragment = null;
		this.region = null;
		this.navigation = null;
	};

	/**
	 * @brief Sets layout as the current one and makes it visible.
	 */
	PrivateScope.prototype.addLayout = function() {
		this.createRegion();
		this.showView( new HeaderView );
		this.addNavigation();
	};

	/**
	 * @brief Creates a new element for the header
	 * and saves it to a region.
	 */
	PrivateScope.prototype.createRegion = function() {
		var header = document.createElement( "header" );
		header.className = "main";
		
		this.region = new ReactRegion( {
			el : header
		} );

		this.fragment.append( this.region.m_el );
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
	 * @brief Creates and appends navigation menu.
	 */
	PrivateScope.prototype.addNavigation = function() {
		var navigation_element = document.createElement( "nav" );

		this.navigation = new NavigationModule( {
			element : navigation_element
		} );

		this.region.m_el.appendChild( navigation_element );
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
			this.d.addLayout();
		}
	} );

	return HeaderModule;
} );
