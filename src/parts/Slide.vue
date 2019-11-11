<template>
  <div class="sale-slide">
    <ul class="slide-container"
    :style="transformStyle">
      <li class="slide-item"
      v-for="(item, index) in slideItems"
      :key="index"
      :style="{'border-top-color': item.topColor}">
        <a :href="item.url">
          <img :src="item.src" :alt="item.value">
          <h3 class="name ellipsis">{{item.value}}</h3>
          <span class="desc ellipsis">{{item.desc}}</span>
          <div class="price">
            <span>{{item.newPrice}}元</span>
            <del>{{item.oldPrice}}元</del>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slideIndex: 0,
      slideTimer: '',
      Xvalue: 0
    }
  },
  props: ['slideItems'],
  methods: {
    next () {
      const lastIndex = parseInt(this.slideItems.length / 4);
			if (this.slideIndex < lastIndex) {
        if (this.slideIndex === lastIndex - 1 && this.slideItems.length % 4 !== 0) {
          this.slideIndex += 1;
          this.Xvalue = - ((this.slideIndex - 1) * 992 + (this.slideItems.length % 4) * 248);
        } else {
          this.slideIndex += 1;
          this.Xvalue = - (this.slideIndex * 992);
        }
			} else {
        this.slideIndex = 0;
        this.Xvalue = 0;
			}
    },
    prev () {
      const lastIndex = parseInt(this.slideItems.length / 4);
			if (this.slideIndex > 0) {
        this.slideIndex -= 1;
        this.Xvalue = - (this.slideIndex * 992);
			} else {
        this.slideIndex = lastIndex;
        this.Xvalue =  - (lastIndex * 992);
			}
    },
    play () {
			clearInterval(this.slideTimer);
			this.slideTimer = setInterval(() => {
				this.next();
			}, 5000);
    }
  },
  computed: {
    transformStyle () {
      return {
        'transform': `translate3d(${this.Xvalue}px, 0, 0)`
      }
    }
  },
  mounted () {
    this.play();
  }
}
</script>

<style lang="less">
  .sale-slide {
    width: 978px;
    height: 340px;
    margin-left: 14px;
    overflow: hidden;
    position: relative;
    display: flex;
    .slide-container {
      height: 340px;
      display: flex;
      transition: all 1s ease-in-out;
      .slide-item {
        display: block;
        width: 234px;
        margin-right: 14px;
        border-top-width: 1px;
        border-top-style: solid;
        text-align: center;
        background: #fff;
        a {
          display: block;
          height: 300px;
          padding-top: 39px;
        }

        img {
          display: block;
          width: 160px;
          height: 160px;
          margin: 0 37px 22px;
        }

        .name {
          display: block;
          margin: 0 20px 3px;
          font-size: 14px;
          font-weight: 400;
          color: #212121;
        }

        .desc {
          display: block;
          height: 18px;
          margin: 0 20px 12px;
          font-size: 12px;
          color: #b0b0b0;
        }

        .price {
          margin: 0 10px 14px;
          font-size: 14px;
          color: #ff6709;
          del {
            color: #b0b0b0;
            margin-left: 4px;
          }
        }
      }
    }
  }

  .ellipsis {
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>