<template>
  <div>
     <navbar>
          <!-- <span slot='left-arrow'>></span>
          <span slot='text1'>商品</span> -->
          <span slot='text2'>我的</span>
          
          <!-- <span slot='text3'></span>
          <span slot='right-arrow'></span> -->
      </navbar>
    我的 组件
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar/navbar'

export default {
  name:'Profile',
  data () {
    return {
    }
  },
  components:{
    Navbar
  },
  methods: {},

  created () {
  }
}
</script>

<style>

</style>
