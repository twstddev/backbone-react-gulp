module.exports = function( gulp ) {
	gulp.task( "imagemin", function() {
		gulp.src( get_application_path( "img/**/*.{png,jpg,jpeg,gif}" ) )
			.pipe( plugins.imagemin() )
			.pipe( gulp.dest( config.dist + "/img" ) );
	} );
};
