import { App } from 'vue'
import stickyTable from './index.vue'

export default {
  install(app: App) {
    app.component('sticky-table', stickyTable)
  }
}