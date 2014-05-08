define( [ 
	"js/modules/header/main",
	"js/modules/pages/main",
	"js/modules/footer/main"
	],
	function( HeaderModule, PagesModule, FooterModule ) {
	/**
	 * @brief A singleton object that creates
	 * main elements of the app.
	 */
	var Core = ( function() {
		// private scope

		/**
		 * @brief Creates the main layout of the application.
		 */
		var createMainLayout = function( region_manager ) {
			// Marionette forces to use non semantic layout, so we should
			// use dirty hacks to get around it
			var main_fragment = $( document.createDocumentFragment() );

			new HeaderModule( {
				fragment : main_fragment
			} );

			main_fragment.append( $( "<section>", { class : "main" } ) );

			new FooterModule( {
				fragment : main_fragment
			} );

			$( "body" ).prepend( main_fragment );

			region_manager.addRegions( {
				pages : "section.main"
			} );

			new PagesModule( {
				region : region_manager.pages
			} );
		};

		return {
			/**
			 * @brief Fake constructor.
			 *
			 * @param Object options is a list of configuration options
			 */
			init : function( options ) {
				createMainLayout( options.region_manager );
			}
		}
	} )();

	return Core;
} );
