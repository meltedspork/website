/*global define*/

define([
    'underscore'
    ,'backbone'
    ,'apis/zipcodeapi'
    ,'apis/weatherapi'
], function (_, Backbone, ZipcodeAPI, WeatherAPI) {
    'use strict';

    var WeathermodelModel = Backbone.Model.extend({
        url: '',

        initialize: function() {

        },

        defaults: {
        },

        getWeather : function(canvas,size) {
            this.size = size;
            var self = this,
                api = MS.API;

            api.Zipcode = new ZipcodeAPI([],{zipcode: 60302});

            api.Zipcode.fetch({
                success: function () {
                    //self.output(api.Zipcode);
                    var city = api.Zipcode.get('city');
                    var state = api.Zipcode.get('state_short');

                    api.Weather = new WeatherAPI([],{
                        city: city,
                        state: state
                    });

                    api.Weather.fetch({
                        data: { q: city + "," + state },
                        success: function () {
                            var weatherData = api.Weather,
                                weatherStatic = weatherData.get('staticData'),
                                weatherMain = weatherData.get('main'),
                                weatherIcon = weatherData.get('weather')[0].icon;

                                console.log(weatherMain);
                            //weatherData.set('condition'
                            //kelvinToFahrenheit

                            var fahrenheit = {
                                temp: self.kelvinToFahrenheit(weatherMain.temp),
                                temp_max: self.kelvinToFahrenheit(weatherMain.temp_max),
                                temp_min: self.kelvinToFahrenheit(weatherMain.temp_min)
                            };

                            weatherData.set('fahrenheit', fahrenheit);
                            weatherData.set('condition', weatherStatic.conditions[weatherIcon.replace(/\D/g, "")]);
                            weatherData.set('period', weatherStatic.periods[weatherIcon.replace(/[^a-z]/gi, "")]);

                            MS.Views.Weather.displayView({
                              weather: weatherData.toJSON()
                            });

                            //weatherData.set('condition', self.get('condition'));
                            //weatherData.set('period', self.get('period'));

                            self.setWeather(canvas,api);
                            //self.output(api.Weather);
                        }
                    });
                }
            });
        },

        setWeather: function(canvas,api) {
            var weatherAPI = api.Weather;

            $.when(
                this.displayWeather(canvas,weatherAPI),
                this.displaySunMoon(canvas,weatherAPI)
            ).then(
                this.setBackground(canvas,weatherAPI)
            );

            var weatherAPI = api.Weather;
        },

        setBackground: function(canvas,api) {
           canvas[api.get('period')[0]].shape.x = this.size.width/2;
           canvas[api.get('period')[0]].shape.y = this.size.height/2;
           canvas[api.get('period')[0]].shape.scaleX = this.size.width/300+.05;
           canvas[api.get('period')[0]].shape.scaleY = this.size.height/300+.05;
        },

        displayWeather: function(canvas,api) {
            //canvas[api.get('condition')[0]].visible = true;
            canvas[api.get('condition')[0]].init();
            canvas[api.get('period')[0]].visible = true;
        },

        displaySunMoon: function(canvas,api) {
            if (api.get('condition')[1]) {
                canvas[api.get('period')[1]].visible = true;
            }
        },

        kelvinToFahrenheit: function(temp) {
            return Math.round((temp - 273.15) * 1.8000 + 32.00);
        },
        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        },

        output: function (api) {
            //console.log( api.toJSON());
        }
    });

    return WeathermodelModel;
});
