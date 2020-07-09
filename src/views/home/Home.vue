<template>
  <div class='home'>
      <navbar class='nav-bgc'>
          <span slot='text1'>购物车</span> 
      </navbar>
      <recommend-part :recommend=recommend />
      <popular-part/>
      <pop-bar :title = "['流行','最新','精选']" />
      <router-view/>
    
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar/navbar'
import PopBar from '@/components/content/popBar/PopBar'

import RecommendPart from '@/views/home/childrenComponents/recommendPart'
import PopularPart from '@/views/home/childrenComponents/PopularPart'

import {getHomeMultidata} from '@/network/home'


export default {
  name:'Home',
  components:{
      Navbar,
      RecommendPart,
      PopularPart,
      PopBar
  },
  data () {
    return {
        banner:[],
        recommend:[]
    }
  },


  methods: {},

  created () {
      getHomeMultidata().then(res =>{
          console.log(res)
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
          console.log(this.banner)
          console.log(this.recommend)
      })
  }
}
</script>

<style scoped>
    .nav-bgc{
        background-color:var(--color-tint);
        color:#fff;
    }
</style>
