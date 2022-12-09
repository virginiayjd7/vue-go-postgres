import { createRouter,createWebHistory } from 'vue-router';
import Body from './../components/Body.vue'
import Login from './../components/Login.vue'
const routes =[
    {
        path:'/',
        name:'home',
        component:Body,
    },
    {
        path:'/Login',
        name:'Login',
        component:Login,
    }
]
const router = createRouter({history: createWebHistory(),routes})
export default router