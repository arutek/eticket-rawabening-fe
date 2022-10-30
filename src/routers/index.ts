import { createRouter, createMemoryHistory } from 'vue-router'
import essentials from './essentials'

interface vueRouteType {
  path: string,
  component: any,
  name: string,
  params?: any,
  beforeEnter?: any,
}

const routes:vueRouteType[] = [
  ...essentials,
]

export default createRouter({
  history: createMemoryHistory(),
  routes: routes,
})
