import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Tree from "@/components/tree";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: HelloWorld
    }
  ]
});
