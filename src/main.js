import { createApp } from 'vue'
import App1 from './App1.vue'
import App2 from './App2.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()


const applications = {
  '#app1': App1,
  '#app2': App2
}

Object.entries(applications).forEach(([el, component]) => {
  createApp(component)
  .use(vuetify)
  .mount(el)
})

