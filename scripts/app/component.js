
// Example abstract component
define(function(){

	/**
	 * config
	 *  - component init variables
	 */
	var config = {};

	/**
	 * init
	 *  - initialize this component
	 *
	 * @param {object} options
	 */
	var init = function(options) {
		// set component config
		config = options || {};

		// call a private function
		_private(config);

		// create a new class
		var c = new Class();

		// done!
		console.log('component:','finished initialization');
	}

	/**
	 * _private
	 *  - an internal method that is 
	 *    private to this component.
	 *
	 * @param {mixed} y
	 */
	var _private = function(y){
		var x = y;
		console.log('component:','function _private called','x == ', x);
	}

	/**
	 * Class
	 *  - an abstract class that could be used
	 *    within a component.
	 *
	 * @param {object} config
	 */
	var Class = function(config){
		this.config = config;
		this.construct();
	};

	// Class constructor
	Class.prototype.construct = function(){
		console.log('component:','initialized an abstract class');
	}

	return {
		init : init
	}

});