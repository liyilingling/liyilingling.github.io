import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import no1 from './no1'
import no2 from './no2'
import no3 from './no3'
import no4 from './no4'




var routes = [{
    path: '/no1/:id',
    component: no1,
}, {
    path: '/no2/:value/:tab',
    component: no2
}, {
    path: '/no3',
    component: no3
}, {
    path: '/no4',
    component: no4
}]


export default new Router({
    routes
})