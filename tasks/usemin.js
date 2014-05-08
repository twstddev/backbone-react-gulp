module.exports = function( gulp ) {
	gulp.task( "usemin", function() {
		return gulp.src( get_application_path( "index.html" ) )
			.pipe( plugins.usemin() )
			.pipe( gulp.dest( config.dist ) );
	} );
}
