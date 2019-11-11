<template>
  <div class="video-box">
    <div class="box-header">
      <h2 class="box-title">视频</h2>
      <div class="type-more">
        <a href="https://www.mi.com/video/" target="_blank">
          <span>查看全部</span>
          <i class="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
    <ul class="box-content">
      <li class="video-item brick-item"
      v-for="(item, index) in videoData"
      :key="index">
        <a href="javascript: void(0);" title="点击播放视频" @click="playVideo(item)">
          <img :src="item.src" :alt="item.value">
          <span class="play">
            <i class="fa fa-play"></i>
          </span>
          <h3 class="name ellipsis">{{item.value}}</h3>
          <span class="desc ellipsis">{{item.desc}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import bus from '@/bus.js'

export default {
  data () {
    return {
      videoData: [
        {value: 'Redmi Note 8 系列发布会', desc: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a134c9f8fffb85a47ac397e7eeba7e8.jpg', videourl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/df3dc1da003b7db992e902f653326476.mp4'},
        {value: '小米CC9', desc: '深蓝星球', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1541da85ac8b204056374641eee24726.jpg', videourl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a2e31bf18e8fb5abd2a32ea93f0d46b.mp4'},
        {value: 'Redmi Note 7系列', desc: '镜花水月', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af835147320dafa808331f156222223e.jpg', videourl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0bfbd7781fc7531592994b82f2716006.mp4'},
        {value: '黑鲨游戏手机2 Pro', desc: '指尖主宰 发布会', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c2e9a7fc809f7aeac30bf538baf8f156.jpg', videourl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f51a274a73db915a9623ccdfd35f678.mp4'},
      ]
    }
  },
  methods: {
    playVideo (item) {
      // 发送数据
      bus.$emit('videoWindowEvent', item);
    }
  }
}
</script>

<style lang="less">
  .video-box {
    position: relative;
    width: 1226px;
    height: auto;
    margin: 0 auto;
    .box-content {
      margin-bottom: 12px;
    }
  }

  .video-item {
    width: 296px;
    height: 285px;
    margin-left: 14px;
    margin-bottom: 14px;
    text-align: center;
    background: #fff;
    transition: all .2s linear;
    &:first-child {
      margin-left: 0;
    }

    a {
      display: inline-block;
      height: 100%;
      position: relative;
      .play {
        position: absolute;
        left: 20px;
        top: 146px;
        width: 36px;
        height: 24px;
        border: 2px solid #fff;
        border-radius: 12px;
        background-color: #424242;
        background-color: rgba(0,0,0,.6);
        color: #fff;
        text-align: center;
        transition: all .2s;
        overflow: hidden;
        i {
          vertical-align: middle;
          font-size: 10px;
        }
      }

      img {
        width: 296px;
        height: 180px;
        margin-bottom: 28px;
      }

      .name {
        margin: 0 14px 6px;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        color: #333;
      }

      .desc {
        height: 18px;
        margin: 0 14px;
        font-size: 12px;
        color: #b0b0b0;
      }

      &:hover .play {
        background-color: #ff6700;
        border-color: #ff6700;
      }
    }
  }
</style>