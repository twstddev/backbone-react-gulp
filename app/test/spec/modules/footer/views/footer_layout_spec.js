describe( "FooterLayout", function() {
	var footer_layout = null;

	beforeEach( function( done ) {
		require( [ "js/include/footer/views/footer_layout" ],
			function( FooterLayout ) {
			footer_layout = new FooterLayout();
			footer_layout.render();

			done();
		} );
	} );

	it ( "contains paragraph element", function() {
		expect( footer_layout.$el.find( "p" ).length ).to.be.eq( 1 );
	} );

	afterEach( function() {
		footer_layout = null;
	} );
} );
