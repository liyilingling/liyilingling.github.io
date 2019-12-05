import Vue from 'vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import router from './router';
import resource from 'vue-resource'
import App from './App.vue'


Vue.use(Mint);
Vue.use(resource);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})