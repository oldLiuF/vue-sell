<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import api from './api/index'
import header from '@/components/header/header'

export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },

  mounted () {
    // this.$nextTick(() => {
    // 设备像素比
    var dpr = window.devicePixelRatio
    console.log('dpr: ' + dpr)
    this.initData()
    // })
  },

  methods: {
    async initData () {
      let result = await api.get('api/seller')
      if (result.success) {
        this.seller = result.data.data
      }
      console.log(result)
    }
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="scss" scoped>
#app {
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    .tab-item {
      flex: 1;
      text-align: center;
      /* & 相当于 .tab-item 这元素 */
      & > a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
}
</style>
