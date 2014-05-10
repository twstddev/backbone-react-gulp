describe( "FooterView", function() {
	var footer_view = null;
	var element = null;

	beforeEach( function( done ) {
		require( [ "js/include/modules/footer/views/footer" ],
			function( FooterView ) {
			footer_view = new FooterView();

			element = document.createElement( "div" );
			footer_view.render( element );

			done();
		} );
	} );

	it( "contains paragraph element", function() {
		expect( $( element ).find( "p" ).length ).toBe( 1 );
	} );

	afterEach( function() {
		footer_view = null;
	} );
} );
