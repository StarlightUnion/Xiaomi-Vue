<template>
  <div class="good-box">
    <div class="box-header">
      <h2 class="box-title">{{goodsItem.boxTitle}}</h2>
      <div class="type-select" v-if="goodsItem.isHot">
        <ul class="tab-list">
          <li class="tab-item"
          v-for="(item, index) in goodsItem.tabList"
          :key="index"
          :class="{'active': item.type === selectItem.type}"
          @mouseenter="selectType(item)">{{item.value}}</li>
        </ul>
      </div>
      <div class="type-more" v-else>
        <a :href="goodsItem.url" target="_blank">
          <span>查看全部</span>
          <i class="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
    <div class="box-content">
      <div class="promo-content">
        <div class="promo-one" v-if="goodsItem.listData.promo.length === 1">
          <a class="brick-item" target="_blank" :href="goodsItem.listData.promo[0].url">
            <img :src="goodsItem.listData.promo[0].src">
          </a>
        </div>
        <div class="promo-two" v-if="goodsItem.listData.promo.length === 2">
          <a class="brick-item" target="_blank"
          :href="item.url"
          v-for="(item, index) in goodsItem.listData.promo"
          :key="index">
            <img :src="item.src">
          </a>
        </div>
      </div>
      <div class="goods-content">
        <div class="goods-one" v-if="!goodsItem.isHot">
          <div class="goods-item brick-item"
          v-for="(item, index) in goodsItem.listData.goods"
          :key="index">
            <a :href="item.url" target="_blank">
              <img :src="item.src" :alt="item.value">
              <h3 class="name ellipsis">{{item.value}}</h3>
              <span class="desc ellipsis">{{item.desc}}</span>
              <div class="price">
                <span>{{item.newPrice}}元</span>
                <span v-if="item.sub">起</span>
                <del v-if="item.oldPrice">{{item.oldPrice}}元</del>
              </div>
            </a>
          </div>
        </div>
        <div class="goods-two" v-else>
          <template v-for="(item, index) in goodsData">
            <div class="goods-item-sm" :key="index" v-if="index === goodsData.length - 1 && goodsData.length % 2 === 0">
              <a class="brick-item" :href="item.url" target="_blank">
                <div class="text-container">
                  <h3 class="name">{{item.value}}</h3>
                  <div class="price">
                    <span>{{item.newPrice}}元</span>
                    <span v-if="item.sub">起</span>
                  </div>
                </div>
                <img :src="item.src" :alt="item.value">
              </a>
              <a class="brick-item" :href="selectItem.url" target="_blank">
                <div class="text-container look-more">
                  <h3 class="name">浏览更多</h3>
                  <span class="desc">{{selectItem.value}}</span>
                </div>
                <img src="../assets/image/right.png">
              </a>
            </div>
            <div class="goods-item-bg" :key="index" v-if="index === goodsData.length - 1 && goodsData.length % 2 !== 0">
              <a class="brick-item" :href="item.url" target="_blank">
                <img :src="item.src" :alt="item.value">
                <h3 class="name ellipsis">{{item.value}}</h3>
                <span class="desc ellipsis">{{item.desc}}</span>
                <div class="price">
                  <span>{{item.newPrice}}元</span>
                  <span v-if="item.sub">起</span>
                  <del v-if="item.oldPrice">{{item.oldPrice}}元</del>
                </div>
              </a>
              <a class="brick-more brick-item" :href="selectItem.url" target="_blank">
                <div class="text-container look-more">
                  <h3 class="name">浏览更多</h3>
                  <span class="desc">{{selectItem.value}}</span>
                </div>
                <img src="../assets/image/right.png">
              </a>
            </div>
            <div class="goods-item brick-item" :key="index" v-if="index < goodsData.length - 1">
              <a :href="item.url" target="_blank">
                <img :src="item.src" :alt="item.value">
                <h3 class="name ellipsis">{{item.value}}</h3>
                <span class="desc ellipsis">{{item.desc}}</span>
                <div class="price">
                  <span>{{item.newPrice}}元</span>
                  <span v-if="item.sub">起</span>
                  <del v-if="item.oldPrice">{{item.oldPrice}}元</del>
                </div>
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectItem: '',
      goodsData: ''
    }
  },
  props: ['goodsItem'],
  methods: {
    selectType (item) {
      this.selectItem = item;
      this.goodsData = this.goodsItem.listData[item.type];
    },
    init () {
      if (this.goodsItem.tabList) {
        this.selectItem = this.goodsItem.tabList[0];
        this.goodsData = this.goodsItem.listData.hots;
      } else {
        this.selectItem = '';
        this.goodsData = '';
      }
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style lang="less">
  .good-box {
    position: relative;
    width: 1226px;
    height: auto;
    margin: 0 auto;
  }

  .box-header {
    .type-select {
      display: inline-block;
      .tab-list {
        display: flex;
        .tab-item {
          display: inline-block;
          margin-left: 30px;
          color: #424242;
          border-bottom: 2px solid transparent;
          transition: all .3s;
          cursor: pointer;
        }

        .active {
          border-bottom: 2px solid #ff6709;
          color: #ff6709;
        }
      }
    }

    .type-more {
      display: inline-block;
      a {
        font-size: 16px;
        display: flex;
        align-items: center;
        span {
          color: #424242;
          transition: all .4s;
        }

        i {
          width: 20px;
          height: 20px;
          margin-left: 8px;
          border-radius: 16px;
          font-size: 15px;
          line-height: 20px;
          background: #b0b0b0;
          color: #fff;
          text-align: center;
          vertical-align: 2px;
          transition: all .4s;
        }

        &:hover {
          span {
            color: #ff6709;
          }

          i {
            background: #ff6709;
          }
        }
      }
    }
  }

  .box-content {
    display: flex;
    .promo-content .promo-one {
      a {
        display: block;
        height: 614px;
        img {
          height: 100%;
          width: 234px;
        }
      }
    }

    .promo-two {
      a {
        display: block;
        height: 300px;
        img {
          width: 234px;
          height: 100%;
        }
      }

      a:first-child {
        margin-bottom: 14px;
      }
    }

    .goods-content .goods-one,
    .goods-content .goods-two {
      width: 992px;
      display: flex;
      flex-wrap: wrap;
      .goods-item {
        background: #fff;
        height: 300px;
        padding: 20px 0;
        width: 234px;
        margin-left: 14px;
        margin-bottom: 14px;
      }
    }

    .goods-two .goods-item-sm {
      height: 300px;
      width: 234px;
      margin-left: 14px;
      a {
        display: flex;
        justify-content: space-between;
        height: 143px;
        background: #fff;
        padding: 30px 20px 30px 30px;
        margin-bottom: 14px;
        img {
          width: 80px;
          height: 80px;
          margin: 0;
        }
      }
    }

    .goods-two .goods-item-bg {
      height: 300px;
      width: 496px;
      display: flex;
      a {
        display: block;
        width: 234px;
        background: #fff;
        margin-left: 14px;
        padding: 20px 0;
      }

      .brick-more {
        display: flex;
        justify-content: space-between;
        height: 143px;
        padding: 30px 20px 30px 30px;
        img {
          width: 80px;
          height: 80px;
          margin: 0;
        }
      }
    }

    .goods-content {
      a {
        display: block;
        img {
          width: 160px;
          height: 160px;
          margin: 0 auto 18px;
        }

        .name {
          font-size: 14px;
          font-weight: 400;
          color: #333;
          margin: 0 10px 2px;
        }

        .desc {
          display: block;
          margin: 0 10px 10px;
          height: 18px;
          font-size: 12px;
          color: #b0b0b0;
        }

        .price {
          margin: 0 10px 14px;
          font-size: 14px;
          color: #ff6700;
          del {
            color: #b0b0b0;
            margin-left: 8px;
          }
        }
      }
    }
  }

  .brick-item {
    transition: all .2s linear;
    &:hover {
      transform: translate3d(0, -2px, 0);
      box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
    }
  }

  .goods-two .goods-item-sm,
  .goods-two .goods-item-bg {
    .look-more {
      padding-top: 0 !important;
      display: flex;
      flex-direction: column;
      align-self: center;
      .name {
        font-size: 18px;
        color: #333;
        margin: 0;
      }

      .desc {
        font-size: 12px;
        color: #757575;
        margin: 0;
      }
    }

    .text-container {
      width: 94px;
      padding-top: 10px;
      text-align: left;
      .name {
        margin: 0 0 5px;
      }

      .price {
        margin: 0;
      }
    }
  }
</style>