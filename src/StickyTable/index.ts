import { App } from 'vue'
import stickyTable from './src/index.vue'

export default {
  install(app: App) {
    app.component('sticky-table', stickyTable)
  }
}