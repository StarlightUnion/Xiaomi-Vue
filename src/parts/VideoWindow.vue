<template>
  <transition name="window-trans">
    <div class="video-window window-container" v-show="windowFlag">
      <transition name="content-trans">
        <div class="video-window" v-show="videoFlag">
          <div class="window-header">
            <span class="name">{{videoItem.value}}</span>
            <span class="close" @click="close">×</span>
          </div>
          <video :src="videoItem.videourl" ref="video" preload="auto" controls></video>
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
      videoItem: '',
      videoFlag: false,
      windowFlag: false,
    }
  },
  methods: {
    receive() {
      bus.$on('videoWindowEvent', (data) => {
        this.windowFlag = true;
        this.videoFlag = true;
        this.videoItem = data;
      })
    },
    close () {
      this.$refs.video.pause();// vue操作DOM
      // this.windowFlag = false;
      this.videoFlag = false;
    }
  },
  watch: {
    videoFlag (newvalue, oldvalue) {
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
  .window-container {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.3);
    transition: opacity .2s;
    .video-window {
      position: absolute;
      width: 880px;
      height: 492px;
      left: calc(50% - 440px);
      top: calc(50% - 231px);
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,.3);
      overflow: hidden;

      video {
        width: 100%;
        height: 432px;
        background-color: #000;
      }
    }
  }

  .window-header {
    height: 60px;
    padding: 14px 20px;
    line-height: 32px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    .name {
      font-size: 18px;
      font-weight: 400;
      color: #424242;
    }

    .close {
      vertical-align: middle;
      width: 32px;
      line-height: 32px;
      font-size: 24px;
      font-weight: 400;
      border-radius: 30px;
      color: #757575;
      background-color: #f5f5f5;
      transition: all .2s;
      cursor: pointer;
      &:hover {
        color: #fff;
        background: #e53935;
      }
    }
  }

  // 窗口
  .window-trans-enter-active, .window-trans-leave-active {
    transition: all .3s ease-out;
    opacity: 1;
  }

  .window-trans-enter, .window-trans-leave-to {
      opacity: 0;
    }

  .window-trans-enter-to, .window-trans-leave {
    opacity: 1;
  }

  // 视频
  .content-trans-enter-active, .content-trans-leave-active {
    transition: all .3s ease-out;
    transform: translateY(0%);
    opacity: 1;
  }

  .content-trans-enter, .content-trans-leave-to {
      transform: translateY(-10%);
      opacity: 0;
    }

  .content-trans-enter-to, .content-trans-leave {
    transform: translateY(0%);
    opacity: 1;
  }
</style>