/** @jsx React.DOM */
define( [ "react", "js/templates/menu_item" ], function( React, MenuItem ) {
	var Menu = React.createClass( {
		render : function() {
			var that = this;

			var items = _.map( this.props.items, function( menu_item ) {
				return <MenuItem title={ menu_item.title } slug={ menu_item.slug } click={ that.props.callbacks.clicked } />
			} );

			return (
				<ul>
					{items}
				</ul>
			)
		}
	} );

	return Menu;
} );
