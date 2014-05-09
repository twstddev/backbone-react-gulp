xdescribe( "FooterModule", function() {
	var FooterModule = null;
	var fragment = {
		append : function() {}
	};

	beforeEach( function( done ) {
		require( [ "js/modules/footer/main" ], function( module ) {
			FooterModule = module;

			done();
		} );
	} );

	it( "adds footer layout to the given fragment", function() {
		spyOn( fragment, "append" );

		var footer = new FooterModule( {
			fragment : fragment
		} );

		expect( fragment.append ).toHaveBeenCalled();
	} );

	afterEach( function() {
		FooterModule = null;
	} );
} );
