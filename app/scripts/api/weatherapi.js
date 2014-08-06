/*
**********************
weather conditions
----------------------
01: clear sky
02: few clouds
03: scattered clouds
04: broken clouds
09: shower rain
10: rain
11: thunderstorm
13: snow
50: mist
**********************
*/

window.API.Weather = {
	api_url : "http://api.openweathermap.org/data/2.5/weather?q=",

	static_data: {
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
};