import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import StickyTable from './StickyTable'

const app = createApp(App)

app.use(StickyTable)
app.mount('#app')

