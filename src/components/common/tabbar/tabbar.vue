<template>
 
    <div id='tab-bar'>
        <slot></slot>
        <!-- <div class="tab-bar-item">
            <div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon--tab-home"></use>
                </svg>
            </div>
            <div>首页</div>
        </div>
        <div class="tab-bar-item">分类</div>
        <div class="tab-bar-item">购物车</div>
        <div class="tab-bar-item">我的</div> -->
    </div>
    

</template>

<script>
export default {
name:'Tabbar',
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
#tab-bar{
    width:100%;
    display: flex;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    box-shadow: 0 -3px 1px rgb(100,100,100,.2);
    background-color: #f6f6f6;
    text-align: center;
    padding-top:5px;
}


</style>