App = null;

describe( "NavigationModule", function() {
	var NavigationModule = null;
	var element = null;

	beforeEach( function( done ) {
		require( [ "js/modules/navigation/main" ],
			function( module ) {
			App = new Backbone.Marionette.Application();
			NavigationModule = module;
			element = document.createElement( "div" );

			done();
		} );
	} );

	afterEach( function() {
		NavigationModule = null;
		element = null;
	} );
} );
