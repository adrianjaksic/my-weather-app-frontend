<template>
    <div class="xs-col-12 col-sm-6 col-lg-4 m-0 p-0">
        <div class="card m-4" style="background-color:gray;">
            <div class="card-header text-center">Day: {{day}}</div>
            <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">Average temperature: {{ temperature }}&deg;C</li>
                <li class="list-group-item"><img src="../assets/icons/high.svg" alt="high temperature"><span>High temperature: {{ high }}</span>&deg;</li>
                <li class="list-group-item"><img src="../assets/icons/low.svg" alt="low temperature"><span>Low temperature: {{ low }}</span>&deg;</li>
                <li class="list-group-item"><img src="../assets/icons/wind.svg" alt="wind speed"><span class="wind__value">Wind speed: {{ windSpeed }}</span>m/s</li>
                <li class="list-group-item"><img src="../assets/icons/humidity.svg" alt="humidity"><span class="humidity__value">Humidity: {{ humidity }}</span>&percnt;</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DayInfo',

    props: {
        day: {
            type: String,
            required: true
        },
        temperature: {
            type: Number,
            required: true
        },
        high: {
            type: Number,
            required: true
        },
        low: {
            type: Number,
            required: true
        },
        humidity: {
            type: Number,
            required: true
        },
        windSpeed: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
.list-group-item {
    background-color:rgba(0,0,0,.5);
    color: black;
}

.list-group-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
}
</style>
