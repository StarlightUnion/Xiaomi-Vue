<template>
  <div class="top-header">
    <div class="top-container">
      <a class="mi-icon" href="#"></a>
      <div class="header-navs-container">
        <div class="divider"></div>
        <ul class="navs">
          <li class="navs-item" v-for="(item, index) in navs" :key="index">
            <a v-if="item.type"
            :data-type="item.type"
            @mouseenter="menusListShow(item.type)"
            @mouseleave="menusListHide()"
            >{{item.value}}</a>
            <a v-else :href="item.url"  target="_blank">{{item.value}}</a>
          </li>
        </ul>
      </div>
      <div class="header-search-container">
        <input
          @focus="searchListShow"
					@blur="searchListHide"
					class="search-input"
          :class="{'active': focusFlag}"
          type="search"
          value="">
				<label class="search-btn" :class="{'active': focusFlag}" style="border-left: 0;">
					<i class="fa fa-search" aria-hidden="true"></i>
				</label>
        <transition name="list-trans">
          <ul class="search-hots" v-show="hotsListFlag">
            <li class="hots-item" v-for="(item, index) in hots" :key="index">{{item}}</li>
          </ul>
        </transition>
        <ul class="search-list" v-show="!hotsListFlag">
          <li class="list-item" v-for="(item, index) in searchHot" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
    <transition name="menu-trans">
      <div class="menus-list"
      @mouseenter="menusListShow()"
      @mouseleave="menusListHide()"
      v-show="menusListFlag">
        <ul class="menus">
          <li class="menus-item" v-for="(item, index) in menusItemData" :key="index">
            <a :href="item.src">
              <img class="item-img" :src="item.url">
            </a>
            <div class="item-value">{{item.value}}</div>
            <div class="item-type" v-if="item.type">{{item.type}}</div>
            <div class="item-price" v-if="item.price && item.sub">{{item.price}}元起</div>
            <div class="item-price" v-if="item.price && !item.sub">{{item.price}}元</div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menusListFlag: false,
      timer: '',
      menusItemData: this.xiaomi,
      hotsListFlag: true,
      focusFlag: false,
      hots: ['小米9', '小米9 SE'],
      navs: [
        {value: '小米手机', type: 'xiaomi'},
				{value: 'Redmi 红米', type: 'redmi'},
				{value: '电视', type: 'tv'},
				{value: '笔记本', type: 'laptop'},
				{value: '家电', type: 'household'},
				{value: '路由器', type: 'router'},
				{value: '智能硬件', type: 'hardware'},
				{value: '服务', url: '//www.mi.com/service/'},
				{value: '社区', url: 'http://www.xiaomi.cn'}
      ],
      xiaomi: [
        {value: '小米CC9', price: '1799', sub: true, src: 'https://www.mi.com/micc9/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png'},
        {value: '小米CC9e', price: '1299', sub: true, src: 'https://www.mi.com/micc9e/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png'},
        {value: '小米CC9 美图定制版', price: '2599', sub: false, src: 'https://www.mi.com/xiaomicc9mt/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png'},
        {value: '小米9', price: '2599', sub: true, src: 'https://www.mi.com/mi9/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png'},
        {value: '小米MIX 3', price: '2599', sub: false, src: 'https://item.mi.com/10000123.html', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3b5e5829fdf92d54c167f4681531b535.png'},
        {value: '小米MIX 2s', price: '1799', sub: true, src: 'https://www.mi.com/mix2s/', url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ae81fdc9f2ed286d135e16c2a5f6db33.png'}
      ],
      redmi: [
        {value: 'Redmi K20 Pro', price: '2299', sub: true, src: 'https://www.mi.com/redmik20pro/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f69828396fcd1e05b932778f4fca4409.jpg'},
        {value: 'Redmi K20', price: '1999', sub: true, src: 'https://www.mi.com/redmik20/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d4fbf37c6b51e510a3bac5e738f2f681.jpg'},
        {value: 'Redmi Note7 Pro', price: '1399', sub: false, src: 'https://www.mi.com/redminote7pro/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b0e0c0fda4adf267012815127302f6de.jpg'},
        {value: 'Redmi 7A', price: '579', sub: true, src: 'https://www.mi.com/redmi7a/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/031af981e77b41770cade39353021e33.jpg'},
        {value: 'Redmi Note 7', price: '999', sub: true, src: 'https://www.mi.com/redminote7/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5352bd79f5304484f529da8a53145a20.png'},
        {value: 'Redmi 7', price: '699', sub: true, src: 'https://www.mi.com/redmi7/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/536b98c95ecd4375bae21599e53aae53.png'}
      ],
      tv: [
        {value: '小米壁画电视 65英寸', price: '6999', sub: false, src: 'https://www.mi.com/arttv/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg'},
        {value: '小米全面屏电视E55A', price: '1999', sub: false, src: 'https://www.mi.com/mitvall-screen/e55a/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a40904b6a053b73b631a152334388d0e.jpg'},
        {value: '小米电视4A 32英寸', price: '699', sub: false, src: 'https://www.mi.com/mitv4A/32/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png'},
        {value: '小米电视4A 55英寸', price: '1799', sub: false, src: 'https://www.mi.com/mitv4A/55/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bf72a3e9a6e799cb71ecfa7d80465351.jpg'},
        {value: '小米电视4A 65英寸', price: '2699', sub: false, src: 'https://www.mi.com/mitv4A/65', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bd922870295a97a0972eaba5af92129e.jpg'},
        {value: '查看全部', type: '小米电视', sub: false, src: 'https://www.mi.com/a/h/9819.html', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cd4dafd1461a006f161d00924bf692e9.png'},
      ],
      laptop: [
        {value: 'RedmiBook 14 独显版', price: '3999', sub: true, src: 'https://item.mi.com/10000153.html', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/be5ddca319f92a508a6e3b3bac4d5fb2.png'},
        {value: '小米笔记本Air 12.5"', price: '3599', sub: true, src: 'https://item.mi.com/10000145.html', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/95c4329ce2c454e2a5fa1e0931528a46.png'},
        {value: '小米笔记本 Air 13.3"', price: '4999', sub: true, src: 'https://item.mi.com/10000142.html', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96108a8feee8e790389b09b8b949fa7d.png'},
        {value: '小米笔记本 15.6"', price: '3799', sub: true, src: 'https://item.mi.com/10000141.html', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bb159dbe860ee434b52d8eed9e9fd424.png'},
        {value: '小米笔记本Pro 15.6"', price: '4999', sub: true, src: 'https://item.mi.com/10000144.html', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d712f71b3c4a3b562601c2b956a660ad.png'},
        {value: '小米游戏本', price: '5999', sub: true, src: 'https://item.mi.com/10000113.html', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60b99f44108d4cf5967bb614cf1e8690.png'}
      ],
      household: [
        {value: '米家互联网空调C1（一级能效）', price: '2299', sub: false, src: 'https://www.mi.com/airconditionc1/v1c1/', url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03dc85cd792904ddc8027b2d781beed8.png'},
        {value: '米家互联网空调（一级能效）', price: '2199', sub: false, src: 'https://www.mi.com/airenergy/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e06b219c5bced9256467b17738a943c6.png'},
        {value: 'Redmi全自动波轮洗衣机1A', price: '699', sub: false, src: 'https://item.mi.com/9509.html', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c5d772b7c2a159c3ed7d4e31bd293f18.jpg'},
        {value: '米家互联网洗烘一体机10kg', price: '1899', sub: false, src: 'https://www.mi.com/washer-dryer-10/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11b8bca444aba2994fe852993eac9203.png'},
        {value: '小米净水器', price: '1999', sub: false, src: 'https://www.mi.com/water2', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/486a2a7359b6bda95b3dbd4e45b9c50a.jpg'},
        {value: '米家扫地机器人', price: '1499', sub: false, src: 'https://www.mi.com/roomrobot/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4ae019eebf10a55f8df2fee8d19b4e1f.jpg'}
      ],
      router: [
        {value: '小米路由器 Mesh', price: '999', sub: false, src: 'https://www.mi.com/mesh/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ec5be5f93ac0118aeec27b8df4337fc9.jpg'},
        {value: '小米路由器4A 千兆版', price: '149', sub: false, src: 'https://www.mi.com/miwifi4ac/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/026a28fc18eff2cfa4d26a799a2da9cc.jpg'},
        {value: '小米路由器 4C', price: '59', sub: false, src: 'https://item.mi.com/8645.html', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28efac56ef4c4942077dac7e30e8c624.jpg'},
        {value: '小米路由器 4A', price: '99', sub: false, src: 'https://www.mi.com/miwifi4a/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3c3e9f61cc72ccd2a37fc90fed215b66.jpg'},
        {value: '小米路由器 HD/Pro', price: '399', sub: false, src: 'https://www.mi.com/miwifihd/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5fc5ee374e5306aa5513be4f3b560531.png'},
        {value: '查看全部', type: '小米路由器', sub: false, src: 'https://www.mi.com/a/h/8363.html', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2ddc6a2789c5f5ff78fa4ca1402417c8.png'}
      ],
      hardware: [
        {value: '小米米家智能摄像机云台版', price: '189', sub: false, src: 'https://www.mi.com/camera-360/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2a500be4264c692899b25d86c16403f7.jpg'},
        {value: '小米小爱老师', price: '489', sub: true, src: 'https://www.mi.com/aiteacher-wifi/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e3fb0886fdb13e5ae784b9713b9a0038.jpg'},
        {value: '小米米家智能门锁', price: '1299', sub: false, src: 'https://www.mi.com/mj-smartlock/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5630aa997c82409ee33b2814c7eb2244.jpg'},
        {value: '小米小爱触屏音箱', price: '299', sub: false, src: 'https://www.mi.com/aispeaker-touch/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6e585a4bf5c0f744ca60f19ecd6fadf.jpg'},
        {value: '小爱万能遥控版', price: '179', sub: false, src: 'https://www.mi.com/aispeaker-control/', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df136199221a23299bc5348f37230a86.jpg'},
        {value: '查看全部', type: '智能硬件', sub: false, src: 'https://www.mi.com/p/3469.html?client_id=180100041086&masid=17409.0245', url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c1016ddffd2ac5808c4bebcdbefd413a.jpg'}
      ],
      searchHot: ['小米 9','Redmi K20 pro', 'Redmi K20', 'Redmi Note 7 Pro', 'Redmi note 7', '小米电视4c', '电视32英寸', '笔记本pro', '小爱音箱', '净水器']
    }
  },
  methods: {
    // 菜单显示区域
    menusListShow (type) {
      if (type) {
        this.menusItemData = this[type];
      }

      this.menusListFlag = true;
      clearTimeout(this.timer);
    },
    menusListHide () {
      this.timer = setTimeout(() => {
				this.menusListFlag = false;
			}, 300);
    },
    // 搜索框下拉列表
    searchListShow () {
      this.hotsListFlag = false;
      this.focusFlag = true;
    },
    searchListHide () {
      this.hotsListFlag = true;
      this.focusFlag = false;
    }
  }
}
</script>

<style lang="less">
  .top-header {
    width: 100%;
    height: 100px;
    .top-container {
      width: 1226px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .mi-icon {
        display: block;
        width: 55px;
        height: 55px;
        cursor: pointer;
        background: #ff6700 url('../assets/image/home-logo.png') no-repeat;
        background-position: -55px 0;
        transition: all .20s ease;
      }

      .mi-icon:hover {
          background-position: 0 0;
        }

      .header-navs-container {
        width: 820px;
        display: flex;
        height: 100%;
        .divider {
          width: 142px;
          height: 100px;
        }

        .navs {
          display: flex;
          line-height: 100px;
          .navs-item > a {
            cursor: pointer;
            padding: 26px 10px 38px;
            &:hover {
              color: #ff6700;
            }
          }
        }
      }

      .header-search-container {
        height: 50px;
        position: relative;
        display: flex;
        .search-input {
          width: 240px;
          height: 100%;
          outline: none;
          font-size: 15px;
          border: 1px solid #e0e0e0;
        }

        .search-btn {
          border: 1px solid #e0e0e0;
          cursor: pointer;
          i {
            font-size: 19px;
            width: 48px;
            background: #fff;
            color: #616161;
            line-height: 48px;

            &:hover {
              background:#ff6700;
              color: #fff;
              transition: all .20s ease;
            }
          }

          &:hover {
            border: 1px solid #ff6700;
            transition: all .20s ease;
          }
        }

        .active {
          transition: all .20s ease;
          border: 1px solid #ff6700;
        }

        .search-hots {
          position: absolute;
          display: flex;
          top: 14px;
          right: 55px;
          z-index: 2;
          .hots-item {
            width: auto;
            height: 18px;
            line-height: 18px;
            padding: 0 5px;
            font-size: 12px;
            background: #eee;
            color: #757575;
            margin-right: 5px;
            cursor: pointer;
            &:hover {
              color: #fff;
              background: #ff6300;
            }
          }
        }

        .search-list {
          position: absolute;
          width: 240px;
          top: 50px;
          height: auto;
          border: 1px solid #ff6700;
          border-top: 0;
          text-align: left;
          z-index: 16;
          .list-item {
            cursor: pointer;
            padding: 6px 15px;
            font-size: 12px;
            background: #fff;
            color: #424242;
            &:hover {
              background: #fafafa;
            }
          }
        }
      }
    }

    .menus-list {
      position: absolute;
      left: 0;
      top: 140px;
      width: 100%;
      // height: 230px;
      background: #fff;
      border-top: 1px solid #e0e0e0;
      box-shadow: 0 3px 4px rgba(0, 0, 0, .18);
      overflow: hidden;
      z-index: 15;
      .menus {
        padding: 30px 0 30px 110px;
        min-width: 1500px;
        display: flex;
        .menus-item {
          a {
            display: block;
				    padding: 0 20px;
				    border-right: 1px solid #ccc;
          }

          &:nth-last-child(1) {
            a {
              border: 0;
            }
          }

          .item-img {
            width: 100%;
            width: 160px;
            height: 110px;
          }

          .item-value {
            width: 100%;
            height: 16px;
            margin-top: 16px;
            font-size: 12px;
            text-align: center;
          }

          .item-type {
            width: 100%;
            height: 16px;
            margin: 4px 0 4px;
            font-size: 12px;
            text-align: center;
          }

          .item-price {
            width: 100%;
            height: 14px;
            line-height: 14px;
            margin: 5px 0 5px;
            font-size: 10px;
            text-align: center;
            color: #ff6700;
          }
        }
      }
    }
  }

  // 菜单选项
  .menu-trans-enter-active, .menu-trans-leave-active {
    transition: all .30s ease-in;
    height: 230px;
  }

  .menu-trans-enter, .menu-trans-leave-to {
    height: 0;
  }

  .menu-trans-enter-to, .menu-trans-leave {
    height: 230px;
  }

  // 搜索热点
  .list-trans-enter-active, .list-trans-leave-active {
    transition: all .10s ease-in;
    opacity: 1;
  }

  .list-trans-enter, .list-trans-leave-to {
      opacity: 0;
    }

  .list-trans-enter-to, .list-trans-leave {
    opacity: 1;
  }
</style>