<template>
  <div class="tool-bar">
    <template v-for="(item, index) in barData">
      <a href="#" :key="index"
      @mouseenter="iconHover(item)"
      @mouseleave="iconRecovery(item)"
      v-if="index === 0">
        <div class="tool-icon">
          <img :src="item.src" v-show="!item.hover">
          <img :src="item.hsrc" v-show="item.hover">
        </div>
        <div class="tool-qrcode" v-show="item.hover">
          <img src="https://i8.mifile.cn/b2c-mimall-media/93650133310ec1c385487417a472a26c.png">
          <span>手机扫一扫一分赢好礼</span>
        </div>
      </a>
      <a :href="item.url"
      :key="index"
      @mouseenter="iconHover(item)"
      @mouseleave="iconRecovery(item)"
      v-show="scrollTop > windowHeight"
      v-if="index === barData.length - 1">
        <div class="tool-icon">
          <img :src="item.src" v-show="!item.hover">
          <img :src="item.hsrc" v-show="item.hover">
        </div>
        <span class="tool-tip" v-show="item.hover">{{item.value}}</span>
      </a>
      <a :href="item.url" target="_blank"
      :key="index"
      @mouseenter="iconHover(item)"
      @mouseleave="iconRecovery(item)"
      v-if="index !== 0 && index !== barData.length - 1">
        <div class="tool-icon">
          <img :src="item.src" v-show="!item.hover">
          <img :src="item.hsrc" v-show="item.hover">
        </div>
        <span class="tool-tip" v-show="item.hover">{{item.value}}</span>
      </a>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toolStatus: false,
      windowHeight: 0,
      scrollTop: 0,
      barData: [
        {value: '手机App', hover: false, url: '#', src: 'https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png', hsrc: 'https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png'},
        {value: '个人中心', hover: false, url: 'https://order.mi.com/portal', src: 'https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png', hsrc: 'https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png'},
        {value: '售后服务', hover: false, url: 'https://service.order.mi.com/apply/front', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png', hsrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png'},
        {value: '人工客服', hover: false, url: 'https://support.kefu.mi.com/', src: 'https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png', hsrc: 'https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png'},
        {value: '购物车（0）', hover: false, url: 'https://static.mi.com/cart/', src: 'https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png', hsrc: 'https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png'},
        {value: '回顶部', hover: false, url: '#', src: 'https://i1.mifile.cn/f/i/2018/home/totop.png', hsrc: 'https://i1.mifile.cn/f/i/2018/home/totop_hover.png'}
      ]
    }
  },
  methods: {
    // 滚动出去部分的高度
    getScrollTop () {
      let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
      if (document.body) {
        bodyScrollTop = document.body.scrollTop;
      }
      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
      }
      scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
      return scrollTop;
    },
    // 页面总高度
    getScrollHeight () {
      let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
      if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
      }
      if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
      }
      scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
      return scrollHeight;
    },
    // 窗口高度
    getWindowHeight () {
      let windowHeight = 0;
      if (document.compatMode === "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
      } else {
        windowHeight = document.body.clientHeight;
      }
      return windowHeight;
    },
    iconHover (item) {
      item.hover = true;
    },
    iconRecovery (item) {
      item.hover = false;
    }
  },
  mounted () {
    this.windowHeight = this.getWindowHeight();
    window.onresize = () => {
      this.windowHeight = this.getWindowHeight();
    };
    window.onscroll = () => {
      this.scrollTop = this.getScrollTop();
    }
  }
}
</script>

<style lang="less">
  .tool-bar {
    position: fixed;
    height: 266px;
    left: 50%;
    right: auto;
    margin-left: 613px;
    bottom: 40px;
    z-index: 99;
    a {
      display: block;
      position: relative;
      width: 27px;
      height: 42px;
      background-color: #fff;
      border: 1px solid #f5f5f5;
      text-align: center;
    }

    a:last-child {
      margin-top: 14px;
    }
  }

  .tool-icon {
    width: 20px;
    height: 20px;
    padding-top: 10px;
    margin: 0 auto 8px;
    img {
      width: 20px;
      height: 20px;
      opacity: 1;
      transition: opacity .3s;
    }
  }

  .tool-tip {
    display: block;
    position: absolute;
    transform: translate3d(-115%,-50%,0);
    color: #757575;
    left: 0;
    top: 50%;
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-align: center;
    white-space: nowrap;
    transition: color .3s;
    &:after {
      border-color: rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #fff;
      right: -12px;
      z-index: 2;
    }

    &:before {
      border-color: rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #f5f5f5;
      right: -13px;
      z-index: 1;
    }
  }

  .tool-qrcode {
    position: absolute;
    text-align: center;
    left: 0;
    top: 0;
    padding: 14px;
    background: #fff;
    border: 1px solid #f5f5f5;
    transition: opacity .3s;
    transform: translate3d(-110%,0,0);
    opacity: 1;
    img {
      display: block;
      width: 100px;
      height: 100px;
      margin: 6px auto;
    }

    span {
      display: block;
      width: 82px;
      margin: 14px auto 0;
      font-size: 14px;
      color: #757575;
      text-align: center;
    }

    &:after {
      right: -12px;
      border-color: rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #fff;
      z-index: 2;
      top: 10px;
      border-width: 6px;
    }

    &:before {
      right: -13px;
      border-color: rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #f5f5f5;
      z-index: 1;
      top: 10px;
      border-width: 6px;
    }
  }

  .tool-tip:after, .tool-tip:before {
    content: "";
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    margin-top: -6px;
    border-width: 6px;
    border-style: solid;
    overflow: hidden;
  }

  .tool-qrcode:after, .tool-qrcode:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    overflow: hidden;
  }
</style>