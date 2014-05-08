define( [ "js/include/footer/views/footer_layout", "marionette" ],
	function( FooterLayout ) {
	// contains private data of the object
	var PrivateScope = function() {
		this.fragment = null;
	};

	/**
	 * @brief Sets layout as the current one and makes it visible.
	 */
	PrivateScope.prototype.addLayout = function( layout ) {
		layout.render();
		this.fragment.append( layout.$el );
	};

	/**
	 * @brief Represents main footer of the application.
	 */
	var FooterModule = Backbone.Marionette.Controller.extend( {
		/**
		 * @brief Constructor.
		 */
		initialize : function( options ) {
			// create cheshire cat
			this.d = new PrivateScope();

			this.d.fragment = options.fragment;
			this.d.addLayout( new FooterLayout );
		}
	} );

	return FooterModule;

} );
