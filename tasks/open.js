module.exports = function( gulp ) {

	var open_given_path = function( path ) {
		return gulp.src( path )
			.pipe( plugins.open( "", {
				url : [
					"http://",
					config.hostname,
					":",
					config.port
				].join( "")
			} ) );
	};

	gulp.task( "open", function() {
		return open_given_path( get_application_path( "index.html" ) );
	} );

	gulp.task( "open:dist", function() {
		return open_given_path( config.dist + "/index.html" );
	} );
}
