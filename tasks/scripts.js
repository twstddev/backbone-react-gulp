module.exports = function( gulp ) {
	gulp.task( "scripts", function() {
		return gulp.src( get_application_path( "libs/selectivizr/selectivizr.js" ) )
			.pipe( plugins.rename( "conditional.js" ) )
			.pipe( gulp.dest( config.dist + "/js" ) );
	} );
};
