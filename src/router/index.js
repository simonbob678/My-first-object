import { createRouter,createWebHistory } from "vue-router";
import WelcomePage from '../views/WeicomePage.vue'
import HomePage from '../views/HomePage.vue'
import CategoryPage from '../views/CategoryPage.vue'
import ContactPage from '../views/ContactPage.vue'
import MessagesPage from '../views/MessagesPage.vue'
import ProfilePage from '../views/ProfilePage.vue'

const routes = [
    {path:'/',redirect:'/WelcomePage'},
    {path:'/WelcomePage',component:WelcomePage},
    {path:'/HomePage', component:HomePage},
    {path:'/CategoryPage', component:CategoryPage},
    {path:'/ContactPage', component:ContactPage},
    {path:'/MessagesPage', component:MessagesPage},
    {path:'/ProfilePage', component:ProfilePage}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router