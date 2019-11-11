<template>
  <div class="menu-banner">
    <div class="menu-container" @mouseleave="bannerMenuHide()">
      <ul class="menu-list">
        <li class="list-item"
        v-for="(item, index) in menus"
        :key="index"
        @mouseenter="bannerMenuShow(item.type)">
          <a :href="item.url" target="blank">{{item.value}}</a>
          <i class="fa fa-angle-right"></i>
        </li>
      </ul>
    </div>
    <div class="menu-info"
    v-show="bannerMenuFlag"
    @mouseleave="bannerMenuHide()"
    @mouseenter="bannerMenuShow()">
        <ul class="menu-info-list"
        v-for="(list, key) in menuListMatch"
        :key="key"
        :data-key="key">
          <li class="info-list-item"
          v-for="(item, index) in list"
          :key="index"
          :data-index="index">
            <a :href="item.url">
              <img :src="item.src" :alt="item.name" />
							<span class="">{{item.name}}</span>
            </a>
          </li>
        </ul>
      </div>
    <banner :banners="banners"></banner>
  </div>
</template>

<script>
import Banner from '../parts/Banner'

export default {
  data () {
    return {
      bannerMenuFlag: false,
      menuTimer: '',
      listInfoData: [],
      menus: [
        {value: '手机 电话卡', url: 'https://www.mi.com/p/1915.html', type: 'phone'},
        {value: '电视 盒子', url: 'https://www.mi.com/a/h/9819.html', type: 'tv'},
        {value: '笔记本 平板', url: 'https://www.mi.com/a/h/7529.html', type: 'laptop'},
        {value: '家电 插线板', url: 'https://www.mi.com/p/9285.html', type: 'household'},
        {value: '出行 穿戴', url: 'https://www.mi.com/p/9289.html', type: 'wear'},
        {value: '智能 路由器', url: 'https://www.mi.com/a/h/8363.html', type: 'router'},
        {value: '电源 配件', url: 'https://www.mi.com/p/9290.html', type: 'power'},
        {value: '健康 儿童', url: 'https://www.mi.com/p/9291.html', type: 'health'},
        {value: '耳机 音箱', url: 'https://www.mi.com/p/9292.html', type: 'pods'},
        {value: '生活 箱包', url: 'https://www.mi.com/p/9293.html', type: 'life'}
      ],
      banners: [
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cefed8336bae62768afeeb6a3b8f55c8.jpg?w=2452&h=920', url: 'https://www.mi.com/redminote7/'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/743e04f29f920648b9d99b04a85ce343.jpg?w=2452&h=920', url: 'https://www.mi.com/a/h/11251.html'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d7d3f2df881cf62e5fafdada94f5018.jpg?w=2452&h=920', url: 'https://www.mi.com/mitvall-screen/e55c/'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bd4174b8c5aad67a64864a5716ad152.jpg?w=2452&h=920', url: 'https://www.mi.com/washer-dryer-10/'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1f0eb196c6c65a89ffba6efa4b5679c.jpg?w=2452&h=920', url: 'https://www.mi.com/a/h/11117.html'}
      ],
      phone: [
        {name:'Redmi Note 8 Pro', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e99f7f32923b2ef482338c08544000bb.png', url: 'http://www.mi.com/redminote8pro'},
        {name:'Redmi Note 8', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c20f8ee8bfff9b12c2c13f6b55a77abb.png', url: 'http://www.mi.com/redminote8'},
        {name: '小米CC9', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b0d7d2c85734b80a1b8d1a4100c9c1f.png', url: 'https://www.mi.com/micc9/'},
        {name: '小米CC美图定制版', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/20e23b306f50384ab85b6658f5c963ff.jpg', url: 'https://www.mi.com/xiaomicc9mt'},
        {name: '小米CC9e', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d3ee15816d2ccbe922172033c3c3941.png', url: 'https://www.mi.com/micc9e'},
        {name: '小米9', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1cce3d767b8841c237cd610833799fe3.png', url: 'https://www.mi.com/mi9/'},
        {name: '小米9 SE', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ebff4a3d7ac1df43737d195cd38a2a37.png', url: 'https://www.mi.com/mi9se/'},
        {name: '小米MIX 3', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9e83fabc3efeb8dd9f880ce26220c294.png', url: 'https://www.mi.com/mix3/'},
        {name: '小米MIX 2S', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7ab17259cd65adb7222e856fa1996a34.png', url: 'https://www.mi.com/mix2s/'},
        {name: '小米Max 3', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fbb0bc35bd92d1fa8840762810a5cc84.png', url: 'https://www.mi.com/max3/'},
        {name: '黑鲨手机2 Pro', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eea579b45e6d01f214423c19ef76a459.png', url: 'https://item.mi.com/product/10000175.html'},
        {name: '黑鲨游戏手机 2', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82a363a6644bc3661ae5592726d4625e.jpg', url: 'https://www.mi.com/blackshark-game2/'},
        {name: 'Redmi K20 Pro', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b04a1e68b00130a879fa75865fb7c4b1.jpg', url: 'https://www.mi.com/redmik20pro/'},
        {name: 'Redmi K20', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb14154721f2b239a4eff12f28b8cd93.jpg', url: 'https://www.mi.com/redmik20/'},
        {name: 'Redmi 7A', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/85d746207b997873ddfcdca0da025f78.jpg', url: 'https://www.mi.com/redmi7a/'},
        {name: 'Redmi 7', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/265c87b03067bc11097db369e71bf976.png', url: 'https://www.mi.com/redmi7/'},
        {name: 'Redmi Note 7 Pro', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26d1de72e958da75048be5c6cc0b73f6.jpg', url: 'https://www.mi.com/redminote7pro/'},
        {name: 'Redmi Note 7', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7c684a08a482a61b19c8d7f9b1113f5f.png', url: 'https://www.mi.com/redminote7/'},
        {name: '移动4G+专区', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c483e65040470208823a8bfb5d73c27.jpg', url: 'https://www.mi.com/p/5592.html'},
        {name: '小米移动 电话卡', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dafced4abb82c502c087a2aca7078f48.jpg', url: 'https://www.mi.com/mimobile/'},
        {name: '手机上门维修', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/84e19ece0125992449a6276e2ba333e9.png', url: 'https://item.mi.com/7532.html'},
        {name: '云服务空间月卡', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg', url: 'https://item.mi.com/8262.html'},
        {name: '米粉卡 日租卡', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1a2ed8c7ac2ab7ebfd1554a7a1ac25a6.jpg', url: 'https://www.mi.com/micard'}
      ],
      tv: [
        {name: '米家激光投影电视', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d78230a2f48ecb44a30db910476acf7b.jpg', url: 'https://search.mi.com/search_%E6%BF%80%E5%85%89%E6%8A%95%E5%BD%B1%E7%94%B5%E8%A7%86'},
        {name: '小米壁画电视 65英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5732e8f317eb86bfcb174fbb49d00c4a.jpg', url: 'https://www.mi.com/arttv/'},
        {name: '小米全面屏电视', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8aeae36f5d088f22c84b8953bd0d08b4.jpg', url: 'https://search.mi.com/search_%E5%85%A8%E9%9D%A2%E5%B1%8F%E7%94%B5%E8%A7%86'},
        {name: '小米电视4A 32英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/820cba6c44f7263c5fe773a7ffaf85b9.png', url: 'https://www.mi.com/mitv4A/32/'},
        {name: '小米电视4A 43英寸青春版', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ea8be80c82c273e167d5b282b17e9b2b.png', url: 'https://www.mi.com/mitv4A/43y'},
        {name: '小米电视4A 49英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a9710af2fff5548ea05950473898ef0e.jpg', url: 'https://www.mi.com/mitv4A/49/'},
        {name: '小米电视4A 50英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2f15dd9779865b48bfa8c8e915ac75ac.png', url: 'https://www.mi.com/mitv4A/50'},
        {name: '小米电视4A 55英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37ce1615e1e8fcbbda2b3f37c09ec676.png', url: 'https://www.mi.com/mitv4A/55/'},
        {name: '小米电视4A 58英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11e4d06f29877044ddce0f9fdd2e26d5.png', url: 'https://www.mi.com/mitv4A/58/'},
        {name: '小米电视4A 65英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ca8058c9c776447265b99420ff04e544.png', url: 'https://www.mi.com/mitv4A/65/'},
        {name: '小米电视4C 32英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cb83515483547404cd26a962bada5d5b.png', url: 'https://www.mi.com/mitv4c/32/'},
        {name: '小米电视4C 40英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/af572c503ed2a81ab71e2810617860c5.jpg', url: 'https://www.mi.com/mitv4c/40/'},
        {name: '小米电视4C 43英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7bef124bc015669bdacf76d5d4b02a7e.png', url: 'https://www.mi.com/mitv4c/43/'},
        {name: '小米电视4C 50英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/24ee18218b3b98161e17abe23c6fd539.png', url: 'https://www.mi.com/mitv4c/50/'},
        {name: '小米电视4C 55英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe603cc3b9c19903be14aac4e9b571d6.jpg', url: 'https://www.mi.com/mitv4c/55/'},
        {name: '小米电视4X 43英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/53f3593ab87d90c4cc5201e10a5c42f7.png', url: 'https://www.mi.com/mitv4x/43/'},
        {name: '小米电视4X 55英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/247f20519504afe5222b5a810e30fd14.png', url: 'https://www.mi.com/mitv4x/55/'},
        {name: '小米电视4X 65英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0df6f56ead57cb5a90f6b81a21fb5261.jpg', url: 'https://item.mi.com/9666.html'},
        {name: '小米电视4 55英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f89f8c92035e635b64a2f4a0c3ca8a9b.png', url: 'https://www.mi.com/mitv4/55/'},
        {name: '小米电视4 65英寸旗舰版', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/823ff82753067c5651cc70c8daf3021d.jpg', url: 'https://www.mi.com/mitv4/65aio/'},
        {name: '小米电视4 75英寸', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45d9675f31b2c22e286284e62de35f7d.jpg', url: 'https://www.mi.com/mitv4/75/'},
        {name: '小米电视4S', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/46be9462fab23618500fda14e7e07e0f.png', url: 'https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%864s'},
        {name: '小米电视 体育版', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/16278c189bb0ba0d12aae41c278fa5a1.png', url: 'https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%86%20%E4%BD%93%E8%82%B2%E7%89%88'},
        {name: '小米盒子', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/554a4f8ea0c2c3ed19d843bea7321203.jpg', url: 'https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%9B%92%E5%AD%90'}
      ],
      laptop: [
        {name: '小米笔记本 15.6"', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d28f298362ba20046db1dbb0c8eb5e70.jpg', url: 'https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%2015.6'},
        {name: '小米笔记本 13.3"', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1f95bb7c9206951e3d870cb5581b8329.png', url: 'https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%2013.3'},
        {name: '小米笔记本 12.5"', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/eaab0db21859e0e58cae1fb807907905.jpg', url: 'https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%2012.5'},
        {name: 'RedmiBook 14', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a3c149225946312f2b4bbe1263f65450.png', url: 'https://www.mi.com/redmibook14/'},
        {name: '小米游戏本', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a66c24ee8ae2efea3ae92ec455a27352.jpg', url: 'https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%E6%B8%B8%E6%88%8F%E6%9C%AC'},
        {name: '小米平板4', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/131e5d409e62eedb94577cae11c530f1.jpg', url: 'https://www.mi.com/mipad4/'},
        {name: '键盘', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/03c3afaa26624708921a2875b293e866.jpg', url: 'https://search.mi.com/search_%E9%94%AE%E7%9B%98'},
        {name: '鼠标／鼠标垫', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c61933e7ac89c61bc727c275391e82e0.png', url: 'https://search.mi.com/search_%E9%BC%A0%E6%A0%87'},
        {name: '转接器', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/62f36168a0fb318102ff74ab65e6a8fc.jpg', url: 'https://search.mi.com/search_%E8%BD%AC%E6%8E%A5%E5%99%A8'},
        {name: '平板配件', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/32bfcdebff3058de7bc0b2855d05c240.jpg', url: 'https://search.mi.com/search_%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%B9%B3%E6%9D%BF%E9%85%8D%E4%BB%B6'},
        {name: '笔记本双肩包', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a23f28ad195aa93679012c785db11fc2.jpg', url: 'https://search.mi.com/search_%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%8F%8C%E8%82%A9%E5%8C%85'},
        {name: '小米笔记本内胆包', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/48ec2200729879ed3e3bc01b61146d79.jpg', url: 'https://list.mi.com/accessories/tag?id=neidanbao'}
      ],
      household: [
        {name: '米家立式空调', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png', url: 'https://www.mi.com/aircondition-f/f3c1/'},
        {name: '米家空调', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png', url: 'https://search.mi.com/search_%E4%BA%92%E8%81%94%E7%BD%91%E7%A9%BA%E8%B0%83'},
        {name: '滚筒洗衣机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png', url: 'https://search.mi.com/search_%E6%BB%9A%E7%AD%92%E6%B4%97%E8%A1%A3%E6%9C%BA'},
        {name: 'Redmi全自动波轮洗衣机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg', url: 'https://search.mi.com/search_%E6%B3%A2%E8%BD%AE%E6%B4%97%E8%A1%A3%E6%9C%BA'},
        {name: '净水器', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg', url: 'https://search.mi.com/search_%E5%87%80%E6%B0%B4%E5%99%A8'},
        {name: '净水器滤芯', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d38c628865341057d6e19a3a6a4ab88e.png', url: 'https://search.mi.com/search_%E5%87%80%E6%B0%B4%E5%99%A8%E6%BB%A4%E8%8A%AF'},
        {name: '扫地机器人', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/603beb09930e32addd1b362bf43c7ac2.jpg', url: 'https://www.mi.com/roomrobot/?cfrom=search'},
        {name: '吸尘器', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26deda5474eb7eb7e5b34547c58b9893.jpg', url: 'https://www.mi.com/vacuum-cleaner/'},
        {name: '空气净化器', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e997ed31cd5199ec0a24eeb48a37b1e7.jpg', url: 'https://search.mi.com/search_%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A8'},
        {name: '电饭煲', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/390e15818dd103b2f96f4ac742d47379.jpg', url: 'https://search.mi.com/search_%E7%94%B5%E9%A5%AD%E7%85%B2'},
        {name: '电磁炉', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d93e6a98403262a506c9e9b22293cdae.jpg', url: 'https://search.mi.com/search_%E7%94%B5%E7%A3%81%E7%82%89'},
        {name: '厨房用具', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b945d8524ca8497b899f04ef957b71ec.jpg', url: 'https://search.mi.com/search_%E7%9F%A5%E5%90%BE%E7%85%AE'},
        {name: '电水壶', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/39c8ccbebd08687bc6780373b7ef2a95.jpg', url: 'https://search.mi.com/search_%E7%94%B5%E6%B0%B4%E5%A3%B6'},
        {name: '滤水壶', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9ffcebcacca008ed2d92a692f7312ef6.jpg', url: 'https://search.mi.com/search_%E6%BB%A4%E6%B0%B4%E5%A3%B6'},
        {name: '落地风扇', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a3e4238b70ef8db89ae77f8a3762fc8.png', url: 'https://search.mi.com/search_%E8%90%BD%E5%9C%B0%E9%A3%8E%E6%89%87'},
        {name: '投影仪', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c12fd1da9fed662842d6f5c57d7737c9.png', url: 'https://www.mi.com/projection-youth/'},
        {name: '灯具', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0a6b523433a492dbf32035b2983d98e.jpg', url: 'https://search.mi.com/search_%E7%81%AF%E5%85%B7'},
        {name: '插线板', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d1c8cfb055709db380c6de981a4c894b.jpg', url: 'https://search.mi.com/search_%E6%8F%92%E6%8E%92'},
        {name: '新风机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1cc417a7cae8c4ff8b0041fa29003717.jpg', url: 'https://search.mi.com/search_%E6%96%B0%E9%A3%8E%E6%9C%BA'},
        {name: '电暖器', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6aa1871d84aaae98cd676f5e2cf5c2f2.jpg', url: 'https://item.mi.com/product/9145.html'},
        {name: '电压力锅', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ba8d2a2d383f612575d323ce159bdce3.jpg', url: 'https://item.mi.com/1190200053.html'},
        {name: '料理机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0bf0ba35dc3ad57115c59f0ebde0fd1d.jpg', url: 'https://search.mi.com/search_%E6%96%99%E7%90%86%E6%9C%BA'},
        {name: '电煮壶', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b7de8a5bc64975df73f5fde5507fc8d1.jpg', url: 'https://item.mi.com/product/9529.html'}
      ],
      wear: [
        {name: '手环手表', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4dd7eeff34b478acd2cf3eec99b78c96.png', url: 'https://search.mi.com/search_%E6%89%8B%E7%8E%AF%E6%89%8B%E8%A1%A8'},
        {name: 'VR', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fece041c17bdebaab5f3a9313c7c0f8c.jpg', url: 'https://search.mi.com/search_vr'},
        {name: '平衡车', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg', url: 'https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6'},
        {name: '滑板车', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4e9da27ebbeeb38078910c97173c4671.jpg', url: 'https://search.mi.com/search_%E6%BB%91%E6%9D%BF%E8%BD%A6'},
        {name: '车载逆变器', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/601f0b54e805d769ab6dc1bdea93706d.jpg', url: 'https://search.mi.com/search_%E8%BD%A6%E8%BD%BD%E9%80%86%E5%8F%98%E5%99%A8'},
        {name: '平衡车配件', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ac5b263aac2ffa1894fb7b215c3ce87.jpg', url: 'https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6%E9%85%8D%E4%BB%B6'},
        {name: '智能后视镜', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/971c8c01a246c7ac69a4c9be9e77e832.jpg', url: 'https://search.mi.com/search_%E5%90%8E%E8%A7%86%E9%95%9C'},
        {name: '智能记录仪', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2748064a9ac9969e53851479d55f1a9.jpg', url: 'https://search.mi.com/search_%E8%AE%B0%E5%BD%95%E4%BB%AA'},
        {name: '车载空气净化器', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e73568f1bfc9b92fb0302c0a1538f181.jpg', url: 'https://search.mi.com/search_%E8%BD%A6%E8%BD%BD%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A8'},
        {name: '无线车充', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/efd04d4a90822e7e2f04a365083f2607.jpg', url: 'https://item.mi.com/product/9357.html'},
        {name: '充气宝', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b398bad185dddb5397f2c0d9a3f6271.jpg', url: 'https://item.mi.com/product/9613.html'},
        {name: '平衡轮', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6d92b9db10f261f56b2f2dfb93ca132e.jpg', url: 'https://item.mi.com/product/10003.html'}
      ],
      router: [
        {name: '打印机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg', url: 'https://search.mi.com/search_%E6%89%93%E5%8D%B0%E6%9C%BA'},
        {name: '路由器', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50b4287ee78e7f190c5603ad7ce7e5d6.jpg', url: 'https://www.mi.com/a/h/8363.html'},
        {name: '智能家庭', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/14107363b5dc77b18e9983bda999931d.jpg', url: 'https://search.mi.com/search_%E6%99%BA%E8%83%BD%E5%AE%B6%E5%BA%AD'},
        {name: '对讲机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21fedf7ba9019bce59cbc4856f907076.jpg', url: 'https://search.mi.com/search_%E5%AF%B9%E8%AE%B2%E6%9C%BA'},
        {name: '无人机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9f50ae9f7f38378e057462483c8cf65f.jpg', url: 'https://search.mi.com/search_%E6%97%A0%E4%BA%BA%E6%9C%BA'},
        {name: '摄像机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg', url: 'https://search.mi.com/search_%E6%91%84%E5%83%8F%E6%9C%BA'},
        {name: '照相机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/81d89cfdb72d0445ed4ef19942d9dedb.jpg', url: 'https://search.mi.com/search_%E7%85%A7%E7%9B%B8%E6%9C%BA'},
        {name: '智能门锁', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg', url: 'https://search.mi.com/search_%E9%97%A8%E9%94%81'},
        {name: '视频门铃', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/feaab5bd13257dbe8f30b80b6a4472be.jpg', url: 'https://search.mi.com/search_%E9%97%A8%E9%93%83'},
        {name: '小爱老师', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/90b75c1046e486c19f14effd9b45f488.png', url: 'https://search.mi.com/search_%E5%B0%8F%E7%88%B1%E8%80%81%E5%B8%88'},
        {name: '小爱音箱', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg', url: 'https://search.mi.com/search_%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1'}
      ],
      power: [
        {name: '移动电源', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/91e56808d5c6f4fb7e9d41590f8b889c.jpg', url: 'https://search.mi.com/search_%E5%85%85%E7%94%B5%E5%AE%9D'},
        {name: '数据线', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45dd7a2c4fc3d17d5d261ed3eed7cd15.jpg', url: 'https://search.mi.com/search_usb%E6%95%B0%E6%8D%AE%E7%BA%BF'},
        {name: '车充', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/397d8119508e8e3c895fc30ece88e799.jpg', url: 'https://search.mi.com/search_%E8%BD%A6%E8%BD%BD%E5%85%85%E7%94%B5%E5%99%A8'},
        {name: '无线充', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18d288107e1a72ad3c7b3aa66a1dc780.jpg', url: 'https://search.mi.com/search_%E6%97%A0%E7%BA%BF%E5%85%85%E7%94%B5%E5%99%A8'},
        {name: '电池', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg', url: 'https://search.mi.com/search_%E5%BD%A9%E8%99%B9%E7%94%B5%E6%B1%A0'},
        {name: '自拍杆', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2725e04c955dc060ac142fabbf809c1e.jpg', url: 'https://search.mi.com/search_%E8%87%AA%E6%8B%8D%E6%9D%86'},
        {name: '手机壳', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c6e60e48edf17219724faad95963b93.jpg', url: 'https://list.mi.com/8-0-0-0-0-0-0-0-1'},
        {name: '手机贴膜', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9e248c899fd895c9267f494ea1aaebf.jpg', url: 'https://list.mi.com/9'},
        {name: '手机支架', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/826264a4845f45a0a503600f9331ab06.jpg', url: 'https://item.mi.com/1162000043.html?cfrom=search'},
        {name: '平板配件', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6ce8ff4bc1e6ded2d40c53b2aa83b98c.jpg', url: 'https://search.mi.com/search_%E5%B9%B3%E6%9D%BF%E9%85%8D%E4%BB%B6'},
        {name: '黑鲨配件', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9c3ead590f49767a4f562b7285215f5e.jpg', url: 'https://search.mi.com/search_%E9%BB%91%E9%B2%A8%E9%85%8D%E4%BB%B6'},
        {name: '其他配件', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg', url: 'https://search.mi.com/search_%E5%85%B6%E4%BB%96%E7%94%B5%E6%BA%90%E9%85%8D%E4%BB%B6'}
      ],
      health: [
        {name: '洗手机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg', url: 'https://www.mi.com/dispenser/'},
        {name: '剃须刀', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg', url: 'https://search.mi.com/search_%E5%89%83%E9%A1%BB%E5%88%80'},
        {name: '日光镜', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/320c12a501b40fa1d69d0ca3a4303129.jpg', url: 'https://item.mi.com/product/9235.html'},
        {name: '牙刷', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg', url: 'https://search.mi.com/search_%E7%89%99%E5%88%B7'},
        {name: '吹风机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg', url: 'https://item.mi.com/1184700005.html'},
        {name: '体重秤', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/459afd0eb2a3bc6313e7ac62bd3a52df.png', url: 'https://search.mi.com/search_%E4%BD%93%E9%87%8D%E7%A7%A4'},
        {name: '体脂秤', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe6166ca2026008abb86bc67dfd8211d.jpg', url: 'https://search.mi.com/search_%E4%BD%93%E8%84%82%E7%A7%A4'},
        {name: '早教启智', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2cb10391d6527bf64126a63446a38e2e.jpg', url: 'https://search.mi.com/search_%E6%97%A9%E6%95%99%E5%90%AF%E6%99%BA'},
        {name: '遥控电动', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ab36232a1004421e1a5b3efd0b9226c0.jpg', url: 'https://search.mi.com/search_%E5%84%BF%E7%AB%A5%E9%81%A5%E6%8E%A7'},
        {name: '益智积木', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9a5feb1f6c9b9aa0dc998c17e5eb3e9.jpg', url: 'https://search.mi.com/search_%E7%9B%8A%E6%99%BA%E7%A7%AF%E6%9C%A8'},
        {name: '儿童手表', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0b3a592784632760a7ef25de50147a7.jpg', url: 'https://search.mi.com/search_%E5%84%BF%E7%AB%A5%E6%89%8B%E8%A1%A8'},
        {name: '儿童滑板车', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9f6a34ed8071b821ee5aa8d32a7be95d.jpg', url: 'https://search.mi.com/search_%E5%84%BF%E7%AB%A5%E6%BB%91%E6%9D%BF%E8%BD%A6'},
        {name: '米兔拉杆箱', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a2c84adc7a3620d222346068528da1b5.jpg', url: 'https://item.mi.com/product/8878.html'},
        {name: '自行车', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8f200595fe0a6b4b67291970f25e4f02.jpg', url: 'https://item.mi.com/10491.html'},
        {name: '婴儿推车', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg', url: 'https://item.mi.com/product/9029.html'},
        {name: '儿童书包', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d55c8943ceac7cd5ac7d8aa052f69b93.jpg', url: 'https://item.mi.com/product/10000130.html'},
        {name: '婴儿理发器', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/17d625c8b5466b9527e9c06c71601939.jpg', url: 'https://item.mi.com/product/9315.html'},
        {name: '儿童保温杯', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/81737be7672dfa85cbb3abc65669f091.jpg', url: 'https://item.mi.com/product/9317.html'},
        {name: '走步机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb1fee7e2f2963baae34d3611a2b7e9f.jpg', url: 'https://www.mi.com/treadmill/?cfrom=search'},
        {name: '点读笔', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ccdce424f41806f775693748058fa2ca.jpg', url: 'https://item.mi.com/product/9834.html'}
      ],
      pods: [
        {name: '小米小爱音箱 Play版', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg', url: 'https://www.mi.com/aispeaker-play'},
        {name: '线控耳机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b3d235f4a5a5bf5c9d8d066d2166e6c.jpg', url: 'https://search.mi.com/search_%E7%BA%BF%E6%8E%A7%E8%80%B3%E6%9C%BA'},
        {name: '蓝牙耳机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/649f781dd8595272ac3885f064205114.jpg', url: 'https://search.mi.com/search_%E8%93%9D%E7%89%99%E8%80%B3%E6%9C%BA'},
        {name: '头戴耳机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28a77451da1dbd0d3e42d529777997c3.jpg', url: 'https://search.mi.com/search_%E5%A4%B4%E6%88%B4%E8%80%B3%E6%9C%BA'},
        {name: '品牌耳机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4885bda69e45b870a5bcf5bbaea1548b.jpg', url: 'https://search.mi.com/search_%E5%93%81%E7%89%8C%E8%80%B3%E6%9C%BA'},
        {name: '蓝牙音箱', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f7c7a9d73fb7b3cf93d3ae0dc2849f5e.jpg', url: 'https://search.mi.com/search_%E8%93%9D%E7%89%99%E9%9F%B3%E7%AE%B1'},
        {name: '小米AI音箱', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db89d422ef877cf7290616fef515e413.jpg', url: 'https://www.mi.com/aispeaker/'},
        {name: '小米小爱音箱HD', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4df2fa022495e79f890a943a9d7e70a5.jpg', url: 'https://item.mi.com/product/9151.html'},
        {name: 'k歌耳机', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a290d924c1bbd1e3ce64e96f497d4059.jpg', url: 'https://search.mi.com/search_k%E6%AD%8C%E8%80%B3%E6%9C%BA'},
        {name: '小爱音箱 万能遥控版', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cebeb2536e051c4792b57c07bf404c21.jpg', url: 'https://www.mi.com/aispeaker-control/?cfrom=search'},
        {name: '小爱触屏音箱', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/abe665fafbef94eb3626ae8baf1de97e.jpg', url: 'https://www.mi.com/aispeaker-touch/?cfrom=search'}
      ],
      life: [
        {name: '双肩包', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg', url: 'https://search.mi.com/search_%E5%8F%8C%E8%82%A9%E5%8C%85'},
        {name: '钱包', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5763f4e2fd983cd30d4976cc438f9d1e.jpg', url: 'https://search.mi.com/search_%E9%92%B1%E5%8C%85'},
        {name: '旅行箱', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ae3df443bfe6b9e634e8957264f6060c.jpg', url: 'https://search.mi.com/search_%E6%97%85%E8%A1%8C%E7%AE%B1'},
        {name: '运动鞋', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg', url: 'https://search.mi.com/search_%E8%BF%90%E5%8A%A8%E9%9E%8B'},
        {name: '服饰', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d894d9d776e1bcb81681720e4294a9.jpg', url: 'https://search.mi.com/search_%E8%A1%A3%E7%89%A9'},
        {name: '眼镜', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d521bd58668f66c50562b8fa8949f67c.jpg', url: 'https://search.mi.com/search_%E7%9C%BC%E9%95%9C'},
        {name: '床垫', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aba45662667dceaf4ba0e5b08f44d3a7.jpg', url: 'https://search.mi.com/search_%E5%BA%8A%E5%9E%AB'},
        {name: '枕头', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744306b95df4d130bdfc346ff2b3c871.png', url: 'https://search.mi.com/search_%E6%9E%95%E5%A4%B4'},
        {name: '沙发', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a991c859604a4960744643eccde76c56.png', url: 'https://search.mi.com/search_%E6%B2%99%E5%8F%91'},
        {name: '饰品', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d24d3886ab3d6b6187cb8a15db3308f4.jpg', url: 'https://search.mi.com/search_%E9%A5%B0%E5%93%81'},
        {name: '螺丝刀', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/458169c8138413666feb860068ce1a56.jpg', url: 'https://search.mi.com/search_%E8%9E%BA%E4%B8%9D%E5%88%80'},
        {name: '保温杯', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/813d173eff50a83abb8abd5abde5f5a6.jpg', url: 'https://item.mi.com/1174800007.html?cfrom=search'},
        {name: '伞', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/395ffd04841f70b8bdf67339ba1dfc98.jpg', url: 'https://item.mi.com/product/6124.html'},
        {name: '驱蚊器', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/59d3a701ac0bbb78f1b1d0ea7ebc7505.jpg', url: 'https://search.mi.com/search_%E9%A9%B1%E8%9A%8A%E5%99%A8'},
        {name: '尤克里里', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2cb85b96b12395fdaa7bccaf8f94e758.jpg', url: 'https://item.mi.com/product/7716.html'},
        {name: '毛巾/浴巾', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21c3ec8638dd75f5c54f1a69864a1cc9.jpg', url: 'https://search.mi.com/search_%E6%AF%9B%E5%B7%BE'},
        {name: '米兔', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/972026cd032be6da4093358f70c3f6ba.jpg', url: 'https://search.mi.com/search_%E7%B1%B3%E5%85%94'},
        {name: '笔', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9279a17e9399958420af64e449e3214.jpg', url: 'https://search.mi.com/search_%E7%AC%94'},
        {name: '床', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e73794f2d870970b6d4acd9ce39c0f2b.jpg', url: 'https://item.mi.com/product/10000160.html'}
      ]
    }
  },
  methods: {
    bannerMenuHide () {
      this.menuTimer = setTimeout(() => {
				this.bannerMenuFlag = false;
			}, 300);
    },
    bannerMenuShow (type) {
      if (type) {
        this.listInfoData = this[type];
      }

      this.bannerMenuFlag = true;
      clearTimeout(this.menuTimer);
    }
  },
  computed: {
    menuListMatch () {
      if (this.listInfoData && this.listInfoData.length) {
        const matchData = [];
        for (let i = 0; i < this.listInfoData.length; i += 6) {
          matchData.push(this.listInfoData.slice(i, i + 6));
        }
        return matchData;
      }
    }
  },
  components: {
    'Banner': Banner
  }
}
</script>

<style lang="less">
  .menu-banner {
    position: relative;
    width: 1226px;
    height: auto;
    margin: 0 auto;
    .menu-container {
      position: absolute;
      left: 0;
      top: 0;
      width: 235px;
      height: auto;
      background: rgba(0, 0, 0, 0.3);
      z-index: 10;
    }
  }

  .menu-list {
    padding: 20px 0;
    height: 460px;
    .list-item {
      display: flex;
      padding-left: 30px;
      &:hover {
        background-color: #ff6700;
      }

      a {
        position: relative;
        display: inline-block;
        width: 170px;
        height: 42px;
        line-height: 42px;
        color: #fff;
        text-align: left;
        background-color: transparent;
      }

      i {
        font-size: 22px;
        color: #e0e0e0;
        line-height: 42px;
      }
    }
  }

  .menu-info {
    position: absolute;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    left: 235px;
    top: 0;
    z-index: 11;
    border: 1px solid #e0e0e0;
    box-shadow: 3px 8px 16px rgba( 0, 0, 0, 0.18);
    .menu-info-list {
      width: 248px;
      height: 458px;
      margin: 0;
      padding: 0;
      list-style: none;
      background: #fff;
      a {
        display: flex;
        padding: 18px 20px;
        line-height: 40px;
        color: #333;
        img {
          width: 40px;
          height: 40px;
          margin-right: 12px;
          vertical-align: middle;
        }

        span {
          width: 172px;
          line-height: 40px;
          font-size: 14px;
          text-align: start;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        &:hover {
          span {
            color: #ff6700;
          }
        }
      }
    }
  }
</style>