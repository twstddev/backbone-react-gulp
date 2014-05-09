require.config( {
	baseUrl : "",
	paths : {
		"jquery" : "libs/jquery/dist/jquery",
		"jquery-migrate" : "libs/jquery-migrate/jquery-migrate",
		"underscore" : "libs/lodash/dist/lodash.underscore",
		"backbone" : "libs/backbone/backbone",
		"marionette" : "libs/marionette/lib/backbone.marionette",
		"react" : "libs/react/react"
	},

	shim : {
		"jquery" : {
			exports : "$"
		},
		"jquery-migrate" : {
			deps : [ "jquery" ],
			exports : "$"
		},
		"underscore" : {
			exports : "_"
		},
		"backbone" : {
			deps : [ "underscore", "jquery" ],
			exports : "Backbone"
		},
		"marionette" : {
			deps : [ "backbone" ],
			exports : "Marionette"
		}
	}
} );
