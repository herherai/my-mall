<template>
  <div id="app">
    <!-- <navbar></navbar> -->
    <router-view></router-view>
    <tabbar>
      <tabbar-item path='/home'>
        <div slot='item-icon'>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon--tab-home"></use>
          </svg>
        </div>
        <div slot='item-icon-active'>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-index"></use>
          </svg>
        </div>
        <div slot='item-text'>主页</div>
      </tabbar-item>
      <tabbar-item path='/category'>
        <div slot='item-icon'>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-feneli-copy"></use>
          </svg>
        </div>
        <div slot='item-icon-active'>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-leimupinleifenleileibie1"></use>
          </svg>
        </div>
        <div slot='item-text'>分类</div>
      </tabbar-item>
      <tabbar-item path='/cart'>
        <div slot='item-icon'>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gouwuche"></use>
          </svg>
        </div>
        <div slot='item-icon-active'>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-che"></use>
          </svg>
        </div>
        <div slot='item-text'>购物车</div>
      </tabbar-item>
      <tabbar-item path='/profile'>
        <div slot='item-icon'>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wodedangxuan1"></use>
          </svg>
        </div>
        <div slot='item-icon-active'>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wodedangxuan"></use>
          </svg>
        </div>
        <div slot='item-text'>我的</div>
      </tabbar-item>
    </tabbar>
    
    
  </div>
</template>

<script>

// import Home from './views/home/Home'
import Tabbar from './components/common/tabbar/tabbar'
import TabbarItem from './components/common/tabbar/tabbarItem'


export default {
  name: 'App',
  components: {
  //  Home,
   Tabbar,
   TabbarItem,
  //  Navbar
  }
}
</script>

<style>
@import 'assets/css/base.css';

</style>
