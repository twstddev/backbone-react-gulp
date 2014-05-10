if (!Function.prototype.bind) {
    var Empty = function(){};
    Function.prototype.bind = function bind(that) { // .length is 1
      var target = this;
      if (typeof target != "function") {
        throw new TypeError("Function.prototype.bind called on incompatible " + target);
      }
      var args = Array.prototype.slice.call(arguments, 1); // for normal call
      var binder = function () {
        if (this instanceof bound) {
          var result = target.apply(
              this,
              args.concat(Array.prototype.slice.call(arguments))
          );
          if (Object(result) === result) {
              return result;
          }
          return this;
        } else {
          return target.apply(
              that,
              args.concat(Array.prototype.slice.call(arguments))
          );
        }
      };
      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      var bound = Function("binder", "return function(" + boundArgs.join(",") + "){return binder.apply(this,arguments)}")(binder);

      if (target.prototype) {
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        // Clean up dangling references.
        Empty.prototype = null;
      }
      return bound;
    };
  }

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
		"react" : "libs/react/react"
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
		}
	},

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
