<template>
  <div class='recommend'>
    <div class='recommend-item' v-for='item in recommend' :key= item.id>
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    name:'RecommendPart',
  data () {
    return {
    }
  },
  props:{
      recommend:{
          type:Array,
          default(){
              return []
          }
      }
  },

  methods: {},

  created () {
  }
}
</script>

<style scoped>
.recommend{
  width: 100%;
  display: flex;
  text-align: center;
  padding:10px 0 20px;
  font-size:12px;
  border-bottom:10px solid #eee;
}
.recommend-item{
  flex:1;
}
.recommend-item img{
  width:70px;
  height: 70px;
  margin-bottom:10px;
}

</style>
