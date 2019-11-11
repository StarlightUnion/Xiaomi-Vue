<template>
  <div class="site-info">
    <div class="info-container">
      <div class="logo-footer">
        <img src="../assets/image/logo-footer.png">
      </div>
      <div class="info-footer">
        <ul class="info-link">
          <li class="info-item" v-for="(item, index) in footerNavs" :key="index">
            <template v-if="item.value === 'Select Location'">
              <a :href="item.url" @click="showLocationWindow">{{item.value}}</a>
            </template>
            <template v-else>
              <a :href="item.url" target="_blank">{{item.value}}</a>
              <span class="nav-span">|</span>
            </template>
          </li>
        </ul>
        <div class="info-license">
          <template v-for="(item, index) in licenseInfo">
            <template v-if="item.url">
              <a :key="index" :href="item.url">{{item.value}}</a>
            </template>
            <template v-else>
              <span :key="index">{{item.value}}</span>
            </template>
            <br :key="item.id" v-if="item.br">
          </template>
        </div>
        <div class="info-logo">
          <a target="_blank"
          v-for="(item, index) in logoInfo"
          :key="index"
          :href="item.url">
            <img :src="item.src" :alt="item.value">
          </a>
        </div>
      </div>
    </div>
    <div class="slogan-container"></div>
  </div>
</template>

<script>
import bus from '@/bus.js'

export default {
  data () {
    return {
      footerNavs: [
        {value: '小米商城', url: 'https://www.mi.com/index.html'},
        {value: 'MIUI', url: 'https://www.miui.com/'},
        {value: '米家', url: 'https://home.mi.com/index.html'},
        {value: '米聊', url: 'http://www.miliao.com/'},
        {value: '多看', url: 'https://www.duokan.com/'},
        {value: '游戏', url: 'http://game.xiaomi.com/'},
        {value: '路由器', url: 'http://www.miwifi.com/'},
        {value: '米粉卡', url: 'https://www.mi.com/micard/'},
        {value: '政企服务', url: 'https://b.mi.com/?client_id=180100031058&masid=17409.0358'},
        {value: '小米天猫店', url: 'https://xiaomi.tmall.com/'},
        {value: '小米集团隐私政策', url: 'https://privacy.mi.com/all/zh_CN/'},
        {value: '小米商城隐私政策', url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ded8d0e4a77d.html'},
        {value: '小米商城用户协议', url: 'https://www.mi.com/about/user-agreement/'},
        {value: '问题反馈', url: 'https://static.mi.com/feedback/'},
        {value: '廉正举报', url: 'https://www.mi.com/jiancha/'},
        {value: '诚信合规', url: 'https://integrity.mi.com/'},
        {value: 'Select Location', url: 'javascript:void(0);'},
      ],
      licenseInfo: [
        {id: 'rwvge', value: '©', url: '', br: false},
        {id: 'jmyum', value: 'mi.com', url: '#', br: false},
        {id: 'agesr', value: '京ICP证110507号', url: '', br: false},
        {id: 'th345', value: '京ICP备10046444号', url: 'http://beian.miit.gov.cn/', br: false},
        {id: '24rtw', value: '京公网安备11010802020134号', url: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134', br: false},
        {id: '6k7i6', value: '京网文[2017]1530-131号', url: 'https://www.mi.com/culture-license/', br: true},
        {id: 'mjk6u', value: '（京）网械平台备字（2018）第00005号', url: 'https://www.mi.com/medical/record/', br: false},
        {id: 'l88o9', value: '互联网药品信息服务资格证 (京) -非经营性-2014-0090', url: 'https://www.mi.com/medical/qualification/', br: false},
        {id: 'qgi42', value: '营业执照', url: 'https://www.mi.com/business-license/', br: false},
        {id: 'nvshe', value: '医疗器械公告', url: 'https://www.mi.com/medical/list/', br: true},
        {id: 'jqioe', value: '增值电信业务许可证', url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af5b8ef38e7d57c5ee7fa4289ccf4df8.png', br: false},
        {id: 'mvqio', value: '网络食品经营备案（京）【2018】WLSPJYBAHF-12', url: '', br: false},
        {id: '9340f', value: '食品经营许可证', url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fe7383e11127caea371f17156f429a1e.png', br: true},
        {id: 'jiuie', value: '违法和不良信息举报电话：185-0130-1238 ', url: '', br: false},
        {id: '9203j', value: '知识产权侵权投诉', url: 'https://www.mi.com/static/intellectual/index.html', br: false},
        {id: 'ijdqo', value: ' 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试', url: '', br: false}
      ],
      logoInfo: [
        {value: 'TRUSTe Privacy Certification', src: 'https://i1.mifile.cn/f/i/17/site/truste.png', url: 'https://privacy.truste.com/privacy-seal/validation?rid=4fc28a8c-6822-4980-9c4b-9fdc69b94eb8&lang=zh-cn'},
        {value: '诚信网站', src: 'https://s01.mifile.cn/i/v-logo-2.png', url: 'https://search.szfw.org/cert/l/CX20120926001783002010'},
        {value: '可信网站', src: 'https://s01.mifile.cn/i/v-logo-1.png', url: 'https://ss.knet.cn/verifyseal.dll?sn=e12033011010015771301369&ct=df&pa=461082'},
        {value: '网上交易保障中心', src: 'https://s01.mifile.cn/i/v-logo-3.png', url: 'http://www.315online.com.cn/member/315140007.html'},
        {value: '诚信经营 放心消费', src: 'https://i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png', url: 'https://www.mi.com/service/buy/commitment/'},
      ]
    }
  },
  methods: {
    showLocationWindow () {
      bus.$emit('locationWindowEvent', true);
    }
  }
}
</script>

<style lang="less">
  .site-info {
    position: relative;
    width: 1226px;
    height: auto;
    margin: 0 auto;
    padding: 30px 0;
    font-size: 12px;
    .info-container {
      display: flex;
    }

    .slogan-container {
      margin: 30px auto 0;
      width: 267px;
      height: 19px;
      background: url('../assets/image/slogan2016.png') no-repeat center 0;
    }
  }

  .logo-footer {
    height: 57px;
    img {
      width: 57px;
      height: 57px;
      margin-right: 10px;
    }
  }

  .info-footer .info-link {
    display: flex;
    .info-item {
      height: 18px;
      line-height: 18px;
      display: inline-block;
      a {
        display: inline-block;
        color: #757575;
        &:hover {
          color: #ff6709;
        }
      }

      .nav-span {
        line-height: 18px;
      }
    }
  }

  .info-footer .info-license {
    text-align: left;
    a, span {
      margin-right: 4px;
      line-height: 18px;
      color: #b0b0b0;
    }

    a:hover {
      color: #ff6709;
    }
  }

  .info-footer .info-logo {
    display: flex;
    text-align: left;
    margin-top: 4px;
    a {
      display: block;
      img{
        width: auto;
        height: 28px;
      }
    }
  }
</style>