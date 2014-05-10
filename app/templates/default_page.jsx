/** @jsx React.DOM */
define( [ "react" ], function( React ) {
	var DefaultPage = React.createClass( {
		getInitialState : function() {
			return { className : "hidden" };
		},

		componentDidMount : function() {
			var element = this.getDOMNode();
			element.focus();

			this.setState( { className : "" } );
		},

		render : function() {
			return (
				<article className={ this.state.className }>
					<h2>{ this.props.title }</h2>
					<p>
						{ this.props.content }
					</p>
				</article>
			);
		}
	} );

	return DefaultPage;
} );
