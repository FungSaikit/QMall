<template>
  <div class="filter">
    <filter-window :hidden="isFilterWindowHidden"></filter-window>
    <add-to-cart :hidden="isAddToCartHidden"></add-to-cart>
    <div class="filter-bar">
      <div class="filter-bar-item" :class="{ 'fba-active': orderType === 0 }" @click="changeOrderType(0)">新品优先</div>
      <div class="filter-bar-item" :class="{ 'fba-active': orderType !== 0 }" @click="showFilterMenu()">{{ orderType === 0 || orderType === 1 ? '销量降序' : orderType === 2 ? '价格降序' : '价格升序' }} {{isFilterMenuHidden ? '▼' : '▲'}}</div>
      <div class="filter-bar-item fbi-last" @click="showFilterWindow">筛选</div>
    </div>
    <div class="filter-menu" :hidden="isFilterMenuHidden">
      <div class="fml" :class="{ 'fba-active': orderType === 1 }" @click="changeOrderType(1)">销量从高到低</div>
      <div class="fml" :class="{ 'fba-active': orderType === 2 }" @click="changeOrderType(2)">价格从高到低</div>
      <div class="fml" :class="{ 'fba-active': orderType === 3 }" @click="changeOrderType(3)">价格从低到高</div>
    </div>
    <div class="goods-list">
      <div v-for="item in 10" class="goods" gid="0" @click="loadGoods()">
        <img src="static/Index/test_light.jpg" class="gp">
        <div class="title">厂家直销售质量优良工业级磷酸三钠</div>
        <div class="model">型号：E-NPX9014</div>
        <div class="price">
          <span class="rmbl">￥</span>
          <span class="rmbn">1499</span>
          <div class="ac" onclick="addToCart()">
            <img src="static/Index/cart.png" alt="" @click="showAddToCart">
          </div>
        </div>
        <div class="favourite" onclick="addToFavourite(this)">
          <div>
            <img src="static/Index/favourite.png" alt="">
            <img src="static/Index/favourite_active.png" alt="" hidden>
          </div>
          <div class="fav">收藏</div>
          <div class="fav favourite-active" hidden>已收藏</div>
          <div>磷酸盐</div>
        </div>
      </div>
      <div class="loading-block">
        正在加载，请稍候...
      </div>
      <div class="placeholder" style="float: left; height: 3.5rem;"></div>
    </div>
    <div class="placeholder"></div>
  </div>
</template>

<script>
  import FilterWindow from '@/components/FilterWindow'
  import AddToCart from '@/components/AddToCart'

  export default {
    name: "ClassFilter",
    components: {
      FilterWindow,
      AddToCart
    },
    data() {
      return {
        isFilterMenuHidden: true,
        isFilterWindowHidden: true,
        isAddToCartHidden: true,
        orderType: 0,//0默认新品优先，1销量降序，2价格降序，3价格升序
      }
    },
    methods: {
      changeOrderType(type) {
        this.orderType = type;
        this.isFilterMenuHidden = true;
      },
      showFilterMenu() {
        this.isFilterMenuHidden = !this.isFilterMenuHidden;
      },
      showFilterWindow() {
        if (this.isFilterWindowHidden) {
          document.body.style.overflow = 'hidden';
          document.body.style.position = 'fixed';
        } else {
          document.body.style.overflow = 'auto';
          document.body.style.position = '';
        }
        this.isFilterWindowHidden = !this.isFilterWindowHidden;
      },
      showAddToCart() {
        this.isAddToCartHidden = !this.isAddToCartHidden;
      }
    }
  }
</script>

<style scoped>

  .filter-bar {
    width: 100%;
    height: 3rem;
    background-color: #fff;
    display: flex;
    color: #666;
    border-bottom: 1px solid lightgray;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .fba-active {
    color: #c474d5;
  }

  .filter-menu {
    width: 100%;
    background-color: #fff;
    color: #666;
    position: fixed;
    left: 0;
    top: 3rem;
  }

  .fml {
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    padding-left: 1rem;
    border-bottom: 1px solid lightgray;
  }

  .filter-bar-item {
    height: 3rem;
    line-height: 3rem;
    width: 35%;
    text-align: center;
  }

  .filter-bar-item.fbi-last {
    border-left: 1px solid lightgray;
    width: 20%;
    flex-grow: 1;
    -webkit-flex-grow: 1;
  }

  .filter {
    width: 100%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
  }

  .goods-list {
    margin-top: 3rem;
  }

  .goods {
    padding: 2%;
    width: 43%;
    background-color: #fff;
    float: left;
    margin: 0.5rem 0 0 2%;
  }

  .gp {
    width: 100%;
  }

  .title {
    height: 2.4rem;
    line-height: 1.2rem;
    overflow: hidden;
    font-size: 0.8rem;
    color: #3d3d3d;
  }

  .model {
    height: 1.2rem;
    line-height: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #a1a1a1;
    font-size: 0.6rem;
  }

  .price {
    height: 2.5rem;
    line-height: 2.5rem;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    color: #af8d50;
    display: flex;
    display: -webkit-flex;
  }

  .rmbl {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    background-color: #af8d50;
    color: #fff;
    text-align: center;
    line-height: 1.5rem;
    margin-top: 0.5rem;
  }

  .rmbn {
    flex-grow: 1;
    -webkit-flex-grow: 1;
  }

  .ac {
    width: 2.5rem;
    height: 2.5rem;
  }

  .ac img {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem;
  }

  .favourite {
    height: 1.5rem;
    line-height: 1.5rem;
    display: flex;
    display: -webkit-flex;
    font-size: 0.8rem;
    color: #a1a1a1;
    vertical-align: middle;
  }

  .favourite-active {
    color: #c474d5;
  }

  .favourite img {
    margin: 0.25rem;
    width: 0.9rem;
    height: 0.9rem;
  }

  .fav {
    flex-grow: 1;
    -webkit-flex-grow: 1;
  }

  .loading-block {
    margin-top: 0.5rem;
    margin-left: 2%;
    width: 96%;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.8rem;
    background-color: #fff;
    color: #696969;
    float: left;
    text-align: center;
  }

</style>
