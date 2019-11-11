<template>
  <div class="sale-poster">
    <a :href="postItem.url" target="_blank">
      <img :src="postItem.src">
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['postItem']
}
</script>

<style lang="less">
  .sale-poster {
    width: 100%;
    height: 120px;
    margin: 22px 0;
    overflow: hidden;
    a {
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
      }
    }
  }
</style>