
/*存放具体路由*/
const routes = [
  {path: '/', meta: { title: 'Vue核心源码剖析稿' }, name: 'home', component: () => import('../views/Home.vue') },
  {path: '/home', meta: { title: 'Vue核心源码剖析稿' }, name: 'home', component: () => import('../views/Home.vue') },
];
export default routes