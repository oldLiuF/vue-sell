<template>
  <div>{{seller.name}}</div>
</template>

<script>
import api from '@/api/index'

export default {
  data () {
    return {
      seller: {}
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.initData()
    })
  },

  methods: {
    async initData () {
      let result = await api.get('api/seller')
      if (result.success) {
        this.seller = result.data.data
      }
      console.log(result)
    }
  }
}
</script>

<style>

</style>
