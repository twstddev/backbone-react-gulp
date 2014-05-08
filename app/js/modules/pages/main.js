define( [ 
	"js/include/pages/views/default_page",
	"js/include/pages/collections/pages",
	"config/fixtures",
	"marionette"
	],
	function( DefaultPageView, Pages, fixtures ) {
	// private scope of the module
	var PrivateScope = function() {
		this.region = null;
		this.pages = new Pages( fixtures.pages );
		this.router = null;
	};

	/**
	 * @brief Initializes pager with the first page that should
	 * be visible on landing.
	 */
	PrivateScope.prototype.initializePage = function() {
		//this.setCurrentPage( "/" );
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
				model : new_current_page
			} ) );
		}
	};

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

			this.d.region = options.region;
			this.d.parent = this;
			this.d.initializePage();
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
