define( [ 
	"js/include/modules/pages/views/default_page",
	"js/include/classes/react_region",
	"js/include/modules/pages/collections/pages",
	"config/fixtures",
	"marionette"
	],
	function( DefaultPageView, ReactRegion, Pages, fixtures ) {
	// private scope of the module
	var PrivateScope = function() {
		this.fragment = null;
		this.router = null;
		this.region = null;
		this.pages = new Pages( fixtures.pages );
	};

	/**
	 * @brief Changes current page to one that matches
	 * provided slug.
	 *
	 * @param String slug is the requested slug
	 */
	PrivateScope.prototype.setCurrentPage = function( slug ) {
		var new_current_page = this.pages.findWhere( { slug : slug } );

		if ( new_current_page ) {
			this.region.show( new DefaultPageView( {
				data : new_current_page.toJSON()
			} ) );
		}
	};

	/**
	 * @brief Creates main region that contains pages.
	 */
	PrivateScope.prototype.addLayout = function() {
		this.createRegion();
	};

	/**
	 * @brief Creates a new element for pages
	 * and saves it to a region.
	 */
	PrivateScope.prototype.createRegion = function() {
		var section = document.createElement( "section" );
		section.className = "main";

		this.region = new ReactRegion( {
			el : section
		} );

		this.fragment.append( this.region.m_el );
	}

	/**
	 * @brief Creates page specific router.
	 */
	PrivateScope.prototype.createRouter = function() {
		this.router = new Backbone.Marionette.AppRouter( {
			controller : this.parent,

			appRoutes : {
				":slug" : "navigateToGivenSlug",
				"" : "navigateToGivenSlug"
			}
		} );
	};

	/**
	 * @brief Creates, displays and swaps application pages.
	 */
	var PageModule = Backbone.Marionette.Controller.extend( {
		initialize : function( options ) {
			// create cheshire cat
			this.d = new PrivateScope();

			this.d.parent = this;
			this.d.fragment = options.fragment;
			this.d.addLayout();
			this.d.createRouter();

			this.listenTo( App.vent, "pages:change", this.navigateToGivenSlug );
		},

		/**
		 * @brief Fires history navigate with the given slug.
		 */
		navigateToGivenSlug : function( slug ) {
			Backbone.history.navigate( slug );
			this.d.setCurrentPage( slug );
		}
	} );

	return PageModule;
} );
