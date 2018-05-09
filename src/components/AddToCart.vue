<template>
  <div>
    <div class="add-to-cart">
      <div class="atc-holder" @click="$parent.showAddToCart"></div>
      <div class="add-details">
        <div class="close-me" @click="$parent.showAddToCart">ｘ</div>
        <div class="top">
          <div class="top-img">
            <img class="color-pic" src="static/Index/test_light.jpg" alt="">
          </div>
          <div class="top-details">
            <div>&nbsp</div>
            <div class="price">￥1765.00</div>
            <div class="storage">库存:43件&nbsp&nbsp&nbsp&nbsp累计销量:316件</div>
            <div class="selected">[已选]直径650</div>
          </div>
        </div>
        <div class="middle"></div>
        <div class="placeholder"></div>
        <div class="confirm-button">确认</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "AddToCart"
  }

</script>

<style scoped>

  .add-to-cart {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 15;
    background: rgba(0, 0, 0, 0.4);
  }

  .atc-holder {
    width: 100%;
    height: 20%;
  }

  .add-details {
    width: 100%;
    height: 80%;
    background-color: #fff;
    position: relative;
  }

  .close-me {
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    border: 2px solid #000;
    border-radius: 1rem;
    font-size: 1rem;
    font-weight: bold;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }

  .confirm-button {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    color: #fff;
    background: -webkit-linear-gradient(left, #e171bd, #a678f2);
    background: -o-linear-gradient(right, #e171bd, #a678f2);
    background: -moz-linear-gradient(right, #e171bd, #a678f2);
    background: linear-gradient(to right, #e171bd, #a678f2);
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .top {
    width: 100%;
    height: 6rem;
    display: flex;
    display: -webkit-flex;
  }

  .top-img {
    height: 6rem;
    width: 6rem;
  }

  .color-pic {
    height: 5rem;
    width: 5rem;
    margin: 0.5rem;
  }

  .top-details {
    width: 10rem;
    flex-grow: 1;
    -webkit-flex-grow: 1;
    line-height: 1.4rem;
    color: #3d3d3d;
  }

  .price {
    color: #f38200;
  }

  .storage {
    font-size: 0.8rem;
  }

  .selected {
    font-size: 0.8rem;
  }

</style>
