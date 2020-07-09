<template>
  <!-- <div class='navbar'>
    <span class='left'>></span>
    <span class='middle'>
        <span>商品</span>
        <span>详情</span>
        <span>评价</span>
    </span>
    <span class='right'>></span>
  </div> -->
  <div class='navbar'>
    <span class='left'>
        <slot name='left-arrow'></slot>
    </span>
    <span class='middle'>
        <slot name='text1'></slot>
        <slot name='text2'></slot>
        <slot name='text3'></slot>
    </span>
    <span class='right'>
        <slot name='right-arrow'></slot>
    </span>
  </div>
</template>

<script>
export default {
  name:'Navbar',
  data () {
    return {
    }
  },

  methods: {},

  created () {
  }
}
</script>

<style scoped>
    .navbar{
        display: flex;
        height: 40px;
        line-height: 40px;;
        /* position:fixed;
        left:0;
        top:0;
        right:0; */
        background-color: #ff5777;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100,100,100,.18);
    }
    .left{
        flex:1;
    }
    .right{
        flex:1;
    }
    .middle{
        flex:5;
        display: flex;
        justify-content: space-around;

    }
    
</style>
