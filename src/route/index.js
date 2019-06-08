import Vue from 'vue';
import Router from 'vue-router';
import routes from './modules/index';
import NProgress from 'nprogress';

Vue.use(Router)

let router = new Router({
    routes
})
// 进度条
NProgress.configure({ showSpinner: false }) 
// 权限控制
router.beforeEach((to, from, next) => {
    NProgress.start()
    // 权限控制于预留位
    NProgress.done()
    next()
});

export default router

