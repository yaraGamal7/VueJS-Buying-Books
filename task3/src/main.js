import { createApp } from 'vue'
import App from './App.vue'
import wrappercomponent from './wrappercomponent.vue'
import homecomponent from './components/homecomponent.vue'
import navcomponent from './components/navcomponent.vue'
import dynamiccomponent from './dynamiccomponent.vue'






// createApp(wrappercomponent).mount('#app')
createApp(dynamiccomponent).mount('#app')

