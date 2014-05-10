describe( "MenuItem", function() {
	var MenuItem = null;

	var fixture = {
		title : "Home",
		slug : "/"
	};

	beforeEach( function( done ) {
		require( [ "js/include/modules/navigation/models/menu_item" ],
			function( model ) {
			MenuItem = model;
			done();
		} );
	} );

	it ( "responds to main attributes", function() {
		var menu_item = new MenuItem( fixture );

		expect( menu_item.get( "title" ) ).toBe( fixture.title );
		expect( menu_item.get( "slug" ) ).toBe( fixture.slug );
	} );

	afterEach( function() {
		MenuItem = null;
	} );
} );
