describe( "MenuItems", function() {
	var menu_items = null;

	var fixtures = [
		{
			id : 1,
			title : "Home",
			slug : "/"
		},
		{
			id : 2,
			title : "About",
			slug : "about"
		}
	];

	beforeEach( function( done ) {
		require( [ "js/include/navigation/collections/menu_items" ],
			function( MenuItems ) {
			menu_items = new MenuItems( fixtures );

			done();
		} );
	} );

	it( "initializes with items passed as parameter", function() {
		expect( menu_items.length ).to.eq( 2 );
	} );

	it( "adds menu items", function() {
		menu_items.add( [ {
			title : "Contact",
			slug : "contact"
		} ] );

		expect( menu_items.length ).to.eq( 3 );
		expect( menu_items.where( { slug : "contact" } ).length ).to.eq( 1 );
	} );

	it( "removes menu items", function() {
		menu_items.remove( fixtures[ 0 ] );

		expect( menu_items.length ).to.eq( 1 );
	} );

	it( "returns menu items", function() {
		var menu_item = menu_items.get( 1 );

		expect( menu_item.toJSON() ).to.eql( fixtures[ 0 ] );
	} );

	afterEach( function() {
		menu_items = null;
	} );
} );
