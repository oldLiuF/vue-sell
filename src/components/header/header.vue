<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="supports">
          <ul>
            <li v-for="(item, index) in seller.supports" :key="item.type">
              <span :class="`icon-`+index"></span>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import api from '@/api/index'

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {}
  },

  /* mounted () {
    this.$nextTick(() => {
      this.initData()
    })
  }, */

  methods: {
    /* async initData () {
      let result = await api.get('api/seller')
      if (result.success) {
        this.seller = result.data.data
      }
      console.log(result)
    } */
  }
}
</script>

<style lang="scss" scoped>
.header {
  color: #fff;
  background: #000;
}

.content-wrapper {
  padding: 24px 16px 18px 24px;
  font-size: 0;
  .avatar {
    display: inline-block;
    margin-right: 16px;
  }
}

.content {
  display: inline-block;
  font-size: 14px;
  .title {
    line-height: 16px;
    font-size: 16px;
    font-weight: bold;
  }
}

.supports {
  height: 20px;
  overflow: hidden;
}
</style>
