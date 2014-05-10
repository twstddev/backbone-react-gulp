/** @jsx React.DOM */
define( [ "react" ], function( React ) {
	var MenuItem = React.createClass( {
		clicked : function( event ) {
			event.preventDefault();
			this.props.click( this.props.slug );
		},

		render : function() {
			return (
				<li>
					<a key={ this.props.key } href={ this.props.slug } title={ this.props.title } onClick={ this.clicked }>
						{ this.props.title }
					</a>
				</li>
			)
		}
	} );

	return MenuItem;
} );

