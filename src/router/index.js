import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/components/HomePage.vue');
const Detail = () => import('@/components/DetailPage.vue');
const TeamMembers = () => import('@/components/TeamMembers.vue');
const CulturalCreation = () => import('@/components/CulturalCreation.vue');


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
    },
    {
        path: '/TeamMembers',
        name: 'TeamMembers',
        component: TeamMembers,
    },
    {
        path: '/CulturalCreation',
        name: 'CulturalCreation',
        component: CulturalCreation,
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