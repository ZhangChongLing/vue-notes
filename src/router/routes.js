
/*存放具体路由*/
const routes = [
  {path: '/', meta: { title: 'Vue源码剖析笔记' }, name: 'home', component: () => import('../views/Home.vue') },
  {path: '/home', meta: { title: 'Vue源码剖析笔记' }, name: 'home', component: () => import('../views/Home.vue') },
];
export default routes