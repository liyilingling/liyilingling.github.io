require('./index.css')
import Vue from 'vue'
import App from './app.vue'
import Tet from './tet.vue'
import Mol from './mol.vue'
import Item from './Item.vue'
new Vue({
    el: '#box',
    components: {
        App,
        Tet,
        Mol,
        Item
    }

})