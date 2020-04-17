/*
* Service that fetch and parse weather forecast.
*/
class WeatherForecast {

    constructor() {
        this.defaultCity = 'Leipzig';
        this.city = '';
        this.latitude = 0;
        this.longitude = 0;
        this.days = [];        
        this.country = 'DE'
        this.history = [];
        this.cityKey = 'searched-city-key';
        this.searchHistoryKey = 'weather-search-key';
        this.loadHistory();
    }

    async weatherByPostCode(postCode, store) {
        let data = null;
        data = await this.getForecastByPostCode(postCode, this.country);
        this.populate(data, store);
    }

    async weatherByCityName(cityName, store) {
        let data = null;
        data = await this.getForecastByCityName(cityName, this.country);
        this.populate(data, store);
    }
    
    async getForecastByPostCode(postCode, countrCode) {
        let endpoint = `https://localhost:44387/api/weather/ForecastByPostcode?postCode=${postCode}&countryCode=${countrCode}`;
        let response = await fetch(endpoint);
        return await response.json();     
    }

    async getForecastByCityName(cityName, countrCode) {
        let endpoint = `https://localhost:44387/api/weather/forecastByCityName?cityName=${cityName}&countryCode=${countrCode}`;
        let response = await fetch(endpoint);
        return await response.json();
    }

    populate(data, store) {        
        this.error = data.statusCode != 0;
        this.errorMessage = data.errorMessage;
        this.city = this.error ? this.errorMessage : data.name;
        this.latitude = data.lat;
        this.longitude = data.long;
        this.days = [];
        for (var i = 0, len = data.days.length; i < len; i++) {
            let item = data.days[i];
            this.days.push({
                day: item.day,
                avgTemperature: item.temp,
                minTemperature: item.minTemp,
                maxTemperature: item.maxTemp,
                humidity: item.humidity,
                windSpeed: item.windSpeed
            });
        } 
        if (store){
            this.addToHistory();
        }       
    }

    loadHistory() {
        let searchHistory = localStorage.getItem(this.searchHistoryKey)
        if (searchHistory) {
            this.history = JSON.parse(searchHistory);
        }

        let searchedCity = localStorage.getItem(this.cityKey);
        if (searchedCity) {
            this.city = searchedCity;
        }
        else {
            this.city = this.defaultCity;
        }
    }

    addToHistory() {
        if (!this.error) {
            localStorage.setItem(this.cityKey, this.city);
            this.history.push({            
                city: this.city,
                temperature : this.days[0].avgTemperature,
                humidity: this.days[0].humidity,
                date: new Date()
            });
            if (this.history.length > 20) {
                this.history.splice(0, this.history.length - 20) 
            }
            const parsed = JSON.stringify(this.history);
            console.log(parsed);
            localStorage.setItem(this.searchHistoryKey, parsed);
        }
    }

    clearHistory() {
        localStorage.removeItem(this.searchHistoryKey);
        this.history.splice(0, this.history.length);
    }
}

export default WeatherForecast;
