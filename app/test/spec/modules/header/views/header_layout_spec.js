describe( "HeaderLayout", function() {
	var header_layout = null;

	beforeEach( function( done ) {
		require( [ "js/include/header/views/header_layout" ],
			function( HeaderLayout ) {
			header_layout = new HeaderLayout();
			header_layout.render();

			done();
		} );
	} );

	it( "contains main title", function() {
		expect( header_layout.$el.find( "h1" ).length ).to.be.eq( 1 );
	} );

	it( "contains navigation element", function() {
		expect( header_layout.$el.find( "nav" ).length ).to.be.eq( 1 );
	} );

	afterEach( function() {
		header_layout = null;
	} );
} );
