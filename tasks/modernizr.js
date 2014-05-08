module.exports = function( gulp ) {
	gulp.task( "modernizr", function() {
		var modernizr_files = [
			get_application_path( "js/**/*.js" ),
			get_application_path( "css/main.css" )
		];
		return gulp.src( modernizr_files )
			.pipe( plugins.modernizr() )
			.pipe( plugins.rename( "header.js" ) )
			.pipe( plugins.uglify() )
			.pipe( gulp.dest( config.dist + "/js" ) );
	} );
};
