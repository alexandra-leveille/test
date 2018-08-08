import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotreConcept from '@/components/NotreConcept'
import NotreProjet from '@/components/NotreProjet'
import Rejoindre from '@/components/Rejoindre'
import Reservez from '@/components/Reservez'
import Sign from '@/components/Sign'
import Who from '@/components/Who'
import AddCommand from '@/components/AddCommand'
import Localize from '@/components/Localize'
import Pompez from '@/components/Pompez'
import Payez from '@/components/Payez'

//import './index2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/NotreConcept',
      name: 'NotreConcept',
      component: NotreConcept
    },
    {
      path: '/Rejoindre',
      name: 'Rejoindre',
      component: Rejoindre
    },
    {
      path: '/NotreProjet',
      name: 'NotreProjet',
      component: NotreProjet
    },
    {
      path: '/Reservez',
      name: 'Reservez',
      component: Reservez
    },
    {
      path: '/Who',
      name: 'Who',
      component: Who
    },
    {
      path: '/Sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/AddCommand',
      name: 'AddCommand',
      component: AddCommand
    },
    {
      path: '/Localize',
      name: 'Localize',
      component: Localize
    },
    {
      path: '/Pompez',
      name: 'Pompez',
      component: Pompez
    },
    {
      path: '/Payez',
      name: 'Payez',
      component: Payez
    }
  ]
});
