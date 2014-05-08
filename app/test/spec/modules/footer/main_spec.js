describe( "FooterModule", function() {
	var FooterModule = null;
	var fragment = {
		append : function() {}
	};

	before( function( done ) {
		require( [ "js/modules/footer/main" ], function( module ) {
			FooterModule = module;

			done();
		} );
	} );

	it( "adds footer layout to the given fragment", function() {
		var fragment_mock = sinon.mock( fragment );
		fragment_mock.expects( "append" ).once();

		var footer = new FooterModule( {
			fragment : fragment
		} );

		fragment_mock.verify();
	} );

	after( function() {
		FooterModule = null;
	} );
} );
