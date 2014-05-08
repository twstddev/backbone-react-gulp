var App = App || {};

// first make sure that requirejs config is loaded as it contains
// all the main configuration for the application
//>>excludeStart( "configExclude", pragmas.configExclude );
require( [ "../config/require-config" ], function() {
//>>excludeEnd( "configExclude" );
	
	// implicitly load main application dependencies
	require( [ "jquery-migrate" ], function() {

		// finally load application itself
		require( [ "config/app", "js/src/application", "js/src/core" ],
			function( config, Application, Core ) {
			App = Application;

			App.addInitializer( function( options ) {
				options = _.extend( options, {
					region_manager : App
				} );

				Core.init( config );
			} );

			App.on( "initialize:after", function() {
				Backbone.history.start( {
					pushState : true
				} );
			} );

			App.start( config );
		} );
	} );
//>>excludeStart( "configExclude", pragmas.configExclude );
} );
//>>excludeEnd( "configExclude" );
