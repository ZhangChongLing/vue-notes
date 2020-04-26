<template>
    <div class="home">
        <h1>Vue源码剖析笔记</h1>
        <Button class="read" @click="toPage('00')" style="background-color:#41b883">前言篇</Button>
        <Button class="read" @click="showModal()" style="background-color:#41b883">总目录</Button>
        <Modal
                width="660"
                :draggable="false"
                v-model="modal"
                title="总目录"
                >
            <div>
                <img src="catalog.png"  alt="目录图"/>
            </div>
        </Modal>
        <div>
            <Button class="card" @click="toPage('30')">Vue3尝鲜篇</Button>
            <Button class="card" @click="toPage('01')">01核心思想篇</Button>
            <Button class="card" @click="toPage('02')">02变化侦测篇</Button>
        </div>
        <div>
            <Button class="card" @click="toPage('03')">03虚拟Dom篇</Button>
            <Button class="card" @click="toPage('04')">04模板编译篇</Button>
            <Button class="card" @click="toPage('05')">05生命周期篇</Button>
        </div>
        <div>
            暂6篇，约1.5万字。@扁扁灵
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
      showModal(){
        this.modal=true;
      },
      toPage(path) {
        switch (path) {
          case "30":
            path='http://note.youdao.com/noteshare?id=5c6aef7f7b5b320b92359a98aea8b659&sub=A6FCC9AFD1C340F2A3220CE60E454181';
            break;
          case "00":
            path='http://note.youdao.com/noteshare?id=aab3959a4f14e2d9d6eb92a036ef50a4&sub=e869ec47012c324ec6ea0430b3f48f3f';
            break;
          case "01":
            path='http://note.youdao.com/noteshare?id=d54d639cc05eeb3d5bae3b05d715f5db&sub=6E2E9D049CE34B658BCC2F68C97F4744';
            break;
          case "02":
            path='http://note.youdao.com/noteshare?id=477cbac4b6a4a4c301dfe591ea498c4b&sub=WEB8bacdc58a51d99e64821826e88461d06';
            break;
          case "03":
            path='http://note.youdao.com/noteshare?id=907e89d07094f9c4367ccd39e451745b&sub=WEB3c7b88dc3403d33dae25133b0b261ab5';
            break;
          case "04":
            path='http://note.youdao.com/noteshare?id=48859cbce03e0ac3dd1863223599c3d6&sub=3641962FD1D64138B83813BC61868380';
            break;
            case "05":
              path='http://note.youdao.com/noteshare?id=5e642062faf2c3bca9284ed06ab25ca6&sub=6640B59D74734C0F81BC2B38A0862E2F';
              break;
          default:
            path=''
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