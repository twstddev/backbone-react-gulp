define( [ "js/templates/default_page", "marionette" ],
	function( Template ) {
	/**
	 * @brief Implements default view for a page.
	 */
	var DefaultPageView = Backbone.Marionette.ItemView.extend( {
		tagName : "article",
		template : Template,

		initialize : function() {
			this.$el.addClass( "hidden" );
		},

		onShow : function() {
			this.$el.focus();
			this.$el.removeClass( "hidden" );
		}
	} );

	return DefaultPageView;
} );
