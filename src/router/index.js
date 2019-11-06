import Vue from 'vue'
import Router from 'vue-router'
import template from '@/components/template'
import home from '@/components/home'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import page3 from '@/components/page3'
import page4 from '@/components/page4'

Vue.use(Router)

export default new Router({

    routes: [{
            path: '/template',
            name: 'template',
            component: template
        }, {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/page1',
            name: 'page1',
            component: page1
        },
        {
            path: '/page2',
            name: 'page2',
            component: page2
        },
        {
            path: '/page3',
            name: 'page3',
            component: page3
        },
        {
            path: '/page4',
            name: 'page4',
            component: page4
        }
    ]
})