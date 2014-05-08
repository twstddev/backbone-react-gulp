App = null;

describe( "NavigationModule", function() {
	var NavigationModule = null;
	var region = {
		show : function() {}
	};

	before( function( done ) {
		require( [ "js/modules/navigation/main" ],
			function( module ) {
			App = new Backbone.Marionette.Application();
			NavigationModule = module;

			done();
		} );
	} );

	it( "adds navigation to the given region", function() {
		var region_mock = sinon.mock( region );
		region_mock.expects( "show" ).once();

		var navigation = new NavigationModule( {
			region : region
		} );

		region_mock.verify();
	} );

	after( function() {
		NavigationModule = null;
	} );
} );
