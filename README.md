# vue-notes
Vue核心源码剖析稿

##1.说明
受限学识水平和实践经验，难免错漏，欢迎各位前辈同学批评指正。
本文（Vue核心源码剖析稿），目前共5篇，约1.6万字。

##2.参考资料
①源码：https://github.com/vuejs/vue

②Vue官网：https://cn.vuejs.org/

③VueApi：https://cn.vuejs.org/v2/api/index.html

④书籍：梁灏老师的Vue.js实战

##3.总目录

```
01核心思想篇
    第一节·数据驱动
        1.什么是数据驱动？
        2.数据驱动的工作原理
    第二节·组件化系统
        1.什么是组件化？
        2.组件化的优点。
02变化侦测篇
    ##第一节·先看目录结构
    ##第二节·变化侦测简述
    ##第三节·Vue中的变化侦测机制。
        ###1.前言
        ###2.object类数据的变化观测
        ###3.array的变化观测
        ###4.深度观测
        ###5.了解一下Watcher
        ###6.Vue.set和Vue.delete
    ##第四节·篇章小结
#03虚拟Dom篇
    ##第一节·先看目录结构
    ##第二节·虚拟dom简述
        ###1.什么是虚拟dom？
        ###2.要你虚拟dom何用？
    ##第三节·Vue中的虚拟dom
        ###1.虚拟节点
        ###2.vue中的dom-diff
        ###3.vnode的patch过程
    ##第四节·篇章小结
#04模板编译篇
    ##第一节·先看目录结构
    ##第二节·什么是模板编译
    ##第三节·模板编译流程
        ###1.模板编译的整体流程
        ###2.模板编译的三个阶段
    ##第四节·篇章小结
#05生命周期篇
    ##第一节·先看目录结构
    ##第二节·Vue生命周期简述
    ##第三节·生命周期的几个阶段
        ###1.生命周期中的几个阶段。
        ###2.初始化阶段
        ###3.模板编译阶段
        ###4.挂载阶段
        ###5.销毁阶段
    ##第四节·有关执行顺序
    ##第五节·几个生命周期钩子
    ##第六节·篇章小结

```

##结束语
致敬每一个开源人，热爱分享的开发者。

