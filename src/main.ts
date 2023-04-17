import { createApp } from 'vue'
import App from './App.vue'
import StickyTable from './index'

const app = createApp(App)

app.use(StickyTable)
app.mount('#app')

