import { useUserStore } from './stores/userStore';
import AuthLayout from "./layout/AuthLayout.vue";
import HomeLayout from "./layout/HomeLayout.vue";
import LoginView from "./view/LoginView.vue";
import RegisterView from "./view/RegisterView.vue";
import EmployListView from "./view/EmployListView.vue";
import AddEmployeeView from "./view/AddEmployeeView.vue";
import {createRouter, createWebHistory} from "vue-router";
import HomeView from "./view/HomeView.vue";
import EmployeeEditView from "./view/EmployeeEditView.vue";

function isLoggedIn() {
    const userStore = useUserStore()
    return userStore.isAuthenticated
}

const routes = [
    {
        path: "/login",
        component: AuthLayout,
        children: [{ path: "", component: LoginView }],
        beforeEnter: (to, from, next) => {
            if (isLoggedIn()) {
                next({ path: "/view" });
            } else {
                next();
            }
        }
    },
    {
        path: "/signup",
        component: AuthLayout,
        children: [{ path: "", component: RegisterView }],
    },
    {
        path: "/",
        component: HomeLayout,
        children:
            [
                {
                    path: '/',
                    name: 'Dashboard',
                    component: HomeView,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/view',
                    name: 'EmployeeList',
                    component: EmployListView,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/add',
                    name: 'EmployeeAdd',
                    component: AddEmployeeView,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/edit/:id',
                    name: 'EmployeeEdit',
                    component: EmployeeEditView,
                    props: true,
                }
                ],
        meta: { requiresAuth: true }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        redirect: '/'
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isLoggedIn()) {
        next({ path: "/login" });
    } else {
        next();
    }
});

export default router