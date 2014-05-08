define( [ "js/src/application" ], function( Application ) {
	describe( "Application", function() {
		it( "should be an instance of Marionette Application", function() {
			expect( Application ).to.be.an.instanceof( Backbone.Marionette.Application );
		} );
	} );
} );
