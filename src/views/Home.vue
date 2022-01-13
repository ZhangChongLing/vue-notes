<template>
  <div class="home">
    <h1>Vue核心源码剖析稿</h1>
    <Button class="read" @click="toPage('00')" style="background-color:#41b883">前言</Button>
    <Button class="read" @click="showModal()" style="background-color:#41b883">总目录</Button>
    <Button class="read" @click="toPage('github')" style="background-color:#41b883">GitHub</Button>
    <Modal width="860" :draggable="false" v-model="modal" title="总目录">
      <div>
        <img src="./catalog.png" alt="目录图"/>
      </div>
    </Modal>
    <div>
      <Button class="card" @click="toPage('01')">01核心思想篇</Button>
      <Button class="card" @click="toPage('02')">02变化侦测篇</Button>
      <Button class="card" @click="toPage('03')">03虚拟Dom篇</Button>
    </div>
    <div>
      <Button class="card" @click="toPage('04')">04模板编译篇</Button>
      <Button class="card" @click="toPage('05')">05生命周期篇</Button>
      <Button class="card" @click="toPage('06')">06Vue3探索篇</Button>
    </div>
    <div>
      暂6篇，约2万字。@灵扁扁
    </div>
    <div>致敬每一个开源人，热爱分享的开发者。</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      modal: false
    };
  },
  mounted() {
  },
  methods: {
    showModal() {
      this.modal = true;
    },
    toPage(path) {
      switch (path) {
        case 'github':
          path = 'https://github.com/ZhangChongLing/vue-notes';
          break;
        case "06":
          path = 'https://note.youdao.com/s/beY7x2zq';
          break;
        case "00":
          path = 'https://note.youdao.com/s/FNTiGsYi';
          break;
        case "01":
          path = 'https://note.youdao.com/s/363fiG3R';
          break;
        case "02":
          path = 'https://note.youdao.com/s/aJFtug2F';
          break;
        case "03":
          path = 'https://note.youdao.com/s/sb5yDRO';
          break;
        case "04":
          path = 'https://note.youdao.com/s/WdWD5Nuj';
          break;
        case "05":
          path = 'https://note.youdao.com/s/McRiwMwq';
          break;
        default:
          path = 'https://github.com/ZhangChongLing/vue-notes'
      }
      window.open(path);
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  padding: 2rem;

  .read {
    width: 100px;
    height: 50px;
    line-height: 50px;
    background-color: #000;
    color: #fff;
    border-radius: 0.5rem;
    margin: 10px;
    font-size: 1.2rem;
  }

  .card {
    width: 200px;
    height: 100px;
    line-height: 100px;
    background-color: #000;
    color: #fff;
    border-radius: 0.5rem;
    margin: 10px;
    font-size: 1.5rem;
  }
}
</style>