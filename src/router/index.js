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
import Users from '@/components/Users'
import Fillers from '@/components/Fillers'
import Command from '@/components/Command'
import Display from '@/components/Display'
import ReCommand from '@/components/ReCommand'
import Maps from '@/components/Maps'
import LogFillers from '@/components/LogFillers'
import LogUsers from '@/components/LogUsers'
import Hello from '@/components/Hello'
import PostsManager from '@/components/PostsManager'
import Items from '@/components/Items'
import './index2'
import Auth from '@okta/okta-vue'


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
    },
    {
      path: '/Users',
      name: 'Users',
      component: Users
    },
    {
      path: '/Fillers',
      name: 'Fillers',
      component: Fillers
    },
    {
      path: '/Command',
      name: 'Command',
      component: Command
    },
    {
      path: '/Display',
      name: 'Display',
      component: Display
    },
    {
      path: '/ReCommand',
      name: 'ReCommand',
      component: ReCommand
    },
    {
      path: '/Maps',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/Items',
      name: 'Items',
      component: Items
    },
    {
      path: '/LogUsers',
      name: 'LogUsers',
      component: LogUsers
    },
    {
      path: '/LogFillers',
      name: 'LogFillers',
      component: LogFillers
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
    {
      path: '/posts-manager',
      name: 'PostsManager',
      component: PostsManager,
      meta: {
        requiresAuth: true
      }
    }
  ]
});
