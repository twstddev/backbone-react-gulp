var gulp = require( "gulp" );
var path_helper = require( "path" );
var run_sequence = require( "run-sequence" );

GLOBAL.plugins = require( "gulp-load-plugins" )();

GLOBAL.config = {
	hostname : "localhost",
	port : 3000,
	base : "app",
	dist : "dist"
};

GLOBAL.get_application_path = function( path ) {
	return path_helper.join( GLOBAL.config.base, path );
}

GLOBAL.output_error = function( error ) {
	console.log( error.message );
}

// load tasks form the tasks directory
require( "gulp-load" )( gulp );
gulp.loadTasks( __dirname );

gulp.task( "development", function( done ) {
	run_sequence(
		"clean:build",
		"compass",
		"handlebars",
		"karma:watch",
		"livereload",
		"open",
		done
	);
} );

gulp.task( "test", [
	"karma:test"
] );

gulp.task( "default", function( done ) {
	run_sequence(
		"clean:build",
		"clean:dist",
		"compass:build",
		"handlebars:build",
		"imagemin",
		"usemin",
		"htmlmin",
		"cssmin",
		"scripts",
		"requirejs",
		//"modernizr",
		done
	);
} );
