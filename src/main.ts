import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
