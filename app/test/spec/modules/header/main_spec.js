App = null;

describe( "HeaderModule", function() {
	var HeaderModule = null;
	var fragment = {
		append : function() {}
	};

	beforeEach( function( done ) {
		require( [ "js/modules/header/main" ], function( module ) {
			App = new Backbone.Marionette.Application();
			HeaderModule = module;

			done();
		} );
	} );

	it( "adds header layout to the given fragment", function() {
		spyOn( fragment, "append" );

		var header = new HeaderModule( {
			fragment : fragment
		} );

		expect( fragment.append ).toHaveBeenCalled();
	} );

	afterEach( function() {
		HeaderModule = null;
	} );
} );
