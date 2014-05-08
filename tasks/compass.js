module.exports = function( gulp ) {
	var process_sass = function() {
		return gulp.src( get_application_path( "sass/main.scss" ) )
			.pipe( plugins.compass( {
				css : get_application_path( "css" ),
				sass : get_application_path( "sass" ),
				image : get_application_path( "img" ),
				font : get_application_path( "fonts" ),
				style : "expanded"
			} ) )
			.on( "error", output_error );
	}

	gulp.task( "compass", function() {
		gulp.watch( get_application_path( "sass/**/**.scss" ), process_sass );
		return process_sass();
	} );

	gulp.task( "compass:build", process_sass );
}
