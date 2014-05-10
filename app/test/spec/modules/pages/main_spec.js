describe( "PageModule", function() {
	var fragment = {
		append : function() {}
	};

	beforeEach( function( done ) {
		require( [ "js/modules/pages/main" ],
			function( module ) {
			PageModule = module;

			done();
		} );
	} );

	it( "adds page to the given region", function() {
		spyOn( fragment, "append" );

		new PageModule( {
			fragment : fragment
		} );

		Backbone.history.start();
		Backbone.history.navigate( "/" );

		expect( fragment.append ).toBeTruthy();
	} );

	afterEach( function() {
		PageModule = null;
		fragment = null;
	} );
} );
