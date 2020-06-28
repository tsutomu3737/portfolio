import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Favorite from './views/Favorite.vue';
import Work from './views/Work.vue';

// プラグインの適用
Vue.use(Router);
export default new Router({
  routes: [
            {path: '/', component: Home},
            {path: '/about', component: About},
            {path: '/contact', component: Contact},
            {path: '/favorite', component: Favorite},
            {path: '/work', component: Work}
          ]
});