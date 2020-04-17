<template>
    <main class="justify-content-center w-100" :class="period"> 
        <div class="m-auto" style="max-width: 1200px;">            
            <div class="row justify-content-center pt-2">						
                <div class="form-inline my-2 my-lg-0">
                    <input v-model="postCode" class="form-control mr-sm-2" type="search" placeholder="Search by postcode" aria-label="Search">
                    <input v-model="cityName" class="form-control mr-sm-2" type="search" placeholder="Search by city name" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" v-on:click="search">Search</button>
                </div>
            </div>

            <CityInfo
                :city="this.forecast.city"
                :latitude="this.forecast.latitude"
                :longitude="this.forecast.longitude"
            ></CityInfo>

            <div class="row">
                <DayInfo v-for="item in this.forecast.days" v-bind:key="item.day"
                        :day="item.day"
                        :temperature="item.avgTemperature"
                        :low="item.minTemperature"
                        :high="item.maxTemperature"
                        :humidity="item.humidity"
                        :windSpeed="item.windSpeed"
                ></DayInfo>
            </div>
        </div>

    </main>
</template>

<script>
import CityInfo from './CityInfo'
import DayInfo from './DayInfo'
import WeatherForecast from '../services/weather-service'

export default {
    name: 'WeatherApp',

    components: {
        CityInfo,
        DayInfo
    },

    data() {
        return {
            date: new Date,
            forecast: new WeatherForecast,
            postCode:"",
            cityName:""
        }
    },

    computed: {
        period() {
            let hour = this.date.getHours();
            return (hour > 5 && hour < 18)? 'app-day': 'app-night';
        }
    },

    watch: {
        postCode: {
            // the callback will be called immediately after the start of the observation
            immediate: true, 
            handler (val) {
                if (val !== '') {
                    this.cityName = '';
                }
            }
        },
        cityName: {
            // the callback will be called immediately after the start of the observation
            immediate: true, 
            handler (val) {
                if (val !== '') { 
                    this.postCode = '';
                }
            }
        },
    },

    methods: {
        search() {       
            if (this.postCode !== '') {
                this.forecast.weatherByPostCode(this.postCode, true);   
            }
            else if (this.cityName !== '') {
                this.forecast.weatherByCityName(this.cityName, true);                
            }            
            this.postCode = '';
            this.cityName = '';
        }
    },

    created: function () {
        this.forecast.weatherByCityName(this.forecast.city, false);
    }
} 

</script>

<style>
.app-day {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('../assets/images/morning.jpg');
}

.app-night {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('../assets/images/night.jpg');
}
</style>
