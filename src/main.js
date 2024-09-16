import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Files from './pages/Files.vue'
import { createStore } from 'vuex'

const store = createStore({
    state: {
        selectedFile: null
    },
    mutations: {
        setSelectedFile(state, file) {
            state.selectedFile = file;
        }
    }
});

const routes = [
    { path: '/', component: About },
    { path: '/Contact', component: Contact },
    { path: '/Files', component: Files }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).use(store).mount('#app')

