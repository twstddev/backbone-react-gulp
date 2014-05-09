define( [ "marionette" ], function() {
	/**
	 * @brief This is a simple class that manages
	 * React components in the given region.
	 */
	var ReactRegion = function( options ) {
		this.options = options || {};
		this.el = Marionette.getOption( this, "el" );

		if ( !this.el ) {
			throw "An 'el' must be specified for a region."
		}

		if ( this.initialize ) {
			var args = Array.prototype.slice.apply( arguments );
			this.initialize.apply( this, args );
		}

	};

	return ReactRegion;
} );
