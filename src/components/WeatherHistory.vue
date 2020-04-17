<template>
    <main class="justify-content-center w-100"> 
        <div class="m-auto text-center" style="max-width: 1200px;">
            <div class="row justify-content-center pt-2">
                <div class="form-inline my-2 my-lg-0">
                    <h1>Search history</h1>
                    <button class="btn btn-danger my-2 my-sm-0 ml-2" v-on:click="clear">Clear history</button>
                </div>
            </div>

            <ul class="col-12 list-group p-0 m-auto">
                <li v-for="item in this.forecast.history" :key="item.date" class="list-group-item">{{ item.city }} searched on {{ item.date | formatDate }} temperature {{ item.temperature }}&deg;C humidity {{ item.humidity }}&percnt;</li>			
            </ul> 
        </div>
    </main>
</template>

<script>
import WeatherForecast from '../services/weather-service'
import moment from 'moment'

export default {
    name: 'WeatherHistory',

    data() {
        return {
            forecast: new WeatherForecast
        }
    },

    methods: {
        clear() {       
            this.forecast.clearHistory();             
        }
    },

    filters: {
        formatDate: function(value) {
            if (value) {
                return moment(String(value)).format('YYYY/MM/DD hh:mm:ss')
            }
        }
    }
}
</script>
