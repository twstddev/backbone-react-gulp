describe( "MenuItem", function() {
	var MenuItem = null;

	var fixture = {
		title : "Home",
		slug : "/"
	};

	before( function( done ) {
		require( [ "js/include/navigation/models/menu_item" ],
			function( model ) {
			MenuItem = model;
			done();
		} );
	} );

	it ( "responds to main attributes", function() {
		var menu_item = new MenuItem( fixture );

		expect( menu_item.get( "title" ) ).to.eq( fixture.title );
		expect( menu_item.get( "slug" ) ).to.eq( fixture.slug );
	} );

	after( function() {
		MenuItem = null;
	} );
} );
