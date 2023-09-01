import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () =>
    import ('./../views/HomeView.vue')
const CategoryWiseNews = () =>
    import ('./../views/CategoryWiseNews.vue')
const NewsView = () =>
    import ('./../views/NewsView.vue')
const NotFoundView = () =>
    import ('./../views/NotFoundView.vue')
const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        }, {
            path: '/news/:categoryName/:categoryId',
            name: 'categorynews',
            component: CategoryWiseNews
        }, {
            path: '/news/view/:newsId',
            name: 'newsview',
            component: NewsView
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: NotFoundView
        }
    ]
})

export default router