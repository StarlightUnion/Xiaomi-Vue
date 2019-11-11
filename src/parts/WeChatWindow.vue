<template>
  <transition name="window-trans">
    <div class="wechat-window window-container" v-show="windowFlag">
      <transition name="content-trans">
        <div class="window-content" v-show="contentFlag">
          <div class="window-header">
            <span class="name">小米手机官方微信二维码</span>
            <span class="close" @click="close">×</span>
          </div>
          <div class="window-body">
            <img src="https://i1.mifile.cn/f/i/17/site/weixin.jpg">
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import bus from '@/bus.js'

export default {
  data () {
    return {
      windowFlag: false,
      contentFlag: false,
    }
  },
  methods: {
    receive () {
      bus.$on('weChatWindowEvent', (flag) => {
        this.windowFlag = true;
        this.contentFlag = true;
      })
    },
    close () {
      this.contentFlag = false;
    }
  },
  watch: {
    contentFlag (newvalue, oldvalue) {
      if (!newvalue) {
        setTimeout(() => {
          this.windowFlag = false;
        }, 300);
      }
    }
  },
  mounted () {
    this.receive();
  }
}
</script>

<style lang="less">
  .wechat-window .window-content {
    position: absolute;
      width: 720px;
      height: 446px;
      left: calc(50% - 360px);
      top: calc(50% - 223px);
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,.3);
      overflow: hidden;
      .window-body {
        width: 100%;
        height: calc(100% - 60px);
        background-color: #fff;
        padding: 20px;
        img {
          width: 680;
          height: 340px;
        }
      }
  }
</style>