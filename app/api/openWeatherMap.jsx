var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f4b52db3cb2c4b13360c67f889320de7&units=metric';


module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function (res) {
			//debugger;
			if (res.data.cod && res.data.message) {
				// throw new Error(res.data.message);
				throw new Error('Unable to fetch weather.');
			} else {
				return res.data.main.temp;
			}
		}, function (res) {
			// throw new Error(res.data.message);
			throw new Error('Unable to fetch weather!!!');
		})
	}
};