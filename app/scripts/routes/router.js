/*global define*/

define([
	'jquery'
	,'backbone'
	,'meltedspork'
	,'views/weatherview'
	//,'views/app'

], function ($, Backbone, MeltedSpork, WeatherView) {
//], function ($, Backbone, App, AboutView, AppView) {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
			'weather' : 'weather'
			,'app': 'app'
			//,"*actions": "defaultRoute" // matches http://example.com/#anything-here
			,'': 'home'
		},
		weather : function() {
			var view = new WeatherView({
				el: '.container'
				//,element_id: 'container'
			});
		},
		/*app: function() {
			var view = new AppView({
				el: '.container'
			});
		},*/
		home : function() {
			console.log("huh?");
			//var view = new WeatherView();
		}

	});

	return Router;
});
