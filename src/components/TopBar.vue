<template>
  <header class="top-bar">
    <div class="bar-container">
      <!-- 内容栏 -->
      <div class="nav-container">
        <ul class="nav">
          <li class="nav-item" v-for="(item, index) in navsData" :key="index">
            <div class="item-style" v-if="item.value === '小米商城'">
              <a :href="item.url">{{item.value}}</a>
            </div>
            <div class="item-style" @click="showWindow" v-if="item.value === 'Select Location'">
              <a :href="item.url">{{item.value}}</a>
            </div>
            <div class="item-style" v-if="item.value === '下载app'"
            @mouseenter="downloadQRCodeShow"
            @mouseleave="downloadQRCodeHide">
              <a target="_blank"
              :href="item.url">
                {{item.value}}
              </a>
              <span class="triangle" v-show="dowmloadFlag"></span>
              <div class="app-qrcode-container">
                <transition name="qrcode-trans">
                  <div class="app-qrcode" v-show="dowmloadFlag">
                    <img src="https://i1.mifile.cn/f/i/17/appdownload/download.png?1" alt="小米商城">
                    <span>小米商城APP</span>
                  </div>
                </transition>
              </div>
            </div>
            <div class="item-style" v-if="item.value !== '小米商城' && item.value !== '下载app' && item.value !== 'Select Location'">
              <a :href="item.url" target="_blank">{{item.value}}</a>
            </div>
            <span class="nav-span" v-show="index !== navsData.length - 1">|</span>
          </li>
        </ul>
      </div>
      <!-- 注册栏 -->
      <div class="nav-login">
        <ul class="nav-login-item">
          <li class="nav-item" v-for="(item, index) in loginData" :key="index">
            <template v-if="item.value === '消息通知'">
              <a :href="item.url" style="margin-left: 5px;" target="_blank">{{item.value}}</a>
            </template>
            <template v-else>
              <a :href="item.url" target="_blank">{{item.value}}</a>
            </template>
            <span class="nav-span" v-show="index !== loginData.length - 1">|</span>
          </li>
        </ul>
        <div class="nav-cart fa"
        @mouseenter="cartListShow"
        @mouseleave="cartListHide">
          <div class="nav-cart-container" :class="{'active': showFlag}">
            <i class="fa fa-shopping-cart icon-cart"></i>
            <a href="http://static.mi.com/cart/">
              购物车(
              <span>0</span>
                )
            </a>
          </div>
          <!-- <transition
            name="fade"
            enter-class="fade-enter"
            enter-to-class="fade-enter-to"
            leave-class="fade-leave"
            leave-to-class="fade-leave-to"
            enter-active-class="fade-enter-active"
            leave-active-class="fade-leave-active"
          > -->
          <transition name="fade-in">
            <div class="nav-cart-list" v-show="showFlag">
              <div class="cart-list-word">购物车中还没有商品，赶快选购吧！</div>
            </div>
          </transition>
			  </div>
      </div>
    </div>
  </header>
</template>

<script>
import bus from '@/bus.js'
import { clearInterval } from 'timers';

export default {
  data () {
    return {
      navsData: [
        {value: '小米商城', url: 'https://www.mi.com/index.html'},
        {value: 'MIUI', url: 'https://www.miui.com/'},
        {value: 'loT', url: 'https://iot.mi.com/index.html'},
        {value: '云服务', url: 'https://i.mi.com/'},
        {value: '金融', url: 'https://jr.mi.com?from=micom'},
        {value: '有品', url: 'https://youpin.mi.com/'},
        {value: '小爱开放平台', url: 'https://xiaoai.mi.com/'},
        {value: '企业团购', url: 'https://qiye.mi.com/'},
        {value: '资质证照', url: 'https://www.mi.com/aptitude/list/?id=41'},
        {value: '协议规则', url: 'https://www.mi.com/aptitude/list/'},
        {value: '下载app', url: 'https://www.mi.com/appdownload/'},
        {value: 'Select Location', url: 'javascript:void(0);'}
      ],
      loginData: [
        {value: '登陆', url: 'http://order.mi.com/site/login?redirectUrl=http://www.mi.com/index.html'},
        {value: '注册', url: 'https://account.xiaomi.com/pass/register'},
        {value: '消息通知', url: 'http://order.mi.com/message/list'}
      ],
      timer: '',
      codeTimer: '',
      showFlag: false,
      dowmloadFlag: false
    }
  },
  methods: {
    cartListShow ()  {
      this.showFlag = true;
      clearInterval(this.timer);
    },
    cartListHide () {
      // this.showFlag = false

      this.timer = setTimeout(() => {
        this.showFlag = false;
      }, 300);
    },
    downloadQRCodeShow () {
      this.dowmloadFlag = true;
      clearInterval(this.codeTimer);
    },
    downloadQRCodeHide () {
      // this.dowmloadFlag = false;

      this.codeTimer = setTimeout(() => {
        this.dowmloadFlag = false;
      }, 300);
    },
    showWindow () {
      bus.$emit('locationWindowEvent', true);
    }
  }
}
</script>

<style lang="less">
.top-bar {
  width: 100%;
  height: 40px;
  background-color: #333;
  .bar-container {
    width: 1226px;
    font-size: 12px;
    font-weight: 500;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .nav-container {
      display: inline-block;
      .nav-item {
        .item-style {
          a {
            display: inline-block;
            font-size: 12px;
            color: #b0b0b0;
            line-height: 40px;
            text-decoration: none;
          }
          a:hover {
            color: #ffffff;
          }
        }
      }
    }
  }
}

.nav-login {
  display: flex;
  .nav-login-item {
    a {
      font-size: 12px;
      color: #b0b0b0;
      line-height: 40px;
      text-decoration: none;
    }
    a:hover {
      color: #ffffff;
    }
  }
  .nav-cart {
    width: 120px;
    background: #424242;
    height: 40px;
    line-height: 40px;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    .nav-cart-container {
      line-height: 40px;
      i {
        font-size: 20px;
        color: #b0b0b0;
      }
      a {
        color: #b0b0b0;
        text-decoration: none;
        line-height: 40px;
        margin-left: 5px;
      }
      span {
        color: #b0b0b0;
      }
      &:hover {
        background: #fff;
        a, .icon-cart, span {
          color: #ff6700;
        }
      }
      .active {
        background: #fff;
        a {
          color: #ff6700;
        }
        span {
          color: #ff6700;
        }
      }
    }
    .nav-cart-list {
      position: absolute;
      right: 0;
      top: 40px;
      width: 316px;
      background: #fff;
      box-shadow: 0 0 5px -1px #ccc;
      z-index: 10;
      overflow: hidden;
      .cart-list-word {
        height: 96px;
        line-height: 96px;
        text-align: center;
        color: black;
      }
    }
  }
}

.nav-span {
  color: #424242;
  font-family: sans-serif;
  line-height: 40px;
  margin: 0 5px;
}

.nav-item {
  height: 40px;
  line-height: 40px;
  display: inline-block;
  position: relative;
  .item-style {
    display: inline-block;
    .triangle {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0;
      margin-left: -8px;
      border-width: 0 8px 8px;
      border-style: solid;
      border-color: transparent transparent #fff;
    }

    .app-qrcode-container {
      position: relative;
      display: inline-block;
      .app-qrcode {
        position: absolute;
        display: inline-block;
        top: 16px;
        left: 50%;
        width: 124px;
        background: #fff;
        margin-left: -75px;
        box-shadow: 0 3px 3px #aaa;
        overflow: hidden;
        z-index: 16;
        cursor: pointer;

        img {
          display: block;
          margin: 18px auto 12px;
          width: 90px;
          height: 90px;
        }

        span {
          display: block;
          text-align: center;
          font-size: 14px;
          color: #333;
          line-height: 1;
          margin-bottom: 12px;
        }
      }
    }
  }
}

// 购物车
.fade-in-enter-active, .fade-in-leave-active {
  transition: all .20s ease;
  height: 96px;
}

.fade-in-enter, .fade-in-leave-to {
  height: 0;
}

.fade-in-enter-to, .fade-in-leave {
  height: 96px;
}

// app二维码
.qrcode-trans-enter-active, .qrcode-trans-leave-active {
  transition: all .3s ease;
  height: 146px;
}

.qrcode-trans-enter, .qrcode-trans-leave-to {
  height: 0;
}

.qrcode-trans-enter-to, .qrcode-trans-leave {
  height: 146px;
}
</style>