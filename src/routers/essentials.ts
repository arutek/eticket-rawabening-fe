const Home = () => import('@/pages/Home.vue')
const CreateTicket = () => import('@/pages/CreateTicket.vue')

export default [
  {
    path: '/create-ticket',
    name: 'CreateTicket',
    component: CreateTicket,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]