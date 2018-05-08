<template>
  <div>
    <title-bar>
      <span slot="title">我的购物车</span>
    </title-bar>
    <div class="cart-list">
      <div v-for="item in 10" class="goods" id="0">
        <div class="goods_top">
          <table>
            <tbody>
            <tr>
              <td>
                <div class="goods_cb">
                  <input class="check_goods" type="checkbox" onchange="count()">
                </div>
              </td>
              <td>
                <div class="goods_pic">
                  <img class="goods_pic_img" src="static/Index/test_light.jpg" alt="图片">
                </div>
              </td>
              <td>
                <table class="goods_dt">
                  <tbody>
                  <tr>
                    <td class="goods_tt">简约日式LED现代实木吸顶灯点点滴滴红红火火恍恍惚惚哈哈哈哈哈</td>
                  </tr>
                  <tr>
                    <td class="goods_md">型号：GY-X8852/4</td>
                  </tr>
                  <tr>
                    <td class="goods_prz">￥<span class="price" id="price_0">15</span></td>
                  </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="goods_bottom">
          <div class="number_div">
            <table class="number_table">
              <tbody>
              <tr>
                <td class="minus_td"><a href=" " onclick="minusOne(this)">&nbsp;-&nbsp;</a></td>
                <td class="number_td"><input class="number" type="text" value="1" onchange="checkInput(this)">
                </td>
                <td class="plus_td"><a href="javascript:void(0)" onclick="plusOne(this)">&nbsp;+&nbsp;</a></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="color_div">
            <select class="color_option" id="color_0">
              <option value="0" price="10">10元 4头48瓦 LED吸顶</option>
              <option value="1" price="12">12元 4头48瓦 LED吸顶</option>
              <option value="2" price="15" selected="">15元 4头48瓦 LED吸顶</option>
            </select>
          </div>
        </div>
      </div>
      <div style="height: 5.7rem;"></div>
    </div>
    <div class="sumbar">
      <div class="sum-all">
        <input type="checkbox">
        <span>全选</span>
      </div>
      <div class="sum-price">
        共:<span>￥4396.00</span>
      </div>
      <div class="sum-button">
        去结算(10)
      </div>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/components/TitleBar'

  export default {
    name: "Cart",
    components: {
      TitleBar
    }
  }
</script>

<style scoped>

  .cart-list {
    margin-top: 3.5rem;
  }

  .sumbar {
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    position: fixed;
    background-color: #fff;
    bottom: 3rem;
    left: 0;
    display: flex;
    border-top: 1px solid lightgray;
  }

  .sum-all {
    flex-grow: 1;
    -webkit-flex-grow: 1;
    margin-left: 0.5rem;
  }

  .sum-price {
    padding: 0 0.5rem;
    font-size: 0.8rem;
  }

  .sum-price span {
    color: #c474d5;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .sum-button {
    color: #fff;
    padding: 0 0.5rem;
    background: -webkit-linear-gradient(left, #e171bd, #a678f2);
    background: -o-linear-gradient(right, #e171bd, #a678f2);
    background: -moz-linear-gradient(right, #e171bd, #a678f2);
    background: linear-gradient(to right, #e171bd, #a678f2);
  }

  .goods {
    height: 8rem;
    width: 100%;
    background-color: #fff;
    margin: 0.5rem 0;
    vertical-align: top;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }

  .goods_top {
    height: 6rem;
    border-bottom: 1px #eeeeee solid;
  }

  .goods_cb {
    display: inline-block;
    line-height: 6rem;
    width: 2rem;
    text-align: center;
  }

  .goods_pic {
    display: inline-block;
    height: 6rem;
    width: 6rem;
  }

  .goods_pic_img {
    height: 5rem;
    width: 5rem;
    margin: 0.5rem;
  }

  .goods_dt {
    display: inline-block;
  }

  .goods_tt {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    vertical-align: middle;
  }

  .goods_md {
    font-size: 0.6rem;
    color: #9a9a9a;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    vertical-align: middle;
  }

  .goods_prz {
    color: #eb9c01;
  }

  .number_div {
    height: 2rem;
    width: 40%;
    display: inline-block;
    vertical-align: top;
  }

  .number_table {
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    text-align: center;
    width: 96%;
  }

  .number_table td {
    border: 1px solid #eeeeee;
    height: 1.5rem;
  }

  .number_table a {
    text-decoration: none;
    color: gray;
  }

  .number_table input {
    text-align: center;
    width: 90%;
    border: 0;
  }

  .color_div {
    height: 2rem;
    line-height: 2rem;
    width: 58%;
    display: inline-block;
  }

  .color_option {
    display: inline-block;
    height: 90%;
    width: 100%;
    text-align: center;
    border: 0;
    background-color: #fff;
    vertical-align: top;
  }

  .emptycart {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 10em;
    height: 15em;
    text-align: center;
  }

  .emptycart img {
    width: 100%;
  }

  .emptycart div {
    margin-bottom: 10%;
  }

  .emptycart button {
    width: 100%;
    height: 15%;
    background-color: #eb9c01;
    border: 0;
    border-radius: 4px;
    color: #ffffff;
    font-size: 1.5em;
  }

  .pay_wait {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .center {
    width: 10em;
    height: 15em;
    position: fixed;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
  }

  .center img {
    width: 100%;
  }

</style>
