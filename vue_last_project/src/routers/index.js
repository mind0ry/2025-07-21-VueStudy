import FoodView from "@/views/FoodView.vue"
import HomeView from "@/views/HomeView.vue"
import RecipeView from "@/views/RecipeView.vue"
const routers=[
    {
        path:"/",
        name:"home",
        component:HomeView
    },
    {
        path:"/food",
        name:"food",
        component:FoodView
    },
    {
        path:"/recipe",
        name:"recipe",
        component:RecipeView
    }
]