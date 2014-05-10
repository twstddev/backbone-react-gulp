define( [ "react", "backbone" ], function( React ) {
	/**
	 * @brief Represents a single view
	 * that contains a React component.
	 */
	var ReactView = function( options ) {
		this.options = options || {};
		this.m_element = null;
		this.m_data = Marionette.getOption( this, "data" );

		if ( !this.m_data ) {
			this.m_data = {};
		}

		// bind callbacks to methods
		if ( this.callbacks ) {
			var that = this;

			_.each( _.keys( this.callbacks ), function( callback ) {
				var method_name = that.callbacks[ callback ];

				that.callbacks[ callback ] = _.bind( that[ method_name ], that );
			} );
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

		var properties = _.extend( this.m_data, { callbacks : this.callbacks } );

		React.renderComponent( 
			this.component( properties ),
			this.m_element
		);
	};

	/**
	 * @brief Removes current component and deletes it
	 * from the object.
	 */
	ReactView.prototype.close = function() {
		React.unmountComponentAtNode( this.m_element );

		delete this.component;
		this.m_element = null;
		this.component = null;
	};

	ReactView.extend = Backbone.Model.extend;

	return ReactView;
} );
