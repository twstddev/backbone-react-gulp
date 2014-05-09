module.exports = function( gulp ) {
	var template_files = get_application_path( "templates/**/**.jsx" );

	var compile_templates = function() {
		return gulp.src( template_files )
			.pipe( plugins.cached( "react" ) )
			.pipe( plugins.react() )
			.pipe( gulp.dest( get_application_path( "js/templates" ) ) );
	}

	gulp.task( "react", function() {
		compile_templates();

		gulp.watch( template_files, compile_templates );
	} );

	gulp.task( "react:build", compile_templates );
}
