xdescribe( "PageModule", function() {
	var PageModule = null;

	var region = null;

	beforeEach( function( done ) {
		require( [ "js/modules/pages/main" ],
			function( module ) {
			PageModule = module;
			region = new Backbone.Marionette.Region( {
				el : "div"
			} );

			region.show = sinon.spy();

			done();
		} );
	} );

	it( "adds page to the given region", function() {
		new PageModule( {
			region : region
		} );

		Backbone.history.start();
		Backbone.history.navigate( "/" );

		expect( region.show.calledOnce ).toBeTruthy();
	} );

	afterEach( function() {
		PageModule = null;
		region = null;
	} );
} );
