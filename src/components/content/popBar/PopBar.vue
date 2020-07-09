<template>
  <div class='pop-bar'>
      <div  :class='{active:currentIndex==index}'
      v-for='(item, index) in title' :key='item.index'
       @click='btnClick(index)'>
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'PopBar',
  props:{
      title:{
          type:Array,
          default(){
              return []
          }

      }
  },
  data () {
    return {
      currentIndex:0
    }
  },

  methods: {
    btnClick(index){
      this.currentIndex = index
    }
  },

  created () {
  }
}
</script>

<style scoped>
.pop-bar{
  display: flex;
  text-align: center;
  line-height: 40px;
  font-size:12px;
  padding:0 20px;
}
.pop-bar div{
  flex:1;
}
.pop-bar span{
  /* border-bottom:2px solid pink; */
  padding:4px 0;
  
}
.active{
  color:var(--color-tint);
}
.active span{
  border-bottom:2px solid var(--color-tint);
  /* color:var(--color-tint); */
}

</style>
