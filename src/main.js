import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue';
import Chat from './components/Chat.vue';

Vue.config.debug = true;

Vue.use(Router);

let router = new Router();

router.map({
  '/chat': {
    component: Chat
  },
  '/chat/:id': {
    component: Chat
  }
});

router.redirect({
  '*': '/chat'
});

router.start(App, '#app');
