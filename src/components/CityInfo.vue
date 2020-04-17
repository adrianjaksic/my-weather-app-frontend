<template>
    <div class="text-center">
        <h1>{{ city }}</h1>
        <p>Latitude: {{ latitude }} Longitude: {{ longitude }}</p>
    </div>
</template>

<script>
export default {
    name: 'CityInfo',

    props: {
        city: {
            type: String,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    }
}
</script>
