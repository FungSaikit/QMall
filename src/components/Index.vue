<template>
  <div class="index">
    <div class="top_navi">
      <div class="tl" @click="showSearchWindow">
        <img src="static/Index/tn_search.png" alt="">
      </div>
      <div class="tm" id="tm">
        <div v-for="(item, index) in goodsClasses" class="tm_tab" :class="{ tm_tab_active: item.isActive }" :tabindex="index" @click="changeTabs">{{item.title}}</div>
      </div>
      <div class="tr" @click="showClassWindow">
        <img src="static/Index/tn_class.png" alt="">
      </div>
    </div>
    <div class="content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="item in goodsClasses" class="swiper-slide" :class="">
            <div class="goods" gid="0" @click="loadGoods()">
              <img src="static/Index/test_light.jpg" class="gp">
              <div class="title">0雷士（NVC） 【满1699减550】雷士照明 客厅灯led吸顶灯 卧室灯 长方形灯具 智控轻奢三室两厅一阳台(套餐以赠品形式体现)</div>
              <div class="model">型号：E-NPX9014</div>
              <div class="price">
                <span class="rmbl">￥</span>
                <span class="rmbn">1499</span>
                <div class="ac" onclick="addToCart()">
                  <img src="static/Index/cart.png" alt="">
                </div>
              </div>
              <div class="favourite" onclick="addToFavourite(this)">
                <div>
                  <img src="static/Index/favourite.png" alt="">
                  <img src="static/Index/favourite_active.png" alt="" hidden>
                </div>
                <div class="fav">收藏</div>
                <div class="fav favourite-active" hidden>已收藏</div>
                <div>后现代</div>
              </div>
            </div>
            <div class="loading-block">
              正在加载，请稍候...
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="placeholder" style="margin-top: 0.5rem;"></div>
    <div class="search-window" :hidden="isSearchWindowHidden">
      <div class="search-bar">
        <div class="back-bt" @click="showSearchWindow">
          <img src="static/Index/back.png" alt="取消">
        </div>
        <div class="keyword">
          <input id="keyword" type="text" placeholder="请输入要搜索的内容" v-model="keyword">
        </div>
        <div class="search-bt">
          <img src="static/Index/tn_search.png" alt="搜索" @click="searchByKeyword">
        </div>
      </div>
    </div>
    <div class="class-window" :hidden="isClassWindowHidden">
      <div class="class-tb">
        <div class="cw-l">&nbsp&nbsp选择风格</div>
        <div class="cw-r" @click="showClassWindow">Ｘ</div>
      </div>
      <div class="i-classes">
        <div v-for="(item,index) in goodsClasses" class="i-class" :tabindex="index" @click="fastChangeTabs">{{item.title}}</div>
      </div>
    </div>

  </div>
</template>

<script>

  import Swiper from '../../static/Swiper/swiper-4.2.2.min'

  export default {
    name: 'Index',
    data() {
      return {
        topMiddle: null,
        goodsClasses: [
          {
            class_id: 0,
            title: '首页推荐',
            isActive: true
          },
          {
            class_id: 1,
            title: '硫酸盐',
            isActive: false
          },
          {
            class_id: 2,
            title: '硫化物',
            isActive: false
          },
          {
            class_id: 3,
            title: '氯化物',
            isActive: false
          },
          {
            class_id: 4,
            title: '磷酸盐',
            isActive: false
          },
          {
            class_id: 5,
            title: '硅酸盐',
            isActive: false
          },
          {
            class_id: 6,
            title: '硝酸盐',
            isActive: false
          },
          {
            class_id: 7,
            title: '硼酸盐',
            isActive: false
          },
        ],
        indexSwiper: null,
        isSearchWindowHidden: true,
        isClassWindowHidden: true,
        keyword: ''
      }
    },
    methods: {
      loadSwiper() {
        /*
        * 初始化轮播图的方法
        * */
        var that = this;
        this.indexSwiper = new Swiper ('.swiper-container', {
          on: {
            slideChangeTransitionStart: function(){
              that.changeTabsActive(this.activeIndex);
              that.changeTabsLeft(this.activeIndex);
            },
          },
        })
      },
      changeTabs() {
        /*
        * 点击顶栏切换轮播图的方法
        * */
        var index = event.currentTarget.getAttribute('tabindex');
        this.changeTabsActive(index);
        this.indexSwiper.slideTo(index, 500, false);
      },
      changeTabsActive(index) {
        /*
        * 切换顶部激活Tab
        * */
        for (var i = 0; i < this.goodsClasses.length; i++) {
          this.goodsClasses[i].isActive = false;
        }
        this.goodsClasses[index].isActive = true;
        this.goodsClasses.push(0);
        this.goodsClasses.pop();
      },
      changeTabsLeft(index) {
        /*
        * 移动到顶部Tab所在位置
        * */
        this.topMiddle.scrollTo({top: 0, left: 80 * index - 40, behavior: 'smooth'});
      },
      fastChangeTabs(){
        this.isClassWindowHidden = true;
        var index = event.currentTarget.getAttribute('tabindex');
        this.changeTabs(index);
        this.changeTabsLeft(index);
      },
      loadGoods() {
        /*
        * 打开商品连接的方法
        * */
      },
      showSearchWindow() {
        this.isSearchWindowHidden = !this.isSearchWindowHidden;
      },
      showClassWindow() {
        this.isClassWindowHidden = !this.isClassWindowHidden;
      },
      searchByKeyword() {
        alert(this.keyword);
      }
    },
    mounted() {
      this.topMiddle = document.getElementsByClassName('tm')[0];
      this.loadSwiper();
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import url('../../static/Swiper/swiper-4.2.2.min.css');

  .index {
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: #e4eaea;
  }

  .content {
    margin-top: 3rem;
  }

  .swiper-slide {
    min-height: 400px;
  }

  .top_navi {
    position: fixed;
    height: 3rem;
    width: 100%;
    border-bottom: 1px solid lightgray;
    display: flex;
    display: -webkit-flex;
    background-color: #fff;
    z-index: 10;
  }

  .tl {
    height: 3rem;
    width: 3rem;
  }

  .tm {
    height: 3rem;
    line-height: 2.9rem;
    width: 5rem;
    flex-grow: 1;
    -webkit-flex-grow: 1;
    text-align: center;
    white-space: nowrap;
    overflow: scroll;
  }

  .tm_tab {
    display: inline-block;
    width: 5rem;
    height: 2.9rem;
    color: #a1a1a1;
  }

  .tm_tab_active {
    color: #000;
    border-bottom: 0.1rem solid #c474d5;
  }

  .tr {
    height: 3rem;
    width: 3rem;
  }

  .tl img {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.75rem;
  }

  .tr img {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.75rem;
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

  .search-window {
    position: fixed;
    background: #ffffff;
    width: 100%;
    height: 100%;
    z-index: 20;
    top: 0;
    left: 0;
  }

  .search-bar {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid lightgray;
  }

  .back-bt {
    width: 3rem;
    height: 3rem;
  }

  .back-bt img {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.75rem;
  }

  .keyword {
    flex-grow: 1;
    -webkit-flex-grow: 1;
    line-height: 2.5rem;
    text-align: center;
  }

  .keyword input {
    width: 95%;
    height: 2.5rem;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid lightgray;
    border-radius: 0;
    font-size: 1rem;
    margin-top: 0.2rem;
  }

  .search-bt {
    width: 3rem;
    height: 3rem;
  }

  .search-bt img {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.75rem;
  }

  .class-window {
    width: 100%;
    height: 100%;
    z-index: 20;
    position: fixed;
    background-color: #fff;
    top: 0;
    left: 0;
  }

  .class-tb {
    width: 100%;
    height: 3rem;
    display: flex;
    display: -webkit-flex;
  }

  .cw-l {
    flex-grow: 1;
    -webkit-flex-grow: 1;
    line-height: 3rem;
  }

  .cw-r {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    font-size: 1.2rem;
  }

  .i-class {
    float: left;
    border: 1px solid lightgray;
    border-radius: 0.2rem;
    width: 30%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    overflow: hidden;
    margin: 0.5rem 0 0 2%;
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
