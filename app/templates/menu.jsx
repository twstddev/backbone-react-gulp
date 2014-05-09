/** @jsx React.DOM */
define( [ "react", "js/templates/menu_item" ], function( React, MenuItem ) {
	var Menu = React.createClass( {
		signalNavigationSlug : function( event ) {
			event.preventDefault();

			var menu_item = event.target;
			console.log( menu_item );
			this.props.vent.trigger( "pages:change", menu_item.href );
		},

		render : function() {
			var that = this;

			var items = _.map( this.props.items, function( menu_item ) {
				return <MenuItem title={ menu_item.title } slug={ menu_item.slug } click={ that.signalNavigationSlug } />
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
