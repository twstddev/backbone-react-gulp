define( [
	"js/include/classes/react_region",
	"js/include/modules/footer/views/footer",
	"marionette"
	],
	function( ReactRegion, FooterView ) {
	// contains private data of the object
	var PrivateScope = function() {
		this.fragment = null;
		this.region = null;
	};

	/**
	 * @brief Sets layout as the current one and makes it visible.
	 */
	PrivateScope.prototype.addLayout = function() {
		this.createRegion();
		this.showView( new FooterView );
	};

	/**
	 * @brief Creates a new element for the footer
	 * and saves it to a region.
	 */
	PrivateScope.prototype.createRegion = function() {
		var footer = document.createElement( "footer" );
		footer.className = "main";
		
		this.region = new ReactRegion( {
			el : footer
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
	 * @brief Represents main footer of the application.
	 */
	var FooterModule = Backbone.Marionette.Controller.extend( {
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

	return FooterModule;

} );
