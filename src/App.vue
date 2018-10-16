<template>
    <div class="row app-body">
        <div class="col-lg-10 col-md-10 col-sm-10 .offset-md-1 .offset-lg-1 main-page">
            <app-header></app-header>
            <hr>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            appHeader: Header
        }
    }
</script>
<style>
    @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
    .main-page {
        margin-left: 5%;
        margin-top: 2%;
    }
    .app-body {
        font-family: 'Open Sans', sans-serif;
        background-color: rgba(255, 255, 255, 0.322);
    }
</style>


