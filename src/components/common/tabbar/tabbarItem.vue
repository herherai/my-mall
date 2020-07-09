<template>
  <div class="tab-bar-item" @click='btnClick'>
    <div v-if='!isActive'>
        <slot name='item-icon'></slot>
    </div>
    <div v-else><slot name='item-icon-active'></slot></div>
    <div :class='{active:isActive}' ><slot name='item-text'></slot></div>
    </div>
</template>

<script>
export default {
  name:'TabbarItem',
  props:{
      path:String
  },
  data () {
    return {
        // isActive:true
    }
  },
  computed:{
      isActive(){
        //   console.log(this.$route)
        //   console.log(this.$router)
          return this.$route.path.indexOf(this.path)!=-1
      }
  },

  methods: {
      btnClick(){
          this.$router.push(this.path)
      }
  },

  created () {
  },
 
}
</script>

<style scoped >
.tab-bar-item{
    flex:1;
    height: 49px;
    font-size:14px;
}
.active{
    color:var(--color-tint);
}
</style>
