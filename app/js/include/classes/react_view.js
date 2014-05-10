define( [ "react", "backbone" ], function( React ) {
	/**
	 * @brief Represents a single view
	 * that contains a React component.
	 */
	var ReactView = function( options ) {
		this.options = options || {};
		this.m_component = Marionette.getOption( this, "component" );
		this.m_element = null;

		if ( !this.m_component ) {
			throw "A component must be specified";
		}

		if ( !this.data ) {
			this.data = {};
		}

		if ( this.initialize ) {
			var args = Array.prototype.slice.apply( arguments );
			this.initialize.apply( this, args );
		}
	};

	/**
	 * @brief Adds component to the passed element.
	 *
	 * @param[in] DOM element is the element to be populated with
	 * the component.
	 */
	ReactView.prototype.render = function( element ) {
		if ( !element ) {
			throw "An elment must be specified";
		}

		this.m_element = element;

		var properties = _.extend( this.data, { callbacks : this.callbacks } );

		React.renderComponent( 
			this.m_component( properties ),
			this.m_element
		);
	};

	/**
	 * @brief Removes current component and deletes it
	 * from the object.
	 */
	ReactView.prototype.close = function() {
		React.unmountComponentAtNode( this.m_element );

		delete this.m_component;
		this.m_element = null;
		this.m_component = null;
	};

	ReactView.extend = Backbone.Model.extend;

	return ReactView;
} );
