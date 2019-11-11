<template>
  <transition name="window-trans">
    <div class="location-window window-container" v-show="windowFlag">
      <transition name="content-trans">
        <div class="window-content" v-show="contentFlag">
          <div class="window-header">
            <span class="name">Select location or language</span>
            <span class="close" @click="close">×</span>
          </div>
          <div class="window-body">
            <h3>Welcome to Mi.com</h3>
            <p>Please select location or language</p>
            <ul class="language-boxs">
              <li class="lang-item" v-for="(item, index) in languageData" :key="index">
                <a :href="item.url" target="_blank">{{item.value}}</a>
              </li>
            </ul>
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
      languageData: [
        {value: '繁体中文(HK)', url: 'https://www.mi.com/hk/'},
        {value: '繁体中文(TW)', url: 'https://www.mi.com/tw/'},
        {value: 'Singapore', url: 'https://www.mi.com/sg/'},
        {value: 'Malaysia', url: 'https://www.mi.com/my/'},
        {value: 'Philippines', url: 'https://www.mi.com/ph/'},
        {value: 'India', url: 'https://www.mi.com/in/'},
        {value: 'Indonesia', url: 'https://www.mi.com/id/'},
        {value: 'GlobalHome', url: 'https://www.mi.com/global/'},
        {value: 'MENA', url: 'https://www.mi.com/mena/'},
        {value: 'Poland', url: 'https://www.mi.com/pl/'},
        {value: 'Ukraine', url: 'https://www.mi.com/ua/'},
        {value: 'Russia', url: 'https://www.mi.com/ru/'},
        {value: 'Vietnam', url: 'https://www.mi.com/vn/'},
        {value: 'Mexico', url: 'https://www.mi.com/mx/'},
        {value: 'Korea', url: 'https://www.mi.com/kr/'},
        {value: 'Egypt', url: 'https://www.mi.com/eg/'},
        {value: 'Thailand', url: 'https://www.mi.com/th/'},
        {value: 'Spain', url: 'https://www.mi.com/es/'},
        {value: 'UnitedStates', url: 'https://www.mi.com/us/'},
        {value: 'Italy', url: 'https://www.mi.com/it/'},
        {value: 'France', url: 'https://www.mi.com/fr/'},
        {value: 'Bangladesh', url: 'https://www.mi.com/bd/'},
        {value: 'UnitedKingdom', url: 'https://www.mi.com/uk/'},
        {value: 'Chile', url: 'https://www.mi.com/cl/'},
        {value: 'Nepal', url: 'https://www.mi.com/np/'},
        {value: 'SriLanka', url: 'https://www.mi.com/lk/'},
        {value: 'Turkey', url: 'https://www.mi.com/tr/'},
        {value: 'Netherlands', url: 'https://www.mi.com/nl/'},
        {value: 'Brazil', url: 'https://www.mi.com/br/'}
      ]
    }
  },
  methods: {
    receive () {
      bus.$on('locationWindowEvent', (flag) => {
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
  .location-window .window-content {
    position: absolute;
    width: 840px;
    height: 566px;
    left: calc(50% - 420px);
    top: calc(50% - 283px);
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    overflow: hidden;
    .window-body {
      width: 100%;
      height: calc(100% - 60px);
      background-color: #fff;
      padding: 20px;
    }
  }

  .window-body {
    h3 {
      color: #424242;
      font-size: 32px;
      line-height: 48px;
    }

    p {
      color: #424242;
      font-size: 18px;
      line-height: 27px;
    }

    .language-boxs {
      width: 100%;
      margin: 30px auto 0;
      display: flex;
      flex-flow: wrap;
      overflow: hidden;
      .lang-item {
        margin: 0 10px 20px;
        width: 140px;
        height: 40px;
        font-size: 14px;
        font-weight: 600;
        line-height: 40px;
        background-color: #eee;
        a {
          display: inline-block;
          color: #757575;
        }

        &:hover {
          background-color: #ff6700;
          a {
            color: #fff;
          }
        }
      }
    }
  }
</style>