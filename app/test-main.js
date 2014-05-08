var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

	paths : {
		"jquery" : "libs/jquery/dist/jquery",
		"jquery-migrate" : "libs/jquery-migrate/jquery-migrate",
		"underscore" : "libs/lodash/dist/lodash.underscore",
		"backbone" : "libs/backbone/backbone",
		"marionette" : "libs/marionette/lib/backbone.marionette",
		"handlebars" : "libs/handlebars/handlebars.runtime"
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
		"marionette" : {
			deps : [ "backbone" ],
			exports : "Marionette"
		},
		"handlebars" : {
			exports : "Handlebars"
		}
	},

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
