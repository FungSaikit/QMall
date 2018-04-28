<template>
  <div>
    <div id="f-menu" :hidden="!isSubMenuShow">
      <div class="f-m-r">
        <img src="static/BottomBar/mid0.png" class="i0">
        <img src="static/BottomBar/mid1.png" class="i1">
        <img src="static/BottomBar/mid2.png" class="i2">
        <img src="static/BottomBar/mid3.png" class="i3">
        <img src="static/BottomBar/mid4.png" class="i4">
      </div>
    </div>
    <div class="footer">
      <div class="ft fa">
        <img src="static/BottomBar/01.png" alt="">
        <div>主页</div>
      </div>
      <div class="ft">
        <img src="static/BottomBar/1.png" alt="">
        <div>分类查找</div>
      </div>
      <div class="ft" @click="showSubMenu()">
        <img id="fm" src="static/BottomBar/2.png" alt="" :hidden="isSubMenuShow">
        <img id="fma" src="static/BottomBar/21.png" alt="" :hidden="!isSubMenuShow">
      </div>
      <div class="ft">
        <img src="static/BottomBar/3.png" alt="">
        <div>购物车</div>
      </div>
      <div class="ft">
        <img src="static/BottomBar/4.png" alt="">
        <div>我的</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "BottomBar",
    data() {
      return {
        isSubMenuShow: false
      }
    },
    methods: {
      showSubMenu() {
        this.isSubMenuShow = !this.isSubMenuShow;
      }
    }
  }

</script>

<style scoped>
  .footer {
    width: 100%;
    height: 3rem;
    display: flex;
    display: -webkit-flex;
    border-top: 1px solid lightgray;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    text-align: center;
  }

  .ft {
    width: 20%;
    flex-grow: 1;
    -webkit-flex-grow: 1;
    font-size: 0.8rem;
    color: dimgray;
  }

  .ft img {
    width: 1.2rem;
    height: 1.2rem;
    margin: 0.2rem;
  }

  #fm, #fma {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0.25rem;
  }

  .fa {
    color: #c474d5;
  }

  #f-menu {
    z-index: 10;
    width: 16rem;
    height: 8rem;
    background-color: rgba(255, 255, 255, 0.95);
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 3rem;
    border-top-left-radius: 8rem;
    border-top-right-radius: 8rem;
    border: 1px solid lightgray;
  }

  .f-m-r {
    width: 100%;
    height: 100%;
    position: relative;
  }

  #f-menu img {
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
  }

  .i0 {
    left: 1rem;
    bottom: 0.5rem;
  }

  .i1 {
    left: 3.1rem;
    bottom: 3.8rem
  }

  .i2 {
    left: 0;
    right: 0;
    margin: auto;
    top: 0.5rem;
  }

  .i3 {
    right: 3.1rem;
    bottom: 3.8rem;
  }

  .i4 {
    right: 1rem;
    bottom: 0.5rem;
  }
</style>
