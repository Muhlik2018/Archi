import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/components/HomePage.vue');
const Detail = () => import('@/components/DetailPage.vue');
const TeamMembers = () => import('@/components/TeamMembers.vue');
const CulturalCreation = () => import('@/components/CulturalCreation.vue');
const GenerateArt1 = () => import('@/components/GenerateArt1.vue');
const GenerateArt3 = () => import('@/components/GenerateArt3.vue');


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
    },
    {
        path: '/GenerateArt3',
        name: 'GenerateArt3',
        component: GenerateArt3,
    },
    {
        path: '/GenerateArt1',
        name: 'GenerateArt1',
        component: GenerateArt1,
    },
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