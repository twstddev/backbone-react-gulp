
describe( "ReactView", function() {
	var view_dummy = null;
	var component = null;
	var element = null;

	beforeEach( function( done ) {
		require( [ "js/include/classes/react_view", "react" ],
			function( ReactView, React ) {
			component = React.createClass( {
				render : function() {
					return (
						React.DOM.a( {
							className : "test",
							onClick : this.props.callbacks.clicked
						} )
					);
				}
			} );

			var CustomView = ReactView.extend( {
				callbacks : {
					clicked : this.clicked
				},

				data : {
					meta : "value"
				},

				clicked : function() {
				}
			} );

			view_dummy = new CustomView( {
				component : component
			} );

			element = document.createElement( "section" );

			done();
		} );
	} );

	it( "adds given component to the passed element", function() {
		view_dummy.render( element );

		expect( $( element ).find( "a.test" ).length ).toBe( 1 );
	} );

	it( "doesn't allow calling render without element", function() {
		expect( view_dummy.render ).toThrow();
	} );

	it( "removes component from element on close", function() {
		view_dummy.render( element );
		view_dummy.close();

		expect( $( element ).find( "a.test" ).length ).toBe( 0 );
	} );

	it( "calls callbacks on events", function() {
		//spyOn( view_dummy, "clicked" );
		//view_dummy.render( element );

		//$( element ).find( "a.test" )[ 0 ].click();

		//expect( view_dummy.clicked ).toHaveBeenCalled();
	} );

	afterEach( function() {
		view_dummy = null;
		component = null;
		element = null;
	} );
} );
