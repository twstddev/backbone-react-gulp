describe( "ReactRegion", function() {
	var region_dummy = null;
	var ReactRegion = null;
	var component = null;

	beforeEach( function( done ) {
		require( [ "js/include/classes/react_region" ], function( ReactRegionClass ) {
			region_dummy = new ReactRegionClass( {
				el : document.createElement( "div" )
			} );

			ReactRegion = ReactRegionClass;

			component = jasmine.createSpyObj( "component", [
				"render",
				"close"
			] );

			done();
		} );
	} );

	it( "throws an error if created without element", function() {
		expect( ReactRegion ).toThrow();
	} );

	it( "calls render on component when shown", function() {
		region_dummy.show( component );

		expect( component.render ).toHaveBeenCalled();
	} );

	it( "sets given component as the current one", function() {
		region_dummy.show( component );

		expect( region_dummy.m_current_component ).toEqual( component );
	} );

	it( "passes element to render function of a component", function() {
		region_dummy.show( component );

		expect( component.render ).toHaveBeenCalledWith( region_dummy.m_el );
	} );

	it( "calls remove on component when closed", function() {
		region_dummy.show( component );
		region_dummy.close();

		expect( component.close ).toHaveBeenCalled();
	} );

	it( "calls closes previous component on adding a new one", function() {
		var component2 = jasmine.createSpyObj( "component", [
			"render",
			"close"
		] );

		region_dummy.show( component );
		region_dummy.show( component2 );

		expect( component.close ).toHaveBeenCalled();
		expect( component2.render ).toHaveBeenCalled();
		expect( region_dummy.m_current_component ).toEqual( component2 );
	} );



	afterEach( function() {
		region_dummy = null;
		ReactRegion = null;
		component = null;
	} );
} );
