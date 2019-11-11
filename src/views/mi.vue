<template>
  <div class="index-page">
    <top-bar></top-bar>
    <top-header></top-header>
    <menu-banner></menu-banner>
    <sub-channel></sub-channel>
    <div class="gray-page">
      <flash-sale></flash-sale>
      <goods-sale></goods-sale>
      <video-box></video-box>
    </div>
    <site-footer></site-footer>
    <div class="gray-page">
      <site-info></site-info>
    </div>
    <tool-bar></tool-bar>
    <!-- 弹窗 -->
    <video-window></video-window>
    <we-chat-window></we-chat-window>
    <location-window></location-window>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import TopHeader from '../components/TopHeader'
import MenuBanner from '../components/MenuBanner'
import SubChannel from '../components/SubChannel'
import FlashSale from '../components/FlashSale'
import GoodsSale from '../components/GoodsSale'
import VideoBox from '../components/VideoBox'
import SiteFooter from '../components/SiteFooter'
import SiteInfo from '../components/SiteInfo'
import ToolBar from '../components/ToolBar'

// 弹窗
import VideoWindow from '../parts/VideoWindow'
import WeChatWindow from '../parts/WeChatWindow'
import LocationWindow from '../parts/LocationWindow'

export default {
  data () {
    return {}
  },
  components: {
    'TopBar': TopBar,
    'TopHeader': TopHeader,
    'MenuBanner': MenuBanner,
    'SubChannel': SubChannel,
    'FlashSale': FlashSale,
    'GoodsSale': GoodsSale,
    'VideoBox': VideoBox,
    'SiteFooter': SiteFooter,
    'SiteInfo': SiteInfo,
    'ToolBar': ToolBar,
    'VideoWindow': VideoWindow,
    'WeChatWindow': WeChatWindow,
    'LocationWindow': LocationWindow,
  }
}
</script>

<style lang="less">
  .index-page {
    .gray-page {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      background-color: #f5f5f5;
    }
  }
</style>