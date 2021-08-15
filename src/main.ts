import { createApp } from 'vue'
// @ts-ignore
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.min.css'
import { store } from '@/store'

const app = createApp(App)
app.use(store);
new WaveUI(app, {})

app.mount('#app')
