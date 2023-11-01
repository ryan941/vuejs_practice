import { createRouter, createWebHashHistory } from 'vue-router'


import LoginView from '../views/LoginView.vue'
import IndexView from '../views/index/IndexView.vue'

import Cookies from 'js-cookie';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexView,
            meta: {
                showHeader: true,
            }
        },
        {
            path: '/index',
            name: 'menu',
            component: IndexView,
            meta: {
                showHeader: true,
            }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: {
                showHeader: false,
            }
        },

    ]
});

export default router