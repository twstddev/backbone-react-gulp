define( [ "backbone" ], function() {
	/**
	 * @brief This is a simple class that manages
	 * React components in the given region.
	 */
	var ReactRegion = function( options ) {
		this.options = options || {};
		this.m_el = Marionette.getOption( this, "el" );
		this.m_current_component = null;

		if ( !this.m_el ) {
			throw "An 'el' must be specified for a region."
		}

		if ( this.initialize ) {
			var args = Array.prototype.slice.apply( arguments );
			this.initialize.apply( this, args );
		}
	};

	/**
	 * @brief Displays given component in the main element.
	 *
	 * @param[in] ReactComponent is the component to set
	 * as the current to the element.
	 */
	ReactRegion.prototype.show = function( component ) {
		if ( !component ) {
			throw "A component must be provided";
		}

		this.close();
		this.setCurrentComponent( component );
	}

	/**
	 * @brief Closes the region and removes current content
	 * from the main element.
	 */
	ReactRegion.prototype.close = function() {
		if ( this.m_current_component ) {
			this.removeCurrentComponent();
		}
	}


	/**
	 * @brief Removes current component and sets it to null.
	 */
	ReactRegion.prototype.removeCurrentComponent = function() {
		this.m_current_component.close();

		delete this.m_current_component;
		this.m_current_component = null;
	}

	/**
	 * @brief Sets given component as the curren one.
	 */
	ReactRegion.prototype.setCurrentComponent = function( component ) {
		this.m_current_component = component;
		this.m_current_component.render( this.m_el );
	}

	ReactRegion.extend = Backbone.Model.extend;

	return ReactRegion;
} );
