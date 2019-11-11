<template>
  <div class="flash-sale">
    <div class="box-header">
      <h2 class="box-title">小米闪购</h2>
      <div class="slide-control">
        <span class="slide-left slide-button" @click="prev">
          <i class="fa fa-angle-left"></i>
        </span>
        <span class="divider"></span>
        <span class="slide-right slide-button" @click="next">
          <i class="fa fa-angle-right"></i>
        </span>
      </div>
    </div>
    <div class="box-sale">
      <div class="sale-count-down">
        <div class="sale-round">{{round}} 场</div>
        <img src="../assets/image/flash.jpg" alt="小米闪购">
        <div class="time-left">距离结束还有</div>
        <div class="count-down">
          <span>{{hour}}</span>
          <i>:</i>
          <span>{{minute}}</span>
          <i>:</i>
          <span>{{second}}</span>
        </div>
      </div>
      <slide :slideItems="slideItems" ref="slide"></slide>
    </div>
  </div>
</template>

<script>
import Slide from '../parts/Slide'

export default {
  data () {
    return {
      round: '24:00',
      hour: '',
      minute: '',
      second: '',
      countDownTimer: '',
      slideItems: [
        {value: '高品质多功能头戴耳机', desc: '我的私人KTV', newPrice: '199', oldPrice: '249', topColor: '#ffac13', src: 'https://i8.mifile.cn/a1/pms_1551343984.14546114.jpg', url: 'https://www.mi.com/seckill/'},
        {value: 'Yeelight LED灯泡 彩光版', desc: '亮度自由调节', newPrice: '1', oldPrice: '99', topColor: '#83c44e', src: 'https://i8.mifile.cn/v1/a1/T1HPZgBTAv1RXrhCrK.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '飞利浦智睿筒灯 可调色温版 白色', desc: '冷暖随心调', newPrice: '1', oldPrice: '59', topColor: '#2196f3', src: 'https://i8.mifile.cn/a1/pms_1524452958.92865446.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米AI音箱', desc: '听音乐、语音遥控家电', newPrice: '249', oldPrice: '299', topColor: '#e53935', src: 'https://i8.mifile.cn/b2c-mimall-media/e277547c6e3329303dd2c20a327424c4.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米笔记本电脑 15.6" i3 4G 128G 深空灰', desc: '全面均衡的国民轻薄本', newPrice: '2799', oldPrice: '3399', topColor: '#00c0a5', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd2aa2dcad6440b469c22e27db9b6236.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米路由器4C 白色', desc: '300M单频，高增益4天线', newPrice: '59', oldPrice: '99', topColor: '#ffac13', src: 'https://i8.mifile.cn/a1/pms_1532604005.80875371.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米小爱音箱 Play（白色）量产版 白色', desc: '听音乐、语音遥控家电', newPrice: '99', oldPrice: '169', topColor: '#83c44e', src: 'https://i8.mifile.cn/a1/pms_1560230039.28979252.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '米家空气净化器Pro', desc: '大空间，快循环', newPrice: '1099', oldPrice: '1499', topColor: '#2196f3', src: 'https://i8.mifile.cn/v1/a1/b315ba2c-3dc0-1352-3fbf-b23ffad1bb0f.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '米家驱蚊器基础版 3个装 白色', desc: '3个装 长效驱蚊', newPrice: '99', oldPrice: '129', topColor: '#e53935', src: 'https://i8.mifile.cn/a1/pms_1557804685.13891176.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米笔记本电脑 15.6" i3 4G 256G 集显 白色', desc: '全面均衡的国民轻薄本', newPrice: '2999', oldPrice: '3699', topColor: '#00c0a5', src: 'https://i8.mifile.cn/a1/pms_1553928054.21241826.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米手环3 NFC版 黑色', desc: '能刷公交卡的手环', newPrice: '179', oldPrice: '199', topColor: '#ffac13', src: 'https://i8.mifile.cn/a1/pms_1536833428.43292402.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米WiFi放大器Pro 黑色', desc: '轻松扩展WiFi信号', newPrice: '59', oldPrice: '79', topColor: '#83c44e', src: 'https://i8.mifile.cn/v1/a1/9085cddd-530a-0bf0-8b09-74e96fa97cc9.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '米家飞利浦蓝牙夜灯 白色', desc: '感知照亮，多个组合联动', newPrice: '69', oldPrice: '79', topColor: '#2196f3', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ae1af0084c22ed9d78828f9a534ad15.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米随身蓝牙音箱 星空灰', desc: '全金属外壳，内置麦克风', newPrice: '58', oldPrice: '69', topColor: '#e53935', src: 'https://i8.mifile.cn/v1/a1/T17aJ_BbDv1RXrhCrK.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米游戏本15.6"  8代i7 GTX1060 16G 512G SSD 灰色', desc: '性能怪兽 信仰级游戏体验', newPrice: '7499', oldPrice: '8999', topColor: '#00c0a5', src: 'https://i8.mifile.cn/a1/pms_1557312623.98719913.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米米家滤水壶', desc: '高效过滤 享安心好水', newPrice: '99', oldPrice: '129', topColor: '#ffac13', src: 'https://i8.mifile.cn/a1/pms_1528790321.27625165.png', url: 'https://www.mi.com/seckill/'},
        {value: '小米净水器 白色', desc: '无垢直饮健康纯水', newPrice: '899', oldPrice: '999', topColor: '#83c44e', src: 'https://i8.mifile.cn/a1/pms_1565506142.80495591.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米路由器Pro 星空灰', desc: '全新一代智能家庭中心', newPrice: '399', oldPrice: '499', topColor: '#2196f3', src: 'https://i8.mifile.cn/v1/a1/fa55bc47-3fb8-c007-9195-fe1cf628030c.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '净化器MAX滤芯', desc: '高效过滤 PM2.5', newPrice: '349', oldPrice: '399', topColor: '#e53935', src: 'https://i8.mifile.cn/a1/pms_1564038314.72163178.jpg', url: 'https://www.mi.com/seckill/'},
        {value: 'USB-C至VGA 千兆网口多功能转接器 白色', desc: '小巧便携，节省桌面空间', newPrice: '178', oldPrice: '199', topColor: '#00c0a5', src: 'https://i8.mifile.cn/v1/a1/f25d7464-8f9e-15e0-6652-29dd3b9187a5.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '米家台灯Pro 白色', desc: '全桌面立体光照', newPrice: '299', oldPrice: '349', topColor: '#ffac13', src: 'https://i8.mifile.cn/a1/pms_1545707508.47641362.png', url: 'https://www.mi.com/seckill/'},
        {value: '小米USB-C电源适配器 白色', desc: '多协议快充 / USB-C接口输出 / 可折叠插脚', newPrice: '118', oldPrice: '129', topColor: '#83c44e', src: 'https://i8.mifile.cn/a1/pms_1528266159.29925871.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米水质TDS检测笔 白色', desc: '准确检测家中水质纯度', newPrice: '35', oldPrice: '39', topColor: '#2196f3', src: 'https://i8.mifile.cn/v1/a1/T1Z7VvBvdv1RXrhCrK.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '米家台灯1S 白色', desc: 'A 级光学照度', newPrice: '169', oldPrice: '179', topColor: '#e53935', src: 'https://i8.mifile.cn/a1/pms_1559097300.03074345.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米时尚通勤双肩包 深灰', desc: '稳重的外表，张扬的内心。', newPrice: '228', oldPrice: '249', topColor: '#00c0a5', src: 'https://i8.mifile.cn/a1/pms_1528351766.85564518.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米米家智能门锁 推拉式 黑色', desc: '一步推拉，高端智能门锁', newPrice: '1649', oldPrice: '1699', topColor: '#ffac13', src: 'https://i8.mifile.cn/a1/pms_1560158562.71434641.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '米物蓝牙双模键盘 黑色', desc: '联结多屏生活', newPrice: '198', oldPrice: '249', topColor: '#83c44e', src: 'https://i8.mifile.cn/a1/pms_1544149468.46125837.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米小钢炮蓝牙音箱 2 白色', desc: '极简设计，专业喇叭', newPrice: '118', oldPrice: '129', topColor: '#2196f3', src: 'https://i8.mifile.cn/v1/a1/T1o7bgB5Kv1RXrhCrK.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米净水器滤芯 反渗透 白色', desc: '有效滤除抗生素、重金属、细菌、亚硝酸盐、有机物等', newPrice: '469', oldPrice: '499', topColor: '#e53935', src: 'https://i8.mifile.cn/a1/pms_1525316758.09779938.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '米家无线手持擦地机 白色', desc: '全家人都喜欢的擦地机', newPrice: '479', oldPrice: '499', topColor: '#00c0a5', src: 'https://i8.mifile.cn/a1/pms_1560324263.44264444.png', url: 'https://www.mi.com/seckill/'},
        {value: '小米小爱音箱HD 浅灰色', desc: '震撼嘹亮 音智同享', newPrice: '568', oldPrice: '599', topColor: '#ffac13', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/93ef574280f48c407b6e7643c2b2636e.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '米家智能门锁 标准锁体 磨砂金', desc: '全新磨砂金配色，精湛工艺升级', newPrice: '1299', oldPrice: '1499', topColor: '#83c44e', src: 'https://i8.mifile.cn/a1/pms_1563188402.30011093.jpg', url: 'https://www.mi.com/seckill/'},
        {value: '小米VR一体机 超级玩家版 白 32GB', desc: '为VR游戏而生', newPrice: '1748', oldPrice: '1799', topColor: '#2196f3', src: 'https://i8.mifile.cn/a1/pms_1554738222.83651040.jpg', url: 'https://www.mi.com/seckill/'}
      ]
    }
  },
  methods: {
    countDown () {
      clearInterval(this.countDownTimer);
      this.countDownTimer = setInterval(() => {
        this.timeComput();
      }, 1000);
    },
    timeComput () {
      let hour = 24 - new Date().getHours() - 1;
      let minute = 60 - new Date().getMinutes() - 1;
      let second = 60 - new Date().getSeconds() - 1;

      this.hour = this.addZero(hour);
      this.minute = this.addZero(minute);
      this.second = this.addZero(second);
    },
    addZero (m) {
      return m < 10 ? '0' + m : m
    },
    prev () {
      this.$refs.slide.prev();
    },
    next () {
      this.$refs.slide.next();
    }
  },
  components: {
    'Slide': Slide
  },
  mounted () {
    this.countDown();
  }
}
</script>

<style lang="less">
  .flash-sale {
    position: relative;
    width: 1226px;
    height: auto;
    padding-top: 4px;
    margin: 0 auto;
  }

  .box-header {
    text-align: start;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .box-title {
      display: inline-block;
      font-size: 22px;
      font-weight: 200;
      line-height: 58px;
      color: #333;
    }
  }

  .box-sale {
    display: flex;
    .sale-count-down {
      display: inline-block;
      width: 234px;
      height: 340px;
      padding-top: 39px;
      border-top: 1px solid #e53935;
      background: #f1eded;
      text-align: center;
      .sale-round {
        font-size: 21px;
        color: #ef3a3b;
        padding-top: 15px;
      }

      .time-left {
        color: rgba(0,0,0,.54);
        font-size: 15px
      }

      img {
        margin: 25px auto;
      }

      .count-down {
        width: 168px;
        margin: 28px auto 0;
        display: flex;
        span {
          display: block;
          width: 46px;
          height: 46px;
          background: #605751;
          color: #fff;
          font-size: 24px;
          font-weight: 600;
          line-height: 46px;
          text-align: center;
        }

        i {
          display: block;
          width: 15px;
          height: 46px;
          line-height: 46px;
          color: #605751;
          font-size: 28px;
          font-style: normal;
          text-align: center;
        }
      }
    }
  }

  .slide-control {
    display: flex;
    border: 1px solid #e0e0e0;
    .slide-button {
      padding: 0 4px;
      font-size: 20px;
      font-weight: 800;
      line-height: 20px;
      color: #b0b0b0;
      text-align: center;
      transition: color .5s;
      cursor: pointer;
      &:hover {
        color: #ff6700;
      }

      i {
        width: 26px;
        height: 18px;
      }
    }

    .divider {
      width: 1px;
      height: 21px;
      background: #e0e0e0;
    }
  }
</style>