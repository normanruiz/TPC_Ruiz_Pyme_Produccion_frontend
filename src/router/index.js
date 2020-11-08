import Vue from 'vue'
import VueRouter from 'vue-router'
import Portal from '../views/general/Portal.vue'
import Login from '../views/general/Login.vue'
import Inicio from '../views/general/Inicio.vue'
import Portafolios from '../views/general/Portafolios.vue'

import ModuloAdministracion from '../views/administracion/ModuloAdministracion.vue'
import ModuloUsuarios from '../views/administracion/ModuloUsuarios.vue'
import ABMUsuarios from '../views/administracion/ABMUsuarios.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Portal' },
  { path: '/Portal', name: 'Portal', component: Portal },
  { path: '/Login', name: 'Login', component: Login },
  { path: '/Inicio', name: 'Inicio', component: Inicio },
  { path: '/Portafolios', name: 'Portafolios', component: Portafolios },
  { path: '/Administracion', name: 'ModuloAdministracion', component: ModuloAdministracion },
  { path: '/Administracion/Usuarios', name: 'ModuloUsuarios', component: ModuloUsuarios },
  { path: '/Administracion/Usuarios/Alta', name: 'AltaUsuario', component: ABMUsuarios },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
