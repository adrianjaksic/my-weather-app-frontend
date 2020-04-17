<template>
  <div id="app">
    <Navigation></Navigation>
    <component v-bind:is="component"/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import WeatherApp from './components/WeatherApp'
import WeatherHistory from './components/WeatherHistory'

export default {
  name: 'App',

  components: {
    Navigation,
    WeatherApp,
    WeatherHistory
  },

  data() {
    return {
      component:"WeatherApp"
    }
  },

  methods: {
    setHistoryPage(){
      this.component = WeatherHistory;
    },
    setAppPage(){
      this.component = WeatherApp;
    }
  }
}

</script>
