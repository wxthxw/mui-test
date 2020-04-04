import Vue from 'vue';
// import VueRouter from 'vue-router';
import './lib/mui/css/mui.min.css';
import app from './App.vue';
var vm = new Vue({
    el: '#app',
    render: c => c(app)
})

