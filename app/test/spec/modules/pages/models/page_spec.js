xdescribe( "Page", function() {
	var page = null;
	var raw_page = null;

	beforeEach( function( done ) {
		require( [ 
			"js/include/pages/models/page" ,
			"config/fixtures"
			],
			function( Page, Fixtures ) {
			raw_page = Fixtures.pages[ 0 ];
			page = new Page( raw_page );

			done();
		} );
	} );

	it( "returns main attributes", function() {
		expect( page.get( "title" ) ).toBe( raw_page.title );
		expect( page.get( "slug" ) ).toBe( raw_page.slug );
		expect( page.get( "content" ) ).toBe( raw_page.content );
	} );

	afterEach( function() {
		page = null;
		raw_page = null;
	} );
} );
