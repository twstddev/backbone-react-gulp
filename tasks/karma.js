module.exports = function( gulp ) {
	var karma_config = {
		configFile : get_application_path( "karma.conf.js" )
	};

	gulp.task( "karma:test", function() {
		karma_config.action = "run";

		return gulp.src( "test" )
			.pipe( plugins.karma( karma_config ) )
			.on( "error", function( error ) {
				throw error;
			} );
	} );

	gulp.task( "karma:watch", function() {
		karma_config.action = "watch";

		gulp.src( "test" )
			.pipe( plugins.karma( karma_config ) );
	} );
};
