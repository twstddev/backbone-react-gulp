describe( "HeaderView", function() {
	var $element = null;

	beforeEach( function( done ) {
		require( [ "js/include/modules/header/views/header" ],
			function( HeaderView ) {
			var header = new HeaderView();
			var element = document.createElement( "div" );

			header.render( element );
			$element = $( element );

			done();
		} );
	} );

	it( "contains main title", function() {
		expect( $element.find( "h1" ).length ).toBe( 1 );
	} );

	afterEach( function() {
	} );
} );
