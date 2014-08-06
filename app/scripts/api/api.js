window.APIv1 = {
	Weather : {
		static_data: {
			api_url : "http://api.openweathermap.org/data/2.5/weather?q=",
			conditions : {
				"01":["Clear",true],
				"02":["SunnyCloudy",true],
				"03":["Cloudy",false],
				"04":["GrayCloudy",true],
				"09":["Shower",false],
				"10":["Rain",true],
				"11":["Thunderstorm",false],
				"13":["Snow",false],
				"50":["Mist",false]
			},
			periods : {
				"d":["Day","Sun"],
				"n":["Night","Moon"]
			}
		}
	},
	Zipcode: {
		static_data: {
			api_url: "http://zip.getziptastic.com/v2/",
			country: "US",
			zipcode: 60302
		}
	},
	set_weather : function(){
		var zipAPI = window.APIv1.Zipcode,
			weatherAPI = window.APIv1.Weather,
			weatherOBJ = window.Weather;

		$.when(
			$.get(zipAPI.static_data.api_url + zipAPI.static_data.country + "/" + zipAPI.static_data.zipcode)
				.then(function (data) {
        			//console.log('data',data.city);
        			zipAPI.data = data;

    			})
		).done(function () {
			$.get(weatherAPI.static_data.api_url + encodeURIComponent(zipAPI.data.city) + "," + zipAPI.data.state_short )
				.then(function(data) {
					//console.log('data',data);

	  				weatherAPI.data = data;
	  				weatherAPI.dynamic_data = {};
  					weatherAPI.dynamic_data.condition = weatherAPI.static_data.conditions[weatherAPI.data.weather[0].icon.replace(/\D/g, "")];
   					weatherAPI.dynamic_data.period = weatherAPI.static_data.periods[weatherAPI.data.weather[0].icon.replace(/[^a-z]/gi, "")];

   					weatherOBJ[weatherAPI.dynamic_data.condition[0]].visible = true;
	  				weatherOBJ[weatherAPI.dynamic_data.period[0]].visible = true;
  					if (weatherAPI.dynamic_data.condition[1]) {
  						weatherOBJ[weatherAPI.dynamic_data.period[1]].visible = true;
  					}
				}, function() {
					alert( "weather failed!" );
				}
			)

		});
  	}
};

