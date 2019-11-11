<template>
  <div class="sub-channel">
    <div class="channel-list-container">
      <ul class="channel-list">
        <li class="list-item" v-for="(item, index) in channelList" :key="index">
          <a :href="item.url" target="_blank">
            <img :src="item.src" :alt="item.value">
            <span>{{item.value}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="promo-list-container">
      <ul class="promo-list">
        <li class="promo-item" v-for="(item, index) in promoList" :key="index">
          <a :href="item.url" target="_blank">
            <img :src="item.src" alt="item.value">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      channelList: [
        {value: '小米秒杀', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48', url: 'https://www.mi.com/seckill/'},
        {value: '企业团购', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48', url: 'https://qiye.mi.com/'},
        {value: 'F码通道', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48', url: 'https://order.mi.com/f'},
        {value: '米粉卡', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48', url: 'https://www.mi.com/mimobile/'},
        {value: '以旧换新', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48', url: 'https://huanxin.mi.com/'},
        {value: '话费充值', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48', url: 'https://recharge.10046.mi.com/'}
      ],
      promoList: [
        {value: 'Redmi 7A', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c745ff5931a1894e51c34b64888c5fca.jpg?w=632&h=340', url: 'https://www.mi.com/redmi7a/'},
        {value: '小米MIX3', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7b51b721c3319e9c2916cc41cd9c695.jpg?w=632&h=340', url: 'https://www.mi.com/mix3/'},
        {value: '小米手环4', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340', url: 'https://www.mi.com/shouhuan4/'}
      ]
    }
  }
}
</script>

<style lang="less">
  .sub-channel {
    position: relative;
    width: 1226px;
    height: auto;
    margin: 14px auto 26px;
    display: flex;
    .channel-list-container {
      width: 234px;
      height: 170px;
      background: #5f5750;
      .channel-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 3px;
        font-size: 12px;
        text-align: center;
        .list-item {
          width: 76px;
          height: 82px;
          padding: 0 3px;
          position: relative;
          &:before {
            top: -1px;
            left: 6px;
            width: 64px;
            height: 1px;
          }

          &:after {
            top: 6px;
            left: 0;
            width: 1px;
            height: 70px;
          }

          &:after, &:before {
            content: "";
            position: absolute;
            background: #665e57;
          }

          a {
            display: block;
            padding-top: 18px;
            opacity: .7;
            color: #fff;
            img {
              display: block;
              width: 24px;
              height: 24px;
              margin: 0 auto 4px;
            }

            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }

    .promo-list-container {
      margin-left: 14px;
      width: calc(100% - 248px);
      .promo-list {
        display: flex;
        justify-content: space-between;
        .promo-item {
          height: 170px;
          &:hover {
            box-shadow: 0 5px 30px #ccc;
          }

          a {
            display: inline-block;
            height: 100%;
            img {
              width: 316px;
              height: 100%;
            }
          }
        }
      }
    }
  }
</style>