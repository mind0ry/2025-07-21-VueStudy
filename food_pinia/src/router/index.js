import { createRouter,createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import FoodDetailView from "@/views/FoodDetailView.vue";
import FoodFindView from "@/views/FoodFindView.vue";
import YouTubeView from "@/views/YouTubeView.vue";
// Spring => @Controller 
const routes=[
    {
        path:"/",
        name:'home',
        component:HomeView
    },
    {
        path:"/food/detail/:fno",
        name:'food_detail',
        component:FoodDetailView
    },
    {
        path:"/food/find",
        name:'food_find',
        component:FoodFindView
    },
    {
        path:"/youtube/find",
        name:'youtube_find',
        component:YouTubeView
    }
]
const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router