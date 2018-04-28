<template>
  <div class="topbar">
    <div class="tb-bt" @click="back">
      <img src="static/TopBar/back-white.png" alt="">
    </div>
    <div class="tb-title">
      <slot name="title"></slot>
    </div>
    <div class="tb-bt">
      <!--<img src="images/back-white.png" alt="">//topbar右按钮图片-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopBar",
    data() {
      return {

      }
    },
    methods: {
      back() {
        /*
        * 返回上一级
        * */
        alert('返回');
      }
    }
  }
</script>

<style scoped>

  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    background: -webkit-linear-gradient(left, #e171bb, #a878f2);
    background: -o-linear-gradient(right, #e171bb, #a878f2);
    background: -moz-linear-gradient(right, #e171bb, #a878f2);
    background: linear-gradient(to right, #e171bb , #a878f2);
    display: flex;
    display: -webkit-flex;
    color: #ffffff;
  }

  .tb-bt {
    width: 3rem;
  }

  .tb-bt img{
    height: 1.2rem;
    width: 1.2rem;
    margin: 0.9rem;
  }

  .tb-title {
    font-size: 1.2rem;
    width: 60%;
    flex-grow: 1;
    -webkit-flex-grow: 1;
    text-align: center;
  }

  .tb-placeholder {
    width: 100%;
    height: 3rem;
  }

</style>
