import { createRouter, createWebHistory } from 'vue-router'
import Page1 from '@src/views/Page1.vue'
import Page2 from '@src/views/Page2.vue'

const routes = [
    {
        name: 'page1',
        path: '/page1',
        component: Page1,
    },
    {
        name: 'page2',
        path: '/page2',
        component: Page2
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router