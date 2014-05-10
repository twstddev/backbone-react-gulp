
describe( "ReactView", function() {
	var view_dummy = null;
	var component = null;
	var element = null;

	beforeEach( function( done ) {
		require( [ "js/include/classes/react_view", "react" ],
			function( ReactView, React ) {
			var component = React.createClass( {
				render : function() {
					return (
						React.DOM.div( {
							className : "test",
						} )
					);
				}
			} );

			var CustomView = ReactView.extend( {
				callbacks : {
					clicked : clicked
				},

				clicked : function() {
				},

				data : {
					meta : "value"
				}
			} );

			var view_dummy = new CustomView( {
				component : component
			} );

			var element = document.createElement( "section" );

			done();
		} );
	} );

	it( "adds given component to the passed element", function() {
		view_dummy.render( element );

		expect( $( element ).find( "div.test" ).length ).toBe( 1 );
	} );

	it( "doesn't allow calling render without element", function() {
		expect( view_dummy.render() ).toThrow();
	} );

	it( "removes component from element on close", function() {
		view_dummy.render( element );
		view_dummy.close();

		expect( $( element ).find( "div.test" ).length ).toBe( 0 );
	} );

	it( "passes provided callbacks to the component", function() {
		view_dummy.render( element );

		expect( component.props.callbacks ).toBeDefined();
	} );

	it( "passes custom data to component", function() {
		view_dummy.render( element );

		expect( component.this.props.meta ).toBeDefined();
	} );

	it( "calls callbacks on events", function() {
		view_dummy.render( element );
		spyOn( view_dummy, "clicked" );

		$( element ).find( "div.test" ).trigger( "click" );

		expect( view_dummy.clicked ).toHaveBeenCalled();
	} );

	afterEach( function() {
		view_dummy = null;
		component = null;
		element = null;
	} );
} );
