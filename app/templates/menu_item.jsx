/** @jsx React.DOM */
define( [ "react" ], function( React ) {
	var MenuItem = React.createClass( {
		render : function() {
			return (
				<li>
					<a href={ this.props.slug } title={ this.props.title } onClick={ this.props.click }>
						{ this.props.title }
					</a>
				</li>
			)
		}
	} );

	return MenuItem;
} );

