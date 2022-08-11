import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/components/HomePage.vue');
const Detail = () => import('@/components/DetailPage.vue');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail,
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.afterEach(() => {
    window.scrollTo(0, 0);
})
// const router = new VueRouter({ routes });

export default router;