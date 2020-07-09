<template>
  <div>
       <navbar>
          <!-- <span slot='left-arrow'>></span>
          <span slot='text1'>商品</span> -->
          <span slot='text2'>购物车<span>()</span></span>
          
          <!-- <span slot='text3'></span>
          <span slot='right-arrow'></span> -->
      </navbar>
    购物车组件
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar/navbar'

export default {
  name:'Cart',
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
