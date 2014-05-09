App = null;

xdescribe( "NavigationModule", function() {
	var NavigationModule = null;
	var region = {
		show : function() {}
	};

	beforeEach( function( done ) {
		require( [ "js/modules/navigation/main" ],
			function( module ) {
			App = new Backbone.Marionette.Application();
			NavigationModule = module;

			done();
		} );
	} );

	it( "adds navigation to the given region", function() {
		spyOn( region, "show" );

		var navigation = new NavigationModule( {
			region : region
		} );

		expect( region.show ).toHaveBeenCalled();
	} );

	afterEach( function() {
		NavigationModule = null;
	} );
} );
