<template>
  <div>
     <navbar>
          <!-- <span slot='left-arrow'>></span>
          <span slot='text1'>商品</span> -->
          <span slot='text2'>商品分类</span>
          <!-- <span slot='text3'></span>
          <span slot='right-arrow'></span> -->
      </navbar>
    分类组件
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar/navbar'

export default {
  name:'Category',
  components:{
    Navbar
  },
  data () {
    return {
    }
  },

  methods: {},

  created () {
  }
}
</script>

<style>

</style>
