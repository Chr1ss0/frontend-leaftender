import { createRouter, createWebHistory } from 'vue-router'

import PlantDetails from './pages/plants/PlantDetails.vue'
import PlantRegistration from './pages/plants/PlantRegistration.vue'
import PlantsList from './pages/plants/PlantsList.vue'
import OwnPlant from './pages/request/OwnPlant.vue'
import RequestRecevied from './pages/request/RequestRecevied.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/plants' },
        { path: '/plants', component: PlantsList },
        {
            path: '/plants/:id',
            component: PlantDetails,
            children: [{ path: '/own', component: OwnPlant }], // /plant/p1/own
        },
        { path: '/register', component: PlantRegistration },
        { path: '/request', component: RequestRecevied },
        { path: '/:notFound(.*)', component: NotFound },
    ],
})

export default router
