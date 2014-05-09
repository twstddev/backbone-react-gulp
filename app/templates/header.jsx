/** @jsx React.DOM */
define( [ "react" ], function( React ) {
	var Header = React.createClass( {
		render : function() {
			return (
				<h1>
					<a href="#">Application Title</a>
				</h1>
			)
		}
	} );

	return Header;
} );
