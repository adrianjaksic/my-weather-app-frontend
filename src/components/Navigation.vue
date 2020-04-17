<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand" >My Weather App</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <button class="btn my-2 my-sm-0" v-on:click="setAppPage">Weather</button>
                    <button class="btn my-2 my-sm-0" v-on:click="setHistoryPage">History</button>
                </li>										
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    methods: {
        setHistoryPage() {            
            this.$parent.setHistoryPage();
        },
        setAppPage() {
            this.$parent.setAppPage();
        }
    }
}
</script>
