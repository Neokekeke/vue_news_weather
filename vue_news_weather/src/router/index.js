import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home.vue';
import news from '../components/news/news.vue';
import weather from '../components/weather/weather.vue';
import movie from '../components/movie/movie.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '电影',
      component: Home,
      children:[
        {
          path: 'movie',
          name: '电影',
          component: movie
        },
        {
          path: 'news',
          name: '新闻',
          component: news
        },
        {
          path: 'weather',
          name: '天气',
          component: weather
        }
      ]
    }
  ]
})
