module.exports = function( gulp ) {
	gulp.task( "requirejs", function() {
		return plugins.requirejs( {
			baseUrl : get_application_path( "" ),
			out : "main.js",
			removeCombined : true,
			findNestedDependencies: true,
			include : [ "config/require-config", "requirejs" ],
			name : "js/main",
			wrapShim : true,
			optimizeAllPluginResources : true,
			paths : {
				"requirejs" : "libs/requirejs/require",
				"jquery" : "libs/jquery/dist/jquery",
				"jquery-migrate" : "libs/jquery-migrate/jquery-migrate",
				"underscore" : "libs/lodash/dist/lodash.underscore",
				"backbone" : "libs/backbone/backbone",
				"marionette" : "libs/marionette/lib/core/amd/backbone.marionette",
				'backbone.wreqr' : 'libs/backbone.wreqr/lib/amd/backbone.wreqr',
				'backbone.babysitter' : 'libs/backbone.babysitter/lib/amd/backbone.babysitter',
				"handlebars" : "libs/handlebars/handlebars.runtime"
			},

			pragmas : {
				configExclude : true
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
				"handlebars" : {
					exports : "Handlebars"
				}
			}
		} )
		.pipe( plugins.uglify() )
		.pipe( gulp.dest( config.dist + "/js" ) );
	} );
}
